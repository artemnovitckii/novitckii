import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import self from "../img/self.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Artem",
  lastName: "Novitckii",
  initials: "ART", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕️",
      text: "coffee enthusiast",
    },
    {
      emoji: "🇳🇿",
      text: "based in New Zealand",
    },
    {
      emoji: "💼",
      text: `Frontend Engineer at Catch Design`,
      link: "https://www.catchdesign.co.nz/",
    },
    {
      emoji: "💌",
      text: "artemnovitckii@gmail.com",
    },
    {
      emoji: "🗂️",
      text: "download my resume",
      link: "resume",
    },
  ],
  socials: [
    {
      link: "https://github.com/artemnovitckii",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/artem-novitckii",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://dribbble.com/novitckii",
      icon: "fa fa-dribbble",
      label: "dribbble",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hi 👋 I’m Artem. Bold and visionary software engineer with a strong technical background. I blend my engineering expertise with a passion for innovation and problem-solving to develop impactful and reliable software solutions. Committed to addressing real-world challenges through technology and making a meaningful difference in the digital world. I bring a unique perspective to each project and a drive to excel and inspire teams everywhere.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "next.js",
      "react-native",
      "typescript",
      "css/scss/tailwind",
    ],
    exposedTo: ["php", "java", "kotlin"],
  },
  hobbies: [
    {
      label: "self-improvement",
      emoji: "📖",
    },
    {
      label: "fitness",
      emoji: "🏋️‍♀️",
    },
    {
      label: "outdoors",
      emoji: "🌲",
    },
    {
      label: "travelling",
      emoji: "🚀",
    },
    {
      label: "music",
      emoji: "🎧",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Coalition Against Piracy",
      subtitle:
        "I have designed and built the front-end of a web application focused on managing piracy in South East Asia. This project showcases my ability to develop innovative solutions that address complex problems. The application features a streamlined, efficient system for blocking pirated content and generating detailed reports of any infringement for submission to government authorities. My work on this project highlights my dedication to delivering measurable results and creating value for clients through the power of technology.",
      live: "http://www.casbaa.com/about-us/cap/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "mailto: artemnovitckii@gmail.com", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      button1Text: "about CAP",
      button2Text: "",
      tags: ["Front-end", "UI/UX", "Typescript/Tailwind"],
    },
    {
      title: "Foodzilla",
      subtitle:
        "As a UI/UX designer, I played a key role in developing an innovative meal planning web application. I designed and implemented a range of features, including meal recipe generation, weekly meal plans, and auto-generate meals, all with a focus on user efficiency and satisfaction. In addition, I utilized my marketing design skills to create branding and feature displays aimed at increasing client engagement and attracting new customers. My contribution to this project showcases my ability to deliver comprehensive solutions that meet both business and customer needs.",
      live: "https://foodzilla.io/",
      source: "On Request",
      tags: ["UI/UX", "Figma"],
      button1Text: "Foodzilla",
      button2Text: "",
      image: mock3,
    },
    {
      title: "Shwoop",
      subtitle:
        "As the lead UI/UX designer for a mobile app, I was responsible for a range of critical tasks, including user research, interface design, and user experience optimization. Through my efforts, the app was successfully launched and achieved a #1 ranking in the app store. My focus on creating a seamless and intuitive user experience, combined with my attention to detail and commitment to quality, contributed to the app's success. This project demonstrates my ability to lead and manage complex design efforts while delivering products that meet and exceed expectations.",
      live: "https://shwoop.co.nz/",
      source: "mailto: artemnovitckii@gmail.com",
      image: mock2,
      button1Text: "Shwoop",
      button2Text: "",
      tags: ["UI/UX", "Figma"],
    },
  ],
};
