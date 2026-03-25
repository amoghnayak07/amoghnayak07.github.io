import { Box, Divider, Fade, Typography } from "@mui/material";

const GameNightPlanner = (props: any) => {
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
            Java · Android · Firebase
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          A social Android app for organizing game nights with friends. Users
          create events, invite attendees, vote on which game to play via an
          in-app poll, RSVP with yes/maybe/no, and coordinate in a real-time
          group chat tied to each event. Built with a dual Firebase architecture
          - Firestore for structured event and user data, Realtime Database for
          live chat - with Firebase Auth for secure login and a clean
          upcoming/past events dashboard.
        </Typography>
      </Box>
    </Fade>
  );
};

export default GameNightPlanner;
