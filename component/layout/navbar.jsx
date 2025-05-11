"use client";
import { useState } from 'react';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="flex justify-between items-center py-4 px-[40px] bg-[var(--background)] border-b border-solid border-[var(--primarry)] fixed top-0 left-0 right-0 z-10">
        <h1 className="text-[var(--teks)] text-2xl font-bold">Kali<span className="text-[var(--primarry)]">Buntu</span>.</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li className="relative group">
            <a href="#home" className="text-[var(--teks)] text-lg">Home</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primarry)] group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <a href="#about" className="text-[var(--teks)] text-lg">About</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primarry)] group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <a href="#skills" className="text-[var(--teks)] text-lg">Skills</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primarry)] group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <a href="#projects" className="text-[var(--teks)] text-lg">Projects</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primarry)] group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <a href="#contact" className="text-[var(--teks)] text-lg">Contact</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primarry)] group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center" onClick={toggleSidebar}>
          <button className="text-[var(--teks)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-500 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      >
        <div 
          className={`fixed right-0 top-0 bottom-0 bg-[var(--background)] w-64 p-6 transition-transform duration-500 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button inside Sidebar */}
          <div className="flex justify-end mb-6">
            <button 
              className="text-[var(--teks)] p-2"
              onClick={toggleSidebar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            <li className="relative pb-2 border-b border-[var(--primarry)] text-center">
              <a href="#home" className="text-[var(--teks)] text-lg" onClick={toggleSidebar}>Home</a>
            </li>
            <li className="relative pb-2 border-b border-[var(--primarry)] text-center">
              <a href="#about" className="text-[var(--teks)] text-lg" onClick={toggleSidebar}>About</a>
            </li>
            <li className="relative pb-2 border-b border-[var(--primarry)] text-center">
              <a href="#skills" className="text-[var(--teks)] text-lg" onClick={toggleSidebar}>Skills</a>
            </li>
            <li className="relative pb-2 border-b border-[var(--primarry)] text-center">
              <a href="#projects" className="text-[var(--teks)] text-lg" onClick={toggleSidebar}>Projects</a>
            </li>
            <li className="relative pb-2 border-b border-[var(--primarry)] text-center">
              <a href="#contact" className="text-[var(--teks)] text-lg" onClick={toggleSidebar}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}