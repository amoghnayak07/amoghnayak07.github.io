import { Box, Typography } from "@mui/material";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";

const Nav = (props: any) => {
  const { activeSection, setActiveSection } = props;
  const classes = useStyles();
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = ["intro", "work", "projects", "about", "contact"];
  const labels: Record<string, string> = {
    intro: "Home",
    work: "Work",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  };

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setStartOpen(false);
      }
    };
    if (startOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [startOpen]);

  const clock = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box className={classes.taskbar} ref={menuRef}>
      <Box
        className={`${classes.startButton} ${startOpen ? classes.startActive : ""}`}
        onClick={() => setStartOpen((o) => !o)}
      >
        <span className={classes.startLogo}>
          <WindowSharpIcon fontSize="small" color="primary" />
        </span>
        <Typography className={classes.startText}>AGN</Typography>
      </Box>

      {startOpen && (
        <Box className={classes.startMenu}>
          <Box className={classes.startMenuSpine} />
          <Box className={classes.startMenuItems}>
            {navLinks.map((section) => (
              <Typography
                key={section}
                className={`${classes.startMenuItem} ${
                  activeSection === section ? classes.startMenuItemActive : ""
                }`}
                onClick={() => {
                  setActiveSection(section);
                  setStartOpen(false);
                }}
              >
                {labels[section]}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      <Box className={classes.clock}>
        <Typography className={classes.clockText}>{clock}</Typography>
      </Box>
    </Box>
  );
};

export default Nav;
