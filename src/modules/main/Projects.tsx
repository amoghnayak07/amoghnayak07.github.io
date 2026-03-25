import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid2,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { ProjectItems, ProjectTechs } from "../../constants/PortfolioConstants";
import RelayIntent from "../projects/RelayIntent";
import GameCreator from "../projects/GameCreator";
import AIPlatformGame from "../projects/AIPlatformGame";
import DistributedKVStore from "../projects/DistributedKVStore";
import GameNightPlanner from "../projects/GameNightPlanner";
import QollaR from "../work/QollaR";

const Projects = (props: any) => {
  const classes = useStyles();

  const { isTab, isMob, activeSection } = props;

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (activeSection === "projects") {
      setExpanded(false);
      setSelectedProject(null);
    }
  }, [activeSection]);

  const handleChange =
    (panel: string, index: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (isExpanded) {
        setTimeout(() => {
          const el = scrollToRef.current[index];
          const yOffset = -60;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    };

  const getProjectComponent = (project: string) => {
    switch (project) {
      case "Game Creator":
        return <GameCreator isMob={isMob} />;
      case "AI Platform Game":
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

  const scrollToRef: any = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <Box
      display={"flex"}
      gap="2.5rem"
      padding={isTab ? "6rem 0 0" : "8rem 3rem 0"}
      width="100%"
    >
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
        <Grid2 container>
          {isTab ? null : <Grid2 size={2} />}
          <Grid2 size={isTab ? 12 : 8}>
            {ProjectItems.map((project: any, index: any) => (
              <Accordion
                key={project}
                expanded={expanded === project}
                classes={{ expanded: classes.expandedAccordion }}
                onChange={handleChange(project, index)}
                sx={{
                  overflow: "hidden",
                  background: "transparent",
                  boxShadow: "none",
                  borderBottom: "1px solid rgb(0, 0, 0, 0.2)",
                }}
              >
                <AccordionSummary
                  expandIcon={null}
                  className={
                    selectedProject === project
                      ? classes.selectedWorkTitle
                      : classes.workTitle
                  }
                  onClick={() => {
                    if (project === selectedProject) setSelectedProject(null);
                    else setSelectedProject(project);
                  }}
                  ref={(el) => (scrollToRef.current[index] = el)}
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
                      {selectedProject && selectedProject === project ? (
                        <ArrowDropDownOutlinedIcon fontSize="large" />
                      ) : (
                        <PlayArrowOutlinedIcon />
                      )}
                      <span>{project}</span>
                    </Typography>
                    <Typography
                      variant={
                        isMob ? "heading_05_medium" : "heading_04_medium"
                      }
                      display={isMob ? "none" : ""}
                      color="primary.main"
                      sx={{ opacity: 0.6 }}
                    >
                      {ProjectTechs[project]}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                  {getProjectComponent(project)}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid2>
          {isTab ? null : <Grid2 size={2} />}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Projects;
