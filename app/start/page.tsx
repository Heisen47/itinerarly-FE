'use client'

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaGeoJson from "./india-states.json";

export default function Page() {
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
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
                style={{
                  default: { 
                    fill: "#D6D6DA", 
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