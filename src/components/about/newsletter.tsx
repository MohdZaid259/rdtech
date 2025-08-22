import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-black pt-16'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 -mb-1 lg:grid-cols-3 gap-6 items-center">
          {/* CTA */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Let's Build the Future Together
            </h2>
            <p className="text-gray-400 max-w-xl mb-0">
              From iconic landmarks to mission-critical infrastructure, we partner with clients to create secure, efficient, and sustainable solutions.
            </p>
          </div>

          {/* Newsletter */}
          <form className="lg:col-span-1 lg:justify-self-end">
            <div className="flex w-[80%] md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 border w-36 md:w-80 border-accent text-sm placeholder:text-amber-100 px-2 md:px-6 py-1 md:py-2 rounded-l-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-accent font-bold text-sm md:text-base hover:bg-accent/90 text-black px-2 md:px-6 py-1 md:py-2 rounded-r-full tracking-wider"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}