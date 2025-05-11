"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--primarry)] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Brand */}
          <div className="space-y-4 justify-self-center md:justify-self-start">
            <h2 className="text-[var(--teks)] text-2xl font-bold text-center md:text-left">
              Kali<span className="text-[var(--primarry)]">Buntu</span>.
            </h2>
            <p className="text-[var(--teks)] opacity-80 text-sm text-center md:text-left">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Social Icons */}
              <Link href="#" aria-label="Twitter" className="text-[var(--teks)] hover:text-[var(--primarry)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637A4.077 4.077 0 0021.448 4.1a8.223 8.223 0 01-2.605.975A4.104 4.104 0 0016.616 4c-2.266 0-4.102 1.807-4.102 4.032 0 .316.036.623.104.918-3.41-.17-6.437-1.773-8.46-4.21a3.974 3.974 0 00-.555 2.028c0 1.398.724 2.633 1.823 3.356a4.093 4.093 0 01-1.858-.506v.05c0 1.955 1.402 3.586 3.26 3.956a4.1 4.1 0 01-1.852.07c.523 1.606 2.037 2.774 3.833 2.808A8.233 8.233 0 012 18.407 11.616 11.616 0 008.29 20" />
                </svg>
              </Link>
              <Link href="#" aria-label="GitHub" className="text-[var(--teks)] hover:text-[var(--primarry)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.216.682-.48 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.027 1.532 1.027.892 1.523 2.341 1.083 2.91.828.091-.647.35-1.083.636-1.332-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.254-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844a9.54 9.54 0 012.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.396.1 2.65.64.698 1.028 1.591 1.028 2.682 0 3.841-2.339 4.687-4.566 4.935.359.31.678.921.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.577.688.479A10.013 10.013 0 0022 12.012C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-[var(--teks)] hover:text-[var(--primarry)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-[var(--teks)] hover:text-[var(--primarry)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 4a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="text-[var(--teks)] font-semibold mb-4 text-center">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[var(--teks)] hover:text-[var(--primarry)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div className=" justify-self-center md:justify-self-end">
            <h3 className="text-[var(--teks)] font-semibold mb-4 md:text-right text-center">Contact</h3>
            <ul className="space-y-3 text-sm md:text-right text-center">
              <li className="flex md:justify-end justify-center items-center text-[var(--teks)]">
                <span>email@example.com</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </li>
              <li className="flex md:justify-end justify-center items-center text-[var(--teks)]">
                <span>+123 456 7890</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="mt-10 pt-6 text-center text-sm text-[var(--teks)] opacity-70">
          &copy; {new Date().getFullYear()} KaliBuntu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}