import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  halo: {
    position: "fixed",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    background: "rgba(164, 95, 95, 0.25)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "background-color 0.3s ease",
    zIndex: "9999",
    "&:hover": {
      backgroundColor: "rgba(164, 95, 95, 0.5)",
    },
  },
}));

const MouseHalo = () => {
  const classes = useStyles();

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={classes.halo}
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default MouseHalo;
