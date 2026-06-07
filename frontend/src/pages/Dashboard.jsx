import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useMemo ,useState} from "react";

// ─── Date & Time Helpers ─────────────────────────────────────────────────────
const today = new Date();
const displayDate = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
const hour = today.getHours();
const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

// ─── Semester Progress (Dynamic) ─────────────────────────────────────────────
// Autumn 2026-27: Classes start 16 Jul 2026, last teaching day 11 Nov 2026
const SEM_START = new Date("2026-07-16");
const SEM_END   = new Date("2026-11-11");
const MTE_START = new Date("2026-09-10");
const MTE_END   = new Date("2026-09-15");
const ETE_START = new Date("2026-11-13");
const ETE_END   = new Date("2026-11-24");

function getSemesterProgress() {
  const now = new Date();
  if (now < SEM_START) return { pct: 0, week: 0, totalWeeks: 17, phase: "Not yet started", daysLeft: Math.ceil((SEM_START - now) / 86400000) + " days until classes" };
  if (now > SEM_END)   return { pct: 100, week: 17, totalWeeks: 17, phase: "Semester complete", daysLeft: "End-term exams underway" };

  const elapsed = now - SEM_START;
  const total   = SEM_END - SEM_START;
  const pct     = Math.min(100, Math.round((elapsed / total) * 100));
  const week    = Math.min(17, Math.ceil(elapsed / (7 * 86400000)));

  let phase = "Teaching in progress";
  let daysLeft = "";
  if (now >= MTE_START && now <= MTE_END) { phase = "Mid-term examinations"; daysLeft = "MTE underway"; }
  else if (now < MTE_START) { const d = Math.ceil((MTE_START - now) / 86400000); phase = "Teaching in progress"; daysLeft = `MTE in ${d} day${d !== 1 ? "s" : ""}`; }
  else if (now > MTE_END && now < ETE_START) { const d = Math.ceil((ETE_START - now) / 86400000); phase = "Post-MTE teaching"; daysLeft = `ETE in ${d} day${d !== 1 ? "s" : ""}`; }
  else if (now >= ETE_START && now <= ETE_END) { phase = "End-term examinations"; daysLeft = "ETE underway"; }

  return { pct, week, totalWeeks: 17, phase, daysLeft };
}

// ─── Mess Menu (Weekly rotation — IIT Roorkee style) ─────────────────────────
// dayOfWeek index: 0=Sun,1=Mon,...,6=Sat
const MESS_MENU = {
  0: { // Sunday
    breakfast: ["Aloo Paratha", "Curd", "Pickle", "Tea / Coffee"],
    lunch:     ["Dal Makhani", "Paneer Butter Masala", "Jeera Rice", "Naan", "Salad", "Gulab Jamun"],
    snacks:    ["Samosa", "Chutney", "Tea"],
    dinner:    ["Rajma", "Mixed Veg", "Roti", "Steamed Rice", "Raita"],
  },
  1: { // Monday
    breakfast: ["Poha", "Boiled Egg / Banana", "Bread & Butter", "Tea / Coffee"],
    lunch:     ["Yellow Dal", "Aloo Gobhi", "Rice", "Roti", "Salad"],
    snacks:    ["Bread Pakora", "Ketchup", "Tea"],
    dinner:    ["Chole", "Bhindi Masala", "Roti", "Rice", "Dahi"],
  },
  2: { // Tuesday
    breakfast: ["Idli", "Sambar", "Coconut Chutney", "Tea / Coffee"],
    lunch:     ["Arhar Dal", "Palak Paneer", "Jeera Rice", "Roti", "Salad"],
    snacks:    ["Vada Pav", "Green Chutney", "Tea"],
    dinner:    ["Kadhi", "Aloo Matar", "Roti", "Rice", "Pickle"],
  },
  3: { // Wednesday
    breakfast: ["Upma", "Boiled Egg / Fruits", "Bread & Jam", "Tea / Coffee"],
    lunch:     ["Moong Dal", "Jeera Aloo", "Rice", "Roti", "Salad", "Kheer"],
    snacks:    ["Pav Bhaji", "Tea"],
    dinner:    ["Mix Dal", "Baingan Masala", "Roti", "Rice", "Buttermilk"],
  },
  4: { // Thursday
    breakfast: ["Puri", "Sabzi", "Curd", "Tea / Coffee"],
    lunch:     ["Masoor Dal", "Paneer Bhurji", "Rice", "Roti", "Salad"],
    snacks:    ["Kachori", "Imli Chutney", "Tea"],
    dinner:    ["Rajma", "Aloo Jeera", "Roti", "Rice", "Raita"],
  },
  5: { // Friday
    breakfast: ["Dosa", "Sambar", "Chutney", "Tea / Coffee"],
    lunch:     ["Dal Tadka", "Matar Mushroom", "Jeera Rice", "Roti", "Salad", "Halwa"],
    snacks:    ["Maggi / Noodles", "Tea"],
    dinner:    ["Chana Masala", "Aloo Palak", "Roti", "Rice", "Dahi"],
  },
  6: { // Saturday
    breakfast: ["Chole Bhature", "Pickle", "Tea / Coffee"],
    lunch:     ["Dal Fry", "Shahi Paneer", "Biryani Rice", "Roti", "Salad", "Ice Cream"],
    snacks:    ["Aloo Tikki", "Chaat", "Tea"],
    dinner:    ["Kadhi Pakora", "Veg Pulao", "Roti", "Salad", "Sweet"],
  },
};

