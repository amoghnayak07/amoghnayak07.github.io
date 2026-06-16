import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import LinkButton from "../../common/linkButton/LinkButton";
import { IntroImages } from "../../constants/PortfolioConstants";

const Intro = (props: any) => {
  const classes = useStyles();

  const { isTab, isMob, setActiveSection } = props;

  return (
    <Box flex={1}>
      <Box
        display="flex"
        width={"100%"}
        gap={isMob ? 0 : "2rem"}
        justifyContent={"center"}
      >
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
        <span className={classes.highlightName}>Amogh Gopalakrishna Nayak</span>
      </Typography>
      <Typography
        variant={
          isMob
            ? "heading_04_medium"
            : isTab
              ? "heading_03_medium"
              : "heading_02_medium"
        }
        color="primary"
        textAlign={"center"}
      >
        FullStack & AI Engineer
      </Typography>
      <Typography
        variant={
          isMob
            ? "heading_05_medium"
            : isTab
              ? "heading_04_medium"
              : "heading_03_extra_bold"
        }
        color="primary"
        textAlign={"center"}
        mt="0.5rem"
      >
        I ship fast, scale smart, and don't break prod.
      </Typography>
      <Box display="flex" justifyContent={"center"} gap="2rem" mt="1rem">
        <LinkButton text="my work" onClick={() => setActiveSection("work")} />
        <LinkButton
          text="more about me"
          onClick={() => setActiveSection("about")}
        />
      </Box>
    </Box>
  );
};

export default Intro;
