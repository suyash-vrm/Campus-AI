// ─────────────────────────────────────────────────────────────────────────────
//  academics.js  –  5th Semester B.Tech Chemical Engineering, IIT Roorkee
// ─────────────────────────────────────────────────────────────────────────────

// ── Documents / Handbooks ─────────────────────────────────────────────────────
const documents = [
  {
    id: "DOC001",
    title: "Graduate Handbook 2024",
    category: "ACADEMIC",
    pages: 142,
    lastUpdated: "2024-01-15",
    description:
      "Comprehensive guide for graduate students covering academic requirements, policies, and procedures at IIT Roorkee.",
    sections: {
      "1.1": {
        title: "Enrollment & Registration",
        content:
          "All graduate students must maintain full-time enrollment status of at least 9 credit hours per semester. Late registration attracts a penalty as specified in the fee schedule.",
      },
      "2.3": {
        title: "Research Requirements",
        content:
          "Graduate students are required to complete a minimum of 6 research credits and present findings at the annual symposium. A faculty supervisor must be identified by the end of the second semester.",
      },
      "4.2": {
        title: "Workshop Attendance",
        content:
          "Participation in graduate-level workshops is mandatory for all students enrolled in Professional Development modules. A minimum attendance record of 85% is required for successful completion of the course credits. Excused absences require documentation via the Health Portal within 48 hours of the missed session. Students falling below the 85% threshold will receive an academic warning and must complete a remedial assignment approved by their faculty advisor.",
      },
      "5.1": {
        title: "Thesis Submission",
        content:
          "Final thesis must be submitted to the Graduate Office at least 3 weeks before the scheduled defence date. All theses must be formatted according to the IIT Roorkee style guide.",
      },
    },
  },
  {
    id: "DOC002",
    title: "Conduct & Ethics Policy",
    category: "ADMINISTRATION",
    pages: 48,
    lastUpdated: "2023-08-01",
    description:
      "University code of conduct, academic integrity policy, and disciplinary procedures for IIT Roorkee students.",
    sections: {
      "2.1": {
        title: "Academic Integrity",
        content:
          "All forms of academic dishonesty including plagiarism, fabrication, and cheating are strictly prohibited. Violations may result in grade penalty, suspension, or expulsion depending on severity.",
      },
      "3.4": {
        title: "Harassment Policy",
        content:
          "The university maintains a zero-tolerance policy for all forms of harassment, discrimination, and bullying. Students may report incidents to the Gender Sensitisation Cell (GSCASH) or the Dean of Student Welfare.",
      },
    },
  },
  {
    id: "DOC003",
    title: "Research Lab Protocols",
    category: "SAFETY",
    pages: 312,
    lastUpdated: "2023-06-15",
    description:
      "Safety procedures, equipment usage guidelines, and protocols for all university research and chemical engineering facilities.",
    sections: {
      "1.0": {
        title: "General Safety Rules",
        content:
          "All researchers must complete mandatory safety training before accessing any laboratory facility. Personal Protective Equipment (PPE) including lab coats, gloves, and safety goggles must be worn at all times.",
      },
      "4.5": {
        title: "Chemical Handling",
        content:
          "Hazardous chemicals must be stored in approved containers with proper labelling per OSHA and institutional standards. Material Safety Data Sheets (MSDS) must be readily accessible in all chemical storage areas.",
      },
      "6.1": {
        title: "Chemical Engineering Lab Safety",
        content:
          "Students enrolled in CHC-303 (Chemical Engineering Lab-III) must complete the lab-specific safety induction before the first session. All experiments involving reactive or flammable materials require a faculty supervisor present.",
      },
    },
  },
  {
    id: "DOC004",
    title: "Student Services Guide 2024",
    category: "STUDENT AFFAIRS",
    pages: 88,
    lastUpdated: "2024-02-01",
    description:
      "Complete guide to student support services, health centre, counselling, and campus resources at IIT Roorkee.",
    sections: {
      "3.1": {
        title: "Health Centre",
        content:
          "The campus health centre is available 24×7 for emergency care. Regular OPD hours are 9 AM – 5 PM on weekdays. Students must carry their institute ID for availing health services.",
      },
      "5.2": {
        title: "Counselling & Mental Health",
        content:
          "The institute provides free and confidential counselling services. Students can book appointments online through the student portal. Crisis support is available via the helpline: 1800-XXX-XXXX.",
      },
    },
  },
  {
    id: "DOC005",
    title: "B.Tech Chemical Engineering Curriculum",
    category: "ACADEMIC",
    pages: 56,
    lastUpdated: "2024-01-10",
    description:
      "Complete curriculum structure, course list, credit distribution, and elective options for B.Tech Chemical Engineering at IIT Roorkee.",
    sections: {
      "5.0": {
        title: "5th Semester Courses (Year III Autumn)",
        content:
          "The 5th semester comprises 8 courses totalling 22 credits. Core courses include: CHC-351 Fundamentals of AI/ML (2 cr), CHC-301 Computer Applications in Chemical Engineering (2 cr), CHC-305 Process Equipment Design (4 cr), CHC-303 Chemical Engineering Lab-III (2 cr), CHC-399 Community Outreach (2 cr). Electives include HSSEC-II (3 cr), OEC-III (4 cr), and CHT-I Talent Enhancement Course-I (3 cr).",
      },
      "6.1": {
        title: "Program Elective Courses (PEC)",
        content:
          "Students must complete PEC courses (22-26 credits over the program). Available electives include Transport Phenomena, Petroleum Refining, Advanced Process Control, Biochemical Engineering, Computational Fluid Dynamics, Optimization of Chemical Processes, and 30+ additional specialised topics.",
      },
      "6.2": {
        title: "Talent Enhancement Basket (TEB)",
        content:
          "Students choose one TEB basket: TEB-A (CHT-101 & CHT-102: Advanced Characterisation Techniques) or TEB-B (CHT-103 & CHT-104: Process Modelling and Simulations). CHT-I refers to the first course in the chosen basket.",
      },
      "7.1": {
        title: "Evaluation & Grading",
        content:
          "Theory courses: CWS 10-35%, MTE 15-30%, ETE 30-50%. Lab/practical courses: PRS 50%, PRE 50%. Community Outreach (CHC-399) is evaluated 100% continuously. CHC-391 Technical Communication is 100% CWS.",
      },
    },
  },
  {
    id: "DOC006",
    title: "Faculty Research Portal Manual",
    category: "FACULTY",
    pages: 56,
    lastUpdated: "2023-09-10",
    description:
      "Guide for faculty on submitting research grants, publications, and accessing faculty resources at IIT Roorkee.",
    sections: {},
  },
];

