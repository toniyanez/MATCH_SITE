import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  const [hovered, setHovered] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = {
    clinical: "Clinical Diagnostics",
    veterinary: "Veterinary Diagnostics",
    food: "Food Safety Industry",
    environment: "Environmental Testing"
  };

  const icons = {
    clinical: "/icons/clinical.png",
    veterinary: "/icons/veterinary.png",
    food: "/icons/food.png",
    environment: "/icons/environment.png"
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 bg-white border-b shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">MATCH Biosystems</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/"><a className="hover:text-blue-700">Home</a></Link>
          <Link href="/about"><a className="hover:text-blue-700">About</a></Link>
          <Link href="/technology"><a className="hover:text-blue-700">Technology</a></Link>
          <Link href="/investors"><a className="hover:text-blue-700">Investors</a></Link>
          <Link href="/contact"><a className="hover:text-blue-700">Contact</a></Link>
        </div>
      </nav>

      {/* White Landing Section with Central Microplate and Icon Animation */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
        <motion.div
          className="relative w-48 h-48 cursor-pointer"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <Image
            src="/microplate.png"
            alt="Microplate"
            width={192}
            height={192}
            className="z-10 rounded-full"
          />

          {Object.entries(industries).map(([key, label], index) => (
            <motion.div
              key={key}
              className="absolute flex flex-col items-center text-xs font-medium text-gray-700"
              initial={{ opacity: 0, scale: 0 }}
              animate={hovered ? {
                opacity: 1,
                scale: 1,
                x: 
                ["clinical", "veterinary", "food", "environment"][index] === "veterinary" ? -100 :
                ["clinical", "veterinary", "food", "environment"][index] === "food" ? 100 :
                100
              } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedIndustry(key)}
            >
              <Image src={icons[key]} alt={label} width={48} height={48} className="mb-1" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal for Selected Industry */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">{industries[selectedIndustry]}</h3>
            <p className="text-gray-700">Explore how MATCH empowers {industries[selectedIndustry].toLowerCase()} with rapid, reliable diagnostics — no cold chain required.</p>
            <div className="mt-6 text-right">
              <button onClick={() => setSelectedIndustry(null)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} MATCH Biosystems. All rights reserved.
      </footer>
    </div>
  );
}