function getMealTime() {
  if (hour >= 7  && hour < 9)  return "breakfast";
  if (hour >= 11 && hour < 15) return "lunch";
  if (hour >= 16 && hour < 18) return "snacks";
  if (hour >= 19 && hour < 22) return "dinner";
  return hour < 7 ? "breakfast" : "dinner";
}

const MEAL_TIMES = {
  breakfast: "7:00 – 9:00 AM",
  lunch:     "11:30 AM – 2:30 PM",
  snacks:    "4:30 – 6:00 PM",
  dinner:    "7:30 – 9:30 PM",
};

const MEAL_LABELS = { breakfast: "Breakfast", lunch: "Lunch", snacks: "Evening Snacks", dinner: "Dinner" };

const MEAL_COLORS = {
  breakfast: { bg: "linear-gradient(135deg,#f59e0b22,#fbbf2411)", accent: "#f59e0b" },
  lunch:     { bg: "linear-gradient(135deg,#10b98122,#06d6a011)", accent: "#10b981" },
  snacks:    { bg: "linear-gradient(135deg,#f9731622,#fb923c11)", accent: "#f97316" },
  dinner:    { bg: "linear-gradient(135deg,#6366f122,#818cf811)", accent: "#6366f1" },
};

// ─── Today's Events (from Autumn 2026-27 calendar) ────────────────────────────
const ALL_EVENTS_FLAT = [
  { date: "2026-07-14", title: "Ph.D. & M.Tech Admission Registration", time: "All Day", loc: "Academic Block", tag: "ACADEMIC" },
  { date: "2026-07-15", title: "Orientation — New Ph.D. & Masters", time: "10:00 AM", loc: "Convocation Hall", tag: "ACADEMIC" },
  { date: "2026-07-16", title: "Classes Commence (All except UG I)", time: "8:00 AM", loc: "Campus-wide", tag: "ACADEMIC" },
  { date: "2026-07-19", title: "Workshop: LaTeX for Research Writing", time: "2:00 PM", loc: "CS Dept Lab", tag: "WORKSHOP" },
  { date: "2026-07-24", title: "Academic Registration — New UG Students", time: "All Day", loc: "Academic Block", tag: "ACADEMIC" },
  { date: "2026-07-26", title: "Workshop: Python for Data Science", time: "10:00 AM", loc: "CS Lab 3", tag: "WORKSHOP" },
  { date: "2026-07-27", title: "Classes Commence — UG I Year", time: "8:00 AM", loc: "Campus-wide", tag: "ACADEMIC" },
  { date: "2026-07-31", title: "Last Date: Registration with Late Fine", time: "5:00 PM", loc: "Academic Section", tag: "DEADLINE" },
  { date: "2026-08-01", title: "Guest Lecture: AI in Healthcare", time: "4:00 PM", loc: "Lecture Hall 201", tag: "SEMINAR" },
  { date: "2026-08-03", title: "Last Date: Add/Change Courses", time: "5:00 PM", loc: "Academic Portal", tag: "DEADLINE" },
  { date: "2026-08-08", title: "Workshop: Machine Learning Fundamentals", time: "3:00 PM", loc: "EC Dept Seminar Hall", tag: "WORKSHOP" },
  { date: "2026-08-14", title: "National Symposium on Sustainable Engineering", time: "9:00 AM", loc: "Thompson Hall", tag: "CONFERENCE" },
  { date: "2026-08-15", title: "Independence Day Celebration", time: "8:30 AM", loc: "Campus Ground", tag: "HOLIDAY" },
  { date: "2026-08-22", title: "Research Methodology Bootcamp", time: "9:30 AM", loc: "IIC Conference Room", tag: "WORKSHOP" },
  { date: "2026-08-27", title: "Last Date: Mandatory Docs for New Students", time: "5:00 PM", loc: "Academic Section", tag: "DEADLINE" },
  { date: "2026-09-05", title: "Workshop: VLSI Design with Cadence", time: "10:00 AM", loc: "ECE Advanced Lab", tag: "WORKSHOP" },
  { date: "2026-09-06", title: "Data Ethics Seminar", time: "3:00 PM", loc: "Lecture Hall 201", tag: "SEMINAR" },
  { date: "2026-09-10", title: "Mid-Term Examinations Begin", time: "9:00 AM", loc: "All Departments", tag: "EXAM" },
  { date: "2026-09-15", title: "Mid-Term Examinations End", time: "", loc: "All Departments", tag: "EXAM" },
  { date: "2026-09-19", title: "Convocation 2026 (Tentative)", time: "10:00 AM", loc: "Convocation Hall", tag: "ACADEMIC" },
  { date: "2026-09-20", title: "Annual Graduate Research Symposium", time: "9:30 AM", loc: "Convocation Hall", tag: "CONFERENCE" },
  { date: "2026-09-28", title: "Feedback Form – I Opens + MTE Results", time: "Online", loc: "Student Portal", tag: "ACADEMIC" },
  { date: "2026-10-03", title: "Sangram 2026 — Day 1", time: "All Day", loc: "Sports Grounds", tag: "FEST" },
  { date: "2026-10-04", title: "Sangram 2026 — Day 2 (Finals)", time: "All Day", loc: "Sports Grounds", tag: "FEST" },
  { date: "2026-10-05", title: "Last Date: Course Withdrawal", time: "5:00 PM", loc: "Academic Portal", tag: "DEADLINE" },
  { date: "2026-10-06", title: "Inter-IIT Technical Conference 2026", time: "9:00 AM", loc: "Civil Engg Dept", tag: "CONFERENCE" },
  { date: "2026-10-10", title: "Workshop: Robotics & ROS2", time: "2:00 PM", loc: "ME Robotics Lab", tag: "WORKSHOP" },
  { date: "2026-10-15", title: "Seminar: Quantum Computing Frontiers", time: "3:30 PM", loc: "Physics Dept", tag: "SEMINAR" },
  { date: "2026-10-17", title: "Workshop: Scientific Writing & Publication", time: "11:00 AM", loc: "Library Seminar Hall", tag: "WORKSHOP" },
  { date: "2026-10-23", title: "Thomso 2026 — Day 1", time: "All Day", loc: "Campus-wide", tag: "FEST" },
  { date: "2026-10-24", title: "Thomso 2026 — Day 2", time: "All Day", loc: "Campus-wide", tag: "FEST" },
  { date: "2026-10-25", title: "Thomso 2026 — Day 3 (Grand Finale)", time: "All Day", loc: "Campus-wide", tag: "FEST" },
  { date: "2026-11-01", title: "Entrepreneurship & Startup Workshop", time: "10:00 AM", loc: "IIC Roorkee", tag: "WORKSHOP" },
  { date: "2026-11-03", title: "Faculty Research Mixer & Expo", time: "5:00 PM", loc: "Main Hall", tag: "SEMINAR" },
  { date: "2026-11-05", title: "Feedback Form – II Opens", time: "Online", loc: "Student Portal", tag: "ACADEMIC" },
  { date: "2026-11-07", title: "International Conf. on Smart Systems (ICSS)", time: "All Day", loc: "Convocation Hall", tag: "CONFERENCE" },
  { date: "2026-11-11", title: "Last Day of Teaching", time: "End of Day", loc: "All Departments", tag: "DEADLINE" },
  { date: "2026-11-13", title: "End-Term Examinations Begin", time: "9:00 AM", loc: "All Departments", tag: "EXAM" },
  { date: "2026-11-25", title: "Institute Foundation Day", time: "11:00 AM", loc: "Convocation Hall", tag: "ACADEMIC" },
  { date: "2026-12-01", title: "Last Date: Show ETE Answer Scripts", time: "5:00 PM", loc: "Academic Section", tag: "DEADLINE" },
  { date: "2026-12-03", title: "Last Date: Grade Communication to Students", time: "5:00 PM", loc: "Academic Portal", tag: "DEADLINE" },
  { date: "2026-12-04", title: "Last Date: Grade Revision Applications", time: "5:00 PM", loc: "Academic Section", tag: "DEADLINE" },
  { date: "2026-12-05", title: "Winter Vacation Begins (UG Students)", time: "All Day", loc: "Resumes 7 Jan 2027", tag: "HOLIDAY" },
  { date: "2026-12-12", title: "Winter Colloquium — Dept of Mathematics", time: "2:00 PM", loc: "Math Dept Seminar", tag: "SEMINAR" },
  { date: "2026-12-18", title: "Annual Alumni Lecture Series", time: "11:00 AM", loc: "Convocation Hall", tag: "SEMINAR" },
  { date: "2027-01-07", title: "New Ph.D. Registration — Spring Semester", time: "All Day", loc: "Academic Block", tag: "ACADEMIC" },
  { date: "2027-01-11", title: "Spring Semester 2026-27 Classes Begin", time: "8:00 AM", loc: "Campus-wide", tag: "ACADEMIC" },
];

