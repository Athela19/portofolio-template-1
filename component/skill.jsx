"use client";

import { motion } from "framer-motion";

export default function Skill() {
  return (
    <div id="skills">
      {/* Skills Section */}
      <section className="bg-[var(--background)] py-16 border-t border-b border-solid border-[var(--primarry)]" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--teks)]">Specialized In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Penetration Testing',
              'Vulnerability Assessment',
              'Network Security',
              'Web App Security',
              'Red Teaming',
              'Threat Intelligence',
              'Incident Response',
              'Security Auditing'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 hover:bg-gray-700/70 p-4 rounded-lg text-center transition-colors border border-gray-600"
              >
                <div className="text-[var(--primarry)] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-white">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
