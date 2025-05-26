'use client'

import { useSearchParams } from 'next/navigation';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaGeoJson from "./india-states.json";
import { sections } from "@/data/sections";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const selectedSection = sections.find(section => section.id === type);
  const highlightedPlaces = selectedSection?.places || [];

  const isHighlighted = (geo: any) => {
    return highlightedPlaces.some(place => 
      typeof place === 'object' && place !== null && 'state' in place && 
      (place as { state: string }).state === geo.properties.NAME_1
    );
  };

  return (
    <div className="w-full h-screen bg-blue-500">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [82, 22] 
        }}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Geographies geography={indiaGeoJson}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.properties.NAME_1}
                geography={geo}
                fill={isHighlighted(geo) ? "#F53" : "#D6D6DA"}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                style={{
                  default: { 
                    fill: isHighlighted(geo) ? "#F53" : "#D6D6DA", 
                    outline: "none" 
                  },
                  hover: { 
                    fill: "#F53", 
                    outline: "none" 
                  },
                  pressed: { 
                    fill: "#E42", 
                    outline: "none" 
                  },
                }}
                onMouseEnter={() => {
                  console.log(`${geo.properties.NAME_1} - ${geo.properties.TYPE_1}`);
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}