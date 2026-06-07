// MCP Server: IIT Roorkee Events
// Academic Calendar (Autumn 2026-27) + Campus Events + Workshops + Fests

// ─────────────────────────────────────────
// ACADEMIC CALENDAR (Real data from official PDF)
// ─────────────────────────────────────────

const academicCalendar = [
  // Registration & Classes
  { id: "ac001", title: "PhD & Masters Registration", date: "2026-07-14", endDate: "2026-07-15", type: "academic", category: "registration", description: "Admission cum Academic Registration for new Ph.D. and Masters students", day: "Tuesday - Wednesday", important: true },
  { id: "ac002", title: "Orientation - PhD & Masters", date: "2026-07-15", type: "academic", category: "orientation", description: "Orientation Program for new Ph.D. and Masters students", day: "Wednesday" },
  { id: "ac003", title: "Classes Begin (except UG I year)", date: "2026-07-16", type: "academic", category: "classes", description: "Commencement of Classes for all programs except UG first year", day: "Thursday", important: true },
  { id: "ac004", title: "Re-examination (Spring Sem 2025-26)", date: "2026-07-16", endDate: "2026-07-18", type: "exam", category: "exam", description: "Re-examination and second examination for Spring Semester 2025-26", day: "Thursday - Saturday" },
  { id: "ac005", title: "UG I Year Registration", date: "2026-07-24", type: "academic", category: "registration", description: "Academic Registration for new UG students (Subject to JoSAA Counseling)", day: "Friday" },
  { id: "ac006", title: "Orientation - UG I Year", date: "2026-07-25", endDate: "2026-07-26", type: "academic", category: "orientation", description: "Orientation Program for Newly Admitted UG Students. Also continues Aug 1-2.", day: "Saturday - Sunday" },
  { id: "ac007", title: "UG I Year Classes Begin", date: "2026-07-27", type: "academic", category: "classes", description: "Commencement of Classes for UG first year", day: "Monday", important: true },
  { id: "ac008", title: "Last Date: Registration (with fine)", date: "2026-07-31", type: "academic", category: "deadline", description: "Last date for Academic Registration with a late fine", day: "Friday" },
  { id: "ac009", title: "Last Date: Add/Change Courses", date: "2026-08-03", type: "academic", category: "deadline", description: "Last date for adding/changing courses for all programs", day: "Monday" },
  { id: "ac010", title: "Last Date: Mandatory Documents", date: "2026-08-27", type: "academic", category: "deadline", description: "Last date for submission of mandatory documents for newly admitted students", day: "Thursday" },
  { id: "ac011", title: "Convocation 2026", date: "2026-09-19", type: "fest", category: "convocation", description: "Convocation 2026 (Final date to be notified - either Sep 19 or Sep 26)", day: "Saturday", important: true, altDate: "2026-09-26" },

  // Mid Term
  { id: "ac012", title: "Mid-Term Examinations (MTE)", date: "2026-09-10", endDate: "2026-09-15", type: "exam", category: "exam", description: "Mid-Term Examinations for Autumn Semester 2026-27 (except Sunday)", day: "Thursday - Tuesday", important: true },
  { id: "ac013", title: "Last Date: MTE Performance Intimation", date: "2026-09-28", type: "academic", category: "deadline", description: "Last date for informing students about performance in MTE and internal assessment", day: "Monday" },
  { id: "ac014", title: "Feedback Form I", date: "2026-09-28", endDate: "2026-10-01", type: "academic", category: "feedback", description: "Submission of feedback/response form - I on the online portal", day: "Monday - Thursday" },

  // Fests & Events
  { id: "ac015", title: "Sangram 2026", date: "2026-10-03", endDate: "2026-10-04", type: "fest", category: "sports", description: "Sangram 2026 — Annual Sports Meet of IIT Roorkee", day: "Saturday - Sunday", important: true },
  { id: "ac016", title: "Last Date: Course Withdrawal", date: "2026-10-05", type: "academic", category: "deadline", description: "Last date for withdrawal of courses", day: "Monday" },
  { id: "ac017", title: "Thomso 2026", date: "2026-10-23", endDate: "2026-10-25", type: "fest", category: "cultural", description: "Thomso 2026 — Annual Cultural & Technical Festival of IIT Roorkee", day: "Friday - Sunday", important: true },

  // End Term
  { id: "ac018", title: "Feedback Form II", date: "2026-11-05", endDate: "2026-11-11", type: "academic", category: "feedback", description: "Submission of feedback/response form - II on the online portal", day: "Thursday - Wednesday" },
  { id: "ac019", title: "Last Date of Teaching", date: "2026-11-11", type: "academic", category: "classes", description: "Last date of teaching for Autumn Semester 2026-27", day: "Wednesday", important: true },
  { id: "ac020", title: "End-Term Examinations (ETE)", date: "2026-11-13", endDate: "2026-11-24", type: "exam", category: "exam", description: "End Term Examinations (excluding Sunday and declared holidays)", day: "Friday - Tuesday", important: true },
  { id: "ac021", title: "Institute Foundation Day", date: "2026-11-25", type: "fest", category: "institute", description: "IIT Roorkee Institute Foundation Day", day: "Wednesday" },
  { id: "ac022", title: "Last Date: Show ETE Answer Scripts", date: "2026-12-01", type: "academic", category: "deadline", description: "Last date of showing End Term Examinations answer scripts", day: "Tuesday" },
  { id: "ac023", title: "Last Date: Grade Communication", date: "2026-12-03", type: "academic", category: "deadline", description: "Last date of electronic communication of grades to students", day: "Thursday" },
  { id: "ac024", title: "Last Date: Grade Revision Application", date: "2026-12-04", type: "academic", category: "deadline", description: "Last date for students to apply for grade revision", day: "Friday" },
  { id: "ac025", title: "Winter Vacation (UG Students)", date: "2026-12-05", endDate: "2027-01-06", type: "academic", category: "holiday", description: "Winter vacation for UG students (except IDD final year)", day: "Saturday - Wednesday", important: true },
  { id: "ac026", title: "Project/Thesis Evaluation Deadline", date: "2026-12-03", type: "academic", category: "deadline", description: "Last date for evaluation of Project/Thesis/Seminar for all programs", day: "Thursday" },
  { id: "ac027", title: "Final Grades to AAO", date: "2026-12-08", type: "academic", category: "deadline", description: "Last date for sending final grades to AAO", day: "Tuesday" },
  { id: "ac028", title: "PhD Progress Reports to AAO", date: "2026-12-09", type: "academic", category: "deadline", description: "Last date for submission of Progress Reports (Ph.D. students) to the AAO", day: "Wednesday" },
  { id: "ac029", title: "Branch Change Online Choices", date: "2026-12-10", endDate: "2026-12-14", type: "academic", category: "registration", description: "Online Choices for branch change", day: "Thursday - Monday" },
  { id: "ac030", title: "Branch Change Final List", date: "2026-12-31", type: "academic", category: "registration", description: "Declaration of the final list of branch change (Tentative)", day: "Thursday" },

  // Spring Semester Start
  { id: "ac031", title: "New PhD Registration (Spring)", date: "2027-01-07", type: "academic", category: "registration", description: "Admission cum Academic Registration for New Ph.D. Students", day: "Thursday" },
  { id: "ac032", title: "Spring Semester Registration", date: "2027-01-07", endDate: "2027-01-08", type: "academic", category: "registration", description: "Academic registration of all existing students for Spring Semester 2026-27", day: "Thursday - Friday" },
  { id: "ac033", title: "Spring Semester Classes Begin", date: "2027-01-11", type: "academic", category: "classes", description: "Commencement of classes for Spring Semester 2026-27", day: "Monday", important: true },
  { id: "ac034", title: "Re-exam (Autumn Sem 2026-27)", date: "2027-01-11", endDate: "2027-01-13", type: "exam", category: "exam", description: "Re-examination and Second examination for Autumn Semester 2026-27", day: "Monday - Wednesday" },
];

