import {LinkedIn, GitHub, Email} from '@mui/icons-material'

const colorContainerData = {
  fontIcon: "Settings",
  paragraphOne: `Choose a Different Color`,
  paragraphTwo: `default color`
}

const defaultColor = {
  defaultColor: "#0779e4"
}

const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#2ecc71" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" }
]

const navbarLinks = [
  { id: 1, navigateTo: "#portfolio", label__span__title: "Portfolio" },
  { id: 2, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" }
]

const logoData = [
  {
    id: 1,
    name__ariaLabel: "Karin Zaki",
    first__word: "Karin",
    inspan: "KZ",
  }
]

const headerInfo = {
  name: "Karin Zaki",
  job: "A Software Engineer",
  resumeLink: require("./download/resume.jpg").default,
  fontIcon: "DownloadRounded",
  AnchorText: "download resume",
}

const headerImage = {
  headerImage_src: require("./images/animation.png").default
}

const projectsData = [
  {
    id: 1,
    // liveDemo: "https://eqra2.netlify.app/",
    liveDemo: '',
    projectName: "Tic Tac Toe",
    imgURL: require("./images/tictactoe.png").default,
    liveDemoText: "Live Demo",
    project__info:
      "I designed and built a Tic Tac Toe game made for two players on a 3x3 board. It is a responsive game built using pure HTML, CSS and JavaScript.",
    sourceCodeText: "Source Code",
    languages: "HTML, CSS, JavaScript(client)",
    filter__word: "dhtml",
  },
  {
    id: 2,
    liveDemo: "https://https://karins-recipe-library.herokuapp.com/",
    projectName: "Recipe Library",
    imgURL: require("./images/recipelibrary.png").default,
    liveDemoText: "Live Demo",
    project__info:
      "I designed and built a responsive Recipe Library App where the user sign-up to the app and once logged in, has the ability to add recipes and edit/delete existing recipes. It is built using pure HTML, CSS, Ruby and SQL.",
    sourceCodeText: "Source Code",
    languages: "HTML, CSS, Ruby(client and server), SQL",
    filter__word: "ruby",
  },
  {
    id: 3,
    liveDemo: "https://dog-watch.herokuapp.com/",
    projectName: "DogWatch App",
    imgURL: require("./images/dogwatch.png").default,
    liveDemoText: "Live Demo",
    project__info:
      "I worked in a team of 3 to design and build the DogWatch App, a single page application where a user is able to checkin into local dog parks in their area. It gives users the ability to view how many dogs are at their dog parks, so their dogs don’t have to play by themselves. It is built using pure HTML, CSS, JavaScript and SQL.",
    sourceCodeText: "Source Code",
    languages: "HTML, CSS, JavaScript(client and server), SQL",
    filter__word: "jsAndSql",
  }
]

const portfolioSection = {
  title: "portfolio",
  paragraph: `Here's a couple of my projects. To browse 👀 through them in more detail, below are their respective GitHub links below or you can also hover over the images and access a Live Demo ⏺️ of each application. Please feel free to email me 📧 any feedback about any of my work - always looking to develop the codes.`
}

const portfolioList = [
  { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  { id: 2, filtering: ".dhtml", list__word: "DHTML", active: "" },
  { id: 3, filtering: ".jsAndSql", list__word: "JS and SQL", active: "" },
  { id: 4, filtering: ".ruby", list__word: "Ruby", active: "" }
]

const SkillsSection = {
  id: "skills",
  title: "Skills"
}

const SkillList= [
  {
    id: 1,
    skillName: "HTML",
  },
  {
    id: 2,
    skillName: "CSS",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "React JS",
  },
  {
    id: 5,
    skillName: "GitHub",
  },
  {
    id: 6,
    skillName: "Java",
  },
  {
    id: 7,
    skillName: "SQL/MySQL",
  },
  {
    id: 8,
    skillName: "JSON",
  },
  {
    id: 9,
    skillName: "API",
  },
  {
    id: 10,
    skillName: "Ruby/Sinatra",
  },
  {
    id: 11,
    skillName: "Postgres",
  }
]

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: `👋 I'm a Software Engineer and Developer 👩🏻‍💻 who enjoys problem-solving, consultancy and bridging the gap between technical teams and client audiences ⚙️. I'll work to combine my passion for programming along with the soft skills I learnt through my previous experience as a Civil Engineer to innovatively solve 🔎 clients' needs and help deliver amazing projects.`,
  paragraph2: `✨ I have a passion to continue learning and creatively contributing to the betterment of our society. 🌍 I want to work to show endless possibilities and innovation in everything I do.`
}

const resumeData = {
  id: "resume",
  resumeInfo: `To learn more about me or view a copy of my resume with more detailed information about me, please feel free to click 👇 the download button.`,
  resumeAnchorText: "Download Resume",
  resumeURL: require("./download/resume.jpg").default
}

// const contactData = {
//   id: "contact",
//   contactText: "contact me",
//   submitButton: "Submit",
//   inputName: "Your name",
//   inputEmail: "Email",
//   inputSubject: "Subject",
//   textArea: "message",
// }

const footerSocialData = [
  {
    id: 1,
    socialName: "LinkedIn",
    socialImg: <LinkedIn>LinkedIn</LinkedIn>,
    socialURL: "https://www.linkedin.com/in/karin-zaki/",
  },
  {
    id: 2,
    socialName: "Github",
    socialImg: <GitHub>GitHub</GitHub>,
    socialURL: "https://github.com/karinzaki",
  },
  {
    id: 3,
    socialName: "Email",
    socialImg: <Email>Email</Email>,
    socialURL: "mailto:karin.zaki@hotmail.com",
  }
]

const copyright = {
  first__word: "Copyright",
  second__word: "KarinZaki 2021",
}

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillList,
  SkillsSection,
  AboutSection,
  resumeData,
  // contactData,
  footerSocialData,
  copyright,
};