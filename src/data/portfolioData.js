export const personalInfo = {
  name: "Arushi Karmakar",
  role: "Computer Science Engineering Student & Full-Stack Web Developer",
  tagline: "Building creative, user-friendly projects and turning ideas into practical solutions.",
  location: "Open to Internships, Full-Time Roles & Global Opportunities",
  status: "Actively seeking Software Engineering & Web Development opportunities",
  bio: "I am a passionate Computer Science Engineering student with an interest in Web Development, Software Development, and emerging technologies. I enjoy building creative, user-friendly projects, learning new skills, and turning ideas into practical solutions. I am always eager to explore new opportunities and grow as a developer.",
  stats: [
    { value: "03+", label: "Roles & Domain Competencies" },
    { value: "10+", label: "Creative & Engineering Projects" },
    { value: "100%", label: "Curiosity & Commitment to Code Quality" },
    { value: "24/7", label: "Eagerness to Learn & Adapt" }
  ],
  socials: {
    github: "https://github.com/Arushi13-hub",
    linkedin: "https://www.linkedin.com/in/arushi-karmakar-73b267380",
    email: "arushikarmakar123@gmail.com",
    resumeUrl: "#"
  }
};

export const projects = [
  {
    id: "cafe-finder",
    title: "Cafe Finder",
    tagline: "Location-Aware Nearby Cafe Discovery Progressive Web App",
    categories: ["React", "APIs & Maps"],
    primaryCategory: "React & Maps",
    year: "2024",
    role: "Frontend & PWA Developer",
    summary: "An installable Progressive Web App (PWA) that detects user coordinates in real time to discover nearby coffee shops on an interactive Leaflet map. Integrates Overpass API spatial queries with custom micro-animations and a responsive mobile-first layout for instant local exploration.",
    description: "Cafe Finder simplifies local cafe discovery through real-time geospatial positioning. Built as an installable Progressive Web App (PWA), it seamlessly retrieves user GPS coordinates via the HTML5 Geolocation API, queries nearby amenities using the OpenStreetMap Overpass spatial API, and pins them onto an interactive Leaflet map with custom coffee markers, operational status, and driving distance estimates.",
    architecture: {
      challenge: "Handling unpredictable GPS accuracy, fluctuating network latency during spatial bounding-box Overpass queries, and ensuring fluid 60 FPS map panning on mobile devices.",
      solution: "Implemented debounced query caching, optimistic loading states, graceful fallbacks for denied location permissions, and service worker offline caching for static map assets and UI components.",
      keyFeatures: [
        "Real-time GPS coordinate detection with high accuracy mode",
        "Overpass API spatial bounding query for nearby specialty cafes",
        "Interactive Leaflet.js map with custom vector pins and zoom physics",
        "Progressive Web App (PWA) installable on iOS, Android, and Desktop",
        "Offline-ready service worker caching for shell and icons"
      ],
      metrics: [
        { label: "Query Resolution", value: "< 450ms" },
        { label: "PWA Audit Score", value: "98/100" },
        { label: "Mobile Responsiveness", value: "100% Fluid" }
      ]
    },
    tags: ["React", "Leaflet.js", "Overpass API", "Geolocation API", "CSS3", "PWA", "Netlify"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
    ],
    demoUrl: "https://cafefind.netlify.app",
    githubUrl: "https://github.com/Arushi13-hub/CafeFinder"
  },
  {
    id: "beatverse",
    title: "Beatverse",
    tagline: "Interactive Web Music Streaming & Media Player",
    categories: ["React"],
    primaryCategory: "React",
    year: "2024",
    role: "Frontend Developer & UI Architect",
    summary: "A modern, component-driven music streaming web application featuring dynamic album browsing, seamless multi-view navigation, and a persistent interactive audio player with playback controls. Designed for smooth transitions and responsive listening across devices.",
    description: "Beatverse re-imagines web-based audio streaming through a component-driven architecture. It provides an uninterrupted, persistent bottom audio control bar that continues playing while users navigate albums, view playlists, and discover trending tracks across different views without stutter or audio re-buffering.",
    architecture: {
      challenge: "Maintaining a persistent audio playback pipeline and timeline state across client-side page routing without resetting audio buffers or losing volume levels.",
      solution: "Engineered a centralized React Context audio state manager with HTML5 Audio element binding, synthetic timeline seeking, volume normalization, and media session metadata support.",
      keyFeatures: [
        "Persistent interactive audio player with play, pause, skip, and scrub controls",
        "Multi-view routing using React Router for artists, albums, and playlists",
        "Dynamic album art carousel with rich metadata overlays",
        "Responsive, mobile-optimized audio controls with tactile volume sliders",
        "Smooth page transitions and instant audio state synchronization"
      ],
      metrics: [
        { label: "Playback Transition", value: "0ms gapless" },
        { label: "Lighthouse Performance", value: "96/100" },
        { label: "Bundle Footprint", value: "Fast Vite build" }
      ]
    },
    tags: ["React", "React Router", "JavaScript (ES6+)", "CSS3", "Vite", "Netlify"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80"
    ],
    demoUrl: "https://692e883b73dabdf07eafbecd--brilliant-banoffee-7d42a3.netlify.app/",
    githubUrl: "https://github.com/Arushi13-hub/Beatverse"
  },
  {
    id: "weatherly",
    title: "Weatherly",
    tagline: "Real-Time Weather & Forecast Web Application",
    categories: ["APIs & Maps"],
    primaryCategory: "APIs & Maps",
    year: "2024",
    role: "Frontend Developer",
    summary: "A responsive weather dashboard that delivers live meteorological data, multi-day forecasts, and location-based climate insights through an intuitive, clean interface. Built for fast city search and instant visual feedback across desktop and mobile viewports.",
    description: "Weatherly provides meteorological clarity at a glance. By integrating live Weather REST APIs with asynchronous promise pipelines, the application fetches real-time temperature, wind speed, humidity, UV index, and atmospheric pressure for any global location, presenting them with dynamic climate iconography.",
    architecture: {
      challenge: "Gracefully handling intermittent API rate limits, network timeouts, invalid geographical queries, and delivering instant search results across devices.",
      solution: "Structured resilient asynchronous `fetch` pipelines with centralized error handling, local query caching, dynamic weather visual themes, and debounced input search.",
      keyFeatures: [
        "Real-time meteorological conditions and temperature readouts",
        "Multi-day forecast projections with high/low temperature spreads",
        "Instant global city search with real-time error recovery and feedback",
        "Dynamic condition indicators for rain, cloud cover, and sunshine",
        "Fully responsive layout optimized for handheld and wide screens"
      ],
      metrics: [
        { label: "API Query Latency", value: "< 320ms" },
        { label: "Search Accuracy", value: "Worldwide Cities" },
        { label: "Zero Dependencies", value: "Pure Vanilla JS" }
      ]
    },
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "Weather REST API", "Netlify"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1200&q=80"
    ],
    demoUrl: "https://691c9e5c5e1a67a49accd821--dynamic-squirrel-29af93.netlify.app/",
    githubUrl: "https://github.com/Arushi13-hub/Weatherly-"
  },
  {
    id: "tripnest",
    title: "TripNest",
    tagline: "Interactive Trip Planner & Travel Itinerary Web Application",
    categories: ["React", "Web Apps"],
    primaryCategory: "React & Travel Planner",
    year: "2024",
    role: "Frontend Developer & UI Architect",
    summary: "A responsive travel planning web application that helps users organize destinations, build day-by-day trip itineraries, and explore curated travel routes through a clean, editorial interface. Designed for intuitive trip scheduling and smooth navigation across desktop and mobile viewports.",
    description: "TripNest simplifies modern travel planning by transforming scattered trip ideas into structured, day-by-day travel itineraries. Built with React and modern ES6+, it allows travelers to curate destination lists, schedule daily activities, calculate travel timelines, and visualize trip routes with an elegant, responsive UI optimized for both desktop planning and on-the-go mobile navigation.",
    architecture: {
      challenge: "Building an intuitive, dynamic itinerary scheduler that synchronizes multi-day timelines, destination markers, and activity states smoothly without layout shifts on smaller screens.",
      solution: "Implemented a modular component-driven itinerary architecture with stateful day planners, responsive grid breakpoints, instant route timeline updates, and optimized production bundling with Vite.",
      keyFeatures: [
        "Interactive day-by-day trip itinerary builder with dynamic time slots",
        "Destination curation and activity categorization (stay, dine, explore)",
        "Responsive travel timeline visualization adapted for desktop & mobile",
        "Curated travel routes with estimated durations and transit highlights",
        "Clean, lightweight single-page application deployed on Netlify"
      ],
      metrics: [
        { label: "Lighthouse Score", value: "97/100" },
        { label: "Bundle Size", value: "Lightweight Vite" },
        { label: "Device Support", value: "100% Fluid" }
      ]
    },
    tags: ["React", "JavaScript (ES6+)", "CSS3", "Vite", "Netlify"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    demoUrl: "https://tripnesti.netlify.app",
    githubUrl: "https://github.com/Arushi13-hub/TripNest"
  }
];

