import AIPanel from "../components/AIPanel";


const courses = [
  { code: "HSSEC-II", title: "HSS Elective Course",                         area: "HSSEC", credits: 3,  type: "Elective",   L: 3, T: 0, P: 0 },
  { code: "OEC-III",  title: "Open Elective Course",                         area: "OEC",   credits: 4,  type: "Elective",   L: 3, T: 1, P: 0 },
  { code: "CHC-351",  title: "Fundamentals of AI/ML",                        area: "PCC",   credits: 2,  type: "Core",       L: 2, T: 0, P: 0 },
  { code: "CHC-301",  title: "Computer Applications in Chemical Engineering", area: "PCC",   credits: 2,  type: "Core",       L: 1, T: 0, P: 2 },
  { code: "CHT-I",    title: "Talent Enhancement Course-I",                  area: "TEB",   credits: 3,  type: "Enhancement",L: 2, T: 0, P: 2 },
  { code: "CHC-303",  title: "Chemical Engineering Lab-III",                  area: "PCC",   credits: 2,  type: "Lab",        L: 0, T: 0, P: 4 },
  { code: "CHC-305",  title: "Process Equipment Design",                     area: "PCC",   credits: 4,  type: "Core",       L: 3, T: 0, P: 2 },
  { code: "CHC-399",  title: "Community Outreach",                           area: "CORE",  credits: 2,  type: "Core",       L: 0, T: 0, P: 0 },
];

const totalCredits = courses.reduce((s, c) => s + c.credits, 0); // 22


const SEMESTER_START = new Date("2026-07-16");
const SEMESTER_END   = new Date("2026-11-11");
const TOTAL_WEEKS    = 16;

function getSemesterProgress() {
  const now = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed = now - SEMESTER_START;
  const currentWeek = Math.min(Math.max(Math.ceil(elapsed / msPerWeek), 1), TOTAL_WEEKS);
  const pct = Math.round((currentWeek / TOTAL_WEEKS) * 100);
  const phases = [
    { upTo: 4,  label: "Orientation & course introduction" },
    { upTo: 8,  label: "Mid-term assessments in progress"  },
    { upTo: 12, label: "Post mid-term — project phase"     },
    { upTo: 16, label: "End-term preparation"              },
  ];
  const phase = phases.find((p) => currentWeek <= p.upTo)?.label ?? "Semester complete";
  return { currentWeek, pct, phase };
}

const { currentWeek, pct, phase } = getSemesterProgress();


const quickLinks = [
  { title: "5th Sem Notes Drive",         icon: "📂", url: "https://drive.google.com/placeholder-notes"     },
  { title: "PYQs & Solutions",            icon: "📝", url: "https://drive.google.com/placeholder-pyqs"      },
  { title: "Lab Manual — CHC-303",        icon: "🧪", url: "https://drive.google.com/placeholder-lab"       },
  { title: "Process Equipment Design Ref",icon: "⚙️",  url: "https://drive.google.com/placeholder-ped"       },
  { title: "IIT Roorkee Academic Portal", icon: "🎓", url: "https://academics.iitr.ac.in"                   },
  { title: "Course Registration (ERP)",   icon: "🖥️",  url: "https://erp.iitr.ac.in"                        },
  { title: "Graduate Handbook 2024",      icon: "📘", url: "https://www.iitr.ac.in/placeholder-handbook"    },
  { title: "Tuition & Fees Portal",       icon: "💳", url: "https://accounts.iitr.ac.in/placeholder-fees"  },
];


const exams = [
  { subject: "Process Equipment Design",                  date: "Nov 05", time: "9:00 AM",  room: "Exam Hall A",    duration: "3 hrs" },
  { subject: "Fundamentals of AI/ML",                     date: "Nov 08", time: "11:00 AM", room: "Exam Hall B",    duration: "3 hrs" },
  { subject: "HSS Elective",                              date: "Nov 11", time: "2:00 PM",  room: "Exam Hall C",    duration: "3 hrs" },
  { subject: "Computer Applications in Chem. Engg.",     date: "Nov 14", time: "9:00 AM",  room: "Online – Lab",   duration: "2 hrs" },
  { subject: "Open Elective",                             date: "Nov 18", time: "10:00 AM", room: "Exam Hall A",    duration: "3 hrs" },
];


