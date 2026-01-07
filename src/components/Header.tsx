import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ui/toggle-button";
import { Navbar } from "./Navbar";
import Mobilemenu from "./Mobilemenu";

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-4 border-b lg:border-0">
      <Logo className="dark:text-accent-devscribe ">
        <span className="text-3xl font-medium  text-accent-devscribe dark:text-accent-devscribe">{`<`}</span>
        <span className="text-3xl font-medium dark:text-secondary-devscribe">
          DevScribe
        </span>
        <span className="text-3xl font-medium  text-accent-devscribe dark:text-accent-devscribe">{`/>`}</span>
      </Logo>
      <Navbar />
      
      <div className="flex items-center gap-1">
        <ModeToggle />
        <div className="lg:hidden">
          <Mobilemenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
