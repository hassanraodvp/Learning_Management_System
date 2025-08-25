import Header from "../components/student/Header";
import Footer from "../components/student/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
