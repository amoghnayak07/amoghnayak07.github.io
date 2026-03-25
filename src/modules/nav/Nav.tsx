import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-scroll";
import { useStyles } from "./styles";

const Nav = (props: any) => {
  const { activeSection, isMob } = props;
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = ["work", "projects", "about", "contact"];

  return (
    <AppBar position="fixed" className={classes.appbar} component="nav">
      <Toolbar className={classes.toolbar}>
        {isMob ? (
          <Box display={"flex"} gap="1rem" alignItems={"center"}>
            <>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "primary.dark" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ className: classes.drawer }}
              >
                <Box className={classes.drawerHeader}>
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{ color: "primary.dark" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box className={classes.drawerLinks}>
                  {navLinks.map((section) => (
                    <Link
                      key={section}
                      to={section}
                      smooth={true}
                      duration={600}
                      offset={-30}
                      spy={true}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <Typography
                        variant="h6"
                        className={
                          activeSection === section
                            ? classes.currPage
                            : classes.navs
                        }
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Drawer>
            </>
            <Link
              key={"intro"}
              to={"intro"}
              smooth={true}
              duration={600}
              offset={-30}
              spy={true}
            >
              <Typography
                variant={isMob ? "heading_03_bold" : "heading_02_bold"}
                color={
                  activeSection === "intro" ? "primary.dark" : "primary.main"
                }
                className={`${classes.navs} ${classes.noUnderline}`}
              >
                A G N
              </Typography>
            </Link>
          </Box>
        ) : (
          <Link
            key={"intro"}
            to={"intro"}
            smooth={true}
            duration={600}
            offset={-30}
            spy={true}
          >
            <Typography
              variant={isMob ? "heading_03_bold" : "heading_02_bold"}
              color={
                activeSection === "intro" ? "primary.dark" : "primary.main"
              }
              className={`${classes.navs} ${classes.noUnderline}`}
            >
              A G N
            </Typography>
          </Link>
        )}

        {isMob ? null : (
          <Box display={"flex"} alignItems={"center"} gap={"2rem"}>
            {navLinks.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={600}
                offset={-30}
                spy={true}
              >
                <Typography
                  variant="h6"
                  color="primary.dark"
                  className={
                    activeSection === section ? classes.currPage : classes.navs
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
