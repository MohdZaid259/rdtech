import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your needs and goals",
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "Planning the perfect solution approach",
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700"
    },
    {
      number: "03",
      title: "Execution", 
      description: "Building with precision and care",
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Launching your vision to life",
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700"
    }
  ];

export default function WorkingSection () {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 ">
        How We Work
      </h2>
      <p className='text-gray-800 mb-8 leading-relaxed text-center'> A simple, structured process to turn ideas into results.</p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`
              ${step.bgColor} 
              text-white 
              p-6 
              rounded-lg 
              flex-1 
              min-w-[250px] 
              max-w-[300px] 
              relative 
              shadow-lg 
              hover:shadow-xl 
              transition-all 
              duration-300 
              hover:scale-105
            `}
          >
            {/* Step Number */}
            <div className="text-4xl font-bold mb-2 opacity-90">
              {step.number}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {step.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm opacity-90 mb-6">
              {step.description}
            </p>
            
            {/* Arrow Icon */}
            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};