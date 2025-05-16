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
import { WorkItems } from "../../constants/PortfolioConstants";
import BuRP from "../work/BuRP";
import QollaR from "../work/QollaR";
import LV from "../work/LV";
import PeR from "../work/PeR";
import ResoluteAI from "../work/ResoluteAI";

const Work = (props: any) => {
  const classes = useStyles();

  const { isTab, isMob, activeSection } = props;

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  useEffect(() => {
    if (activeSection === "work") {
      setExpanded(false);
      setSelectedWork(null);
    }
  }, [activeSection]);

  const handleChange =
    (panel: string, index: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (isExpanded) {
        // delay to let the accordion expand first
        setTimeout(() => {
          const el = scrollToRef.current[index];
          const yOffset = -60; // Adjust based on navbar height
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    };

  const getWorkComponent = (work: string) => {
    switch (work) {
      case "BuRP":
        return <BuRP isMob={isMob} />;
      case "QollaR":
        return <QollaR isMob={isMob} />;
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
            WORK
          </Typography>
          <Typography variant="heading_02_medium" color="primary">
            5
          </Typography>
        </Box>
        <Grid2 container>
          {isTab ? null : <Grid2 size={2} />}
          <Grid2 size={isTab ? 12 : 8}>
            {WorkItems.map((work: any, index: any) => (
              <Accordion
                expanded={expanded === work}
                classes={{ expanded: classes.expandedAccordion }}
                onChange={handleChange(work, index)}
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
                    selectedWork === work
                      ? classes.selectedWorkTitle
                      : classes.workTitle
                  }
                  onClick={() => {
                    if (work === selectedWork) setSelectedWork(null);
                    else setSelectedWork(work);
                  }}
                  ref={(el) => (scrollToRef.current[index] = el)}
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
                    {selectedWork && selectedWork === work ? (
                      <ArrowDropDownOutlinedIcon fontSize="large" />
                    ) : (
                      <PlayArrowOutlinedIcon />
                    )}
                    <span>{work}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    paddingTop: 0,
                  }}
                >
                  {getWorkComponent(work)}
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

export default Work;
