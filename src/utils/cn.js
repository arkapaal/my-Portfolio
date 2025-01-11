// ExampleComponent.jsx
import React from "react";
import { cn } from "../utils/cn";

const ExampleComponent = ({ isActive }) => {
  return (
    <div className={cn("p-4", isActive ? "bg-blue-500" : "bg-gray-500")}>
      <h1 className={cn("text-white", "font-bold")}>Hello, World!</h1>
    </div>
  );
};

export default ExampleComponent;
