"use client";

import IndiaMap from "@/components/IndiaMap";
import Planner from "@/components/Planner";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen bg-blue-500 overflow-hidden">
      <div className="flex-none">
        <Planner />
      </div>
      <div className="flex-grow min-h-0">
        <IndiaMap />
      </div>
    </div>
  );
}