// ─────────────────────────────────────────
// HOLIDAYS
// ─────────────────────────────────────────

const holidays = [
  { title: "Independence Day", date: "2026-08-15", day: "Saturday" },
  { title: "Id-e-Milad (Prophet Mohammad's Birthday)", date: "2026-08-26", day: "Wednesday", note: "Subject to moon visibility" },
  { title: "Raksha Bandhan", date: "2026-08-28", day: "Friday" },
  { title: "Janamashtami", date: "2026-09-04", day: "Friday" },
  { title: "Mahatma Gandhi's Birthday", date: "2026-10-02", day: "Friday" },
  { title: "Mahashtami", date: "2026-10-19", day: "Monday" },
  { title: "Mahanavmi/Dussehra (Vijaydashmi)", date: "2026-10-20", day: "Tuesday" },
  { title: "Diwali (Deepavali)", date: "2026-11-08", day: "Sunday" },
  { title: "Govardhan Puja", date: "2026-11-09", day: "Monday" },
  { title: "Guru Nanak's Birthday", date: "2026-11-24", day: "Tuesday" },
  { title: "Christmas Day", date: "2026-12-25", day: "Friday" },
];

// ─────────────────────────────────────────
// TIMETABLE CHANGES
// ─────────────────────────────────────────

const timetableChanges = [
  { date: "2026-09-23", day: "Wednesday", follows: "Friday's Timetable", type: "rescheduling" },
  { date: "2026-10-28", day: "Wednesday", follows: "Friday's Timetable", type: "rescheduling" },
  { date: "2026-08-01", day: "Saturday", follows: "Monday's Timetable", type: "compensatory", note: "UG I year only" },
  { date: "2026-08-08", day: "Saturday", follows: "Thursday's Timetable", type: "compensatory", note: "UG I year only" },
  { date: "2026-08-22", day: "Saturday", follows: "Friday's Timetable", type: "compensatory", note: "UG I year only" },
  { date: "2026-10-10", day: "Saturday", follows: "Friday's Timetable", type: "compensatory", note: "UG I year only" },
];

