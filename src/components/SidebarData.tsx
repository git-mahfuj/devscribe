import { BookText, Bug, Code, GraduationCap, Rss, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import FloatingDockMenu from "./FlotingDocMenu";

const SidebarData = () => {
  const resourcesLinks = [
    {
      name: "Turorials",
      desc: "Lorem ipsum",
      icon: <GraduationCap />,
      href: "/tutorials",
    },
    {
      name: "Quick Learn",
      desc: "Lorem ipsum",
      icon: <BookText />,
      href: "/tutorials",
    },
    {
      name: "Blogs",
      desc: "Lorem ipsum",
      icon: <Rss />,
      href: "/tutorials",
    },
    {
      name: "Error Resolving",
      desc: "Lorem ipsum",
      icon: <Bug />,
      href: "/tutorials",
    },
  ];
  const developerLinks = [
    {
      name: "Developer Docs",
      desc: "Lorem ipsum",
      icon: <Code />,
      href: "/tutorials",
    },
    {
      name: "Community",
      desc: "Lorem ipsum",
      icon: <Users />,
      href: "/tutorials",
    },
  ];

  return (
    <div>
      <div className="Resources py-3">
        <p className="tracking-wider text-primary dark:text-white font-medium">RESOURCES</p>
        <div className="space-y-4 translate-x-3">
          {resourcesLinks.map((i) => (
            <div
              key={i.name}
              className="cursor-pointer hovereffect hover:translate-x-1  mt-3"
            >
              <Link href={i.href} className="flex gap-3 items-center">
                <div className="icon p-2 bg-zinc-800 text-white rounded-md">
                  {i.icon}
                </div>
                <div className="data">
                  <p className="text-primary dark:text-white text-[1.1rem] font-medium">
                    {i.name}
                  </p>
                  <p className="text-primary dark:text-white text-[.8rem]">{i.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="Resources py-3">
        <p className="tracking-wider text-primary dark:text-white font-medium">DEVELOPERS</p>
        <div className="space-y-4 translate-x-3">
          {developerLinks.map((i) => (
            <div
              key={i.name}
              className="cursor-pointer hovereffect hover:translate-x-1  mt-3"
            >
              <Link href={i.href} className="flex gap-3 items-center">
                <div className="icon p-2 bg-zinc-800 text-white rounded-md">
                  {i.icon}
                </div>
                <div className="data">
                  <p className="text-primary dark:text-white text-[1.1rem] font-medium">
                    {i.name}
                  </p>
                  <p className="text-primary dark:text-white text-[.8rem]">{i.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 right-4">
        <FloatingDockMenu />
      </div>
    </div>
  );
};

export default SidebarData;
