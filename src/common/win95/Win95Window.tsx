import { Rnd } from "react-rnd";
import { Win95WindowData, useWindowManager } from "./WindowManagerContext";
import { useWin95Styles } from "./styles";

interface Props {
  data: Win95WindowData;
  index: number;
}

const Win95Window = ({ data, index }: Props) => {
  const { closeWindow, focusWindow } = useWindowManager();
  const classes = useWin95Styles();

  // Cascade each new window down-and-right from the last.
  const offset = index * 30;
  const defaultW = Math.min(window.innerWidth * 0.9, 480);
  const margin = 24; // gap from the right edge

  return (
    <Rnd
      default={{
        x: Math.max(margin, window.innerWidth - defaultW - margin - offset),
        y: 100 + offset,
        width: defaultW,
        height: 320,
      }}
      minWidth={260}
      minHeight={160}
      bounds="window"
      dragHandleClassName="win95-titlebar"
      style={{ zIndex: data.zIndex }}
      onMouseDown={() => focusWindow(data.id)}
    >
      <div className={classes.window}>
        <div className={`win95-titlebar ${classes.titleBar}`}>
          <span className={classes.titleText}>{data.title}</span>
          <button
            className={classes.closeButton}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={() => closeWindow(data.id)}
            onTouchEnd={(e) => {
              e.stopPropagation();
              e.preventDefault();
              closeWindow(data.id);
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className={classes.body}>{data.content}</div>
      </div>
    </Rnd>
  );
};

export default Win95Window;
