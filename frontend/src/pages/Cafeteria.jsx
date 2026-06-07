import AIPanel from "../components/AIPanel";

const today = new Date();
const dateStr = today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const todayName = DAYS[today.getDay()];

// ── Real IIT Roorkee mess data (from actual menu boards) ──────────────────

const DAILY_ITEMS = {
  breakfast: ["White & Brown Bread", "Sprouts", "Milk/Dahi/Tea/Coffee", "Cornflakes", "Butter/Peanut Butter", "Banana"],
  lunch: ["Butter Chapati", "Plain Rice", "Green Salad", "Pickle", "Green Chilli", "Lemon"],
  dinner: ["Butter Chapati", "Plain Rice", "Salad", "Pickle", "Fried Lemon"],
};

const weeklyMenus = {
  ravindra: {
    monday:    { breakfast: ["White Sauce Pasta", "Tomato Sauce", "Sandwich", "Chocos"], lunch: ["Arhar Dal", "Bhindi Masala", "Veg Biriyani with Nuttri", "Boondi Raita", "Watermelon"], dinner: ["Dal Urad", "Aloo Jeera", "Kathal Masala", "Gulab Jamun"] },
    tuesday:   { breakfast: ["Idli Fried/Plain", "Coconut Chutney", "Sambhar", "Cornflakes"], lunch: ["Dal Garlic Tadka", "Mix Veg", "Matar Veg Khichadi", "Dahi", "Muskmelon"], dinner: ["Dal Urad Chana", "Chhola", "Ajwine Puri/Plain", "Sweet Kaddu", "Sewai Kheer"] },
    wednesday: { breakfast: ["Poha Namkeen", "Jalebi", "Imli Chutney", "CornFlakes"], lunch: ["Rajmah Raseela", "Soya Keema", "Jeera Rice", "Plain Rice", "Fruit Custard"], dinner: ["Kadhai Paneer/Mughlai Chicken", "Dal Makhani", "Jeera Rice", "Chocolate Ice-cream"] },
    thursday:  { breakfast: ["Chhole", "Samosa", "Green Chutney", "Sandwich", "Cornflakes"], lunch: ["Kadhi Pyaj Pakoda", "Mix Kathoul", "Kali Masoor", "Fryums", "Watermelon"], dinner: ["Dal Panchratan", "Bati", "Churma", "Moong Kofta", "Matar Pulao"] },
    friday:    { breakfast: ["Suji Halwa", "Kala Chana", "Chocos", "Sandwich"], lunch: ["Dal Garlic Tadka", "Louki Chana", "Arbi Masala", "Banana Shake"], dinner: ["Dal Malka Masoor", "Soya Chap/Egg Keema (2 PC)", "Jeera Rice", "Motichoor Laddu"] },
    saturday:  { breakfast: ["Masala Dosa", "Sambhar", "Coconut Chutney", "CornFlakes"], lunch: ["Punjabi Chhola", "Bhatura", "Aloo Matar Semi Dry", "Boondi Raita", "Pineapple", "Shikanji"], dinner: ["Dal Arhar", "Fried Rice", "Hakka Noodles", "Manchurian", "Vanilla Ice-cream"] },
    sunday:    { breakfast: ["Aloo Pyaj Paratha", "Aloo Curry", "Tomato Chutney", "Dahi/Milk"], lunch: ["Cabbage Matar Dry", "Moong Dal", "Tori Chana", "Lemon Rice", "Papaya"], dinner: ["Paneer Biryani / Chicken Biryani", "Dal Makhni", "Veg Raita", "Moong Halwa"] },
  },
  azad: {
    monday:    { breakfast: ["Fried/Soup Maggi", "Tomato Sauce", "Oats", "Corn Mix Sprout"], lunch: ["Kashmiri Dum Aloo", "Dal Chana Malka", "Curd Rice", "Aam Panaa", "Rasam", "Papaya"], dinner: ["Mix Veg Fried", "Dal Moong Wadi", "Hari Chutney", "Jeera Rice", "Rabdi Jamun"] },
    tuesday:   { breakfast: ["Vada", "Sambhar", "Nariyal Chutney", "Chocos", "Peanut Sprout"], lunch: ["Bangan Bharta", "Dal Arahar Tadak", "Rasam", "Veg Biryani with Nutri", "Boondi Raita", "Watermelon"], dinner: ["Cholla Ajwine Poori", "Kaddu Khata Metha", "Plain Rice", "Rice Kheer"] },
    wednesday: { breakfast: ["Poha", "Namkeen", "Jalebi", "T. Sauce", "Kala Chana Gravy"], lunch: ["Tinda Aloo Sabji", "Dal Arahar Tadka", "Lemon Rice", "Masala Chaas", "Kacha Aam Chutney", "Mango Shake"], dinner: ["Matar Paneer / Chicken Curry", "Dal Mix Tadka", "Jeera Rice", "Gulabjamun"] },
    thursday:  { breakfast: ["Suji Halwa", "Aloo Fried Sabji", "Plain Poori", "Mix Sprouts"], lunch: ["Palak Pyaz Pakoda Kadhi", "Aloo Kala Chana Dry", "Kali Masoor Dal", "Plain Rice", "Fruit Chaat"], dinner: ["Bharwa Karela / Nugget Curry", "Dal Arahar Tadka", "Jeera Rice", "Pastry Mango"] },
    friday:    { breakfast: ["Veg Mayonnaise Sandwich", "Tomato Sauce", "Chocos", "Corn Mix Sprouts"], lunch: ["Cholla", "Bhatura", "Rasam", "Aloo Matar", "Plain Rice", "Boondi Raita", "Muskmelon"], dinner: ["Matar Mushroom / Egg Curry", "Dal Punjabi Tadka", "Plain Rice", "Besion Ladoo"] },
    saturday:  { breakfast: ["Veg Utthapam", "Sambhar", "N. Chutney", "Oats", "Peanuts Sprouts"], lunch: ["Kasmiri Dum Aloo", "Rajmah Masala", "Rasam", "Matar Khichdi", "Plain Rice", "Dahi", "Mango"], dinner: ["Bhindi Masala", "Dal Urad (w) Chana", "Matar Pulao", "Ice-Cream (Vanilla)"] },
    sunday:    { breakfast: ["Aloo Mix Paratha", "Aloo Sabji", "Lahsun Chutney", "T. Sauce", "Chocos"], lunch: ["Toori Chana Sabji", "Dal Arahar", "Sambhar", "Curd Rice", "Masala Chaas", "Aaam Panna", "Peach"], dinner: ["Butter Paneer / Butter Chicken", "Jeera Rice", "Dal Makhani", "Lauki Burfi"] },
  },
};

