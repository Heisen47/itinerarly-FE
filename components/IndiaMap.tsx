"use client";

import { useSearchParams } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaGeoJson from "../app/start/india-states.json";
import { sections } from "@/data/sections";
import { useEffect, useState } from "react";
import { LoaderCircle, RotateCcw } from "lucide-react";
import { stateData } from "@/data/states";
import { Plus, Minus } from "lucide-react";
import { ZoomableGroup } from "react-simple-maps";

export default function IndiaMap() {
  const [hoveredPlace, setHoveredPlace] = useState<string | null>(null);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [position, setPosition] = useState({ coordinates: [82, 22], zoom: 1 });
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const selectedSection = sections.find((section) => section.id === type);
  const highlightedPlaces = selectedSection?.places || [];

  const handleStateClick = (geo: any) => {
    const stateName = geo.properties.NAME_1;
    setSelectedState(selectedState === stateName ? null : stateName);
  };

  useEffect(() => {
    const loadMap = async () => {
      try {
        if (!indiaGeoJson) {
          throw new Error("GeoJSON data not found");
        }
        await new Promise((resolve) => setTimeout(resolve, 300));

        setIsMapLoading(false);
      } catch (error) {
        console.error("Error loading map:", error);
        setIsMapLoading(false);
      }
    };

    loadMap();
  }, []);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  }

  function handleResetZoom() {
    setPosition({ coordinates: [82, 22], zoom: 1 });
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY / 120;
    if (delta > 0) {
      handleZoomOut();
    } else {
      handleZoomIn();
    }
  };

  return (
    <div className="w-full h-full bg-blue-500 relative overflow-hidden">
      <div className="absolute top-5 right-5 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-white cursor-pointer rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Zoom in"
        >
          <Plus className="w-6 h-6" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-white cursor-pointer rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Zoom out"
        >
          <Minus className="w-6 h-6" />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-2 bg-white rounded-full cursor-pointer shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Reset zoom"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
      {isMapLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <LoaderCircle className="w-12 h-12 animate-spin text-white" />
            <p className="text-white">Loading map...</p>
          </div>
        </div>
      ) : (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: selectedState ? stateData[selectedState]?.zoom : 800,
            center: selectedState ? stateData[selectedState]?.center : [82, 22],
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={({
              coordinates,
              zoom,
            }: {
              coordinates: [number, number];
              zoom: number;
            }) => setPosition({ coordinates, zoom })}
            maxZoom={4}
            minZoom={1}
          >
            <Geographies geography={indiaGeoJson}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.properties.NAME_1}
                    onClick={() => handleStateClick(geo)}
                    fill={
                      selectedState === geo.properties.NAME_1
                        ? "#4299E1"
                        : "#D6D6DA"
                    }
                    geography={geo}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#E6E6EA",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Add Markers for specific locations */}
            {highlightedPlaces.map((place: any) => (
              <Marker
                key={place.name}
                coordinates={[place.coordinates[0], place.coordinates[1]]}
              >
                <g
                  onMouseEnter={() => setHoveredPlace(place.name)}
                  onMouseLeave={() => setHoveredPlace(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={hoveredPlace === place.name ? 6 : 4}
                    fill={hoveredPlace === place.name ? "#FF8C00" : "#F53"}
                    stroke="#fff"
                    strokeWidth={2}
                    className="transition-all duration-200"
                  />
                  {hoveredPlace === place.name && (
                    <>
                      <rect
                        x="-50"
                        y="-35"
                        width="100"
                        height="22"
                        fill="rgba(0,0,0,0.8)"
                        rx="4"
                      />
                      <text
                        textAnchor="middle"
                        y="-20"
                        style={{
                          fontFamily: "system-ui",
                          fill: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {place.name}
                      </text>
                    </>
                  )}
                </g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      )}
    </div>
  );
}
