import React from 'react'

function StatsSection() {
  return (
    <section className="py-10 pb-0 md:pb-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                150+
              </div>
              <div className="text-black text-base md:text-lg">Complete Projects</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                100+
              </div>
              <div className="text-black text-base md:text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                200+
              </div>
              <div className="text-black text-base md:text-lg">Customer Reviews</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
                30+
              </div>
              <div className="text-black text-base md:text-lg">Wining Award</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StatsSection