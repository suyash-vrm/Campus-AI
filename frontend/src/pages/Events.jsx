import { useState } from "react";
import AIPanel from "../components/AIPanel";


const documents = [
  { id: "DOC001", title: "Academic Calendar Autumn 2026-27", category: "ACADEMIC", pages: 2 },
  { id: "DOC002", title: "Conduct & Ethics Policy", category: "ADMINISTRATION", pages: 48 },
  { id: "DOC003", title: "Research Lab Protocols", category: "SAFETY", pages: 312 },
  { id: "DOC004", title: "Student Services Guide 2026", category: "STUDENT AFFAIRS", pages: 88 },
  { id: "DOC005", title: "Faculty Research Portal Manual", category: "FACULTY", pages: 56 },
];

const docContent = {
  DOC001: {
    section: "Academic Calendar — Autumn Semester 2026-27",
    body: `Classes commence on **16 July 2026** for all programs except UG I year, and on **27 July 2026** for incoming UG students (subject to JoSAA Counseling).

Academic registration for existing students is on **14–15 July 2026**. The last date for adding or changing courses is **3 August 2026**. New students must submit mandatory documents by **27 August 2026**.

Mid-Term Examinations run from **10–15 September 2026**. Students are informed of their MTE performance by **28 September 2026**. Feedback Form – I is open from **28 September – 1 October 2026**.

Sangram 2026 is scheduled on **3–4 October 2026**. The last date for course withdrawal is **5 October 2026**. Thomso 2026 runs from **23–25 October 2026**.

Feedback Form – II is open from **5–11 November 2026**. The last teaching day is **11 November 2026**. End-Term Examinations are held from **13–24 November 2026** (excluding Sundays and declared holidays).

Convocation 2026 will be held on **19 September 2026 or 26 September 2026** (final date to be notified). Institute Foundation Day is **25 November 2026**.

Winter vacation for UG students (except IDD final year) begins **5 December 2026** and ends **6 January 2027**. Spring Semester 2026-27 classes commence on **11 January 2027**.`,
  },
  DOC002: {
    section: "Section 2.1: Academic Integrity",
    body: `All forms of academic dishonesty including plagiarism, fabrication, and cheating are strictly prohibited at IIT Roorkee.

Violations are handled by the Academic Integrity Committee and may result in course failure, academic probation, or expulsion depending on the severity.

Students are encouraged to use the university's plagiarism detection tools before submitting any academic work.`,
  },
  DOC003: {
    section: "Section 1.0: General Safety Rules",
    body: `All researchers must complete mandatory safety training before accessing any laboratory facility. Training must be renewed annually and documented in the Research Safety Portal.

Personal Protective Equipment (PPE) is required at all times in designated lab areas. Failure to comply with safety protocols may result in immediate revocation of lab access.`,
  },
  DOC004: {
    section: "Section 3.4: Student Wellness & Support",
    body: `IIT Roorkee offers a range of student support services including mental health counseling, academic advising, and career guidance.

Students experiencing academic distress are encouraged to approach their faculty advisor or the Student Wellness Center. Appointments can be booked through the student portal.

Peer mentoring programs pair new students with senior mentors to ease the academic transition.`,
  },
  DOC005: {
    section: "Section 1.2: Research Portal Access",
    body: `Faculty members can access the Research Portal at **research.iitr.ac.in** using their institute credentials. The portal supports grant applications, progress tracking, and publication submissions.

All sponsored research projects must be registered within 30 days of funding approval. Annual progress reports are mandatory and must be submitted to the Dean's office by the deadlines specified in the academic calendar.`,
  },
};


