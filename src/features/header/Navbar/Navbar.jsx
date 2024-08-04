import { useState } from 'react';
import Logo from './Components/Logo';
import Menu from './Components/Menu';
import Navbarsearch from './Components/Navbarsearch';
import Sidebar from './Components/Sidebar';
import DarkModeButton from './Components/DarkModeButton';
import Button from '../../../ui/Button';

function Navbar() {
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
          <Menu type={'horizontal'} />
        </div>
      </div>
      <div className="px-1 py-3 md:flex md:items-center md:justify-end md:gap-2">
        <div className="hidden md:block">
          <DarkModeButton type="secondarySquare" />
        </div>
        <div className="hidden md:block">
          <Navbarsearch />
        </div>
        <Button classname="hidden md:block " type="secondary">
          Login/Logup
        </Button>
        <button className="md:hidden">
          <i className="fa-solid fa-user fa-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
