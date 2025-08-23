import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

// Import Pages
const Layout = React.lazy(() => import("./pages/layout/Layout.jsx"));
const Home = React.lazy(() => import("./pages/student/Home.jsx"));

const App = () => {
  return (
    <AppContextProvider>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense>
    </AppContextProvider>
  );
};

export default App;
