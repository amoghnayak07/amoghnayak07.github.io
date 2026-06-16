import { Box, Divider, Fade, Typography } from "@mui/material";

const DungeonMind = (props: any) => {
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
            React · FastAPI · PostgreSQL · HuggingFace
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
        >
          An AI D&D sandbox where two LLMs compete as Dungeon Master and Player
          via the HuggingFace Inference API, built for real-time behavior
          comparison. A turn-based engine enforces JSON contracts and persists
          state to PostgreSQL, with per-turn behavior tagging, reasoning
          capture, and world-state tracking across sessions for per-model
          observability.
        </Typography>
      </Box>
    </Fade>
  );
};

export default DungeonMind;
