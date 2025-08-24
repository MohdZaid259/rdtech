import React from 'react'
import { NumberTicker } from '../magicui/number-ticker'

function StatsSection() {
  return (
    <section className="py-6 pb-0 bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-2 gap-8">
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                <NumberTicker value={200} className="text-accent" />+
              </div>
              <div className="text-gray-800 text-base md:text-lg">Complete Projects</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                <NumberTicker value={32} className="text-accent" />+
              </div>
              <div className="text-gray-800 text-base md:text-lg">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                <NumberTicker value={120} className="text-accent" />+
              </div>
              <div className="text-gray-800 text-base md:text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                <NumberTicker value={200} className="text-accent" />+
              </div>
              <div className="text-gray-800 text-base md:text-lg">Customer Reviews</div>
            </div>
          </div>
      </section>
  )
}

export default StatsSection