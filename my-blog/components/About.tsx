"use client"; // Menandai komponen ini sebagai Client Component

import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Image from 'next/image'; // Impor komponen Image

const About: React.FC = () => {
  const isVisible = useOnScreen({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center text-white"
      style={{ background: "linear-gradient(to bottom, #8A2BE2, #191970)" }}
    >
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          About Me ...
        </h2>
        <p className={`text-center max-w-md ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          Hi, my name is Floren Destyanindi, a student from SMKN 21 Jakarta. I like watching dramas, especially romance dramas. I also like groups from South Korea. My favorite groups are Straykids, Itzy, Nmixx, Day6, and Xdinary Heroes.
          Let&apos;s click <a href="#more" className="text-yellow-600 underline">More</a>
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/bub.png" // Ganti dengan path gambar yang sesuai
          alt="Deskripsi Gambar"
          width={400} // Tentukan lebar gambar
          height={300} // Tentukan tinggi gambar
          className={`${isVisible ? 'slide-up' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.5s' }} // Transisi opacity untuk efek muncul
        />
      </div>
    </section>
  );
};

export default About;
