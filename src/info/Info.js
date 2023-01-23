import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

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
      text: `Software Engineer at EROAD`,
      link: "https://www.eroad.co.nz/nz/",
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
  bio: "Hi 👋 I'm Artem. My education background is in Computer Science and Information Systems at the University of Auckland.  An imaginative leader and developer, I am passionate for sense of discovery and understanding perspective of others. I enjoy facing unique problems that force me out of the box. I believe that being open-minded and disciplined with action system will achieve the greatest results.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "react-native",
      "kotlin",
      "typescript",
      "html/css/tailwind",
      "python",
      "figma",
    ],
    exposedTo: ["nodejs", "java"],
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
      title: "Coalition Against Piracy (CAP)",
      subtitle:
        "Web Aplplication to manage pirated content in South East Asia. Deisgned and built front end.",
      live: "http://www.casbaa.com/about-us/cap/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "mailto: artemnovitckii@gmail.com", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      button1Text: "about CAP",
      button2Text: "On Request",
      tags: ["Front-end", "UI/UX", "Typescript/Tailwind"],
    },
    {
      title: "Foodzilla",
      subtitle: "Marketing & Feature Desings",
      live: "https://foodzilla.io/",
      source: "On Request",
      tags: ["UI/UX", "Figma"],
      button1Text: "Foodzilla",
      button2Text: "On Request",
      image: mock3,
    },
    {
      title: "Shwoop",
      live: "https://shwoop.co.nz/",
      source: "mailto: artemnovitckii@gmail.com",
      image: mock2,
      button1Text: "Shwoop",
      button2Text: "On Request",
      subtitle: "UI/UX of the mobile app.",
      tags: ["UI/UX", "Figma"],
    },
    {
      title: "Random Facts App",
      subtitle:
        "Using Facts API built and designed an app that displays random facts.",
      button1Text: "not published 😤",
      button2Text: "Source",
      live: "too $$ to publish",
      tags: ["React Native", "Mobile"],
      source: "https://github.com/artemnovitckii",
      image: mock4,
    },
  ],
};
