import React from 'react'
import SectionHeading from './SectionHeading'

function HowItWorks() {
  return (
    <div>
      <SectionHeading title="How i work" subtitle="How i really work"></SectionHeading>
      <div className='mt-14 grid grid-cols-2 md:grid-cols-3 gap-6'>
        {
            [1,2,3,4,5,6].map(v => (
                <div key={v} className='grid justify-items-center gap-y-2'>
                    <p className='text-xl font-bold'>first i do this</p>
                    <p className='text-gray-500'>
                        first i will do this and then do that.
                    </p>
                </div>
            )
            )
        }
      </div>
    </div>
  )
}

export default HowItWorks
