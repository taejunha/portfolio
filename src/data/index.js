import spotify from "../assets/spotify.png";
import campus from "../assets/campus.png";
import soulage from "../assets/soulage.png";
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';

export { close, menu };


export const navLinks = [
    {
      id: "intro",
      title: "Introduction",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "travels",
      title: "Travels",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const portfolio = [
    {
      name: "Soulage",
      techstack: "TypeScript, TailwindCSS, MongoDB, Node.js",
      link: "https://github.com/doh43/StudyNook",
      description:
        "A fullstack project displaying public washrooms available for use in the city of Toronto where users can rate, review, and save the washrooms (STILL WIP).",
        image: soulage,
    },
    {
      name: "Spotify Stats",
      techstack: "React, HTML, CSS, SpotifyAPI",
      link: "https://github.com/taejunha/spotify-stats",
      description:
        "A web application that displays a users top 50 tracks and artists from Spotify.",
        image: spotify,
    },
    {
      name: "Western GIS Map",
      techstack: "Java, JavaSwing, Confluence, Jira, BitBucket",
      link: "https://github.com/taejunha/Western-GIS-Map",
      description:
        "A full stack project where users can access different campus buildings and discover/create points of interests for the buildings.",
        image: campus,
    },
  ];
  
  export { portfolio };
  