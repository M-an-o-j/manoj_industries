import React from 'react'

const CTA = (props) => {
  const { bg_color, text_color, cta_text } = props
  
  return (
    <div className={``}>
      <button className="px-6 py-3 bg-[#0A84FF] font-semibold text-[14px] text-white font-barlow rounded-lg hover:bg-blue-700 transition-colors">
        {cta_text}
      </button>
    </div>
  )
}

export default CTA