"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { sections } from "@/data/sections";

const Page: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState(
    sections[0].backgroundImage
  );
 
  // Initialize refs for each section.
  const sectionRefs = sections.map(() =>
    useInView({
      threshold: 0.5,
      triggerOnce: false,
    })
  );

  // Extract inView values so that useEffect only runs when their boolean values change.
  const inViewStates = sectionRefs.map(ref => ref.inView);

  useEffect(() => {
    const visibleSectionIndex = inViewStates.findIndex(inView => inView);
    if (visibleSectionIndex !== -1) {
      setCurrentBackground(sections[visibleSectionIndex].backgroundImage);
    }
  }, [...inViewStates]);

  return (
    <div>
      <div
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Body
              sectionRefs={sectionRefs}
              sections={sections.map(({ id, title, description, places }) => ({
                id,
                title,
                description,
                places: places.map(place => place.name)
              }))}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;