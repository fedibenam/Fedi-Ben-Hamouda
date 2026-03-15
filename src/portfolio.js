/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fedi Ben Hamouda",
  title: "Hi, I'm Fedi Ben Hamouda",
  subTitle: emoji(
    "Full-Stack Software Engineer focused on building production-ready web products, scalable cloud infrastructure, and AI-powered features. Based in Tunis and open to remote, hybrid, or onsite software engineering opportunities."
  ),
  resumeLink: "resume", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fedibenam",
  linkedin: "https://www.linkedin.com/in/fedi-ben-hamouda/",
  gmail: "fedibenhamchesd@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I SHIP FULL-STACK PRODUCTS WITH CLEAN ARCHITECTURE, AI CAPABILITIES, AND SCALABLE CLOUD DEPLOYMENT",
  skills: [
    emoji(
      "⚡ Design and deliver end-to-end web applications with React, Angular, Node.js, Spring Boot, Symfony, and Django"
    ),
    emoji(
      "⚡ Build data and AI features using TensorFlow, scikit-learn, pandas, and NumPy for smarter product experiences"
    ),
    emoji(
      "⚡ Deploy reliable cloud infrastructure with Docker, Kubernetes, AWS, Redis, PostgreSQL, and CI/CD pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESPRIT - Ecole Superieure Privee d'Ingenierie et de Technologies",
      logo: require("./assets/images/espritLogo.jpg"),
      subHeader: "Computer Engineering",
      duration: "2025 - Present",
      desc:
        "Focused on software engineering, cloud computing, DevOps, system design, and application development.",
      descBullets: [
        "Advanced coursework in software engineering and distributed systems",
        "Hands-on work across cloud platforms, DevOps workflows, and application architecture"
      ]
    },
    {
      schoolName:
        "Institut Superieur d'Informatique et des Technologies de Communication",
      logo: require("./assets/images/isitcLogo.jpg"),
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "2022 - 2025",
      desc:
        "Built a strong foundation in algorithms, data structures, databases, operating systems, and web development.",
      descBullets: [
        "Relevant coursework: Algorithms, Data Structures, Databases, Software Engineering",
        "Additional focus on Operating Systems and Web Development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "End-of-Year Project (PFE) - Software Development",
      company: "Sofrecom",
      companylogo: require("./assets/images/sofrecomLogo.jpg"),
      date: "02/2025 - 08/2025",
      desc:
        "Delivered a centralized portal that streamlined access to internal applications and business workflows while improving operational visibility.",
      descBullets: [
        "Built interactive KPI dashboards to support faster monitoring and data-driven decisions",
        "Designed and secured RESTful APIs with JWT-based authentication and session handling",
        "Executed unit, integration, and load tests to strengthen reliability before deployment",
        "Implemented GitLab CI/CD pipelines to automate build, test, and release workflows"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Sofrecom",
      companylogo: require("./assets/images/sofrecomLogo.jpg"),
      date: "06/2024 - 08/2024",
      desc:
        "Developed an AI-powered recommendation engine for personalized content delivery in a production-oriented workflow.",
      descBullets: [
        "Implemented preprocessing, feature engineering, and model training pipelines on large datasets",
        "Exposed the model through REST APIs to enable real-time recommendations in the web app",
        "Containerized and deployed the solution with Docker and CI/CD automation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Selected projects that reflect my work in cloud architecture, AI systems, and production-grade engineering.",
  projects: [
    {
      image: require("./assets/images/Social Media Platform.png"),
      projectName: "Social Media Platform",
      projectDesc:
        "Engineered scalable platform infrastructure with Kubernetes, LocalStack, Helm, Secrets, horizontal pod autoscaling, and GitLab CI/CD automation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/fedibenam"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/fedi-ben-hamouda/"
        }
      ]
    },
    {
      image: require("./assets/images/AetherMind.png"),
      projectName: "AetherMind",
      projectDesc:
        "Built a cloud-native AI knowledge assistant with Retrieval-Augmented Generation, vector search, semantic processing modules, and scalable deployment on AWS and Kubernetes.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/fedibenam"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/fedi-ben-hamouda/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Licenses & Certifications 🏆"),
  subtitle: "Professional certifications that support my software, data, and AI background.",

  achievementsCards: [
    {
      title: "Foundations of Probability in Python",
      subtitle:
        "Issued by DataCamp (Jun 2025). Credential ID: bc3ca47273dbac8d8589229a294a28e08c1a0059",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "DataCamp certification",
      footerLink: [
        {
          name: "Show Credential",
          url: "https://www.datacamp.com/statement-of-accomplishment/course/bc3ca47273dbac8d8589229a294a28e08c1a0059?raw=1"
        }
      ]
    },
    {
      title: "Intermediate Python",
      subtitle:
        "Issued by DataCamp. Credential ID: 723be160633542e10d0eb4e2ff1367dd6727914f",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "DataCamp certification",
      footerLink: [
        {
          name: "Show Credential",
          url: "https://www.datacamp.com/statement-of-accomplishment/course/723be160633542e10d0eb4e2ff1367dd6727914f?raw=1"
        }
      ]
    },

    {
      title: "Introduction to Python",
      subtitle:
        "Issued by DataCamp (Apr 2025). Credential ID: 52008a981db5c38f01d0fc79a26368718bc37d78",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "DataCamp certification",
      footerLink: [
        {
          name: "Show Credential",
          url: "https://www.datacamp.com/statement-of-accomplishment/course/52008a981db5c38f01d0fc79a26368718bc37d78?raw=1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to full-time software engineering roles in backend, full-stack, cloud, or AI-focused teams. I usually reply within 24 hours.",
  number: "",
  email_address: "fedibenhamchesd@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const footerImage = {
  display: true,
  image: require("./assets/images/pfp.JPG"),
  alt: "Profile footer image"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  footerImage,
  isHireable,
  resumeSection
};
