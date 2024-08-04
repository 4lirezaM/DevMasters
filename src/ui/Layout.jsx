import { Outlet } from "react-router";
import Footer from "./../features/Footer/Footer";
import Header from "./../features/Header/Header";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
