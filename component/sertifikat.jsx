"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/CAP.png", title: "Certified Application Professional" },
  { src: "/CAPen.png", title: "Certified Application Professional (English)" },
  { src: "/CEH.png", title: "Certified Ethical Hacker" },
  { src: "/CRTA.png", title: "CRT Certification" },
  { src: "/eWPT.png", title: "eLearnSecurity Web Penetration Tester" },
];

const Certifications = () => {
  return (
    <section className="w-full py-16 bg-[var(--background)] md:py-24" id="certificate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-[var(--primarry)] mb-4"
          >
            My Certifications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--primarry)] to-[var(--background)] w-32 mx-auto mb-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[var(--background-secondary)] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col items-center">
                <div className="w-full h-48 flex items-center justify-center mb-4">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--primarry)] text-center">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;