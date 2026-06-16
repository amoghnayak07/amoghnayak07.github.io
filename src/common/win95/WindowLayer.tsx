import { useWindowManager } from "./WindowManagerContext";
import Win95Window from "./Win95Window";

const WindowLayer = () => {
  const { windows } = useWindowManager();
  return (
    <>
      {windows.map((w, i) => (
        <Win95Window key={w.id} data={w} index={i} />
      ))}
    </>
  );
};

export default WindowLayer;
