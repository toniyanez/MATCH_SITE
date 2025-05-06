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
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-800">MATCH Biosystems</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/"><a className="hover:text-blue-700">Home</a></Link>
          <Link href="/about"><a className="hover:text-blue-700">About</a></Link>
          <Link href="/technology"><a className="hover:text-blue-700">Technology</a></Link>
          <Link href="/investors"><a className="hover:text-blue-700">Investors</a></Link>
          <Link href="/contact"><a className="hover:text-blue-700">Contact</a></Link>
        </div>
      </nav>

      {/* Landing Visual Section */}
      <section className="relative text-center py-16 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">MATCH Diagnostics Platform</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            A unified, modular diagnostic solution combining hardware and intelligence — for every environment.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-center justify-center max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900 text-white p-6 rounded-lg shadow cursor-pointer" onClick={() => setSelectedIndustry('clinical')}>
              <h4 className="text-xl font-semibold">Clinical Diagnostics</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900 text-white p-6 rounded-lg shadow cursor-pointer" onClick={() => setSelectedIndustry('environment')}>
              <h4 className="text-xl font-semibold">Environment Testing</h4>
            </motion.div>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-4">MATCH Platform</h3>
            <div className="space-y-4">
              <div className="bg-cyan-600 text-white py-3 rounded shadow">MATCH uxPCR</div>
              <div className="bg-cyan-600 text-white py-3 rounded shadow">MATCH Dx Intelligence</div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900 text-white p-6 rounded-lg shadow cursor-pointer" onClick={() => setSelectedIndustry('veterinary')}>
              <h4 className="text-xl font-semibold">Veterinary Diagnostics</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900 text-white p-6 rounded-lg shadow cursor-pointer" onClick={() => setSelectedIndustry('food')}>
              <h4 className="text-xl font-semibold">Food Safety Industry</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Industry Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
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
