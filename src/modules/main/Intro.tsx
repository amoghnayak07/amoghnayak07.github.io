import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-scroll";
import LinkButton from "../../common/linkButton/LinkButton";

const Intro = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"}>
      <Typography
        variant="heading_01_medium"
        color="primary"
        textAlign={"center"}
      >
        Hey, I'm{" "}
        <span className={classes.highlightName}>Amogh Gopalakrishna Nayak</span>
      </Typography>
      <Typography
        variant="heading_01_medium"
        color="primary"
        textAlign={"center"}
      >
        But you can call me{" "}
        <span className={classes.highlightName}>
          AGN <span style={{ color: "#b4b4b4" }}>or</span> A-Mog
        </span>
      </Typography>
      <Box display="flex" justifyContent={"center"} gap="2rem" mt="1rem">
        <Link
          key={"work"}
          to={"work"}
          smooth={true}
          duration={600}
          offset={-30}
          spy={true}
        >
          <LinkButton text="my work" />
        </Link>
        <Link
          key={"about"}
          to={"about"}
          smooth={true}
          duration={600}
          offset={-30}
          spy={true}
        >
          <LinkButton text="more about me" />
        </Link>
      </Box>
    </Box>
  );
};

export default Intro;
