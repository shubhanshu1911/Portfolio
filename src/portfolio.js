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
  username: "Shubhanshu",
  title: "Hi all, I'm Shubhanshu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with MongoDB, Express, React, Node (MERN) Stack and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yWh7H0daVvMP9Z5jLx-bqeB_n7G3jYhw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shubhanshu1911",
  linkedin: "https://www.linkedin.com/in/shubhanshu-khare-7011321a4/",
  gmail: "shubhkhare19@gmail.com",
  Twitter: "https://x.com/_Shubhanshu_19?s=08",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and MERN Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS EC2",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
      logo: require("./assets/images/iiitdm_logo.png"),
      subHeader: "Smart Manufacturing",
      duration: "November 2021 - April 2025",
      desc: "Related Courses : ",
      descBullets: [
        "Programming, DBMS, Computer Network, M2M Communication, IOT and Cloud Computering, Data Science, Embedded Systems, Robotics, Operation Chain Management",
        "Sociology of Design, Systems Thinking, Smart Product Design, Entrepreneurship, Prototyping"
      ]
    },
    {
      schoolName: "Delhi Public School",
      logo: require("./assets/images/dps_logo.webp"),
      subHeader: "Higher Secondary Education",
      duration: "April 2018 - April 2020",
      desc: "Achievements :",
      descBullets: [
        "Awarded as the Student Scholor",
        "Secured 3rd rank in International Mathematical Olympiad(IMO)",
        "Represented Mini-National in Cricket"
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
      role: "Web Developer Intern",
      company: "Adankaa Automation System",
      companylogo: require("./assets/images/logo.jpeg"),
      date: "May 2024 – Aug 2024",
      desc: "Chennai, Tamilnadu",
      descBullets: [
        "Developed a secure company website using Figma and the MERN stack, integrating JWT authentication, to enhance order security.",
        "Created a tool in React.js and Node.js that linked CAD models to Ultimaker Cura for 3D printing, improving workflow by 30%.",
        "Designed a UI for robotic hand integrated with IoT device using MQTT and JavaScript resulting in precise movement and control of the robotic hand."
      ]
    },
    {
      role: "Full-stack Developer Intern",
      company: "Nexus Info",
      companylogo: require("./assets/images/Nexus_logo.png"),
      date: "Jan 2024 – Mar 2024",
      desc: "Remote",
      descBullets: [
        "Engineered a company website using the MERN stack, boosting user engagement by 30%.",
        "Enhanced SEO best practices, improving search visibility and interaction by 30%.",
        "Collaborated with 5+ teams, aligning projects with business objectives, enhancing coherence."
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  subtitle: "SOME OF MY PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/webnotes_logo.png"),
      projectName: "Webnotes",
      projectDesc: "Developed a robust note-taking Chrome extension leveraging the MERN stack.",
      techUsed: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Express.js" },
        { name: "CSS" },
        { name: "REST API" },
        { name: "JWT authentication"}
        // Add more technologies with names and optional URLs
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://webnotes-0iqe.onrender.com/"
        },
        {
          name: "Github",
          url: "https://github.com/shubhanshu1911/Webnotes_fontend"
        }
      ]
    },
    {
      image: require("./assets/images/planfinity_logo.png"),
      projectName: "Planfinity",
      projectDesc: "This is a Daily Planner website where you can manage your daily schedules, to-dos, journaling, and also organize multiple lists for future references.",
      techUsed: [
        { name: "HTML"},
        { name: "CSS"},
        { name: "EJS"},
        { name: "Node.js"},
        { name: "Express.js"},
        { name : "REST API"},
        { name : "MongoDB"},
        // Add more technologies with names and optional URLs
      ],      
      footerLink: [
        {
          name: "Visit Website",
          url: "https://daily-planner-app-3zxk.onrender.com/"
        },
        {
          name : "Github",
          url : "https://github.com/shubhanshu1911/Planfinity"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/snapBlog_logo.png"),
      projectName: "SnapBlog",
      projectDesc: "This is a Blog website with Custom Build API to Create, Read, Update, Delete (CRUD) Functionality",
      techUsed: [
        { name: "HTML"},
        { name: "CSS"},
        { name: "EJS"},
        { name: "Node.js"},
        { name: "Express.js"},
        { name : "REST API"},
        { name: "Axios"},
        { name : "MongoDB"},
        // Add more technologies with names and optional URLs
      ],
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // },
        {
          name : "Github",
          url : "https://github.com/shubhanshu1911/SnapBlog"
        }
        //  you can add extra buttons here.
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Web Development",
      subtitle:
        "",
      image: require("./assets/images/udemy-logo.jpg"),
      imageAlt: "udemy_logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1k4xilwC_H2uc4lt45JQklLLt2vVBNQeM/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6261247221",
  email_address: "shubhkhare19@gmail.com"
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
  isHireable
};