const TAG_META = {
  ACADEMIC:   { color: "#3b82f6", bg: "#3b82f622" },
  DEADLINE:   { color: "#ef4444", bg: "#ef444422" },
  EXAM:       { color: "#f59e0b", bg: "#f59e0b22" },
  HOLIDAY:    { color: "#16a34a", bg: "#16a34a22" },
  FEST:       { color: "#8b5cf6", bg: "#8b5cf622" },
  WORKSHOP:   { color: "#0891b2", bg: "#0891b222" },
  SEMINAR:    { color: "#db2777", bg: "#db277722" },
  CONFERENCE: { color: "#ea580c", bg: "#ea580c22" },
};

// ─── Academic Hub Links ──────────────────────────────────────────────────────
const ACADEMIC_LINKS = [
  { label: "Channel-i (ERP Portal)", url: "https://channeli.in", desc: "Courses, grades, attendance", icon: "🎓" },
  { label: "Attendance Portal", url: "https://attendance.iitr.ac.in:8000/#/dashboard", desc: "View & track attendance", icon: "📋" },
  { label: "AAO IITR", url: "https://academics.iitr.ac.in/#/login", desc: "Academic Admin Office", icon: "🏛️" },
  { label: "Library (NDL / OPAC)", url: "https://mgcl.iitr.ac.in/", desc: "Books, journals, digital", icon: "📚" },
  { label: "Placement Portal", url: "https://channeli.in/placement_and_internship/resume/", desc: "CDC jobs & internships", icon: "💼" },
  { label: "Faculty Research Portal", url: "https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/Research/Research%20Area.html", desc: "Grants, publications", icon: "🔬" },
];