// ─────────────────────────────────────────
// CAMPUS EVENTS (Workshops, Conferences, Club Events)
// ─────────────────────────────────────────

const campusEvents = [
  // Technical / Workshop Events
  { id: "ev001", title: "HackRush 2026", date: "2026-07-19", endDate: "2026-07-20", type: "technical", category: "hackathon", organizer: "Computer Science Society (CSS)", venue: "Main Building + CS Labs", description: "Annual 24-hour hackathon. Build innovative solutions for real-world problems. Prizes worth ₹1,50,000.", registrationOpen: true, registrationDeadline: "2026-07-15", maxParticipants: 200, registeredCount: 143, tags: ["coding", "hackathon", "prizes"], contact: "css@iitr.ac.in" },
  { id: "ev002", title: "AI/ML Workshop: Building with LLMs", date: "2026-07-22", type: "workshop", category: "technical", organizer: "AI Club, IITR", venue: "Seminar Hall, Biotechnology Block", description: "Hands-on workshop on building applications with Large Language Models. Bring your laptop. Covers RAG, tool use, agents.", registrationOpen: true, registrationDeadline: "2026-07-21", maxParticipants: 60, registeredCount: 47, tags: ["AI", "ML", "LLM", "workshop"], contact: "aiclub@iitr.ac.in" },
  { id: "ev003", title: "Open Source Contribution Drive", date: "2026-07-25", type: "workshop", category: "technical", organizer: "Developer Student Club (DSC), IITR", venue: "Computer Lab 3, CS Block", description: "Learn how to contribute to open source projects. Git workflow, PR process, issue tracking. Beginner friendly.", registrationOpen: true, registrationDeadline: "2026-07-24", maxParticipants: 50, registeredCount: 23, tags: ["open source", "git", "github", "coding"], contact: "dsc@iitr.ac.in" },
  { id: "ev004", title: "Robocon 2026 — Internal Trials", date: "2026-07-28", type: "technical", category: "robotics", organizer: "Robotics Club, IITR", venue: "Electronics Lab, EC Block", description: "Internal selection trials for Team IITR's participation in ABU Robocon 2026. Open to all branches.", registrationOpen: true, registrationDeadline: "2026-07-26", maxParticipants: 40, registeredCount: 35, tags: ["robotics", "competition", "electronics"], contact: "robotics@iitr.ac.in" },
  { id: "ev005", title: "Web Dev Bootcamp", date: "2026-08-02", endDate: "2026-08-04", type: "workshop", category: "technical", organizer: "SDSLabs, IITR", venue: "Computer Science Block", description: "3-day intensive bootcamp on full-stack web development. React, Node.js, MongoDB, deployment. Certificate provided.", registrationOpen: true, registrationDeadline: "2026-07-30", maxParticipants: 80, registeredCount: 67, tags: ["web dev", "react", "node", "bootcamp"], contact: "sdslabs@iitr.ac.in" },
  { id: "ev006", title: "Competitive Programming Contest", date: "2026-08-10", type: "technical", category: "competition", organizer: "Programming Club, IITR", venue: "Online (CodeForces Platform)", description: "Monthly programming contest — IITR Internal. Rated contest for campus students. Prizes for top 3.", registrationOpen: true, registrationDeadline: "2026-08-09", maxParticipants: 300, registeredCount: 189, tags: ["CP", "competitive programming", "contest"], contact: "progclub@iitr.ac.in" },
  { id: "ev007", title: "Research Paper Writing Workshop", date: "2026-08-15", type: "workshop", category: "academic", organizer: "Research & Innovation Cell, IITR", venue: "Seminar Hall, Administration Block", description: "Workshop on writing and publishing research papers. LaTeX, IEEE format, Scopus journals. For PG/PhD students.", registrationOpen: true, registrationDeadline: "2026-08-12", maxParticipants: 100, registeredCount: 78, tags: ["research", "paper", "PhD", "PG"], contact: "ric@iitr.ac.in" },
  { id: "ev008", title: "Startup Pitch Competition — IIT Roorkee E-Cell", date: "2026-08-22", type: "technical", category: "entrepreneurship", organizer: "Entrepreneurship Cell (E-Cell), IITR", venue: "Convocation Hall", description: "Annual startup pitch competition. ₹2 lakh seed funding for winner. Open to all students. Teams of 2-5.", registrationOpen: true, registrationDeadline: "2026-08-18", maxParticipants: 50, registeredCount: 28, tags: ["startup", "entrepreneurship", "pitch", "funding"], contact: "ecell@iitr.ac.in" },
  { id: "ev009", title: "Data Science Hackathon — Cognizance Junior", date: "2026-09-05", endDate: "2026-09-06", type: "technical", category: "hackathon", organizer: "Cognizance Team, IITR", venue: "Computer Labs, CS Block", description: "Data Science and ML focused hackathon. Real-world dataset provided on the day. Teams of 2-3.", registrationOpen: true, registrationDeadline: "2026-09-01", maxParticipants: 120, registeredCount: 96, tags: ["data science", "ML", "hackathon", "cognizance"], contact: "cognizance@iitr.ac.in" },

  // Cultural Events
  { id: "ev010", title: "Freshers' Night 2026", date: "2026-08-05", type: "cultural", category: "cultural", organizer: "Cultural Council, IITR", venue: "Open Air Theatre (OAT)", description: "Welcome night for the batch of 2026. Music, dance, comedy performances. Entry free for freshers.", registrationOpen: false, registrationDeadline: null, maxParticipants: 2000, registeredCount: 2000, tags: ["freshers", "cultural", "music", "welcome"], contact: "cultural@iitr.ac.in" },
  { id: "ev011", title: "Nukkad Natak Festival", date: "2026-08-20", type: "cultural", category: "cultural", organizer: "Dramatics Section, IITR", venue: "Campus Grounds", description: "Street play festival. Open participation. Social awareness themes. Judged by faculty panel.", registrationOpen: true, registrationDeadline: "2026-08-18", maxParticipants: 150, registeredCount: 89, tags: ["drama", "nukkad", "street play", "cultural"], contact: "drama@iitr.ac.in" },
  { id: "ev012", title: "Inter-Bhawan Music Competition", date: "2026-09-08", type: "cultural", category: "music", organizer: "Music Section, IITR", venue: "Open Air Theatre (OAT)", description: "Annual inter-bhawan music competition. Singing, instruments, bands. Represent your Bhawan.", registrationOpen: true, registrationDeadline: "2026-09-05", maxParticipants: 200, registeredCount: 134, tags: ["music", "inter-bhawan", "singing", "cultural"], contact: "music@iitr.ac.in" },
  { id: "ev013", title: "Photography Contest — Lens & Light", date: "2026-09-15", type: "cultural", category: "photography", organizer: "Photography Section, IITR", venue: "Online Submission", description: "Annual campus photography contest. Theme: 'Campus Life'. Submit your best shots. Prizes for top 5.", registrationOpen: true, registrationDeadline: "2026-09-10", maxParticipants: 500, registeredCount: 312, tags: ["photography", "contest", "art"], contact: "photography@iitr.ac.in" },

  // Sports Events
  { id: "ev014", title: "Inter-IIT Sports Meet — Selection Trials", date: "2026-07-30", endDate: "2026-08-01", type: "sports", category: "sports", organizer: "Sports Council, IITR", venue: "Sports Complex", description: "Selection trials for Inter-IIT Sports Meet 2026. Open to all students. Sports: Cricket, Football, Basketball, Badminton, Athletics, Chess.", registrationOpen: true, registrationDeadline: "2026-07-28", maxParticipants: 500, registeredCount: 378, tags: ["sports", "inter-IIT", "cricket", "football", "basketball"], contact: "sports@iitr.ac.in" },
  { id: "ev015", title: "Intra-Campus Football League", date: "2026-08-15", endDate: "2026-08-30", type: "sports", category: "football", organizer: "Football Club, IITR", venue: "Football Ground", description: "Annual intra-campus football league. Teams represent each Bhawan. Round-robin format. Register your Bhawan team.", registrationOpen: true, registrationDeadline: "2026-08-10", maxParticipants: 200, registeredCount: 143, tags: ["football", "bhawan", "sports", "league"], contact: "football@iitr.ac.in" },
  { id: "ev016", title: "Badminton Tournament — Smash Cup", date: "2026-09-20", endDate: "2026-09-22", type: "sports", category: "badminton", organizer: "Badminton Club, IITR", venue: "Sports Complex — Badminton Courts", description: "Annual badminton tournament. Singles and doubles categories. Open to all students.", registrationOpen: true, registrationDeadline: "2026-09-15", maxParticipants: 128, registeredCount: 94, tags: ["badminton", "sports", "tournament"], contact: "badminton@iitr.ac.in" },

  // Conferences & Seminars
  { id: "ev017", title: "National Conference on Sustainable Engineering", date: "2026-09-12", endDate: "2026-09-13", type: "conference", category: "conference", organizer: "Civil Engineering Dept, IITR", venue: "Convocation Hall + Seminar Rooms", description: "Two-day national conference on sustainable infrastructure and green engineering. Paper presentations, keynotes.", registrationOpen: true, registrationDeadline: "2026-08-31", maxParticipants: 300, registeredCount: 245, tags: ["conference", "civil", "sustainable", "research"], contact: "civil.conf@iitr.ac.in" },
  { id: "ev018", title: "Industry Talk — Google on Careers in AI", date: "2026-08-12", type: "seminar", category: "placement", organizer: "Placement Cell, IITR", venue: "Lecture Theatre — 1, Main Building", description: "Guest lecture by Google engineers on careers in AI/ML and software development. Q&A session included.", registrationOpen: true, registrationDeadline: "2026-08-11", maxParticipants: 400, registeredCount: 390, tags: ["google", "placement", "AI", "career", "industry talk"], contact: "placement@iitr.ac.in" },
  { id: "ev019", title: "TEDx IIT Roorkee 2026", date: "2026-10-12", type: "seminar", category: "conference", organizer: "TEDx IITR", venue: "Convocation Hall", description: "Annual TEDx IIT Roorkee event. Theme: 'Reimagine'. 10 speakers from tech, policy, arts, science.", registrationOpen: true, registrationDeadline: "2026-10-05", maxParticipants: 500, registeredCount: 421, tags: ["TEDx", "talks", "inspiration", "conference"], contact: "tedx@iitr.ac.in" },
  { id: "ev020", title: "Mock Placement Interviews", date: "2026-10-15", endDate: "2026-10-16", type: "seminar", category: "placement", organizer: "Placement Cell + Senior Students", venue: "CS Department", description: "Mock technical interviews and HR rounds. Get feedback from seniors placed at top companies. Free for all.", registrationOpen: true, registrationDeadline: "2026-10-10", maxParticipants: 200, registeredCount: 167, tags: ["placement", "interview", "mock", "career"], contact: "placement@iitr.ac.in" },
];

