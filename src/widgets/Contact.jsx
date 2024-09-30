import React from 'react'
import Coco from '../assets/animeCo.png'

function Contact() {
  return (
    <div className='bg-black md:w-4/5 mx-auto relative overflow-hidden'>
      <div className='w-full py-16 px-12'>
        <h2 className='text-3xl text-white font-bold'>
            Common, Coco I love you!
        </h2>
        <p className='text-lg text-white mt-2 mb-6'>
            I love you i love you i love you!!!
        </p>
        <div className='flex flex-col md:flex-row items-start gap-4'>
            <input type="text" name='' className='text-white bg-zinc-800 py-3 px-4 border border-zinc-700' placeholder='your email'/>
            <button className='py-3 px-8 bg-cyan-500 text-black text-base font-medium md:ml-2'>Email me NOW</button>
        </div>
        <p className='text-sm text-zinc-400 mt-3'>YOU BETTER EMAIL ME NOW. I'm watching you.</p>
      </div>
      <div className='absolute -right-5 bottom-0'>
        <img src={Coco} alt="" className='opacity-40'/>
      </div>
    </div>
  )
}

export default Contact
