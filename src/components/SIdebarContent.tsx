"use client";
import React from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/toggle-button";
import { Button } from "./ui/button";
import SidebarData from "./SidebarData";

const Sidebar = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  const pathName = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 h-screen z-50 w-full bg-black/10 shadow-lg transform transition-transform ease-in-out duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-2/3 bg-secondary dark:bg-zinc-900 h-screen absolute top-0 right-0 ">
        <div className="flex justify-between items-center p-5 border-b dark:border-white/12">
          <div className="flex gap-4 items-center">
            <Button className="px-7 bg-zinc-800 font-medium text-md cursor-pointer   dark:text-white hover:bg-zinc-800">Login</Button>
            <Button className="px-7 bg-accent-devscribe font-medium text-md cursor-pointer   dark:text-white hover:bg-accent-devscribe">SIgnUp</Button>
          </div>
          <X
            className="hovereffect text hover:transform-3d hover:rotate-90 cursor-pointer dark:text-white dark:text-zinc-500"
            size={35}
            onClick={onClose}
          />
        </div>
        <div className="px-7 flex flex-col gap-4">
          <SidebarData />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
