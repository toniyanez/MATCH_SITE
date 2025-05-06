import { useState } from 'react';
import { motion } from "framer-motion";

export default function HomePage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = {
    clinical: {
      title: "Clinical Diagnostics",
      content: "Rapid detection for infectious diseases with portable MATCH kits. Reduce lab dependency and enable near-patient testing."
    },
    veterinary: {
      title: "Veterinary Diagnostics",
      content: "Field-ready testing for livestock and pets. Fast results with no cold chain required."
    },
    food: {
      title: "Food Safety Industry",
      content: "Prevent contamination and ensure product integrity with onsite MATCH diagnostics."
    },
    environment: {
      title: "Environmental Testing",
      content: "Monitor environmental threats such as water or soil contamination, anytime and anywhere."
    }
  };

  const Button = ({ children, ...props }) => (
    <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      {children}
    </button>
  );

  return (
    <div className="p-8 space-y-8 font-sans">
      <nav className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">MATCH Biosystems</h1>
        <div className="space-x-4">
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Technology</Button>
          <Button>Investors</Button>
          <Button>Contact</Button>
        </div>
      </nav>

      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold mb-2">MATCH Diagnostics Platform</h1>
        <p className="text-lg">A modular platform featuring MATCH uxPCR and MATCH Dx Intelligence, empowering diagnostics across key industries.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="p-6 border rounded shadow">
          <h2 className="text-2xl font-semibold">MATCH uxPCR</h2>
          <p>Ultra-portable, fast, and cold-chain-free molecular diagnostics system.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h2 className="text-2xl font-semibold">MATCH Dx Intelligence</h2>
          <p>Custom assay development, data intelligence, and platform optimization services.</p>
        </div>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {Object.entries(industries).map(([key, { title }]) => (
          <div key={key} onClick={() => setSelectedIndustry(key)} className="cursor-pointer border rounded p-6 text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        ))}
      </motion.div>

      {selectedIndustry && (
        <motion.div className="mt-8 p-6 border rounded-lg shadow-md bg-white" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
          <h3 className="text-2xl font-bold mb-2">{industries[selectedIndustry].title}</h3>
          <p>{industries[selectedIndustry].content}</p>
          <Button onClick={() => setSelectedIndustry(null)} className="mt-4">Back to Overview</Button>
        </motion.div>
      )}
    </div>
  );
}
