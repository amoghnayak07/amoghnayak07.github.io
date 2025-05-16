import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-scroll";
import LinkButton from "../../common/linkButton/LinkButton";
import { IntroImages } from "../../constants/PortfolioConstants";

const Intro = (props: any) => {
  const classes = useStyles();

  const { isTab, isMob } = props;

  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"}>
      <Box display="flex">
        <img
          src={IntroImages.COFFEE.img}
          alt={IntroImages.COFFEE.alt}
          className={classes.coffee}
        />
        <img
          src={IntroImages.LAPTOP.img}
          alt={IntroImages.LAPTOP.alt}
          className={classes.laptop}
        />
      </Box>
      <Typography
        variant={
          isMob
            ? "heading_03_medium"
            : isTab
            ? "heading_02_medium"
            : "heading_01_medium"
        }
        color="primary"
        textAlign={"center"}
      >
        Hey, I'm{" "}
        <span className={classes.highlightName}>Amogh Gopalakrishna Nayak</span>
      </Typography>
      <Typography
        variant={
          isMob
            ? "heading_03_medium"
            : isTab
            ? "heading_02_medium"
            : "heading_01_medium"
        }
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
