import { Box, Divider, Fade, Typography } from "@mui/material";

const ResoluteAI = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <Box>
          <Typography variant="heading_02_medium" color="primary.dark">
            Full Stack Developer Intern
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            July 2020 - Oct 2020
          </Typography>
        </Box>

        <Divider />

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          As a Full-Stack Intern at ResoluteAI, I helped deliver a healthcare
          SaaS MVP two months early by optimizing React.js frontend performance
          and implementing real-time patient data handling with Firebase. I also
          improved user workflows through seamless authentication and UI/UX
          enhancements, contributing to higher clinician engagement during pilot
          testing.
        </Typography>
      </Box>
    </Fade>
  );
};

export default ResoluteAI;
