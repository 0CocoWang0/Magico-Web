import React from 'react'
import HeroImg from '../assets/herobois.png'
import Logo from '../assets/logo.png'

function Hero() {
  return (
    <div className='grid justify-items-center gap-8 pb-28 relative'>
      <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
        It's Coco here.
      </p>
      <p className='text-xl text-gray-700 md:w-1/2 text-center'>
      Continue if you want to know me.</p>
      <div>
        <button className='rounded bg-cyan-600 text-base text-white py-3 px-8'>Get started</button>
      </div>
      <div className='relative grid justify-items-center'>
          <img className= "w-full" src={HeroImg} alt="" />
          <div className='flex absolute rounded-full bg-white -bottom-7 px-10 py-4 drop-shadow-xl'>
                Xiao and Kinnich
              </div>
      </div>
    </div>
  )
}

export default Hero
