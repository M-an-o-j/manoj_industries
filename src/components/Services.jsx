import React from 'react'
import data_engineering from '../assets/images/data_engineering.png'
import ai_consulting from '../assets/images/AI_consulting.png'
import analytics from '../assets/images/analytics.png'

const Services = () => {
  const service_overwiew = [
    {
      image: analytics,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with our advanced ML models.'
    },
    {
      image: ai_consulting,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI solutions for your business needs.'
    },
    {
      image: data_engineering,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for ML operations.'
    }
  ]

  return (
    <div className='flex flex-col items-center font-barlow px-4 sm:px-6 lg:px-8 py-8 min-h-screen'>
      <div className='w-full max-w-4xl mb-8'>
        <h2 className='w-full max-w-[579px] mx-auto text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#000] text-center leading-tight'>
          Our Ultimate Set of Services for Your Ideas Implementation
        </h2>
      </div>
      
      {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className='w-full max-w-7xl'>
        
        {/* Mobile Layout - Single Column */}
        <div className='flex flex-col gap-6 sm:hidden'>
          {service_overwiew.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col gap-6 items-center bg-[#404040] p-6 rounded-2xl w-full max-w-[400px] mx-auto min-h-[380px]'
            >
              <div className='w-full flex justify-center pt-4'>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='max-w-[200px] max-h-[200px] h-auto object-contain'
                />
              </div>
              <h3 className='text-[22px] font-semibold text-white text-center'>
                {item.title}
              </h3>
              <p className='text-[16px] text-white text-center leading-relaxed px-4'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2 Columns */}
        <div className='hidden sm:block lg:hidden'>
          <div className='grid grid-cols-2 gap-6 justify-items-center mb-6'>
            {service_overwiew.slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className='flex flex-col gap-4 items-center bg-[#404040] p-5 rounded-2xl w-full max-w-[320px] min-h-[420px]'
              >
                <div className='w-full flex justify-center pt-3'>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className='max-w-[180px] max-h-[180px] h-auto object-contain'
                  />
                </div>
                <h3 className='text-[20px] font-semibold text-white text-center'>
                  {item.title}
                </h3>
                <p className='text-[15px] text-white text-center leading-relaxed px-3'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Third item centered below */}
          <div className='flex justify-center'>
            <div className='flex flex-col gap-4 items-center bg-[#404040] p-5 rounded-2xl w-full max-w-[320px] min-h-[420px]'>
              <div className='w-full flex justify-center pt-3'>
                <img 
                  src={service_overwiew[2].image} 
                  alt={service_overwiew[2].title}
                  className='max-w-[180px] max-h-[180px] h-auto object-contain'
                />
              </div>
              <h3 className='text-[20px] font-semibold text-white text-center'>
                {service_overwiew[2].title}
              </h3>
              <p className='text-[15px] text-white text-center leading-relaxed px-3'>
                {service_overwiew[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3 Columns */}
        <div className='hidden lg:flex flex-row justify-center items-start gap-8'>
          {service_overwiew.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col gap-5 items-center bg-[#404040] p-6 rounded-2xl w-full max-w-[377px] min-h-[450px]'
            >
              <div className='w-full flex justify-center pt-4'>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='max-w-[250px] max-h-[250px] h-auto object-contain'
                />
              </div>
              <h3 className='text-[24px] font-semibold text-white text-center'>
                {item.title}
              </h3>
              <p className='text-[16px] w-full max-w-[300px] text-white text-center leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services