const weightScheme = [
  { label: "CWS", range: "10–35%", desc: "Continuous Weekly Sessions"  },
  { label: "PRS", range: "25–50%", desc: "Practical / Sessional"       },
  { label: "MTE", range: "15–30%", desc: "Mid-Term Examination"        },
  { label: "ETE", range: "30–50%", desc: "End-Term Examination"        },
  { label: "PRE", range: "50%",    desc: "Practical End-Term"          },
];


const areaBadge = {
  PCC:   { bg: "#dbeafe", color: "#1d4ed8" },
  HSSEC: { bg: "#fce7f3", color: "#be185d" },
  OEC:   { bg: "#d1fae5", color: "#065f46" },
  TEB:   { bg: "#fef3c7", color: "#92400e" },
  CORE:  { bg: "#ede9fe", color: "#5b21b6" },
};

const typeBadge = {
  Core:        { bg: "#dbeafe", color: "#1e40af" },
  Lab:         { bg: "#d1fae5", color: "#065f46" },
  Elective:    { bg: "#fef3c7", color: "#92400e" },
  Enhancement: { bg: "#ede9fe", color: "#6d28d9" },
};


const IconExternal = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconBook  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconCal   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconLink  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconFlask = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3h6m-5 6-2.5 9.5A2 2 0 0 0 9.4 21h5.2a2 2 0 0 0 1.9-2.5L14 9"/><line x1="9" y1="3" x2="9" y2="9"/><line x1="15" y1="3" x2="15" y2="9"/></svg>;
const IconInfo  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;


const Pill = ({ label, style }) => (
  <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.04em",
    padding: "2px 7px", borderRadius: "99px", ...style }}>{label}</span>
);

