import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { useStyles } from "./styles";

const Nav = (props: any) => {
  const { activeSection } = props;
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar} component="nav">
      <Toolbar className={classes.toolbar}>
        <Link
          key={"intro"}
          to={"intro"}
          smooth={true}
          duration={600}
          offset={-30}
          spy={true}
        >
          <Typography
            variant="heading_02_bold"
            color="primary"
            className={`${classes.navs} ${classes.noUnderline}`}
          >
            AGN
          </Typography>
        </Link>
        <Box display={"flex"} alignItems={"center"} gap="2rem">
          {["intro", "work", "about", "contact"].map((section) => (
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
                color="primary"
                className={
                  activeSection === section ? classes.currPage : classes.navs
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
