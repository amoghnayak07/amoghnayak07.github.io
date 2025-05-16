import { useEffect, useState } from "react";
import MainLayout from "../../common/layout/MainLayout";
import Nav from "../nav/Nav";
import Intro from "./Intro";
import Work from "./Work";
import { useStyles } from "./styles";
import About from "./About";
import Contact from "./Contact";
import { useMediaQuery, useTheme } from "@mui/material";
import MouseHalo from "../../common/layout/MouseHalo";

const Home = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const classes = useStyles();

  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const isMob = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [activeSection]);

  return (
    <MainLayout>
      <MouseHalo />
      <Nav isMob={isMob} activeSection={activeSection} />
      <section id="intro" className={classes.introSection}>
        <Intro isTab={isTab} isMob={isMob} />
      </section>
      <section id="work" className={classes.workSection}>
        <Work isTab={isTab} isMob={isMob} activeSection={activeSection} />
      </section>
      <section id="about" className={classes.section}>
        <About isMob={isMob} isMd={isMd} />
      </section>
      <section id="contact" className={classes.section}>
        <Contact isMob={isMob} />
      </section>
    </MainLayout>
  );
};

export default Home;
