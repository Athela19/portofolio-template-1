"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tombol panah kustom
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--primarry)] text-white p-2 rounded-full cursor-pointer z-10 hover:bg-white hover:text-[var(--primarry)] transition-colors"
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--primarry)] text-white p-2 rounded-full cursor-pointer z-10 hover:bg-white hover:text-[var(--primarry)] transition-colors"
  >
    ❮
  </div>
);

const projects = [
  {
    title: "Penetration Testing for Web Applications",
    description: "Conducted extensive penetration testing on several web applications to identify vulnerabilities such as SQL injections, XSS, and CSRF.",
    images: ["/vercel.svg", "/file.svg"],
  },
  {
    title: "Penetration Testing for Web Applications",
    description: "Conducted extensive penetration testing on several web applications to identify vulnerabilities such as SQL injections, XSS, and CSRF.",
    images: ["/vercel.svg", "/file.svg"],
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return (
        <div className="dot-custom">
          <div className="dot-inner" />
        </div>
      );
    },
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px", bottom: "-40px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <section
      className="min-h-screen bg-[var(--background)] text-[var(--text)] py-16 sm:py-24 md:py-32 relative overflow-hidden px-4 md:px-16"
      id="projects"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-[var(--primarry)] mb-4"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--primarry)] to-[var(--background)] w-32 mx-auto mb-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="bg-[var(--background)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60 rounded-lg overflow-hidden mb-12">
                <Slider {...settings}>
                  {project.images.map((image, idx) => (
                    <div key={idx}>
                      <img
                        src={image}
                        alt={project.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primarry)] mb-4">{project.title}</h3>
              <p className="text-[var(--teks)] mb-4">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS untuk custom dots */}
      <style jsx>{`
        :global(.slick-dots li) {
          margin: 0 2px;
        }
        :global(.slick-dots li button:before) {
          display: none;
        }
        .dot-custom {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        :global(.slick-dots li.slick-active .dot-inner) {
          background-color: var(--primarry);
        }
      `}</style>
    </section>
  );
}
