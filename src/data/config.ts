const config = {
  title: "Aditya Dyansyh | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aditya, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Aditya, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Aditya",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Aditya Dyansyh",
  email: "adtya.dyansyh@gmail.com",
  site: "https://AdityaDyansyh.site",

  // for github stars button
  githubUsername: "AdityaDyansyh",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/AdityaDyansyh",
    linkedin: "https://www.linkedin.com/in/aditya-dyansyh-1a3b11248/",
    instagram: "https://www.instagram.com/adtya.dyansyh",
    facebook: "https://www.linkedin.com/in/aditya-dyansyh-1a3b11248/",
    github: "https://github.com/AdityaDyansyh",
  },
};
export { config };
