export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "React.js", level: 87 },
      { name: "Redux Toolkit", level: 78 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 83 },
      { name: "Express.js", level: 83 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 74 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 78 },
      { name: "Scikit-Learn", level: 73 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 86 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const featuredSkills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Python",
  "Flask",
  "TensorFlow",
  "MySQL",
];

export const softSkills = [
  "Team Collaboration",
  "Adaptability",
  "Problem Solving",
  "Communication",
  "Continuous Learning",
  "Ownership",
];

export const certificates = [
  {
    title: "Infosys Global Hackathon",
    year: "2025",
    description:
      "Certified for innovation and problem-solving at a national-level competitive hackathon, demonstrating capability aligned with industry engineering culture.",
  },
];

export const experiences = [
  {
    company: "Armtronix IoT Pvt Ltd",
    role: "Software Development Intern",
    period: "Ongoing",
    points: [
      "Developing and maintaining full stack web applications using the MERN stack in a live IoT product environment.",
      "Building and integrating REST APIs for device-to-web communication.",
      "Applying debugging, testing, and troubleshooting practices to ensure reliable application functionality.",
      "Collaborating with engineering teams in an Agile environment with proactive communication and adaptability.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "Git", "Linux"],
  },
  {
    company: "Nayoda",
    role: "Full Stack Development Intern",
    period: "1 Month",
    points: [
      "Worked on full stack web application development across frontend and backend components.",
      "Integrated REST APIs and applied clean coding and debugging practices.",
      "Collaborated within a professional software development team with reliability and accountability.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "REST API", "Git"],
  },
];

export const projects = [
  {
    slug: "skillsphere",
    title: "SkillSphere",
    subtitle: "Intelligent Freelance Marketplace",
    description:
      "A MERN stack freelance marketplace with JWT authentication, AI-assisted job matching, Socket.IO real-time communication, role-based access control, and Razorpay payment integration.",
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    accent: "from-primary to-accent",
  },
  {
    slug: "skininsight",
    title: "SkinInsight",
    subtitle: "AI-Based Skin Disease Detection",
    description:
      "An AI-powered skin disease detection system using TensorFlow, Flask, React, and MySQL, with an analytics dashboard and chatbot support for users.",
    tags: ["Python", "Flask", "TensorFlow", "Keras", "React.js", "MySQL"],
    accent: "from-accent to-primary",
  },
  {
    slug: "goparky",
    title: "GoParky",
    subtitle: "Vehicle Parking Management System",
    description:
      "A vehicle parking management system with full CRUD operations, slot allocation, reporting, and an admin management console.",
    tags: ["Python", "Flask", "PHP", "MySQL", "JavaScript"],
    accent: "from-primary to-violet-400",
  },
];
