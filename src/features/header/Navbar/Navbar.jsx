import { useContext, useState } from "react";
import Logo from "./Components/Logo";
import Menu from "./Components/Menu";
import Navbarsearch from "./Components/Navbarsearch";
import Sidebar from "./Components/Sidebar";
import DarkModeButton from "./Components/DarkModeButton";
import Button from "../../../ui/Button";
import { AppContext } from "../../../context/AppContext";

function Navbar() {
  const { userInfo } = useContext(AppContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleSidebar() {
    console.log(isSidebarOpen);
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }
  return (
    <div className="flex items-center justify-between p-1 md:pr-2 dark:bg-slate-900">
      {/* mobile size */}
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="md:hidden">
        <button className="px-1 py-3" onClick={handleSidebar}>
          <i className="fa-solid fa-xl fa-bars"></i>
        </button>
      </div>
      <div className="px-1 py-3 md:flex md:items-center md:justify-start">
        <Logo />
        {/* desktop size */}
        <div className="hidden md:block">
          <Menu type={"horizontal"} />
        </div>
      </div>
      <div className="px-1 py-3 md:flex md:items-center md:justify-end md:gap-2">
        <div className="hidden md:block">
          <DarkModeButton type="secondarySquare" />
        </div>
        <div className="hidden md:block">
          <Navbarsearch />
        </div>
        {userInfo ? (
          <Button
            classname="hidden md:flex overflow-hidden w-32 truncate "
            type="secondary"
          >
            {userInfo.username}
          </Button>
        ) : (
          <Button classname="hidden md:flex w-32" to="/signin" type="secondary">
            Sign in/Sign up
          </Button>
        )}
        {userInfo ? (
          <Button classname=" md:hidden ">
            <i className="fa-solid fa-user fa-xl"></i>
          </Button>
        ) : (
          <Button classname=" md:hidden " to="/signin">
            <i className="fa-solid fa-user fa-xl"></i>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