export const skillsData = {
  categories: ["All", "Frontend", "Backend & APIs", "Tools & Deployment"],
  skills: [
    // Frontend
    { name: "React", category: "Frontend", level: "Advanced", desc: "Hooks, Component Architecture, State Management, SPAs" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced", desc: "Async/Await, Promises, Closures, DOM API, Modern Syntax" },
    { name: "HTML5", category: "Frontend", level: "Proficient", desc: "Semantic Markup, Accessibility (a11y), Audio/Video APIs" },
    { name: "CSS3", category: "Frontend", level: "Proficient", desc: "Flexbox, CSS Grid, Custom Properties, Animations, Transitions" },
    { name: "Responsive Design", category: "Frontend", level: "Advanced", desc: "Mobile-First Layouts, Media Queries, Fluid Typography" },
    { name: "PWA", category: "Frontend", level: "Proficient", desc: "Service Workers, Manifests, Offline Capabilities, App Install" },
    
    // Backend & APIs
    { name: "Node.js", category: "Backend & APIs", level: "Proficient", desc: "Server-side JavaScript, Event Loop, File System, NPM ecosystem" },
    { name: "Express.js", category: "Backend & APIs", level: "Proficient", desc: "Middleware, Routing, Error Handling, RESTful Services" },
    { name: "REST APIs", category: "Backend & APIs", level: "Advanced", desc: "Endpoint Architecture, JSON Payloads, HTTP Methods, CRUD" },
    { name: "Leaflet.js", category: "Backend & APIs", level: "Proficient", desc: "Interactive Maps, Custom Tile Layers, GeoJSON, Markers" },
    { name: "Overpass API", category: "Backend & APIs", level: "Proficient", desc: "OpenStreetMap Spatial Queries, Geo-Bounding Boxes" },
    { name: "Geolocation API", category: "Backend & APIs", level: "Proficient", desc: "Browser Coordinates, Location Tracking, Watch Position" },

    // Tools & Deployment
    { name: "Git", category: "Tools & Deployment", level: "Proficient", desc: "Version Control, Branching, Merging, Rebasing, Stashing" },
    { name: "GitHub", category: "Tools & Deployment", level: "Proficient", desc: "Pull Requests, Collaborative Code Reviews, Repositories" },
    { name: "VS Code", category: "Tools & Deployment", level: "Advanced", desc: "Extensions, Integrated Debugger, Emmet, Dev Productivity" },
    { name: "Netlify", category: "Tools & Deployment", level: "Proficient", desc: "Continuous Deployment, Webhook Builds, Preview Branches" }
  ]
};

export const experienceData = {
  internships: [
    {
      role: "Full Stack Development Intern",
      company: "My Job Grow",
      type: "Internship",
      period: "Recent",
      location: "Remote",
      summary: "Contributed to building responsive web interfaces, architecting client-side components, and integrating server-side API endpoints.",
      deliverables: [
        "Developed and maintained modular React components with responsive styling across desktop and handheld devices.",
        "Integrated backend REST API endpoints and handled asynchronous data fetching, loading skeletons, and error boundaries.",
        "Collaborated using Git and GitHub version control to conduct pull request reviews, fix defects, and streamline release builds."
      ],
      skills: ["React", "JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "Git", "CSS3"]
    },
    {
      role: "Full Stack Development Intern",
      company: "Jayesta Corporate Entity",
      type: "Internship",
      period: "Recent",
      location: "Remote / Hybrid",
      summary: "Participated in end-to-end web feature development, responsive UI testing, and API integration for web applications.",
      deliverables: [
        "Implemented user-friendly web pages ensuring strict adherence to cross-browser compatibility and mobile responsiveness.",
        "Collaborated with senior engineers to test RESTful service endpoints and validate incoming data schemas.",
        "Engaged in agile sprint planning, daily standups, and codebase optimization to improve loading speed and UI smoothness."
      ],
      skills: ["Full Stack Development", "JavaScript", "HTML5", "CSS3", "REST APIs", "Responsive Design"]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Kalinga University, Raipur",
      period: "Expected 2028",
      status: "In Progress",
      summary: "Pursuing Bachelor of Technology with a focus on core software engineering fundamentals, data structures, algorithms, and practical web system architectures.",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks.",
        "Hands-on project work developing real-time web applications, RESTful services, and Progressive Web Apps (PWAs).",
        "Active member of developer and technology student clubs, participating in technical workshops and coding competitions."
      ],
      coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS & SQL", "Operating Systems", "Web Technologies", "Computer Networks"]
    }
  ]
};

export const editorialNotes = [
  {
    title: "On Precision and Restraint",
    quote: "The best interfaces feel inevitable. They do not demand attention through gaudy spectacle, but earn trust through quiet, instantaneous responsiveness."
  },
  {
    title: "Architecture as Craft",
    quote: "Clean software architecture is not an academic luxury; it is the fundamental prerequisite for sustainable velocity and aesthetic dignity."
  }
];
