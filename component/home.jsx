"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--teks)] pt-[70px] sm:pt-[90px]" id="home">
      <section className="container mx-auto px-4 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Bagian Kiri - Foto Profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[var(--primarry)]">
              <Image
                src="/vercel.svg"  /*disini masukin foto  */
                alt="Cybersecurity Expert"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[var(--primarry)] opacity-10 hover:opacity-0 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Bagian Kanan - Teks */}
          <div className="w-full md:w-1/2 space-y-5 sm:space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Hi, I'm <span className="text-[var(--primarry)]">Anonim</span>    {/*disini masukin link Nama  */}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl h-10 sm:h-12"
            >
              <TypeAnimation
                sequence={[
                  "Cyber Security Expert",
                  1500,
                  "Penetration Tester",
                  1500,
                  "Ethical Hacker",
                  1500,
                  "Security Researcher",
                  1500,
                ]}  /*disini masukin pekerjaan atau keahlian, bisa ditambah juga  */
                wrapper="span"
                speed={40}
                deletionSpeed={60}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                className="text-[var(--primarry)] font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[var(--teks)]text-base sm:text-lg md:text-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quae neque voluptatum cumque fugiat quo voluptates eius magni.
                 {/*disini masukin deskripsi singkat  */}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 pt-4"
            >
              <a href="#">   {/*disini masukin link linkedin  */}
                <button className="px-6 py-3 bg-[var(--primarry)] text-[var(--teks)] hover:bg-[var(--primarry)]/20 rounded-lg font-medium transition-all w-full sm:w-auto">
                  Contact Me
                </button>
              </a>
              <a href="/CV.PDF" download>   {/*disini ganti sama nama file cv  */}
                <button className="px-6 py-3 bg-transparent border-2 border-[var(--primarry)] text-[var(--primarry)] hover:bg-[var(--primarry)]/10 rounded-lg font-medium transition-all w-full sm:w-auto">
                  Download CV
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
