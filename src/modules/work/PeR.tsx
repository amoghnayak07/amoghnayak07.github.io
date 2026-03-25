import { Box, Divider, Fade, Typography } from "@mui/material";

const PeR = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="0.5rem">
        <Box>
          {isMob ? (
            <Typography variant="heading_03_medium" color="primary.dark">
              Full Stack Developer
            </Typography>
          ) : null}
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
          Founded and built a real-time emergency response platform on the MERN
          stack during COVID-19. Cut average response time by 50% with
          WebSockets and optimized data flows. Tracked 500+ active cases with
          live Google Maps routing and real-time dashboards.
        </Typography>
      </Box>
    </Fade>
  );
};

export default PeR;
