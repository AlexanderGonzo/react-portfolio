const data = {
  main: {
    name: "Alexander Gonzalez",
    occupation: "Software Developer",
    description:
      "My name is Alexander Gonzalez and I am a first generation graduate from Texas State University with a Bachelors of Science in Computer Science.\n During my college career, I was involved in campus life and was part of organizations such as Coding Titans. Outside of Campus life, I had the honor of interning at KTSW 899 and SWBC.",
    image: "profilepic.jpg",
    bio:
      "I am a self-motivated Software Engineer with hands-on leadership experience managing a team towards a common goal. Tactical technical experience and a working knowledge of Agile development and Robotic Automation Processes as well as proficiencies in C/C++, Java, JavaScript, Python, Bash/Shell Scripting, and HTML/CSS.",
    contactmessage: "Feel free to contact me!",
    email: "alexgonzo1994@gmail.com",
    phone: "(832) 382-2321",
    address: {
      city: "Houston",
      state: "Texas"
    },
    website: "https://alexandergonzo.github.io/",
    resumedownload:
      "https://drive.google.com/file/d/19UHsBgkZEqkh4YAh2MPKrNw6_jV6i7O-/view?usp=sharing",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/Alexander_Gonz0",
        className: "fa fa-twitter"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/alexander-gonzalez-5829a4171/",
        className: "fa fa-linkedin"
      },
      {
        name: "github",
        url: "http://github.com/AlexanderGonzo",
        className: "fa fa-github"
      }
    ]
  },
  resume: {
    education: [
      {
        school: "Texas State",
        degree:
          "Bachelors of Science: Major Computer Science Minor Applied Math",
        graduated: "December 2019",
        description:
          "Relevant Coursework: Software Engineering, Unix Programming, Object Oriented Programming, Data Structures and Algorithms, Cyber Security, and Networking"
      }
    ],
    work: [
      {
        company: "SWVC",
        title: "Information Technology Intern",
        years: "September 2019 - December 2019",
        description:
          "Designed, documented, and implemented an end-to-end robotic process automation for 12 virtual desktop interfaces by using UiPath, resulting in an average savings of 15 full-time employee hours weekly."
      },
      {
        company: "KTSW 89.0",
        title: "Web Developer",
        years: "November 2018 - November 2019",
        description:
          "As a lead Web Developer for a small team, managed overall development; oversaw daily projects for site maintenance and web development tasks for two domains."
      }
    ]
  },
  portfolio: {
    projects: [
      {
        title: "Clothing eCommerce Website",
        category:
          "*Database offline!* A React, Redux, and Firebase based eCommerce clothing website.",
        image: "clothing_ecommerce.png",
        url: "https://cs3320-clothing-store.herokuapp.com/"
      },
      {
        title: "Radio Live Stream Web Application",
        category:
          "(MVP ONLY) A MERN Stack Application to dynamically load and display now playing songs to radio listeners",
        image: "ktsw.png",
        url: "http://www.timbakerdev.com"
      },
      {
        title: "This Website!",
        category: "A React based resume website",
        image: "resume-website.jpg",
        url: "https://alexandergonzo.github.io/"
      },
      {
        title: "Operating Systems",
        category:
          "Programs written in C that conducted Page Replacement Algorithms, Terminal Simulation, and more.",
        image: "terminal.gif",
        url: "https://github.com/AlexanderGonzo/OperatingSystems"
      }
    ]
  }
};
export default data;