// ─────────────────────────────────────────
// TOOL DEFINITIONS
// ─────────────────────────────────────────

export const eventsTools = [
  {
    name: "get_academic_calendar",
    description: "Get IIT Roorkee official academic calendar events for Autumn Semester 2026-27. Includes exam dates, registration deadlines, holidays, fests like Thomso and Sangram.",
    input_schema: {
      type: "object",
      properties: {
        category: { type: "string", description: "Filter by category: exam, registration, deadline, holiday, orientation, classes, feedback, convocation, sports, cultural, institute" },
        upcoming_only: { type: "boolean", description: "If true, only return upcoming events from today" },
        month: { type: "string", description: "Filter by month name: july, august, september, october, november, december, january" },
      },
      required: [],
    },
  },
  {
    name: "get_holidays",
    description: "Get list of all official holidays for Autumn Semester 2026-27 at IIT Roorkee",
    input_schema: {
      type: "object",
      properties: {
        upcoming_only: { type: "boolean", description: "Only return upcoming holidays from today" },
      },
      required: [],
    },
  },
  {
    name: "get_campus_events",
    description: "Get upcoming campus events, workshops, hackathons, cultural events, sports competitions, conferences, and club activities at IIT Roorkee",
    input_schema: {
      type: "object",
      properties: {
        type: { type: "string", description: "Filter by event type: technical, workshop, cultural, sports, conference, seminar, hackathon" },
        category: { type: "string", description: "Filter by category: hackathon, robotics, music, football, placement, AI, coding, etc." },
        available_only: { type: "boolean", description: "Only show events with open registration" },
        days_ahead: { type: "number", description: "Number of days ahead to look for events (default 30)" },
      },
      required: [],
    },
  },
  {
    name: "get_event_details",
    description: "Get full details about a specific event including registration link, venue, organizer, and spots left",
    input_schema: {
      type: "object",
      properties: {
        event_id: { type: "string", description: "Event ID e.g. ev001, ac012" },
      },
      required: ["event_id"],
    },
  },
  {
    name: "search_events",
    description: "Search all events (academic + campus) by keyword e.g. 'hackathon', 'Thomso', 'placement', 'AI workshop', 'exam'",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search keyword" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_timetable_changes",
    description: "Get all timetable rescheduling and compensatory class dates for Autumn Semester 2026-27",
    input_schema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "get_exam_schedule",
    description: "Get Mid-Term and End-Term examination schedule and important deadlines for Autumn Semester 2026-27",
    input_schema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
];

// ─────────────────────────────────────────
// TOOL EXECUTOR
// ─────────────────────────────────────────

const MONTH_MAP = { january: 0, february: 1, march: 2, april: 3, may: 4, june: 5, july: 6, august: 7, september: 8, october: 9, november: 10, december: 11 };

function isUpcoming(dateStr) {
  return new Date(dateStr) >= new Date(new Date().toDateString());
}

function isWithinDays(dateStr, days) {
  const target = new Date(dateStr);
  const now = new Date();
  const future = new Date();
  future.setDate(now.getDate() + days);
  return target >= now && target <= future;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

export function executeEventsTool(toolName, toolInput) {
  switch (toolName) {

    case "get_academic_calendar": {
      let events = [...academicCalendar];
      if (toolInput.category) events = events.filter(e => e.category === toolInput.category || e.type === toolInput.category);
      if (toolInput.upcoming_only) events = events.filter(e => isUpcoming(e.date));
      if (toolInput.month) {
        const monthIdx = MONTH_MAP[toolInput.month.toLowerCase()];
        if (monthIdx !== undefined) events = events.filter(e => new Date(e.date).getMonth() === monthIdx);
      }
      return {
        semester: "Autumn Semester 2026-27",
        count: events.length,
        events: events.map(e => ({
          ...e,
          formattedDate: formatDate(e.date),
          endDateFormatted: e.endDate ? formatDate(e.endDate) : null,
          daysFromNow: Math.ceil((new Date(e.date) - new Date()) / (1000 * 60 * 60 * 24)),
        }))
      };
    }

    case "get_holidays": {
      let h = [...holidays];
      if (toolInput.upcoming_only) h = h.filter(hol => isUpcoming(hol.date));
      return {
        semester: "Autumn Semester 2026-27",
        totalHolidays: h.length,
        holidays: h.map(hol => ({
          ...hol,
          formattedDate: formatDate(hol.date),
          daysFromNow: Math.ceil((new Date(hol.date) - new Date()) / (1000 * 60 * 60 * 24)),
        }))
      };
    }

    case "get_campus_events": {
      let events = [...campusEvents];
      if (toolInput.type) events = events.filter(e => e.type === toolInput.type);
      if (toolInput.category) events = events.filter(e => e.category === toolInput.category || e.tags?.some(t => t.toLowerCase().includes(toolInput.category.toLowerCase())));
      if (toolInput.available_only) events = events.filter(e => e.registrationOpen && e.registeredCount < e.maxParticipants);
      if (toolInput.days_ahead) events = events.filter(e => isWithinDays(e.date, toolInput.days_ahead));
      else events = events.filter(e => isUpcoming(e.date));

      return {
        count: events.length,
        events: events.map(e => ({
          ...e,
          formattedDate: formatDate(e.date),
          spotsLeft: e.maxParticipants - e.registeredCount,
          status: !e.registrationOpen ? "Registration Closed" : e.registeredCount >= e.maxParticipants ? "Full" : "Open",
          daysFromNow: Math.ceil((new Date(e.date) - new Date()) / (1000 * 60 * 60 * 24)),
        }))
      };
    }

    case "get_event_details": {
      const id = toolInput.event_id;
      const acEvent = academicCalendar.find(e => e.id === id);
      if (acEvent) return { ...acEvent, formattedDate: formatDate(acEvent.date) };
      const campEvent = campusEvents.find(e => e.id === id);
      if (campEvent) return {
        ...campEvent,
        formattedDate: formatDate(campEvent.date),
        spotsLeft: campEvent.maxParticipants - campEvent.registeredCount,
        status: !campEvent.registrationOpen ? "Closed" : campEvent.registeredCount >= campEvent.maxParticipants ? "Full" : "Open",
      };
      return { error: `Event ${id} not found` };
    }

    case "search_events": {
      const q = toolInput.query.toLowerCase();
      const acResults = academicCalendar.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q) ||
        e.category?.toLowerCase().includes(q)
      ).map(e => ({ ...e, source: "Academic Calendar", formattedDate: formatDate(e.date) }));

      const campResults = campusEvents.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q) ||
        e.tags?.some(t => t.toLowerCase().includes(q)) ||
        e.organizer?.toLowerCase().includes(q)
      ).map(e => ({ ...e, source: "Campus Events", formattedDate: formatDate(e.date) }));

      const holResults = holidays.filter(h =>
        h.title.toLowerCase().includes(q)
      ).map(h => ({ ...h, source: "Holidays", formattedDate: formatDate(h.date) }));

      const all = [...acResults, ...campResults, ...holResults];
      return { query: toolInput.query, count: all.length, results: all };
    }

    case "get_timetable_changes": {
      return {
        semester: "Autumn Semester 2026-27",
        note: "Timetable rescheduling and compensatory classes",
        changes: timetableChanges.map(t => ({
          ...t,
          formattedDate: formatDate(t.date),
        }))
      };
    }

    case "get_exam_schedule": {
      const exams = academicCalendar.filter(e => e.type === "exam" || e.category === "exam" || e.category === "deadline");
      return {
        semester: "Autumn Semester 2026-27",
        keyDates: {
          midTermStart: "10 September 2026 (Thursday)",
          midTermEnd: "15 September 2026 (Tuesday)",
          lastDayOfTeaching: "11 November 2026 (Wednesday)",
          endTermStart: "13 November 2026 (Friday)",
          endTermEnd: "24 November 2026 (Tuesday)",
          gradesCommunicated: "3 December 2026 (Thursday)",
          gradeRevisionDeadline: "4 December 2026 (Friday)",
        },
        allExamEvents: exams.map(e => ({ ...e, formattedDate: formatDate(e.date) })),
      };
    }

    default:
      return { error: "Unknown events tool" };
  }
}