// Other bhawans with representative menus
const otherBhawans = {
  Rajendra: { monday: { lunch: ["Dal Makhani", "Aloo Gobi", "Rice", "Roti", "Raita"], dinner: ["Rajma", "Rice", "Roti", "Mix Veg", "Gulab Jamun"] }, tuesday: { lunch: ["Chole", "Bhature", "Rice", "Mix Veg", "Lassi"], dinner: ["Dal Tadka", "Jeera Rice", "Paneer Sabji", "Roti", "Kheer"] }, wednesday: { lunch: ["Arhar Dal", "Bhindi", "Rice", "Roti", "Chaas"], dinner: ["Kadhai Paneer/Chicken Curry", "Dal", "Rice", "Roti", "Ice Cream"] }, thursday: { lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji"], dinner: ["Chana Masala", "Rice", "Roti", "Halwa"] }, friday: { lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabzi", "Raita"], dinner: ["Paneer Tikka/Egg Keema", "Rice", "Naan", "Dal", "Ladoo"] }, saturday: { lunch: ["Biryani", "Raita", "Salan", "Salad"], dinner: ["Dal Arhar", "Fried Rice", "Hakka Noodles", "Manchurian", "Vanilla Ice Cream"] }, sunday: { lunch: ["Special Sunday Thali"], dinner: ["Paneer Biryani/Chicken Biryani", "Dal Makhni", "Raita", "Moong Halwa"] } },
  Kasturba: { monday: { lunch: ["Dal Tadka", "Mix Veg", "Jeera Rice", "Roti", "Boondi Raita"], dinner: ["Rajma", "Rice", "Roti", "Aloo Jeera", "Gulab Jamun"] }, tuesday: { lunch: ["Chole", "Bhature", "Mix Veg", "Lassi"], dinner: ["Dal Makhani", "Roti", "Rice", "Palak Paneer", "Kheer"] }, wednesday: { lunch: ["Arhar Dal", "Bhindi", "Rice", "Roti", "Chaas"], dinner: ["Kadhai Paneer", "Dal", "Rice", "Roti", "Halwa"] }, thursday: { lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji"], dinner: ["Chana Masala", "Rice", "Roti", "Boondi Raita", "Ice Cream"] }, friday: { lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabji", "Raita"], dinner: ["Shahi Paneer", "Rice", "Naan", "Dal", "Rasgulla"] }, saturday: { lunch: ["Veg Biryani", "Raita", "Salad"], dinner: ["Malai Kofta", "Naan", "Dal", "Gajar Halwa"] }, sunday: { lunch: ["Special Thali"], dinner: ["Paneer/Chicken Biryani", "Dal Makhni", "Raita", "Ice Cream"] } },
  Ganga:    { monday: { lunch: ["Dal Tadka", "Aloo Sabzi", "Jeera Rice", "Chapati", "Raita"], dinner: ["Rajma Chawal", "Roti", "Aloo Gobhi", "Sewai"] }, tuesday: { lunch: ["Chole", "Rice", "Roti", "Mix Veg", "Lassi"], dinner: ["Dal Makhani", "Roti", "Rice", "Kadai Paneer", "Kheer"] }, wednesday: { lunch: ["Moong Dal", "Dum Aloo", "Jeera Rice", "Chapati", "Chaas"], dinner: ["Chana Dal", "Rice", "Roti", "Mix Veg", "Halwa"] }, thursday: { lunch: ["Dal Fry", "Baingan Bharta", "Rice", "Roti", "Shikanji"], dinner: ["Kadhi Pakoda", "Rice", "Roti", "Aloo Matar", "Gulab Jamun"] }, friday: { lunch: ["Rajma", "Rice", "Roti", "Aloo Palak", "Raita"], dinner: ["Paneer Butter Masala/Chicken Curry", "Rice", "Naan", "Dal", "Ice Cream"] }, saturday: { lunch: ["Veg/Chicken Biryani", "Raita", "Salad"], dinner: ["Shahi Paneer", "Dal Tadka", "Rice", "Roti", "Kheer"] }, sunday: { lunch: ["Special Sunday Thali"], dinner: ["Pasta", "Manchurian", "Soup", "Garlic Bread", "Ice Cream"] } },
};

