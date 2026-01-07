import React from "react";
import { cn } from "@/lib/utils";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-3 max-w-360 mx-auto", className)}>{children}</div>;
};

export default Container;
