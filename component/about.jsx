"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaCode,
  FaFingerprint,
  FaUserShield,
  FaServer,
  FaGlobe,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      className="min-h-screen bg-[var(--background)] text-[var(--text)] py-16 sm:py-24 md:py-32 relative overflow-hidden px-4 md:px-16"
      id="about"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
          >
            {/* Judul Section */}
            <div className="text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-[var(--primarry)] mb-4"
              >
                About Me
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-[var(--primarry)] to-[var(--background)] w-32 mx-auto lg:mx-0 mb-8 origin-left"
              />
            </div>

            {/* Deskripsi */}
            <div className="space-y-6">
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-[var(--teks)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a{" "}
                <span className="text-[var(--primarry)] font-medium">
                  Cyber Security Expert
                </span>{" "}
                passionate about protecting the digital world through proactive
                security measures and ethical hacking.
              </motion.p>

              <motion.p
                className="text-[var(--teks)] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                With a strong foundation in penetration testing and threat
                analysis, I specialize in identifying vulnerabilities before
                malicious actors do. My philosophy combines{" "}
                <span className="text-[var(--primarry)]">
                  strategic thinking
                </span>{" "}
                with{" "}
                <span className="text-[var(--primarry)]">
                  hands-on execution
                </span>{" "}
                to ensure security is not just implemented, but deeply
                integrated into the system’s core.
              </motion.p>

              <motion.p
                className="text-[var(--teks)] text-sm italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                "Real security means staying one step ahead — not just reacting,
                but anticipating."
              </motion.p>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-[var(--primarry)] group">
                  <img
                    src="/vercel.svg"
                    alt="Cybersecurity Expert"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[var(--primarry)] opacity-10 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Floating Icons */}
              {[FaShieldAlt, FaLock, FaBug, FaCode, FaGlobe, FaUserShield].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    animate={{
                      y: [0, 20, 0],
                      x: [0, index % 2 === 0 ? 15 : -15, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute z-20 ${
                      index === 0 ? "top-10 left-10" : ""
                    } ${index === 1 ? "top-4 right-12" : ""} ${
                      index === 2 ? "bottom-12 left-8" : ""
                    } ${index === 3 ? "bottom-8 right-10" : ""} ${
                      index === 4 ? "top-1/2 -left-4" : ""
                    } ${
                      index === 5 ? "top-1/2 -right-4" : ""
                    } bg-[#ffffff08] backdrop-blur-sm p-3 rounded-full border border-[var(--primarry)] hover:bg-[var(--primarry)] hover:text-white transition-colors duration-300`}
                  >
                    <Icon className="text-xl text-[var(--primarry)] hover:text-white" />
                  </motion.div>
                )
              )}

              {/* Rings */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute w-full h-full rounded-full border-2 border-[var(--primarry)] opacity-20" />
                <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-[var(--primarry)] opacity-30" />
                <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-[var(--primarry)] opacity-40" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hexagon-border {
          width: 100%;
          height: 100%;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            var(--primarry) 20%,
            var(--primarry) 80%,
            transparent 100%
          );
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        .hexagon-inner {
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          background: var(--background);
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
    </section>
  );
}
