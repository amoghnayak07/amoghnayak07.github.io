import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AGNThemeProvider } from "./muiTheme/Theme";
import "./assets/scss/global.scss";
import AppRoutes from "./routes";
import ErrorBoundary from "./routes/ErrorBoundary";

const App = () => (
  <BrowserRouter>
    <AGNThemeProvider>
      <ToastContainer autoClose={5000} draggable pauseOnHover icon={false} />
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </AGNThemeProvider>
  </BrowserRouter>
);

export default App;
