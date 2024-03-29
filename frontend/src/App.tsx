import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CustomLinearLoader from "./components/customLinearProgress/CustomLinearLoader";

// Import with lazy loading
const Home = lazy(() => import("./pages/home/Home"));
const Companies = lazy(() => import("./pages/companies/Companies"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Companies />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
