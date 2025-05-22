import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Body: React.FC = () => {
  return (
    <div className="relative min-h-[90vh]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-playfair"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Your Personal Travel Companion
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Plan your perfect getaway with personalized recommendations, curated
            itineraries, and local insights.
          </motion.p>

          <motion.div
            className="mt-12 space-y-4 text-xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <p className="font-light">
              Discover hidden gems, popular attractions, and authentic
              experiences. Let us help you create memories that last a lifetime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/start"
              className="inline-block mt-8 px-12 py-5 text-xl font-semibold bg-blue-600 
                rounded-full transition-all duration-300 hover:scale-105 
                hover:bg-blue-700 hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Body;