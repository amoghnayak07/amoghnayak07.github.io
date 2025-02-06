import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { WorkItems } from "../../constants/PortfolioConstants";
import BuRP from "../work/BuRP";
import QollaR from "../work/QollaR";
import LV from "../work/LV";
import PeR from "../work/PeR";
import ResoluteAI from "../work/ResoluteAI";

const Work = (props: any) => {
  const { activeSection } = props;
  const classes = useStyles();

  const [hoverWork, setHoverWork] = useState<any>(null);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  useEffect(() => {
    if (activeSection !== "work") {
      setHoverWork(null);
      setSelectedWork(null);
    }
  }, [activeSection]);

  return (
    <Box display={"flex"} gap="2.5rem" padding="14rem 3rem 0" width="100%">
      <Box width="50%">
        {selectedWork ? (
          selectedWork === "BuRP" ? (
            <BuRP />
          ) : selectedWork === "QollaR" ? (
            <QollaR />
          ) : selectedWork === "LetsVenture" ? (
            <LV />
          ) : selectedWork === "Praan-e-Rakshak" ? (
            <PeR />
          ) : selectedWork === "ResoluteAI" ? (
            <ResoluteAI />
          ) : null
        ) : hoverWork ? (
          hoverWork === "BuRP" ? (
            <BuRP />
          ) : hoverWork === "QollaR" ? (
            <QollaR />
          ) : hoverWork === "LetsVenture" ? (
            <LV />
          ) : hoverWork === "Praan-e-Rakshak" ? (
            <PeR />
          ) : hoverWork === "ResoluteAI" ? (
            <ResoluteAI />
          ) : null
        ) : null}
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        gap="2rem"
        width="50%"
        overflow={"hidden"}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="heading_01_medium" color="primary">
            WORK
          </Typography>
          <Typography variant="heading_02_medium" color="primary">
            5
          </Typography>
        </Box>
        {WorkItems.map((work: any) => (
          <Typography
            variant="heading_01_small"
            color="primary"
            className={
              selectedWork && selectedWork === work
                ? classes.selectedWorkTitle
                : classes.workTitle
            }
            onMouseEnter={() => setHoverWork(work)}
            onMouseLeave={() => setHoverWork(null)}
            onClick={() => {
              // setHoverWork(work);
              setSelectedWork(work);
            }}
          >
            <PlayArrowOutlinedIcon className={"workArrow"} />
            <span>{work}</span>
            <Typography variant="heading_06_medium" className="viewWork">
              click to view
            </Typography>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Work;
