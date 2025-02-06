import { Route, Routes } from "react-router-dom";
import Home from "../modules/main/Main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
