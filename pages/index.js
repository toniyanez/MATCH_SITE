import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = {
    clinical: {
      title: "Clinical Diagnostics",
      content: "MATCH delivers lab-grade PCR accuracy at the point of care, eliminating the need for centralized testing or refrigeration."
    },
    veterinary: {
      title: "Veterinary Diagnostics",
      content: "Rural-ready diagnostics designed for livestock, wildlife, and companion animals — deploy anywhere, instantly."
    },
    food: {
      title: "Food Safety Industry",
      content: "MATCH enables real-time pathogen detection in food production, helping mitigate costly recalls and ensure consumer trust."
    },
    environment: {
      title: "Environmental Testing",
      content: "Decentralized diagnostics for water, air, and soil — monitor environmental threats affordably and accurately."
    }
  };

  const Button = ({ children, ...props }) => (
    <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      {children}
    </button>
  );

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">MATCH Biosystems</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/"><a className="hover:text-blue-700">Home</a></Link>
          <Link href="/about"><a className="hover:text-blue-700">About</a></Link>
          <Link href="/technology"><a className="hover:text-blue-700">Technology</a></Link>
          <Link href="/investors"><a className="hover:text-blue-700">Investors</a></Link>
          <Link href="/contact"><a className="hover:text-blue-700">Contact</a></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          MATCH Diagnostics Platform
        </motion.h2>
        <motion.p className="max-w-2xl mx-auto text-lg text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          A new standard in molecular diagnostics — fast, portable, and refrigeration-free. MATCH empowers clinical, veterinary, food safety, and environmental applications.
        </motion.p>
      </section>

      {/* Platform Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12 max-w-6xl mx-auto">
        <div className="bg-white border rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">MATCH uxPCR</h3>
          <p>Next-gen molecular diagnostics technology with ultra-fast performance and no cold chain dependency.</p>
        </div>
        <div className="bg-white border rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">MATCH Dx Intelligence</h3>
          <p>AI-supported assay development and platform customization for targeted disease detection.</p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-gray-100 py-12">
        <h4 className="text-center text-2xl font-bold mb-8">Explore Solutions by Industry</h4>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 max-w-7xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          {Object.entries(industries).map(([key, { title }]) => (
            <div key={key} onClick={() => setSelectedIndustry(key)} className="cursor-pointer p-6 bg-white border rounded-lg shadow hover:shadow-lg transition text-center">
              <h5 className="text-xl font-semibold text-blue-700 mb-2">{title}</h5>
              <p className="text-sm text-gray-600">Click to learn more</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Selected Industry Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">{industries[selectedIndustry].title}</h3>
            <p className="text-gray-700">{industries[selectedIndustry].content}</p>
            <div className="mt-6 text-right">
              <Button onClick={() => setSelectedIndustry(null)}>Close</Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8">
        &copy; {new Date().getFullYear()} MATCH Biosystems. All rights reserved.
      </footer>
    </div>
  );
}
