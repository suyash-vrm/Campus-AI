const books = [
  
  {
    id: "B001",
    title: "Process Equipment Design",
    author: "M. V. Joshi",
    isbn: "978-8185986159",
    category: "Chemical Engineering",
    course: "CHC-305",
    location: { floor: "Level 3", shelf: "TP.157.J67" },
    totalCopies: 8,
    availableCopies: 5,
    waitlistCount: 0,
    tags: ["process equipment", "design", "vessels", "heat exchangers", "chemical engineering", "CHC-305"],
    similarIds: ["B002", "B003"],
  },
  {
    id: "B002",
    title: "Chemical Engineering Design: Principles, Practice and Economics of Plant and Process Design",
    author: "Gavin Towler, Ray Sinnott",
    isbn: "978-0080966595",
    category: "Chemical Engineering",
    course: "CHC-305",
    location: { floor: "Level 3", shelf: "TP.155.T69" },
    totalCopies: 5,
    availableCopies: 2,
    waitlistCount: 1,
    tags: ["plant design", "process design", "equipment", "economics", "CHC-305"],
    similarIds: ["B001", "B003"],
  },
  {
    id: "B003",
    title: "Product and Process Design Principles",
    author: "W. D. Seider, J. D. Seader, D. R. Lewin",
    isbn: "978-0471216636",
    category: "Chemical Engineering",
    course: "CHC-305",
    location: { floor: "Level 3", shelf: "TP.155.S45" },
    totalCopies: 4,
    availableCopies: 1,
    waitlistCount: 2,
    tags: ["process design", "product design", "plant economics", "CHC-305"],
    similarIds: ["B001", "B002"],
  },

  
  {
    id: "B004",
    title: "Introduction to Chemical Engineering Computing",
    author: "Bruce A. Finlayson",
    isbn: "978-1118888315",
    category: "Chemical Engineering",
    course: "CHC-301",
    location: { floor: "Level 4", shelf: "QA.76.87.F56" },
    totalCopies: 6,
    availableCopies: 4,
    waitlistCount: 0,
    tags: ["computing", "MATLAB", "numerical methods", "chemical engineering", "CHC-301"],
    similarIds: ["B005", "B006"],
  },
  {
    id: "B005",
    title: "Numerical Methods for Engineers",
    author: "Steven C. Chapra, Raymond P. Canale",
    isbn: "978-0073397955",
    category: "Mathematics & Computing",
    course: "CHC-301",
    location: { floor: "Level 4", shelf: "TA.345.C47" },
    totalCopies: 7,
    availableCopies: 3,
    waitlistCount: 0,
    tags: ["numerical methods", "MATLAB", "engineering computing", "CHC-301"],
    similarIds: ["B004", "B006"],
  },
  {
    id: "B006",
    title: "Advanced Reactor Modeling with MATLAB",
    author: "Riccardo Tesser, Vincenzo Russo",
    isbn: "978-3527346523",
    category: "Chemical Engineering",
    course: "CHC-301",
    location: { floor: "Level 4", shelf: "TP.157.T47" },
    totalCopies: 3,
    availableCopies: 3,
    waitlistCount: 0,
    tags: ["MATLAB", "reactor modeling", "simulation", "CHC-301"],
    similarIds: ["B004", "B005"],
  },

  
  {
    id: "B007",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    isbn: "978-0134610993",
    category: "AI/ML",
    course: "CHC-351",
    location: { floor: "Level 3", shelf: "Q.335.R86" },
    totalCopies: 8,
    availableCopies: 3,
    waitlistCount: 2,
    tags: ["artificial intelligence", "machine learning", "AI", "search algorithms", "CHC-351"],
    similarIds: ["B008", "B009"],
  },
  {
    id: "B008",
    title: "Machine Learning",
    author: "Tom M. Mitchell",
    isbn: "978-0070428072",
    category: "AI/ML",
    course: "CHC-351",
    location: { floor: "Level 3", shelf: "Q.325.M58" },
    totalCopies: 5,
    availableCopies: 2,
    waitlistCount: 1,
    tags: ["machine learning", "AI", "neural networks", "decision trees", "CHC-351"],
    similarIds: ["B007", "B009"],
  },
  {
    id: "B009",
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    isbn: "978-0262035613",
    category: "AI/ML",
    course: "CHC-351",
    location: { floor: "Level 3", shelf: "Q.325.G66" },
    totalCopies: 4,
    availableCopies: 1,
    waitlistCount: 3,
    tags: ["deep learning", "neural networks", "AI", "machine learning", "CHC-351"],
    similarIds: ["B007", "B008"],
  },

  
  {
    id: "B010",
    title: "Coulson & Richardson's Chemical Engineering Vol. 1A: Fluid Flow",
    author: "R. P. Chhabra, V. Shankar",
    isbn: "978-0081010990",
    category: "Chemical Engineering",
    course: "General / CHC-303",
    location: { floor: "Level 3", shelf: "TP.155.C68" },
    totalCopies: 10,
    availableCopies: 6,
    waitlistCount: 0,
    tags: ["fluid flow", "momentum transfer", "coulson richardson", "chemical engineering", "CHC-303"],
    similarIds: ["B011", "B012"],
  },
  {
    id: "B011",
    title: "Coulson & Richardson's Chemical Engineering Vol. 1B: Heat and Mass Transfer",
    author: "R. P. Chhabra, V. Shankar",
    isbn: "978-0081025505",
    category: "Chemical Engineering",
    course: "General / CHC-303",
    location: { floor: "Level 3", shelf: "TP.155.C69" },
    totalCopies: 10,
    availableCopies: 4,
    waitlistCount: 0,
    tags: ["heat transfer", "mass transfer", "coulson richardson", "chemical engineering", "CHC-303"],
    similarIds: ["B010", "B012"],
  },
  {
    id: "B012",
    title: "Unit Operations of Chemical Engineering",
    author: "W. L. McCabe, J. C. Smith, P. Harriott",
    isbn: "978-0072848236",
    category: "Chemical Engineering",
    course: "General / CHC-303",
    location: { floor: "Level 3", shelf: "TP.155.M33" },
    totalCopies: 12,
    availableCopies: 7,
    waitlistCount: 0,
    tags: ["unit operations", "distillation", "absorption", "heat exchangers", "McCabe Smith", "CHC-303"],
    similarIds: ["B010", "B011"],
  },
  {
    id: "B013",
    title: "Perry's Chemical Engineers' Handbook",
    author: "Robert H. Perry, Don W. Green",
    isbn: "978-0071422949",
    category: "Reference",
    course: "General",
    location: { floor: "Level 2 (Reference)", shelf: "TP.151.P45" },
    totalCopies: 5,
    availableCopies: 5,
    waitlistCount: 0,
    tags: ["handbook", "reference", "perry", "chemical engineering", "data tables"],
    similarIds: ["B010", "B011", "B012"],
  },

  
  {
    id: "B014",
    title: "Process Modelling and Simulation in Chemical, Biochemical and Environmental Engineering",
    author: "Ashok Kumar Verma",
    isbn: "978-1466518681",
    category: "Chemical Engineering",
    course: "CHT-I",
    location: { floor: "Level 3", shelf: "TP.155.V47" },
    totalCopies: 4,
    availableCopies: 2,
    waitlistCount: 0,
    tags: ["process modelling", "simulation", "MATLAB", "Aspen", "CHT-I"],
    similarIds: ["B004", "B015"],
  },
  {
    id: "B015",
    title: "Chemical Process Simulation and the Aspen HYSYS Software",
    author: "Michael E. Hanyak Jr.",
    isbn: "978-1453793411",
    category: "Chemical Engineering",
    course: "CHT-I",
    location: { floor: "Level 3", shelf: "TP.155.H36" },
    totalCopies: 3,
    availableCopies: 3,
    waitlistCount: 0,
    tags: ["Aspen HYSYS", "simulation", "process modelling", "CHT-I"],
    similarIds: ["B014", "B004"],
  },

  
  {
    id: "B016",
    title: "Introduction to Chemical Engineering Thermodynamics",
    author: "J. M. Smith, H. C. Van Ness, M. M. Abbott",
    isbn: "978-0073104454",
    category: "Digital Archive",
    course: "General",
    location: { floor: "Level 5 (Digital)", shelf: "TP.149.S65" },
    totalCopies: 1,
    availableCopies: 1,
    waitlistCount: 0,
    tags: ["thermodynamics", "chemical engineering", "Smith Van Ness", "e-book"],
    similarIds: ["B010", "B012"],
  },
];


