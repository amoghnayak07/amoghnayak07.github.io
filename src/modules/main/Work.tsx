import { Box, Grid2, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { WorkItems, WorkTitles } from "../../constants/PortfolioConstants";
import BuRP from "../work/BuRP";
import LV from "../work/LV";
import PeR from "../work/PeR";
import ResoluteAI from "../work/ResoluteAI";
import { useWindowManager } from "../../common/win95/WindowManagerContext";

const Work = (props: any) => {
  const classes = useStyles();
  const { isTab, isMob } = props;
  const { openWindow } = useWindowManager();

  const getWorkComponent = (work: string) => {
    switch (work) {
      case "BuRP":
        return <BuRP isMob={isMob} />;
      case "LetsVenture":
        return <LV isMob={isMob} />;
      case "Praan-e-Rakshak":
        return <PeR isMob={isMob} />;
      case "ResoluteAI":
        return <ResoluteAI isMob={isMob} />;
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
            WORK
          </Typography>
          <Typography variant="heading_02_medium" color="primary">
            {WorkItems.length}
          </Typography>
        </Box>
        <Grid2 container justifyContent={"center"}>
          <Grid2 size={isTab ? 12 : 9}>
            {WorkItems.map((work: any) => (
              <Box
                key={work}
                className={classes.workTitle}
                onClick={() =>
                  openWindow(`work-${work}`, work, getWorkComponent(work))
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
                  width="100%"
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
                    {work}
                  </Typography>
                  <Typography
                    variant={isMob ? "heading_05_medium" : "heading_04_medium"}
                    display={isMob ? "none" : ""}
                    color="primary.main"
                    sx={{ opacity: 0.6 }}
                  >
                    {WorkTitles[work]}
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

export default Work;
