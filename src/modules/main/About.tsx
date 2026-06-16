import { Box, Button, Typography } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

const About = (props: any) => {
  const { isMob, isMd } = props;

  return (
    <Box flex={1} padding={isMob ? "3rem 0" : 0}>
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
          I recently finished my MS in CS at Northeastern University, focused on
          distributed systems and AI, and I'm now based in New York. I like hard
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
          Outside of work I'm learning Japanese, and I keep my side projects
          fun; it's how I learn. Skateboarding and live music when I'm not at a
          keyboard.
        </Typography>
        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            width: "8rem",
            textTransform: "capitalize",
            height: "2.5rem",
            color: "primary.light",
            background: "linear-gradient(80deg, #1084d0, #61bffc)",
            "&:hover": {
              boxShadow: "none",
              transform: "scale(0.92)",
            },
            boxShadow: "none",
          }}
          startIcon={<GetAppOutlinedIcon fontSize="small" />}
          href="/assets/images/Contact/Amogh_GNayak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default About;
