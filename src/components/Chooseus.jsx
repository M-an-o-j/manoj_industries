import React from 'react'
import tick from '../assets/images/tick_sym.png'

const Chooseus = () => {
  const service_overwiew = [
    {
      image: '',
      title: 'Innovation',
      description: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.'
    },
    {
      image: '',
      title: 'Collaboration',
      description: 'Working closely with clients to develop tailored solutions that drive measurable success.'
    },
    {
      image: '',
      title: 'Excellence',
      description: 'Maintaining the highest standards in code quality, system performance, and client outcomes.'
    },
    {
      image: '',
      title: 'Integrity',
      description: 'Operating with transparency and ethical considerations at the forefront of all decisions.'
    }
  ]

  return (
    <div className='flex flex-col items-center mt-12 sm:mt-16 lg:mt-24 font-barlow px-4 sm:px-6 lg:px-8 min-h-screen py-8'>
      <div className='w-full max-w-4xl mb-8'>
        <h2 className='w-full max-w-[579px] mx-auto text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#000] text-center leading-tight'>
          Why choose us
        </h2>
      </div>
      
      {/* Mobile: Single column, Tablet: 2x2 grid, Desktop: 4 columns */}
      <div className='w-full max-w-7xl'>
        {/* Mobile Layout */}
        <div className='flex flex-col gap-6 sm:hidden'>
          {service_overwiew.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-row items-center gap-4 bg-[#404040] p-6 rounded-2xl w-full'
            >
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                  <img 
                    src={tick} 
                    alt={item.title}
                    className='w-8 h-8 object-contain'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <h3 className='text-[18px] font-semibold text-white'>
                  {item.title}
                </h3>
                <p className='text-[14px] text-white leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className='hidden sm:grid lg:hidden grid-cols-2 gap-6 justify-items-center'>
          {service_overwiew.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col gap-4 items-center bg-[#404040] p-6 rounded-3xl w-full max-w-[300px] h-auto min-h-[280px] justify-center'
            >
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
                <img 
                  src={tick} 
                  alt={item.title}
                  className='w-8 h-8 object-contain'
                />
              </div>
              <h3 className='text-[20px] font-semibold text-white text-center'>
                {item.title}
              </h3>
              <p className='text-[14px] text-white text-center leading-relaxed px-2'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:flex flex-row justify-center items-start gap-8'>
          {service_overwiew.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col gap-5 items-center bg-[#404040] p-8 rounded-full w-[280px] h-[280px] justify-center'
            >
              <div className='w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0'>
                <img 
                  src={tick} 
                  alt={item.title}
                  className='w-8 h-8 object-contain'
                />
              </div>
              <h3 className='text-[20px] font-semibold text-white text-center'>
                {item.title}
              </h3>
              <p className='text-[14px] text-white text-center leading-relaxed px-4'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chooseus