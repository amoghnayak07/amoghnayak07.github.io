import { Box, Divider, Fade, Typography } from "@mui/material";

const PeR = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="0.5rem">
        <Box>
          <Typography variant="heading_02_medium" color="primary.dark">
            Founder, Full Stack Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Oct 2020 - May 2021
          </Typography>
        </Box>

        <Divider />

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          As Founder & Full-Stack Developer of Praan-e-Rakshak, I built a
          MERN-based rescue coordination platform that enabled real-time
          tracking of stray animals and distress calls. The system reduced
          response times by 50% and helped manage health and territory data for
          over 55 dogs. It empowered NGOs and volunteers with a simple,
          effective tool to scale their rescue operations.
        </Typography>
      </Box>
    </Fade>
  );
};

export default PeR;
