import { Box, Divider, Fade, Typography } from "@mui/material";

const GameCreator = (props: any) => {
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
            React · FastAPI · PostgreSQL
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          AI-powered Dungeon Master that generates and runs custom games through
          a web interface. Designed structured prompt templates with output
          schema validation, PostgreSQL-backed session and game state
          persistence, and optimized query indexing for low-latency gameplay.
        </Typography>
      </Box>
    </Fade>
  );
};

export default GameCreator;