// ─── Library Stats ────────────────────────────────────────────────────────────
const libStats = [
  { label: "Available Seats", value: "142", sub: "/ 400 total" },
  { label: "Book Returns Due", value: "03", sub: "Action Required", isWarn: true },
  { label: "Silent Zone", value: "32 dB", sub: "Optimal for focus", isGood: true },
];

function StatCard({ label, value, sub, isWarn, isGood }) {
  return (
    <div style={{ padding: "14px 16px", borderRight: "1px solid var(--border)", flex: 1 }}>
      <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "4px" }}>{label}</div>
      <div style={{ fontSize: "26px", fontWeight: 800, color: isWarn ? "var(--red)" : "var(--text-primary)", lineHeight: 1.1 }}>{value}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px", fontSize: "11px", color: isWarn ? "var(--red)" : isGood ? "var(--green)" : "var(--text-secondary)" }}>
        {isWarn && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
        {sub}
      </div>
    </div>
  );
}

// ─── Meal Icon ───────────────────────────────────────────────────────────────
const MEAL_ICONS = { breakfast: "🌅", lunch: "☀️", snacks: "🍵", dinner: "🌙" };

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Dashboard() {
  const { user } = useAuth();
  const displayName = user?.name || "Student";

  // Dynamic semester progress
  const semProg = useMemo(() => getSemesterProgress(), []);

  // Today's events
  const todayStr = today.toISOString().slice(0, 10);
  const todayEvents = ALL_EVENTS_FLAT.filter((e) => e.date === todayStr);

  // Upcoming 3 events (next events after today)
  const upcomingEvents = ALL_EVENTS_FLAT
    .filter((e) => e.date > todayStr)
    .slice(0, 3);

  // Current meal
  const dayIdx = today.getDay();
  const currentMeal = getMealTime();
  const messMenu = MESS_MENU[dayIdx];
  const mealStyle = MEAL_COLORS[currentMeal];

  // Progress bar color
  const progColor = semProg.pct < 30 ? "#3b82f6" : semProg.pct < 60 ? "#10b981" : semProg.pct < 85 ? "#f59e0b" : "#ef4444";

  return (
    <div className="page-content">
      {/* ── Welcome Banner ──────────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <h1 style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--text-primary)", marginBottom: "6px" }}>
            {greeting}, {displayName.split(" ")[0]}.
          </h1>
          <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", maxWidth: "480px" }}>
            {todayEvents.length > 0
              ? `You have ${todayEvents.length} event${todayEvents.length > 1 ? "s" : ""} today. ${semProg.daysLeft}.`
              : `No scheduled events today. ${semProg.daysLeft}.`}
          </p>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)" }}>{dayOfWeek}</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginTop: "2px" }}>{displayDate}</div>
          <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "3px" }}>Autumn Semester 2026-27</div>
        </div>
      </div>

      {/* ── Row 1: Library + Mess Menu ──────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
        {/* Library Status */}
        <div className="card">
          <div className="card-header">
            <div className="card-header__title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Library Status
            </div>
            <span className="badge badge--live">LIVE</span>
          </div>
          <div style={{ display: "flex" }}>
            {libStats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
          <div style={{ padding: "10px 16px 14px", borderTop: "1px solid var(--border)" }}>
            <div style={{ height: "4px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ width: "35%", height: "100%", background: "var(--green)", borderRadius: "2px" }} />
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "5px" }}>142 of 400 seats available • Opens 8:00 AM – 10:00 PM</div>
          </div>
        </div>

        {/* ── Mess Menu Card ─────────────────────────────────────────────── */}
        <div className="card" style={{ overflow: "hidden" }}>
          <div className="card-header">
            <div className="card-header__title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
              Mess Menu
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{dayOfWeek}</span>
              <Link to="/cafeteria" style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--text-secondary)", textDecoration: "none" }}>Full Week →</Link>
            </div>
          </div>

          {/* Meal Tabs */}
          <MealTabs messMenu={messMenu} currentMeal={currentMeal} mealStyle={mealStyle} />
        </div>
      </div>

      {/* ── Row 2: Today's Events + Academic Hub ────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {/* Today's Events / Upcoming */}
        <TodayEventsCard todayEvents={todayEvents} upcomingEvents={upcomingEvents} todayStr={todayStr} />

        {/* Academic Hub */}
        <div className="card">
          <div className="card-header">
            <div className="card-header__title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Academic Hub
            </div>
          </div>

          <div style={{ display: "flex", height: "calc(100% - 42px)" }}>
            {/* Quick Links */}
            <div style={{ flex: 1, borderRight: "1px solid var(--border)", overflowY: "auto" }}>
              <div style={{ padding: "8px 14px 4px", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)" }}>Important Portals</div>
              {ACADEMIC_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: "10px",
                    padding: "9px 14px", textDecoration: "none",
                    borderBottom: "1px solid var(--border)", transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-input)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <span style={{ fontSize: "15px", flexShrink: 0 }}>{link.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.2 }}>{link.label}</div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "1px" }}>{link.desc}</div>
                  </div>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ))}
            </div>

            {/* Semester Progress — Dynamic */}
            <div style={{ width: "148px", padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "6px" }}>Semester Progress</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{semProg.pct}<span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-muted)" }}>%</span></div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "3px", fontWeight: 600 }}>Week {semProg.week} / {semProg.totalWeeks}</div>
              </div>

              {/* Segmented progress bar */}
              <div>
                <div style={{ height: "6px", background: "var(--border)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: `${semProg.pct}%`, height: "100%", background: progColor, borderRadius: "3px", transition: "width 0.6s ease" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                  <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>Jul 16</span>
                  <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>Nov 11</span>
                </div>
              </div>

              {/* Phase badge */}
              <div style={{ background: progColor + "18", border: `1px solid ${progColor}33`, borderRadius: "6px", padding: "8px 10px" }}>
                <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: progColor, marginBottom: "3px" }}>Current Phase</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{semProg.phase}</div>
              </div>

              {/* Milestone dots */}
              <div>
                <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--text-muted)", marginBottom: "6px" }}>Milestones</div>
                {[
                  { label: "MTE", date: "Sep 10–15", done: today > MTE_END },
                  { label: "ETE", date: "Nov 13–24", done: today > ETE_END },
                  { label: "Winter Break", date: "Dec 5", done: today > new Date("2026-12-05") },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: m.done ? "#10b981" : "var(--border)", border: m.done ? "none" : "2px solid var(--text-muted)", flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: m.done ? "#10b981" : "var(--text-primary)" }}>{m.label}</span>
                      <span style={{ fontSize: "9px", color: "var(--text-muted)", marginLeft: "4px" }}>{m.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Meal Tabs Sub-Component ─────────────────────────────────────────────────
function MealTabs({ messMenu, currentMeal, mealStyle }) {
  const meals = ["breakfast", "lunch", "snacks", "dinner"];
  const [active, setActive] = useState(currentMeal);
  const items = messMenu[active] || [];
  const ms = MEAL_COLORS[active];

  return (
    <div style={{ flex: 1 }}>
      {/* Tab bar */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
        {meals.map((m) => (
          <button
            key={m}
            onClick={() => setActive(m)}
            style={{
              flex: 1, padding: "7px 4px", border: "none", background: active === m ? "var(--bg-input)" : "transparent",
              fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px",
              color: active === m ? "var(--text-primary)" : "var(--text-muted)",
              cursor: "pointer", borderBottom: active === m ? `2px solid ${MEAL_COLORS[m].accent}` : "2px solid transparent",
              transition: "all 0.15s", fontFamily: "var(--font)",
            }}
          >
            {MEAL_ICONS[m]}
          </button>
        ))}
      </div>

      {/* Meal header */}
      <div style={{ padding: "10px 14px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-primary)" }}>{MEAL_LABELS[active]}</div>
        <div style={{ fontSize: "10px", color: "var(--text-muted)", background: "var(--bg-input)", padding: "2px 7px", borderRadius: "99px", fontWeight: 600 }}>{MEAL_TIMES[active]}</div>
      </div>

      {/* Food items */}
      <div style={{ padding: "0 14px 12px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: 600,
              background: ms.accent + "18", color: ms.accent,
              border: `1px solid ${ms.accent}33`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Mess hall info */}
      <div style={{ margin: "0 14px 12px", padding: "7px 10px", background: "var(--bg-input)", borderRadius: "6px", display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
        <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>📍 Main Mess Hall</span>
        <span style={{ color: "var(--text-secondary)" }}>Wait: ~5 min</span>
      </div>
    </div>
  );
}

// ─── Today's Events Card ─────────────────────────────────────────────────────
function TodayEventsCard({ todayEvents, upcomingEvents, todayStr }) {
  const hasToday = todayEvents.length > 0;
  const showEvents = hasToday ? todayEvents : upcomingEvents;
  const sectionLabel = hasToday ? "Today's Events" : "Upcoming Events";

  return (
    <div style={{ background: "#111111", borderRadius: "var(--radius-lg)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "14px 18px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-yellow)" }}>
          {sectionLabel}
        </div>
        <Link to="/events" style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
          View All →
        </Link>
      </div>

      {showEvents.length === 0 ? (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 20px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>🎉</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>No events scheduled today</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>Enjoy the free day!</div>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {showEvents.map((ev, i) => {
            const tm = TAG_META[ev.tag] || { color: "#888", bg: "#88888822" };
            const isUpcoming = ev.date > todayStr;
            return (
              <div
                key={i}
                style={{
                  padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", gap: "12px", alignItems: "flex-start",
                }}
              >
                {/* Color strip */}
                <div style={{ width: "3px", borderRadius: "2px", background: tm.color, flexShrink: 0, alignSelf: "stretch", minHeight: "36px" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  {isUpcoming && (
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>
                      {new Date(ev.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </div>
                  )}
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: "4px" }}>{ev.title}</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
                    {ev.time && <span>🕐 {ev.time}</span>}
                    {ev.loc  && <span>📍 {ev.loc}</span>}
                  </div>
                </div>
                {/* Tag pill */}
                <div style={{ flexShrink: 0, padding: "3px 8px", borderRadius: "99px", fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.4px", background: tm.bg, color: tm.color, border: `1px solid ${tm.color}44` }}>
                  {ev.tag}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom CTA */}
      <div style={{ padding: "10px 18px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <Link to="/events" style={{ display: "block", width: "100%", textAlign: "center", padding: "8px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "white", textDecoration: "none", transition: "all 0.18s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
          Open Full Calendar
        </Link>
      </div>
    </div>
  );
}