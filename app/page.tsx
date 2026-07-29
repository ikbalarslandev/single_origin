"use client";

import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* logo */}
      <Image
        src="/long_logo.png"
        alt="Single Origin Istanbul"
        width={1000}
        height={1000}
        className="object-contain"
        priority
      />
      <div className="flex-1 flex flex-col items-center justify-start">
        <p className="text-center text-gray-600 mb-6 mx-5">
          Experience the story behind everyday ingredients
        </p>
        {/* Social Links - Horizontal Icons Only */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://instagram.com/s.o.ist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blood-light hover:opacity-70 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://tiktok.com/@s.o.ist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blood-light hover:opacity-70 transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok size={28} />
          </a>

          <a
            href="https://youtube.com/@s.o.istanbul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blood-light hover:opacity-70 transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube size={28} />
          </a>

          <a
            href="https://wa.me/905524260406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blood-light hover:opacity-70 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
        {/* Divider */}
        <div className="relative w-full max-w-md my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center ">
            <span className="px-3 bg-white text-blood-light rounded-full py-1  font-semibold">
              Events
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 w-full max-w-md px-4">
          {/* Sugar Event Button */}
          <button
            onClick={() => console.log("Sugar event clicked")}
            className="flex items-center justify-center gap-3 w-full max-w-md bg-blood-light hover:bg-blood-dark text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Sugar</span>
          </button>

          {/* Coffee Event Button */}
          <button
            onClick={() => console.log("Coffee event clicked")}
            className="flex items-center justify-center gap-3 w-full max-w-md bg-blood-light hover:bg-blood-dark text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg mt-3"
          >
            <span>Coffee</span>
          </button>
        </div>
      </div>
      {/* Footer */}
      <p className="text-center text-gray-500 text-xs py-4">
        © {new Date().getFullYear()} Single Origin Istanbul
      </p>
    </div>
  );
}
