import React from "react";
import FloatingDockMenu from "./FlotingDocMenu";
import { Button } from "./ui/button";
import { FlipedText } from "./TextFlip";
import { CodeBlock } from "./ui/code-block";
import { CodeBlockDemo } from "./CodeBlockData";

const HomePage = () => {
  return (
    <div className="mt-10 lg:grid lg:grid-cols-2 lg:justify-around lg:items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
          <span className="px-1">Empower Your</span>{" "}
          {/* <span className="bg-zinc-500 px-2 rounded-full text-center">Code</span>{" "} */}
          <span>
            <FlipedText />
          </span>
          <span className="px-2">Ignit Your Future.</span>
        </h3>
        <h1 className="mt-2 scroll-m-20 text-center text-5xl lg:text-6xl font-medium tracking-tight text-balance">
          Code With Clarity{" "}
          <div>
            <span className="text-accent-devscribe">{`{`}</span> Learn With
            Purpose <span className="text-accent-devscribe">{`}`}</span>
          </div>
        </h1>
        <h2 className="scroll-m-20  pb-2 text-2xl mt-3 font-semibold tracking-tight first:mt-0">
          Join thousands of devs building the future.
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-center text-zinc-700 font-medium lg:text-lg">
          Your journey to pro development starts here. Free resources. Real
          projects. Endless potential. [ Level up ] with hands-on dev knowledge
          free, structured, and powerful.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <Button className="h-10 px-7 cursor-pointer bg-accent-devscribe text-primary hover:bg-accent-devscribe">
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="h-10 px-7 cursor-pointer text-primary"
          >
            Dive into Lessons
          </Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Fuel Your Future With Learning
        </h3>

       <p className="leading-7 [&:not(:first-child)]:mt- text-center text-zinc-700 font-medium lg:text-lg pb-4">
          Unleash Your Inner Developer
        </p>
        <CodeBlockDemo/>
      </div>
    </div>
  );
};

export default HomePage;
