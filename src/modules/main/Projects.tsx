import { Box, Grid2, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ProjectItems, ProjectTechs } from "../../constants/PortfolioConstants";
import RelayIntent from "../projects/RelayIntent";
import DungeonMind from "../projects/DungeonMind";
import AIPlatformGame from "../projects/AIPlatformGame";
import DistributedKVStore from "../projects/DistributedKVStore";
import GameNightPlanner from "../projects/GameNightPlanner";
import QollaR from "../work/QollaR";
import { useWindowManager } from "../../common/win95/WindowManagerContext";
import InspectorGoGent from "../projects/InspectorGoGent";

const Projects = (props: any) => {
  const classes = useStyles();
  const { isTab, isMob } = props;
  const { openWindow } = useWindowManager();

  const getProjectComponent = (project: string) => {
    switch (project) {
      case "Inspector GoGent":
        return <InspectorGoGent isMob={isMob} />;
      case "DungeonMind":
        return <DungeonMind isMob={isMob} />;
      case "AI Platformer":
        return <AIPlatformGame isMob={isMob} />;
      case "Relay-Intent":
        return <RelayIntent isMob={isMob} />;
      case "QollaR":
        return <QollaR isMob={isMob} />;
      case "Distributed KV Store":
        return <DistributedKVStore isMob={isMob} />;
      case "Game Night Planner":
        return <GameNightPlanner isMob={isMob} />;
      default:
        return null;
    }
  };

  return (
    <Box flex={1}>
      <Box
        display="flex"
        flexDirection={"column"}
        gap="2rem"
        width="100%"
        overflow={"hidden"}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"heading_01_medium"} color="primary.dark">
            PROJECTS
          </Typography>
          <Typography variant="heading_02_medium" color="primary">
            {ProjectItems.length}
          </Typography>
        </Box>
        <Grid2 container justifyContent={"center"}>
          <Grid2 size={isTab ? 12 : 9}>
            {ProjectItems.map((project: any) => (
              <Box
                key={project}
                className={classes.workTitle}
                onClick={() =>
                  openWindow(
                    `project-${project}`,
                    project,
                    getProjectComponent(project),
                  )
                }
                sx={{
                  cursor: "pointer",
                  borderBottom: "1px solid rgb(0, 0, 0, 0.2)",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="1rem"
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Typography
                    variant={
                      isMob ? "sub_heading_extra_small" : "heading_01_small"
                    }
                    color="primary"
                    display="flex"
                    alignItems={"center"}
                    gap="1rem"
                  >
                    <span>{project}</span>
                  </Typography>
                  <Typography
                    variant={isMob ? "heading_05_medium" : "heading_04_medium"}
                    display={isMob ? "none" : ""}
                    color="primary.main"
                    sx={{ opacity: 0.6 }}
                  >
                    {ProjectTechs[project]}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Projects;
