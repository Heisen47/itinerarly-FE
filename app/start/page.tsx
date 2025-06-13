"use client";

import { Suspense } from "react";
import IndiaMap from "@/components/IndiaMap";
import Planner from "@/components/Planner";
import { useSearchParams } from "next/navigation";

function MapWithParams() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return <IndiaMap type={type} />;
}

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen bg-blue-500 overflow-hidden">
      <div className="flex-none">
        <Planner />
      </div>
      <div className="flex-grow min-h-0">
        <Suspense fallback={
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"/>
              <p className="text-white">Loading map...</p>
            </div>
          </div>
        }>
          <MapWithParams />
        </Suspense>
      </div>
    </div>
  );
}