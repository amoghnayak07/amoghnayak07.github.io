import { Box, Button, Typography } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

const About = (props: any) => {
  const { isMob, isMd } = props;

  return (
    <Box
      display="flex"
      gap="3rem"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={isMob ? "0.5rem" : "2rem"}
        width="100%"
      >
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
                ? "heading_03_medium"
                : "heading_02_medium"
          }
          color="primary"
        >
          Software engineer with 4+ years building distributed systems,
          high-throughput APIs, and AI products. I've gone from founding a SaaS
          that hit $60K revenue to shipping LLM integrations in production. And
          I care a lot about the craft in between.
        </Typography>
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
                ? "heading_03_medium"
                : "heading_02_medium"
          }
          color="primary"
        >
          Currently finishing my MS in CS at Northeastern, where I spend most of
          my time on distributed systems and AI coursework. I like hard
          problems, fast feedback loops, and coffee that's too strong.
        </Typography>
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
                ? "heading_03_medium"
                : "heading_02_medium"
          }
          color="primary"
        >
          Skateboarding and live music when I'm not at a keyboard.
        </Typography>
        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            width: "8rem",
            textTransform: "capitalize",
            height: "2.5rem",
            color: "primary.light",
            backgroundColor: "primary.contrastText",
          }}
          startIcon={<GetAppOutlinedIcon fontSize="small" />}
          href="/assets/images/Contact/Amogh_GNayak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Box>
      {/* <Box
        width="50%"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img
          src={"/assets/images/Contact/Me.jpg"}
          alt="AGN"
          width="450px"
          style={{ borderRadius: "2.5rem" }}
        />
      </Box> */}
    </Box>
  );
};

export default About;
