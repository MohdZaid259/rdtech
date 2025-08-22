import React from 'react'
import { NumberTicker } from '../magicui/number-ticker'

function StatsSection() {
  return (
    <section className="py-6 pb-0 bg-white">
        <div className="mx-8 bg-gradient-to-tr from-blue-900 via-blue-950 to-blue-900 rounded-lg p-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-white mb-2">
                <NumberTicker value={150} className="text-white" />+
              </div>
              <div className="text-gray-300 text-base md:text-lg">Complete Projects</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-white mb-2">
                <NumberTicker value={100} className="text-white" />+
              </div>
              <div className="text-gray-300 text-base md:text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-white mb-2">
                <NumberTicker value={200} className="text-white" />+
              </div>
              <div className="text-gray-300 text-base md:text-lg">Customer Reviews</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-white mb-2">
                <NumberTicker value={30} className="text-white" />+
              </div>
              <div className="text-gray-300 text-base md:text-lg">Wining Award</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StatsSection