// ── Dynamic semester progress ─────────────────────────────────────────────────
const SEMESTER_START = new Date("2026-07-16");
const SEMESTER_END   = new Date("2026-11-11");
const TOTAL_WEEKS    = 16;

function computeSemesterProgress() {
  const now      = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed  = now - SEMESTER_START;
  const currentWeek = Math.min(Math.max(Math.ceil(elapsed / msPerWeek), 1), TOTAL_WEEKS);
  const progressPercent = Math.round((currentWeek / TOTAL_WEEKS) * 100);
  const phases = [
    { upTo: 4,  label: "Orientation & course introduction" },
    { upTo: 8,  label: "Mid-term assessments in progress"  },
    { upTo: 12, label: "Post mid-term — project phase"     },
    { upTo: 16, label: "End-term preparation"              },
  ];
  const phase = phases.find((p) => currentWeek <= p.upTo)?.label ?? "Semester complete";
  return { currentWeek, totalWeeks: TOTAL_WEEKS, progressPercent, phase };
}

// ── 5th Semester courses ──────────────────────────────────────────────────────
const semesterFiveCourses = [
  { code: "HSSEC-II",  title: "HSS Elective Course",                          area: "HSSEC", credits: 3,  L: 3, T: 0, P: 0, type: "Elective"    },
  { code: "OEC-III",   title: "Open Elective Course",                          area: "OEC",   credits: 4,  L: 3, T: 1, P: 0, type: "Elective"    },
  { code: "CHC-351",   title: "Fundamentals of AI/ML",                         area: "PCC",   credits: 2,  L: 2, T: 0, P: 0, type: "Core"        },
  { code: "CHC-301",   title: "Computer Applications in Chemical Engineering",  area: "PCC",   credits: 2,  L: 1, T: 0, P: 2, type: "Core"        },
  { code: "CHT-I",     title: "Talent Enhancement Course-I",                   area: "TEB",   credits: 3,  L: 2, T: 0, P: 2, type: "Enhancement" },
  { code: "CHC-303",   title: "Chemical Engineering Lab-III",                   area: "PCC",   credits: 2,  L: 0, T: 0, P: 4, type: "Lab"         },
  { code: "CHC-305",   title: "Process Equipment Design",                       area: "PCC",   credits: 4,  L: 3, T: 0, P: 2, type: "Core"        },
  { code: "CHC-399",   title: "Community Outreach",                             area: "CORE",  credits: 2,  L: 0, T: 0, P: 0, type: "Core"        },
];

