import React from 'react'
import { SafeImage } from '../ui/safe-image'

function BackgroundSection() {
  return (
    <section id="background" className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
                Who We Are
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Founded in 1993, RDTECH Group has established itself as a trusted leader in mission-critical technology and infrastructure solutions. With a strong focus on ‘Zero Downtime’ delivery, we empower businesses to operate without disruption, achieving over AED 100 million in annual turnover and the trust of leading enterprises across the region.
              </p>
              <p className='text-gray-800 mb-6 leading-relaxed'>Backed by a team of 120+ experts and recognized as one of the few Unified Partners in the Middle East, RDTECH combines deep industry expertise with the highest level of vendor partnerships. Our dedicated support and commitment to excellence continue to drive innovation, reliability, and customer success.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className='relative'>
                <SafeImage
                  src='/history.jpg'
                  alt="Construction planning"
                  width={500}
                  height={300}
                  quality={100}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BackgroundSection