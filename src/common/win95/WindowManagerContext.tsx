import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface Win95WindowData {
  id: string;
  title: string;
  content: React.ReactNode;
  zIndex: number;
}

interface WindowManagerValue {
  windows: Win95WindowData[];
  openWindow: (id: string, title: string, content: React.ReactNode) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

// Windows live ABOVE the CRT scanline overlay (z 9998), per design.
const BASE_Z = 10000;

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

export const WindowManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [windows, setWindows] = useState<Win95WindowData[]>([]);
  const [_topZ, setTopZ] = useState(BASE_Z);

  const focusWindow = useCallback((id: string) => {
    setTopZ((prevTop) => {
      const nextZ = prevTop + 1;
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: nextZ } : w)),
      );
      return nextZ;
    });
  }, []);

  const openWindow = useCallback(
    (id: string, title: string, content: React.ReactNode) => {
      setTopZ((prevTop) => {
        const nextZ = prevTop + 1;
        setWindows((prev) => {
          // Already open? Just raise + refresh content, don't duplicate.
          if (prev.some((w) => w.id === id)) {
            return prev.map((w) =>
              w.id === id ? { ...w, content, zIndex: nextZ } : w,
            );
          }
          return [...prev, { id, title, content, zIndex: nextZ }];
        });
        return nextZ;
      });
    },
    [],
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const value = useMemo(
    () => ({ windows, openWindow, closeWindow, focusWindow }),
    [windows, openWindow, closeWindow, focusWindow],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error(
      "useWindowManager must be used within WindowManagerProvider",
    );
  }
  return ctx;
};