// ── Academic schedule ─────────────────────────────────────────────────────────
const academicSchedule = {
  currentSemester: "5th Semester – Autumn 2026",
  program: "B.Tech Chemical Engineering",
  institute: "IIT Roorkee",
  semesterStart: "2026-07-16",
  semesterEnd: "2026-11-11",
  totalWeeks: TOTAL_WEEKS,
  courses: semesterFiveCourses,
  totalCredits: semesterFiveCourses.reduce((s, c) => s + c.credits, 0),
  upcomingExams: [
    { subject: "Process Equipment Design",                 date: "2024-11-05", time: "9:00 AM",  room: "Exam Hall A",  duration: "3 hours" },
    { subject: "Fundamentals of AI/ML",                    date: "2024-11-08", time: "11:00 AM", room: "Exam Hall B",  duration: "3 hours" },
    { subject: "HSS Elective",                             date: "2024-11-11", time: "2:00 PM",  room: "Exam Hall C",  duration: "3 hours" },
    { subject: "Computer Applications in Chem. Engg.",    date: "2024-11-14", time: "9:00 AM",  room: "Online – Lab", duration: "2 hours" },
    { subject: "Open Elective",                            date: "2024-11-18", time: "10:00 AM", room: "Exam Hall A",  duration: "3 hours" },
  ],
  quickLinks: [
    { title: "5th Sem Notes Drive",          icon: "📂", url: "https://drive.google.com/placeholder-notes"  },
    { title: "PYQs & Solutions",             icon: "📝", url: "https://drive.google.com/placeholder-pyqs"   },
    { title: "Lab Manual — CHC-303",         icon: "🧪", url: "https://drive.google.com/placeholder-lab"    },
    { title: "Process Equipment Design Ref", icon: "⚙️",  url: "https://drive.google.com/placeholder-ped"    },
    { title: "IIT Roorkee Academic Portal",  icon: "🎓", url: "https://academics.iitr.ac.in"                },
    { title: "Course Registration (ERP)",    icon: "🖥️",  url: "https://erp.iitr.ac.in"                     },
    { title: "Graduate Handbook 2024",       icon: "📘", url: "https://www.iitr.ac.in/placeholder-handbook" },
    { title: "Tuition & Fees Portal",        icon: "💳", url: "https://accounts.iitr.ac.in/placeholder-fees"},
  ],
};

