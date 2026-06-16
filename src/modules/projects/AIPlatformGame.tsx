import { Box, Divider, Fade, Typography } from "@mui/material";

const AIPlatformGame = (props: any) => {
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
            Python · PyTorch · Pygame · Deep Q-Learning
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
        >
          Built a platform game where a Deep Q-Network (DQN) agent learns to
          navigate 8 increasingly complex levels. Implemented Double DQN with
          soft target network updates to prevent Q-value overestimation, an
          experience replay buffer for stable training, and a camera-based
          perception system for hazard detection, gap analysis, and platform
          layout. Designed a shaped reward system balancing forward progress,
          jump timing, and level completion.
        </Typography>
      </Box>
    </Fade>
  );
};

export default AIPlatformGame;