const libraryStatus = {
  name: "Mahatma Gandhi Central Library (MGCL)",
  institute: "IIT Roorkee",
  established: 1848,
  totalCollection: 350000,
  sections: [
    { name: "Main Reading Room",      capacity: 500, occupancy: 312, percentFull: 62, zone: "OPEN",       status: "BUSY"        },
    { name: "Chemical Engg Archive",  capacity: 60,  occupancy: 14,  percentFull: 23, zone: "QUIET ZONE", status: "AVAILABLE"   },
    { name: "Group Study Rooms",      capacity: 80,  occupancy: 45,  percentFull: 56, zone: "OPEN",       status: "AVAILABLE"   },
    { name: "Digital Research Lab",   capacity: 75,  occupancy: 70,  percentFull: 93, zone: "OPEN",       status: "NEARLY FULL" },
    { name: "STEM Reference Section", capacity: 50,  occupancy: 10,  percentFull: 20, zone: "QUIET ZONE", status: "AVAILABLE"   },
  ],
  availableSeats: 145,
  totalSeats: 500,
  wifiZone: true,
  userTerminals: 75,
  bookReturnsDue: 2,
  noiseLevel: { zone: "Silent Zone", decibels: 30, status: "Optimal for focus" },
  timings: {
    open: "8:00 AM",
    close: "10:00 PM",
    studyRoom: "9:00 AM – 9:00 PM",
    digitalLab: "9:00 AM – 8:00 PM",
  },
  eResources: [
    "ScienceDirect", "Springer Link", "Web of Science", "Scopus",
    "McGraw-Hill Access Engineering", "SciFinder Scholar", "JSTOR",
    "ASME Digital Library", "ACS Publications", "IEEE Xplore",
  ],
  contact: {
    acquisition: "acquisition@iitr.ac.in",
    general: "library@iitr.ac.in",
    url: "https://mgcl.iitr.ac.in",
  },
};


