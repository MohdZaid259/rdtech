import React from 'react'
import { Image } from '@imagekit/next';

function HeroSection() {
  return (
    <section
    className="relative h-[80vh] w-full bg-fixed bg-bottom bg-cover"
    style={{
      backgroundImage: `url("https://ik.imagekit.io/or8msinzg/rdtech/aboutBg.jpg?tr=q-auto")`,
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs text-shadow-black">
          Crafting Excellence Together
        </h1>
        <p className="text-white max-w-4xl text-base md:text-lg text-shadow-2xs text-shadow-black">
          For over three decades, RDTech Group has been at the forefront of
          technological innovation, infrastructure excellence, and secure
          operations in the UAE and beyond.
        </p>
      </div>
    </section>
  )
}

export default HeroSection