// ── Tool definitions ──────────────────────────────────────────────────────────
export const academicsTools = [
  {
    name: "search_documents",
    description: "Search academic handbooks, policies, safety protocols, and university documents",
    input_schema: {
      type: "object",
      properties: {
        query:    { type: "string", description: "Search query — policy name, topic, or keyword" },
        category: { type: "string", description: "Filter by category: ACADEMIC, ADMINISTRATION, SAFETY, FACULTY, STUDENT AFFAIRS" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_policy",
    description: "Get a specific policy or section from a handbook document",
    input_schema: {
      type: "object",
      properties: {
        document_title: { type: "string", description: "Document title or keyword" },
        topic:          { type: "string", description: "Specific topic or section e.g. attendance, plagiarism, safety, AI/ML, lab" },
      },
      required: ["topic"],
    },
  },
  {
    name: "get_academic_schedule",
    description: "Get current semester schedule, upcoming exams, deadlines, and academic calendar",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "get_semester_info",
    description: "Get dynamic semester progress — current week, percentage complete, phase, and next exam",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "get_courses",
    description: "Get the full list of 5th semester courses with codes, credits, and contact hours",
    input_schema: {
      type: "object",
      properties: {
        filter: { type: "string", description: "Optional filter: 'lab', 'core', 'elective', 'enhancement', or area code like PCC, OEC, TEB" },
      },
      required: [],
    },
  },
];

// ── Tool executor ─────────────────────────────────────────────────────────────
export function executeAcademicsTool(toolName, toolInput) {
  switch (toolName) {

    case "search_documents": {
      const q = (toolInput.query || "").toLowerCase();
      const catFilter = toolInput.category?.toUpperCase();
      let results = documents.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          Object.values(d.sections).some(
            (s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)
          )
      );
      if (catFilter) results = results.filter((d) => d.category === catFilter);
      return { results, total: results.length };
    }

    case "get_policy": {
      const topic    = (toolInput.topic || "").toLowerCase();
      const docTitle = (toolInput.document_title || "").toLowerCase();

      for (const doc of documents) {
        if (docTitle && !doc.title.toLowerCase().includes(docTitle)) continue;
        for (const [sectionId, section] of Object.entries(doc.sections)) {
          if (
            section.title.toLowerCase().includes(topic) ||
            section.content.toLowerCase().includes(topic)
          ) {
            return {
              found: true,
              document: doc.title,
              category: doc.category,
              section: sectionId,
              sectionTitle: section.title,
              content: section.content,
              source: `${doc.title} — Section ${sectionId}`,
              pages: doc.pages,
            };
          }
        }
      }
      return { found: false, message: "Policy not found. Try searching with different keywords." };
    }

    case "get_academic_schedule": {
      const progress = computeSemesterProgress();
      return { schedule: { ...academicSchedule, ...progress } };
    }

    case "get_semester_info": {
      const { currentWeek, totalWeeks, progressPercent, phase } = computeSemesterProgress();
      return {
        semester: academicSchedule.currentSemester,
        program: academicSchedule.program,
        institute: academicSchedule.institute,
        currentWeek,
        totalWeeks,
        progressPercent,
        phase,
        totalCredits: academicSchedule.totalCredits,
        nextExam: academicSchedule.upcomingExams[0],
        courseCount: semesterFiveCourses.length,
      };
    }

    case "get_courses": {
      const filter = (toolInput.filter || "").toLowerCase();
      let courses = semesterFiveCourses;
      if (filter) {
        courses = courses.filter(
          (c) =>
            c.type.toLowerCase().includes(filter) ||
            c.area.toLowerCase().includes(filter) ||
            (filter === "lab" && c.P > 0)
        );
      }
      return {
        courses,
        total: courses.length,
        totalCredits: courses.reduce((s, c) => s + c.credits, 0),
        semester: "5th Semester – Year III Autumn",
      };
    }

    default:
      return { error: "Unknown academics tool" };
  }
}