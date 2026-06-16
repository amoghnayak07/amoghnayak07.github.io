import { Box, Divider, Fade, Typography } from "@mui/material";

const InspectorGoGent = (props: any) => {
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
            Go · Kubernetes · client-go · xAI Grok
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
        >
          A hierarchical multi-agent system in Go where LLM agents (xAI Grok)
          coordinate to diagnose Kubernetes cluster faults. Runs a Kubernetes
          controller via client-go against a live cluster, detecting pod
          failures at a simulated MTTD under 10 seconds and routing diagnosis
          across specialized agents.
        </Typography>
      </Box>
    </Fade>
  );
};

export default InspectorGoGent;
