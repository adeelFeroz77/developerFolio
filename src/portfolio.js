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
  username: "Adeel Feroz",
  title: "Hi all, I'm Adeel",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 having an experience of building Web applications with Spring Boot / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adeelFeroz77",
  linkedin: "https://www.linkedin.com/in/adeelferoz77/",
  gmail: "adeel.feroz.7@gmail.com",
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Ensure clean coding practices to make robust and scalable products"
    ),
    emoji("⚡ Command on Microservices And Monolithic Architectures"),
    emoji(
      "⚡ Integration of third party services such as Firebase and AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mohammad Ali Jinnah University",
      logo: require("./assets/images/maju_logo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "June 2020  - June 2024",
      desc: "CGPA: 3.79",
      descBullets: [
        "Winner - ACM Maju Code Hiest (Speed Programming)",
        "RunnerUp - ACM Maju Code Hiest (Speed Programming)",
        "2nd Position (Nation Wide) in Programming Competition",
        "3rd Position in FYP Exhibition",
        "Lead ACM Coding Club",
        "Arranged and Managed several Inter University Programming Competitions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Spring / Spring Boot",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
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
      role: "Associate Software Engineer",
      company: "Northstar Technologies",
      companylogo: require("./assets/images/NS-logo.jpg"),
      date: "Jan 2024 – Present",
      desc: "A Club Management software used by 1000+ organiztions to gain operational efficiencies, insights and provide superior member experiences.",
      descBullets: [
        "Integrated WebSocket into the email authentication process resulting in reducing 50% clicks of users on Login.",
        "Created Servlet to automatically migrate DES databases to AES on start of application, resulting in reducing manual delays and errors, and saving 3 days of dev efforts."
      ]
    },
    {
      role: "SE (C2C from Stepway)",
      company: "Qordata",
      companylogo: require("./assets/images/qd-logo1.png"),
      date: "Jul 2023 – Oct 2023",
      desc: "AI-powered Data-Driven Compliance Platform consists of all the essential solutions, trainings, and services, serving as one-window platform.",
      descBullets: [
        "Improved Response time of application up to 40% by removing and optimizing large chunks of code and converted them to SQL to obtain better response time.",
        "Designed a new system that stores data in JSON Table instead of traditional DB Table, resulting in 60% performance improvments in Data Retreival and Insertion."
      ]
    },
    {
      role: "Software Engineer",
      company: "Stepway",
      companylogo: require("./assets/images/stepway-logo.jpg"),
      date: "Oct 2022 – Jun 2023",
      desc : ["Offers IT services and consultancy globally, with a current focus on providing skilled Java developers. StepWay ensures top-notch quality and reliability, matching companies with the best developers for their projects."],
      descBullets: [
        "Worked on Microservices based architecture using SpringBoot for automating customer contracts through a website.",
        "Collaborated with cross-functional teams to gather requirements, design solutions, and implement backend functionalities."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICPC Online Qualifiers RunnerUp",
      subtitle:
        "Secured 2nd Position Nation Wide in ICPC 2023 Online Qualifiers.",
      image: require("./assets/images/icpc.png"),
      imageAlt: "ICPC",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZFYG6pkqPSFCyo0Fmyv6epKjed1rMXSg/view?usp=sharing"
        },
        {
          name: "Event Summary",
          url: "https://drive.google.com/file/d/1ov-tlV_b8dQL3e8EeSpCZYerZsM80347/view?usp=sharing"
        }
      ]
    },
    {
      title: "Winner - CodeHiest Pro",
      subtitle:
        "Won Speed Programming Intra University Competition",
      image: require("./assets/images/maju_logo2.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cwkKkCZX27rN0uZIG4w1XU5-54wXP5Ij/view?usp=sharing"
        }
      ]
    },

    {
      title: "Azure Fundamentals - AZ 900",
      subtitle: "Completed Certifcation from Azure for Azure Foundations",
      image: require("./assets/images/azure.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/428008a0-153e-4a1c-9bdd-0d9a48873a07/public_url"}
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3278270980",
  email_address: "adeel.feroz.7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
