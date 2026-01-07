import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Facebook , Instagram , Linkedin , } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FloatingDockMenu() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/mahfujur.rahman.949195",
    },
    
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/unemployed.mahfuj",
    },

    {
      title: "LinkedIn",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mahfujur-rahman-364233357",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/git-mahfuj",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
