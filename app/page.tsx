"use client";

import React, { useState } from "react";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div>
      <div
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundColor: "#4d6b68",
          backgroundImage: "url(/assets/bg-poster.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/assets/bg-poster.png"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(false)}
        >
          <source 
            src="/assets/background.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Body />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;