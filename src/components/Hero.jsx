import React from 'react'
import robot from '../assets/images/robot.png'
import CTA from './CTA'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center font-barlow min-h-screen px-4 md:px-8 lg:px-4 py-8 lg:py-0">
      {/* Text Content */}
      <div className="flex flex-col justify-start font-barlow text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-tight">
          <h1 className="mb-2 lg:mb-0 leading-[1.2]">Empowering Businesses</h1>
          <h1>
            with{' '}
            <span className="text-white bg-[#0A84FF] rounded-xl lg:rounded-2xl px-2 py-1 inline-block">
              Technology
            </span>
          </h1>
        </div>
        
        <div className="mt-4 lg:mt-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:w-[500px]">
            Leverage the power of machine learning and AI to unlock insights and drive business growth
          </p>
        </div>
        
        <div className="mt-6 lg:mt-5 flex justify-center lg:justify-start">
          <CTA 
            cta_text="Book a meeting"
            bg_color="bg-[#0A84FF]"
            text_color="text-white"
          />
        </div>
      </div>

      {/* Robot Image */}
      <div className="flex-shrink-0 order-1 lg:order-2">
        <div className="relative">
          <img 
            src={robot} 
            alt="AI Robot illustration" 
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-auto lg:h-auto max-w-full object-contain"
          />
          
          {/* Optional floating elements for visual enhancement */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0A84FF]/20 rounded-full animate-pulse hidden lg:block"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/10 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero