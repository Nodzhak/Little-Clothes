import React from 'react'

const Hero = ({ hero:{ title, subTitle, btn1, btn2, text, img}}) => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto'>
        <div className=''>
            <div className=''>
                <h1 className=''>{title}</h1>
                <h1 className=''>{subTitle}</h1>
                <p className=''>{text}</p>
                <div className=''>
                    <button type='button' className=''>{btn1}</button>
                    <button type='button' className=''>{btn2}</button>
                </div>
                </div>
            <div className=''>
                <img src={img} alt="dashboard/img2" />
                </div>
        </div>
    </div>
  )
}

export default Hero