const ALL_EVENTS = [
  
  { date: "2026-07-14", month: "JUL", day: "14", title: "Ph.D. & M.Tech Admission Registration", meta: "Academic Block • All Day", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-07-15", month: "JUL", day: "15", title: "Orientation — New Ph.D. & Masters Students", meta: "Convocation Hall • 10:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-07-16", month: "JUL", day: "16", title: "Classes Commence (All except UG I Year)", meta: "Campus-wide • 8:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-07-24", month: "JUL", day: "24", title: "Academic Registration — New UG Students", meta: "Academic Block • All Day", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-07-27", month: "JUL", day: "27", title: "Classes Commence — UG I Year", meta: "Campus-wide • 8:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-07-31", month: "JUL", day: "31", title: "Last Date: Registration with Late Fine", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-08-03", month: "AUG", day: "03", title: "Last Date: Add/Change Courses", meta: "Academic Portal • Online", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-08-15", month: "AUG", day: "15", title: "Independence Day", meta: "Campus-wide • 8:30 AM", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-08-26", month: "AUG", day: "26", title: "Id-e-Milad (Prophet Mohammad's Birthday)*", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-08-27", month: "AUG", day: "27", title: "Last Date: Mandatory Docs for New Students", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-08-28", month: "AUG", day: "28", title: "Raksha Bandhan", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-09-04", month: "SEP", day: "04", title: "Janamashtami", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-09-10", month: "SEP", day: "10", title: "Mid-Term Examinations Begin", meta: "All Departments • 9:00 AM", tag: "EXAM", color: "#f59e0b" },
  { date: "2026-09-15", month: "SEP", day: "15", title: "Mid-Term Examinations End", meta: "All Departments", tag: "EXAM", color: "#f59e0b" },
  { date: "2026-09-19", month: "SEP", day: "19", title: "Convocation 2026 (Tentative Date 1)", meta: "Convocation Hall • 10:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-09-26", month: "SEP", day: "26", title: "Convocation 2026 (Tentative Date 2)", meta: "Convocation Hall • 10:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-09-28", month: "SEP", day: "28", title: "MTE Feedback & Feedback Form – I Opens", meta: "Online Portal", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-10-02", month: "OCT", day: "02", title: "Mahatma Gandhi's Birthday", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-10-03", month: "OCT", day: "03", title: "Sangram 2026 Begins", meta: "Sports Grounds • All Day", tag: "FEST", color: "#8b5cf6" },
  { date: "2026-10-04", month: "OCT", day: "04", title: "Sangram 2026 Ends", meta: "Sports Grounds • All Day", tag: "FEST", color: "#8b5cf6" },
  { date: "2026-10-05", month: "OCT", day: "05", title: "Last Date: Course Withdrawal", meta: "Academic Portal • Online", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-10-19", month: "OCT", day: "19", title: "Mahashtami", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-10-20", month: "OCT", day: "20", title: "Mahanavmi / Dussehra (Vijaydashmi)", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-10-23", month: "OCT", day: "23", title: "Thomso 2026 Begins", meta: "Campus-wide • All Day", tag: "FEST", color: "#8b5cf6" },
  { date: "2026-10-25", month: "OCT", day: "25", title: "Thomso 2026 Ends", meta: "Campus-wide • All Day", tag: "FEST", color: "#8b5cf6" },
  { date: "2026-11-05", month: "NOV", day: "05", title: "Feedback Form – II Opens", meta: "Online Portal", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-11-08", month: "NOV", day: "08", title: "Diwali (Deepavali)", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-11-09", month: "NOV", day: "09", title: "Govardhan Puja", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-11-11", month: "NOV", day: "11", title: "Last Date of Teaching", meta: "All Departments", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-11-13", month: "NOV", day: "13", title: "End-Term Examinations Begin", meta: "All Departments • 9:00 AM", tag: "EXAM", color: "#f59e0b" },
  { date: "2026-11-24", month: "NOV", day: "24", title: "Guru Nanak's Birthday", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-11-24", month: "NOV", day: "24", title: "End-Term Examinations End", meta: "All Departments", tag: "EXAM", color: "#f59e0b" },
  { date: "2026-11-25", month: "NOV", day: "25", title: "Institute Foundation Day", meta: "Convocation Hall • 11:00 AM", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-12-01", month: "DEC", day: "01", title: "Last Date: Show ETE Answer Scripts", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-12-03", month: "DEC", day: "03", title: "Last Date: Grade Communication & Project Evaluation", meta: "Academic Portal", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-12-04", month: "DEC", day: "04", title: "Last Date: Grade Revision Applications", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-12-05", month: "DEC", day: "05", title: "Winter Vacation Begins (UG Students)", meta: "Resumes 7 Jan 2027", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-12-08", month: "DEC", day: "08", title: "Last Date: Final Grades to AAO", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-12-09", month: "DEC", day: "09", title: "Last Date: Ph.D. Progress Reports to AAO", meta: "Academic Section", tag: "DEADLINE", color: "#ef4444" },
  { date: "2026-12-10", month: "DEC", day: "10", title: "Online Branch Change Choices Open", meta: "Student Portal • Online", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2026-12-25", month: "DEC", day: "25", title: "Christmas Day", meta: "Holiday • Campus Closed", tag: "HOLIDAY", color: "#16a34a" },
  { date: "2026-12-31", month: "DEC", day: "31", title: "Tentative: Final Branch Change List Declared", meta: "Student Portal", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2027-01-07", month: "JAN", day: "07", title: "New Ph.D. Admission Registration — Spring", meta: "Academic Block • All Day", tag: "ACADEMIC", color: "#3b82f6" },
  { date: "2027-01-11", month: "JAN", day: "11", title: "Spring Semester 2026-27 Classes Begin", meta: "Campus-wide • 8:00 AM", tag: "ACADEMIC", color: "#3b82f6" },

  // ── Workshops ─────────────────────────────────────────────────────────────
  { date: "2026-07-19", month: "JUL", day: "19", title: "Workshop: LaTeX for Research Writing", meta: "CS Dept Lab • 2:00 PM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-07-26", month: "JUL", day: "26", title: "Workshop: Python for Data Science", meta: "CS Lab 3 • 10:00 AM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-08-08", month: "AUG", day: "08", title: "Workshop: Machine Learning Fundamentals", meta: "EC Dept Seminar Hall • 3:00 PM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-08-22", month: "AUG", day: "22", title: "Research Methodology Bootcamp", meta: "IIC Conference Room • 9:30 AM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-09-05", month: "SEP", day: "05", title: "Workshop: VLSI Design with Cadence", meta: "ECE Advanced Lab • 10:00 AM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-10-10", month: "OCT", day: "10", title: "Workshop: Robotics & ROS2", meta: "ME Robotics Lab • 2:00 PM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-10-17", month: "OCT", day: "17", title: "Workshop: Scientific Writing & Publication", meta: "Library Seminar Hall • 11:00 AM", tag: "WORKSHOP", color: "#0891b2" },
  { date: "2026-11-01", month: "NOV", day: "01", title: "Entrepreneurship & Startup Workshop", meta: "IIC Roorkee • 10:00 AM", tag: "WORKSHOP", color: "#0891b2" },

  // ── Conferences & Seminars ────────────────────────────────────────────────
  { date: "2026-08-01", month: "AUG", day: "01", title: "Guest Lecture: AI in Healthcare", meta: "Lecture Hall 201 • 4:00 PM", tag: "SEMINAR", color: "#db2777" },
  { date: "2026-08-14", month: "AUG", day: "14", title: "National Symposium on Sustainable Engineering", meta: "Thompson Hall • 9:00 AM", tag: "CONFERENCE", color: "#ea580c" },
  { date: "2026-09-06", month: "SEP", day: "06", title: "IIT Roorkee Data Ethics Seminar", meta: "Lecture Hall 201 • 3:00 PM", tag: "SEMINAR", color: "#db2777" },
  { date: "2026-09-20", month: "SEP", day: "20", title: "Annual Graduate Research Symposium", meta: "Convocation Hall • 9:30 AM", tag: "CONFERENCE", color: "#ea580c" },
  { date: "2026-10-06", month: "OCT", day: "06", title: "Inter-IIT Technical Conference 2026", meta: "Civil Engg Dept • 9:00 AM", tag: "CONFERENCE", color: "#ea580c" },
  { date: "2026-10-15", month: "OCT", day: "15", title: "Seminar: Quantum Computing Frontiers", meta: "Physics Dept Auditorium • 3:30 PM", tag: "SEMINAR", color: "#db2777" },
  { date: "2026-11-03", month: "NOV", day: "03", title: "Faculty Research Mixer & Expo", meta: "Main Hall • 5:00 PM", tag: "SEMINAR", color: "#db2777" },
  { date: "2026-11-07", month: "NOV", day: "07", title: "International Conference on Smart Systems (ICSS)", meta: "Convocation Hall • All Day", tag: "CONFERENCE", color: "#ea580c" },
  { date: "2026-12-12", month: "DEC", day: "12", title: "Winter Colloquium — Dept of Mathematics", meta: "Math Dept Seminar Room • 2:00 PM", tag: "SEMINAR", color: "#db2777" },
  { date: "2026-12-18", month: "DEC", day: "18", title: "Annual Alumni Lecture Series", meta: "Convocation Hall • 11:00 AM", tag: "SEMINAR", color: "#db2777" },
];

const TAG_COLORS = {
  ACADEMIC: "#3b82f6",
  DEADLINE: "#ef4444",
  EXAM: "#f59e0b",
  HOLIDAY: "#16a34a",
  FEST: "#8b5cf6",
  WORKSHOP: "#0891b2",
  SEMINAR: "#db2777",
  CONFERENCE: "#ea580c",
};

const ALL_TAGS = ["ALL", ...Object.keys(TAG_COLORS)];

const MONTHS = ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN"];

const featuredEvent = {
  title: "Thomso 2026",
  desc: "IIT Roorkee's flagship annual cultural & technical festival. Three days of competitions, concerts, and exhibitions.",
  dates: "Oct 23–25, 2026",
};

// ─── Icons ──────────────────────────────────────────────────────────────────
const IconZoomIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
);
const IconZoomOut = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
);
const IconExpand = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
);
const IconFilter = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const IconCalendar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Events() {
  const [selectedDoc, setSelectedDoc] = useState("DOC001");
  const [activeTag, setActiveTag] = useState("ALL");
  const [activeMonth, setActiveMonth] = useState("ALL");
  const content = docContent[selectedDoc] || docContent["DOC001"];
  const docInfo = documents.find((d) => d.id === selectedDoc);

  const filteredEvents = ALL_EVENTS.filter((ev) => {
    const tagMatch = activeTag === "ALL" || ev.tag === activeTag;
    const monthMatch = activeMonth === "ALL" || ev.month === activeMonth;
    return tagMatch && monthMatch;
  }).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div style={{ display: "flex", height: "calc(100vh - var(--header-height))", overflow: "hidden" }}>
      {/* ── Left: Document List ─────────────────────────────────────────── */}
      <div style={{ width: "220px", flexShrink: 0, borderRight: "1px solid var(--border)", padding: "20px 14px", overflowY: "auto", background: "var(--bg-sidebar)" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "4px" }}>Indexed Documents</div>
        <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "14px" }}>{documents.length} Total</div>

        {documents.map((doc) => (
          <div
            key={doc.id}
            onClick={() => setSelectedDoc(doc.id)}
            style={{
              display: "flex", gap: "10px", padding: "10px 8px", borderRadius: "var(--radius)", cursor: "pointer",
              background: selectedDoc === doc.id ? "var(--accent-yellow-bg)" : "transparent",
              border: selectedDoc === doc.id ? "1px solid var(--accent-yellow)" : "1px solid transparent",
              marginBottom: "4px", transition: "all 0.18s",
            }}
          >
            <div style={{ width: "26px", height: "26px", background: "var(--red-bg)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "var(--red)", fontWeight: 800, flexShrink: 0 }}>PDF</div>
            <div>
              <div style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{doc.title}</div>
              <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.3px" }}>{doc.category} • {doc.pages} pages</div>
            </div>
          </div>
        ))}

        {/* Featured Event */}
        <div style={{ marginTop: "16px", background: "#111", borderRadius: "var(--radius)", padding: "14px 12px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--accent-yellow)", marginBottom: "6px" }}>Featured Event</div>
          <div style={{ fontSize: "14px", fontWeight: 800, color: "white", marginBottom: "4px", lineHeight: 1.3 }}>{featuredEvent.title}</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", marginBottom: "6px", fontWeight: 600 }}>{featuredEvent.dates}</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "12px", lineHeight: 1.5 }}>{featuredEvent.desc}</div>
          <button style={{ width: "100%", padding: "7px", border: "1px solid rgba(255,255,255,0.25)", background: "transparent", color: "white", borderRadius: "var(--radius)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer" }}>
            Register Now
          </button>
        </div>
      </div>

      {/* ── Centre: Document Viewer ─────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", borderRight: "1px solid var(--border)" }}>
        {/* Toolbar */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", background: "var(--bg-input)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ width: "24px", height: "24px", background: "var(--red-bg)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "var(--red)", fontWeight: 800 }}>PDF</div>
          <div>
            <div style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 600 }}>Document Viewer:</div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-primary)" }}>{docInfo?.title}</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
            {[<IconZoomIn />, <IconZoomOut />, <IconExpand />].map((icon, i) => (
              <button key={i} style={{ width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", border: "none", background: "transparent", color: "var(--text-secondary)", cursor: "pointer" }}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Document Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", lineHeight: 1.3 }}>
            {content.section}
          </h2>
          <div style={{ fontSize: "13.5px", lineHeight: 1.85, color: "var(--text-secondary)" }}>
            {content.body.split("**").map((part, i) =>
              i % 2 === 1
                ? <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 700 }}>{part}</strong>
                : part.split("\n").map((line, j) => line ? <span key={j}>{line}<br /></span> : <br key={j} />)
            )}
          </div>

          {/* Quick Key Dates Table (only on DOC001) */}
          {selectedDoc === "DOC001" && (
            <div style={{ marginTop: "28px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "12px" }}>
                Teaching Days Summary
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px" }}>
                <thead>
                  <tr style={{ background: "var(--bg-input)" }}>
                    {["Program", "July", "Aug", "Sep", "Oct", "Nov", "Total"].map((h) => (
                      <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700, color: "var(--text-muted)", fontSize: "11px", textTransform: "uppercase", borderBottom: "1px solid var(--border)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Others (Ph.D./M.Tech/UG II+)", "12", "18", "17", "18", "7", "72"],
                    ["UG I Year", "5", "21", "17", "19", "7", "69"],
                  ].map(([prog, ...vals], i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "8px 10px", fontWeight: 600, color: "var(--text-primary)" }}>{prog}</td>
                      {vals.map((v, j) => (
                        <td key={j} style={{ padding: "8px 10px", color: "var(--text-secondary)", fontWeight: j === vals.length - 1 ? 700 : 400 }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: "10px", fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                * Timetable Rescheduling: Sep 23 & Oct 28 follow <strong>Friday's</strong> timetable. Compensatory classes for UG I year: Aug 1 (Mon), Aug 8 (Thu), Aug 22 (Fri), Oct 10 (Fri).
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Right: AI Assistant + Full Events Feed ─────────────────────── */}
      <div style={{ width: "320px", flexShrink: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* AI Panel */}
        <div style={{ flex: "0 0 auto", maxHeight: "240px", overflow: "hidden" }}>
          <AIPanel
            title="AI Academic Assistant"
            placeholder="Ask about the calendar, exams, fests…"
            panelStyle={{ height: "240px", border: "none", borderRadius: 0 }}
            suggestions={["When are MTE exams?", "Thomso 2026 dates?", "Last date to withdraw?"]}
          />
        </div>

        {/* Events Feed */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", borderTop: "1px solid var(--border)" }}>
          {/* Filter Bar */}
          <div style={{ padding: "10px 14px", background: "var(--bg-sidebar)", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
              <IconFilter />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px", color: "var(--text-muted)" }}>Filter by Type</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: "3px 8px", borderRadius: "99px", fontSize: "10px", fontWeight: 700,
                    cursor: "pointer", border: "none", transition: "all 0.15s",
                    background: activeTag === tag
                      ? (TAG_COLORS[tag] || "var(--text-primary)")
                      : "var(--bg-input)",
                    color: activeTag === tag ? "white" : "var(--text-secondary)",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
              <IconCalendar />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px", color: "var(--text-muted)" }}>Filter by Month</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {["ALL", ...MONTHS].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMonth(m)}
                  style={{
                    padding: "3px 8px", borderRadius: "99px", fontSize: "10px", fontWeight: 700,
                    cursor: "pointer", border: "none", transition: "all 0.15s",
                    background: activeMonth === m ? "var(--text-primary)" : "var(--bg-input)",
                    color: activeMonth === m ? "var(--bg-sidebar)" : "var(--text-secondary)",
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
            <div style={{ padding: "4px 14px 2px", fontSize: "10px", color: "var(--text-muted)", fontWeight: 600 }}>
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
            </div>
            {filteredEvents.map((ev, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: "10px", padding: "9px 14px",
                  borderBottom: "1px solid var(--border)", alignItems: "flex-start",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-input)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                {/* Date Badge */}
                <div style={{ width: "36px", textAlign: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", display: "block" }}>{ev.month}</span>
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{ev.day}</span>
                </div>
                {/* Event Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "2px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{ev.title}</div>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{ev.meta}</div>
                </div>
                {/* Tag Pill */}
                <div style={{
                  flexShrink: 0, padding: "2px 7px", borderRadius: "99px", fontSize: "9px",
                  fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.4px",
                  background: ev.color + "22", color: ev.color, border: `1px solid ${ev.color}44`,
                }}>
                  {ev.tag}
                </div>
              </div>
            ))}
            {filteredEvents.length === 0 && (
              <div style={{ padding: "24px 14px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px" }}>
                No events match the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}