"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ui/toggle-button";
import { AppWindow, Sidebar } from "lucide-react";
import SIdebarContent from "./SIdebarContent";
import { Button } from "./ui/button";

const Mobilemenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-background border text-primary hover:bg-background cursor-pointer" variant={"outline"}
      >
        <AppWindow className="font-medium" />
      </Button>
      <div>
        <SIdebarContent
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default Mobilemenu;