const canteens = [
  { name: "Thomso Canteen", location: "Near Main Building", timing: "8 AM – 11 PM", items: ["Maggi ₹30", "Bread Omelette ₹25", "Chai ₹10", "Cold Coffee ₹50", "Samosa ₹15", "Veg Sandwich ₹30", "Momos ₹50", "Paneer Roll ₹55", "Pasta ₹60"] },
  { name: "SAC Canteen", location: "Students Activity Centre", timing: "9 AM – 10 PM", items: ["Pizza Slice ₹70", "Momos ₹50", "Cold Coffee ₹55", "Cheese Sandwich ₹45", "Noodles ₹60", "Chai ₹12"] },
  { name: "Civil Block Canteen", location: "Civil Engineering Block", timing: "8 AM – 8 PM", items: ["Chai ₹10", "Maggi ₹30", "Samosa ₹10", "Veg Puff ₹15", "Cold Coffee ₹40", "Sandwich ₹30"] },
  { name: "EC Block Canteen", location: "EC/EE Block", timing: "8 AM – 8 PM", items: ["Chai ₹10", "Bread Omelette ₹25", "Maggi ₹30", "Veg Burger ₹40", "French Fries ₹40"] },
];

function getMealType() {
  const h = today.getHours();
  if (h < 10) return "BREAKFAST SERVICE";
  if (h < 15) return "LUNCH SERVICE";
  return "DINNER SERVICE";
}

function getCurrentMeal() {
  const h = today.getHours();
  if (h < 10) return "breakfast";
  if (h < 15) return "lunch";
  return "dinner";
}

function MenuRow({ item }) {
  return (
    <tr>
      <td>
        <div className="table__item-name">{item}</div>
      </td>
    </tr>
  );
}