export const libraryTools = [
  {
    name: "search_books",
    description: "Search for books in the MGCL IIT Roorkee library by title, author, topic, course code, or category",
    input_schema: {
      type: "object",
      properties: {
        query:      { type: "string", description: "Search term — book title, author, topic like 'heat transfer', 'AI/ML', 'process design'" },
        course_code:{ type: "string", description: "Filter by course code e.g. CHC-305, CHC-351, CHC-301, CHT-I, CHC-303" },
        category:   { type: "string", description: "Filter by category: Chemical Engineering, AI/ML, Mathematics & Computing, Reference, Digital Archive" },
      },
      required: ["query"],
    },
  },
  {
    name: "check_book_availability",
    description: "Check real-time availability of a specific book — copies available, waitlist, physical location, shelf number in MGCL",
    input_schema: {
      type: "object",
      properties: {
        title:   { type: "string", description: "Book title to check" },
        book_id: { type: "string", description: "Book ID if known (B001–B016)" },
      },
    },
  },
  {
    name: "get_library_status",
    description: "Get current MGCL library occupancy, available seats, zone information, noise levels, e-resources, and opening hours",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "get_similar_books",
    description: "Get books similar to a given book, or all books for a specific course or category",
    input_schema: {
      type: "object",
      properties: {
        book_id:     { type: "string", description: "Book ID to find similar books for" },
        course_code: { type: "string", description: "Get all books for a specific course e.g. CHC-305" },
        category:    { type: "string", description: "Category name" },
      },
    },
  },
  {
    name: "get_course_books",
    description: "Get all recommended books for a specific 5th semester course",
    input_schema: {
      type: "object",
      properties: {
        course_code: { type: "string", description: "Course code e.g. CHC-305, CHC-351, CHC-301, CHT-I, CHC-303" },
      },
      required: ["course_code"],
    },
  },
];


export function executeLibraryTool(toolName, toolInput) {
  switch (toolName) {

    case "search_books": {
      const q   = (toolInput.query || "").toLowerCase();
      const cc  = (toolInput.course_code || "").toUpperCase();
      const cat = (toolInput.category || "").toLowerCase();

      let results = books.filter(
        (b) =>
          b.title.toLowerCase().includes(q)  ||
          b.author.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)) ||
          b.category.toLowerCase().includes(q)
      );
      if (cc)  results = results.filter((b) => b.course.toUpperCase().includes(cc));
      if (cat) results = results.filter((b) => b.category.toLowerCase().includes(cat));
      return { results, total: results.length, query: toolInput.query };
    }

    case "check_book_availability": {
      let book = null;
      if (toolInput.book_id) book = books.find((b) => b.id === toolInput.book_id);
      if (!book && toolInput.title) {
        const q = toolInput.title.toLowerCase();
        book = books.find((b) => b.title.toLowerCase().includes(q));
      }
      if (!book) return { found: false, error: "Book not found in MGCL catalogue. Try searching with different keywords." };
      const similar = books.filter((b) => book.similarIds.includes(b.id));
      return { found: true, book, available: book.availableCopies > 0, similar };
    }

    case "get_library_status": {
      return libraryStatus;
    }

    case "get_similar_books": {
      let results = [];
      if (toolInput.book_id) {
        const book = books.find((b) => b.id === toolInput.book_id);
        if (book) results = books.filter((b) => book.similarIds.includes(b.id));
      }
      if (toolInput.course_code) {
        const cc = toolInput.course_code.toUpperCase();
        results = books.filter((b) => b.course.toUpperCase().includes(cc) && b.id !== toolInput.book_id);
      }
      if (toolInput.category && !results.length) {
        results = books.filter((b) => b.category === toolInput.category && b.id !== toolInput.book_id);
      }
      return { similar: results, total: results.length };
    }

    case "get_course_books": {
      const cc = (toolInput.course_code || "").toUpperCase();
      const results = books.filter((b) => b.course.toUpperCase().includes(cc));
      return {
        course: cc,
        books: results,
        total: results.length,
        available: results.filter((b) => b.availableCopies > 0).length,
      };
    }

    default:
      return { error: "Unknown library tool" };
  }
}