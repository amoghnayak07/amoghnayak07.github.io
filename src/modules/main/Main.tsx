import { useEffect, useState } from "react";
import MainLayout from "../../common/layout/MainLayout";
import Nav from "../nav/Nav";
import Intro from "./Intro";
import Work from "./Work";
import { useStyles } from "./styles";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const classes = useStyles();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [activeSection]);
  console.log({ activeSection });

  return (
    <MainLayout>
      <Nav activeSection={activeSection} />
      <section id="intro" className={classes.section}>
        <Intro />
      </section>
      <section id="work" className={classes.workSection}>
        <Work activeSection={activeSection} />
      </section>
      <section id="about" className={classes.section}>
        <About />
      </section>
      <section id="contact" className={classes.section}>
        <Contact />
      </section>
    </MainLayout>
  );
};

export default Home;
