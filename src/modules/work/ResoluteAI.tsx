import { Box, Divider, Fade, Typography } from "@mui/material";

const ResoluteAI = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <Box>
          {isMob ? (
            <Typography variant="heading_03_medium" color="primary.dark">
              Full Stack Development Intern
            </Typography>
          ) : null}
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
          Shipped a production-ready clinical MVP for 100+ pilot users ahead of
          schedule. Built accessible React interfaces, implemented Firebase Auth
          with RBAC, and brought frontend test coverage to 85% with Jest.
          Reduced patient no-shows by 25% via Zoom scheduling integration.
        </Typography>
      </Box>
    </Fade>
  );
};

export default ResoluteAI;
