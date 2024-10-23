import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white"
      style={{ background: "linear-gradient(to bottom, #191970, #8A2BE2)" }}
    >
      <Image
        src="/bubbles.png"
        alt="Designer Avatar"
        width={200}
        height={160}
        className="rounded slide-up"
      />
      <h2 className="text-4xl font-bold my-4 slide-up">Hello, I'm Floren</h2>
      <p className="slide-up">Wanna know more about me?</p>
      <a href="#about" className="mt-4 text-yellow-400 slide-up">
        Click here to know
      </a>
    </section>
  );
};

export default Hero;
