import { useState } from "react";
import MainLayout from "../../common/layout/MainLayout";
import Nav from "../nav/Nav";
import Intro from "./Intro";
import Work from "./Work";
import Projects from "./Projects";
import { useStyles } from "./styles";
import About from "./About";
import Contact from "./Contact";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MouseHalo from "../../common/layout/MouseHalo";
import { WindowManagerProvider } from "../../common/win95/WindowManagerContext";
import WindowLayer from "../../common/win95/WindowLayer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const classes = useStyles();

  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const isMob = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <WindowManagerProvider>
      <MainLayout>
        {!isMob && <MouseHalo />}
        <Nav
          isMob={isMob}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Box className={classes.section}>
          {activeSection === "intro" ? (
            <Intro
              isTab={isTab}
              isMob={isMob}
              setActiveSection={setActiveSection}
            />
          ) : activeSection === "work" ? (
            <Work isTab={isTab} isMob={isMob} activeSection={activeSection} />
          ) : activeSection === "projects" ? (
            <Projects
              isTab={isTab}
              isMob={isMob}
              activeSection={activeSection}
            />
          ) : activeSection === "about" ? (
            <About isMob={isMob} isMd={isMd} />
          ) : activeSection === "contact" ? (
            <Contact isMob={isMob} />
          ) : null}
        </Box>
        <WindowLayer />
      </MainLayout>
    </WindowManagerProvider>
  );
};

export default Home;
