import dotenv from "dotenv";
import Groq from "groq-sdk";
import { libraryTools, executeLibraryTool } from "../mcp-servers/library.js";
import { eventsTools, executeEventsTool } from "../mcp-servers/events.js";
import { cafeteriaTools, executeCafeteriaTool } from "../mcp-servers/cafeteria.js";
import { academicsTools, executeAcademicsTool } from "../mcp-servers/academics.js";

dotenv.config();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY ,
});

const allTools = [
  ...libraryTools.map((t) => ({ ...t, _server: "library" })),
  ...eventsTools.map((t) => ({ ...t, _server: "events" })),
  ...cafeteriaTools.map((t) => ({ ...t, _server: "cafeteria" })),
  ...academicsTools.map((t) => ({ ...t, _server: "academics" })),
];

function routeTool(toolName, toolInput) {
  const tool = allTools.find((t) => t.name === toolName);
  if (!tool) return { error: `Unknown tool: ${toolName}` };
  switch (tool._server) {
    case "library": return executeLibraryTool(toolName, toolInput);
    case "events": return executeEventsTool(toolName, toolInput);
    case "cafeteria": return executeCafeteriaTool(toolName, toolInput);
    case "academics": return executeAcademicsTool(toolName, toolInput);
    default: return { error: "No server for this tool" };
  }
}

const toolsForAI = allTools.map(({ _server, ...rest }) => ({
  type: "function",
  function: {
    name: rest.name,
    description: rest.description,
    parameters: rest.input_schema,
  },
}));

const SYSTEM_PROMPT = `You are CampusAI, an intelligent assistant for university students and faculty at Unified Campus University.
You have access to real-time data from five campus systems:
1. Library MCP - book availability, search, physical location, library status, seat counts
2. Events MCP - upcoming events, workshops, hackathons, seminars, registration
3. Cafeteria MCP - today's menu, dietary info (halal/vegan/allergens), station capacity, timings
4. Academics MCP - handbooks, policies, exam schedules, semester progress, course info

When a query spans multiple systems, call multiple tools. Always include specific details like copy counts, shelf locations, times, dietary tags, etc.
Be concise, friendly, and format responses clearly. Use bullet points and structure where helpful.
Today is ${new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}.`;

export async function processQuery(userMessage, history = []) {
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history,
    { role: "user", content: userMessage },
  ];

  const usedServers = new Set();
  const toolCallResults = [];
  const startTime = Date.now();

  let response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
    tools: toolsForAI,
    tool_choice: "auto",
    parallel_tool_calls: false,
    max_tokens: 1024,
  });

  // Agentic tool-calling loop
  while (response.choices[0].finish_reason === "tool_calls") {
    const assistantMessage = response.choices[0].message;
    messages.push(assistantMessage);

    for (const toolCall of assistantMessage.tool_calls) {
      const toolName = toolCall.function.name;
      let toolInput = {};
      try {
        toolInput = JSON.parse(toolCall.function.arguments);
      } catch {}

      const tool = allTools.find((t) => t.name === toolName);
      if (tool) usedServers.add(tool._server);

      const result = routeTool(toolName, toolInput);
      toolCallResults.push({ tool: toolName, server: tool?._server, input: toolInput, result });

      messages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: JSON.stringify(result),
      });
    }

    response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      tools: toolsForAI,
      tool_choice: "auto",
      parallel_tool_calls: false,
      max_tokens: 1024,
    });
  }

  const latency = Date.now() - startTime;

  return {
    answer: response.choices[0].message.content,
    serversQueried: Array.from(usedServers),
    toolCalls: toolCallResults,
    latency,
    mcpNode: usedServers.size > 0 ? `${[...usedServers][0].charAt(0).toUpperCase() + [...usedServers][0].slice(1)}-Core-01` : "General",
  };
}
