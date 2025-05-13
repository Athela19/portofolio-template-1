"use client";

import { motion } from "framer-motion";

export default function Skill() {
  return (
    <div id="skills">
      {/* Skills Section */}
      <section className="bg-[var(--background)] py-16 border-t border-b border-solid border-[var(--primarry)] md:py-24" >
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-[var(--primarry)] mb-4 text-center"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--primarry)] to-[var(--background)] w-32 mx-auto mb-8 origin-left"
          />
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">    {/*disini ganti skill atau tambahin  */}
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
                <h3 className="font-medium text-[var(--teks)]">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