export default function Academics() {
  return (
    <div style={{ display: "flex", height: "calc(100vh - var(--header-height))", overflow: "hidden" }}>

      
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>

        
        <div className="page-header">
          <h1 className="page-header__title">Academic Handbooks</h1>
          <p className="page-header__subtitle">
            5th Semester · B.Tech Chemical Engineering · IIT Roorkee · Autumn 2024
          </p>
        </div>

        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>

          
          <div className="card">
            <div className="card-header">
              <div className="card-header__title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Semester Progress
              </div>
              <span className="badge badge--yellow">Autumn 2026</span>
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                  Week {currentWeek} of {TOTAL_WEEKS}
                </span>
                <span style={{ fontSize: "22px", fontWeight: 800 }}>{pct}%</span>
              </div>
              <div style={{ height: "8px", background: "var(--border)", borderRadius: "4px", overflow: "hidden", marginBottom: "8px" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: "var(--text-primary)", borderRadius: "4px", transition: "width 0.5s" }} />
              </div>
              <p style={{ fontSize: "11.5px", color: "var(--text-secondary)", fontStyle: "italic", marginBottom: "12px" }}>{phase}</p>

              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {[
                  { label: "Total Credits", value: totalCredits },
                  { label: "Theory Courses", value: courses.filter(c => c.P === 0).length },
                  { label: "Lab / Practical", value: courses.filter(c => c.P > 0).length },
                ].map((s, i) => (
                  <div key={i} style={{ background: "var(--bg-input)", borderRadius: "8px", padding: "10px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: "18px", fontWeight: 800 }}>{s.value}</div>
                    <div style={{ fontSize: "10px", color: "var(--text-secondary)", marginTop: "2px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="card">
            <div className="card-header">
              <div className="card-header__title"><IconLink /> Quick Links</div>
            </div>
            <div style={{ padding: "4px 0", overflowY: "auto", maxHeight: "240px" }}>
              {quickLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "9px 20px", textDecoration: "none", fontFamily: "var(--font)", fontSize: "13px",
                    fontWeight: 500, color: "var(--text-primary)", cursor: "pointer",
                    borderBottom: i < quickLinks.length - 1 ? "1px solid var(--border)" : "none",
                    transition: "background 0.18s", background: "transparent" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-input)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <span>{link.icon} {link.title}</span>
                  <IconExternal />
                </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className="card" style={{ marginBottom: "16px" }}>
          <div className="card-header">
            <div className="card-header__title"><IconBook /> 5th Semester Courses</div>
            <span className="badge badge--orange">Year III · Autumn</span>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
                <th>Area</th>
                <th style={{ textAlign: "center" }}>L-T-P</th>
                <th style={{ textAlign: "center" }}>Credits</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={i}>
                  <td style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)" }}>
                    {c.code}
                  </td>
                  <td style={{ fontWeight: 600 }}>{c.title}</td>
                  <td>
                    <Pill label={c.area}
                      style={areaBadge[c.area] ?? { bg: "#f3f4f6", color: "#374151" }} />
                  </td>
                  <td style={{ textAlign: "center", fontFamily: "monospace", fontSize: "12px" }}>
                    {c.L}-{c.T}-{c.P}
                  </td>
                  <td style={{ textAlign: "center", fontWeight: 700 }}>{c.credits}</td>
                  <td>
                    <Pill label={c.type}
                      style={typeBadge[c.type] ?? { bg: "#f3f4f6", color: "#374151" }} />
                  </td>
                </tr>
              ))}
              
              <tr style={{ background: "var(--bg-input)" }}>
                <td colSpan={4} style={{ fontWeight: 700, fontSize: "12px" }}>Total Credits</td>
                <td style={{ textAlign: "center", fontWeight: 800, fontSize: "14px" }}>{totalCredits}</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "16px", marginBottom: "16px" }}>

          
          <div className="card">
            <div className="card-header">
              <div className="card-header__title"><IconCal /> Upcoming Examinations</div>
              <span className="badge badge--orange">END-TERM</span>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((e, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{e.subject}</td>
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td style={{ color: "var(--text-secondary)" }}>{e.room}</td>
                    <td style={{ color: "var(--text-secondary)" }}>{e.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="card">
            <div className="card-header">
              <div className="card-header__title"><IconInfo /> Evaluation Scheme</div>
            </div>
            <div style={{ padding: "8px 0" }}>
              {weightScheme.map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "9px 20px", borderBottom: i < weightScheme.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "12px", fontFamily: "monospace" }}>{w.label}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-secondary)", marginLeft: "8px" }}>{w.desc}</span>
                  </div>
                  <Pill label={w.range} style={{ background: "var(--bg-input)", color: "var(--text-primary)", fontSize: "11px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="card" style={{ marginBottom: "16px" }}>
          <div className="card-header">
            <div className="card-header__title"><IconFlask /> Lab & Practical Breakdown</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", padding: "16px 20px" }}>
            {courses.filter(c => c.P > 0).map((c, i) => (
              <div key={i} style={{ background: "var(--bg-input)", borderRadius: "10px", padding: "14px 16px",
                borderLeft: "3px solid var(--text-primary)" }}>
                <div style={{ fontSize: "10px", fontFamily: "monospace", fontWeight: 700,
                  color: "var(--text-secondary)", marginBottom: "4px" }}>{c.code}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>{c.title}</div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <Pill label={`${c.P}P hrs/wk`} style={{ background: "#d1fae5", color: "#065f46" }} />
                  <Pill label={`${c.credits} cr`} style={{ background: "#dbeafe", color: "#1d4ed8" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      
      <div style={{ width: "280px", flexShrink: 0, borderLeft: "1px solid var(--border)", overflow: "hidden" }}>
        <AIPanel
          title="Academic Advisor"
          placeholder="Ask about policies, exams, credits..."
          panelStyle={{ height: "100%", border: "none", borderRadius: 0 }}
          suggestions={[
            "Workshop attendance policy?",
            "What's the exam schedule?",
            "AI/ML course details?",
            "Graduation credit requirements?",
            "How are labs evaluated?",
          ]}
        />
      </div>
    </div>
  );
}