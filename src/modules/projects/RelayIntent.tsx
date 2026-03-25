import { Box, Divider, Fade, Typography } from "@mui/material";

const RelayIntent = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        gap="1rem"
        p="0 1rem 0.5rem"
      >
        {isMob ? (
          <Typography variant="heading_04_medium" color="primary.dark">
            Flask · React · Firebase · Gemini API
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          Real-time multi-user chat app with an embedded LLM intent engine.
          Built context-aware prompt orchestration over live conversation state,
          a hybrid Firebase/stream data architecture for low latency, and
          cookie-based JWT + CSRF auth. Deployed on Netlify and Render with
          environment-isolated configs.
        </Typography>
      </Box>
    </Fade>
  );
};

export default RelayIntent;
