import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  Waves,
  Landmark,
  Palmtree,
  Compass,
  Users,
  LoaderCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

type SectionType = "hillstations" | "beaches" | "wildlife" | "historical";

const features = [
  {
    icon: Mountain,
    label: "AI-Powered Planning",
    description:
      "Personalized itineraries crafted by AI based on your preferences",
  },
  {
    icon: Waves,
    label: "Budget Control",
    description: "Clear cost estimates across different budget tiers",
  },
  {
    icon: Landmark,
    label: "Local Insights",
    description: "Authentic recommendations for food, culture, and hidden gems",
  },
  {
    icon: Palmtree,
    label: "Group Planning",
    description: "Collaborate with friends and family in real-time",
  },
  {
    icon: Compass,
    label: "Interactive Maps",
    description: "Visual journey planning with state-wise exploration",
  },
  {
    icon: Users,
    label: "Community Recommendations",
    description:
      "Community-driven suggestions for off-the-beaten-path experiences",
  },
];

interface BodyProps {
  sectionRefs: Array<{ ref: (node?: Element | null) => void }>;
  sections: Array<{
    id: string;
    title: string;
    description: string;
    places: string[];
  }>;
}

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
  slideIn: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Body: React.FC<BodyProps> = ({ sectionRefs, sections }) => {
  const router = useRouter();

  const handleDestinationChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsLoading(true);
    const selectedType = e.target.value as SectionType;
    try {
      await router.push(`/start?type=${selectedType}`);
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background with Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label="Background video showing travel destinations"
          className="object-cover w-full h-full"
          poster="/beach-poster.jpg"
        >
          <source src="/beach-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 space-y-12">
          {/* Welcome Section */}
          <motion.div
            {...animationVariants.slideIn}
            className="text-center md:text-left space-y-6 md:pl-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-wide">
              Welcome to Itinerarly
            </h1>
            <p className="text-lg md:text-xl leading-relaxed font-light max-w-3xl">
              Your intelligent travel companion for exploring the diverse
              landscapes and rich cultural heritage of India.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            id="features"
            {...animationVariants.fadeIn}
            className="space-y-8 md:pl-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-300 hover:shadow-xl"
                >
                  <feature.icon className="w-8 h-8 mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-3">
                    {feature.label}
                  </h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Destination Selection */}
          <div className="container mx-auto px-4 py-5">
            <hr />
            <br />
            <h1 className="text-3xl text-center">
              Ready to explore the rich landscape of the subcontinent?
            </h1>
            <br />
            <hr />
            <div className="space-y-6 text-center">
              <h1 className="text-2xl p-6 font-semibold">
                Where are we planning to go?
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center w-full max-w-md mx-auto"
              >
                <select
                  onChange={handleDestinationChange}
                  className="w-full px-4 py-3 text-center rounded-lg bg-white/10 backdrop-blur-sm text-black border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  defaultValue=""
                  disabled={isLoading}
                >
                  <option value="" disabled>
                    Select your destination type
                  </option>
                  <option value="hillstations">Hill Stations</option>
                  <option value="beaches">Beaches</option>
                  <option value="wildlife">Wildlife Sanctuaries</option>
                  <option value="historical">Historical Sites</option>
                </select>

                {/* Loading Spinner */}
                {isLoading && (
                  <>
                    {/* Full page overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />
                    {/* Centered loader */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                    >
                      <LoaderCircle className="w-12 h-12 text-white animate-spin" />
                      <p className="text-white mt-4 text-center">
                        Loading your destination...
                      </p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-center space-y-6 mx-auto max-w-xl"
          >
            <h2 className="text-2xl font-semibold">
              Not Sure where to go?
            </h2>
            <Link
              href="/start"
              className="inline-block px-10 py-4 text-lg font-medium bg-blue-600/90 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:scale-105 backdrop-blur-sm"
            >
              Click me!
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Body;
