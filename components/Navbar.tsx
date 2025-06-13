import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { SignInModal } from "./SignInModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleGetStarted = async () => {
    setIsLoading(true);
    await router.push("/start");
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about", isSection: true },
    { label: "Features", href: "#features", isSection: true },
  ];

  return (
    <>
      <nav className="top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl">
                Itinerarly
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                item.isSection ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-gray-900 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <button
                className="text-sm text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                onClick={handleModal}
              >
                Sign In
              </button>
              <button
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleGetStarted}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Get Started"
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleGetStarted}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Get Started"
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SignInModal openModal={openModal} onClose={handleModal} />
    </>
  );
};

export default Navbar;