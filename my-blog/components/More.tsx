"use client"; // Menandai komponen ini sebagai Client Component

import React from 'react';
import useOnScreen from '../hooks/useOnScreen'; // Pastikan path ini sesuai

const More: React.FC = () => {
  const isVisible = useOnScreen({ threshold: 0.1 }); // Gunakan threshold sesuai kebutuhan

  return (
    <section
      id="more"
      className="min-h-screen flex flex-col justify-center items-center text-white"
      style={{ background: "linear-gradient(to bottom, #191970, #8A2BE2)" }}
    >
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
        ☆✬◦°˚°◦..◦°˚°◦✬☆
        </h2>
        
        <p className={`text-center max-w-md ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          Sometimes I vibe to viral songs, too! I'm also interested in learning more about Korean, Japanese, and Chinese culture and language. If you share similar interests, feel free to reach out!
        </p>
      </div>
      <div className="flex justify-end w-full p-4">
        <img 
          src="/bubl.png" // Ganti dengan path gambar yang sesuai
          alt="Descriptive Alt Text"
          className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: '250px', marginTop: '-150px' }} // Sesuaikan ukuran dan margin sesuai kebutuhan
        />
      </div>
    </section>
  );
};

export default More;