function BhawanCard({ name, menu, timing }) {
  const currentMeal = getCurrentMeal();
  const items = menu?.[todayName]?.[currentMeal] || [];
  const dailyExtras = DAILY_ITEMS[currentMeal] || [];

  return (
    <div className="station-section" style={{ marginBottom: "20px" }}>
      <div className="station-header">
        <div>
          <div className="station-header__name">{name} Mess</div>
          <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {currentMeal} · {timing}
          </div>
        </div>
        <span className="badge badge--green" style={{ fontSize: "9px" }}>OPEN</span>
      </div>

      {items.length > 0 ? (
        <table className="table" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th>Today's {currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)} Items</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => <MenuRow key={i} item={item} />)}
            {currentMeal !== "breakfast" && (
              <tr>
                <td>
                  <div className="table__item-name" style={{ color: "var(--text-muted)" }}>
                    + Daily: {dailyExtras.join(", ")}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div style={{ padding: "16px", fontSize: "13px", color: "var(--text-muted)" }}>
          Menu not available for today. Check mess notice board.
        </div>
      )}
    </div>
  );
}

function CanteenCard({ canteen }) {
  return (
    <div style={{
      border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "14px 16px", marginBottom: "12px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: "13px" }}>{canteen.name}</div>
          <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
            {canteen.location} · {canteen.timing}
          </div>
        </div>
        <span className="badge badge--green" style={{ fontSize: "9px" }}>OPEN</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {canteen.items.map((item, i) => (
          <span key={i} style={{
            fontSize: "11px", padding: "3px 8px",
            background: "var(--bg-sidebar)", border: "1px solid var(--border)",
            borderRadius: "var(--radius)", color: "var(--text-secondary)", fontWeight: 500
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Cafeteria() {
  const mealType = getMealType();
  const currentMeal = getCurrentMeal();
  const messTimings = { breakfast: "7:30 AM – 9:30 AM", lunch: "11:00 AM – 2:30 PM", dinner: "7:00 PM – 9:30 PM" };

  const aiSuggestions = [
    "What's for dinner in Azad Bhawan?",
    "Which mess has Paneer Biryani tonight?",
    "Compare Ravindra & Azad lunch",
    "Show all girls hostel menus",
    "What's open at Thomso Canteen?",
    "Any mess serving Gulab Jamun today?",
  ];

  return (
    <div style={{ display: "flex", height: "calc(100vh - var(--header-height))", overflow: "hidden" }}>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>

        {/* Header */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "-0.5px" }}>
              IIT Roorkee Mess & Canteen
            </h1>
            <span className="badge badge--green" style={{ fontSize: "9px" }}>ACTIVE: {mealType}</span>
          </div>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            {dateStr} · Showing {currentMeal} menu for all Bhawans
          </p>
        </div>

        {/* Today's Meal Timing Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: "var(--radius-lg)", padding: "16px 20px", marginBottom: "24px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#f59e0b", marginBottom: "4px" }}>
              Current Meal Timings — All Bhawans
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>
              🍳 Breakfast: {messTimings.breakfast} &nbsp;·&nbsp; 🍛 Lunch: {messTimings.lunch} &nbsp;·&nbsp; 🌙 Dinner: {messTimings.dinner}
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textAlign: "right" }}>
            Subject to change<br/>Check mess notice board
          </div>
        </div>

        {/* Tab: Real Bhawans (Ravindra + Azad) */}
        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "12px" }}>
          📋 Verified Mess Menus
        </div>

        <BhawanCard name="Ravindra Bhawan" menu={weeklyMenus.ravindra} timing={messTimings[currentMeal]} />
        <BhawanCard name="Azad Bhawan" menu={weeklyMenus.azad} timing={messTimings[currentMeal]} />

        {/* Other Bhawans */}
        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", margin: "24px 0 12px" }}>
          🏠 Other Bhawan Messes
        </div>

        {Object.entries(otherBhawans).map(([name, menu]) => (
          <BhawanCard key={name} name={name} menu={menu} timing={messTimings[currentMeal]} />
        ))}

        {/* Campus Canteens */}
        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", margin: "24px 0 12px" }}>
          ☕ Campus Canteens
        </div>

        {canteens.map((c, i) => <CanteenCard key={i} canteen={c} />)}

        {/* Daily Fixed Items */}
        <div style={{
          marginTop: "24px", padding: "14px 16px",
          border: "1px solid var(--border)", borderRadius: "var(--radius)",
          background: "var(--bg-sidebar)"
        }}>
          <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "8px" }}>
            Daily Fixed Items (All Messes)
          </div>
          <div style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <strong>Breakfast:</strong> {DAILY_ITEMS.breakfast.join(" · ")}<br />
            <strong>Lunch:</strong> {DAILY_ITEMS.lunch.join(" · ")}<br />
            <strong>Dinner:</strong> {DAILY_ITEMS.dinner.join(" · ")}
          </div>
        </div>
      </div>

      {/* Right AI Panel */}
      <div style={{ width: "280px", flexShrink: 0, borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <AIPanel
          title="Mess Assistant"
          placeholder="Ask about any bhawan mess..."
          panelStyle={{ height: "100%", border: "none", borderRadius: 0 }}
          suggestions={aiSuggestions}
        />

        {/* Bhawan Quick Reference */}
        <div style={{ padding: "14px 16px", borderTop: "1px solid var(--border)", background: "var(--bg-sidebar)" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", marginBottom: "10px" }}>
            All Bhawans
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { label: "Boys", items: ["Azad", "Ravindra", "Cautley", "Ganga", "Govind", "Jawahar", "Radhakrishnan", "Rajendra", "Rajiv", "Malviya"] },
              { label: "Girls", items: ["Kasturba", "Sarojini", "Indira"] },
              { label: "Co-ed", items: ["Vigyan Kunj"] },
            ].map(group => (
              <div key={group.label}>
                <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "3px", marginTop: "6px" }}>{group.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {group.items.map(b => (
                    <span key={b} style={{
                      fontSize: "10px", padding: "2px 6px",
                      background: "var(--bg-main)", border: "1px solid var(--border)",
                      borderRadius: "var(--radius)", color: "var(--text-secondary)"
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}