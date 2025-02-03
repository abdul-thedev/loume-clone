import React from 'react'
import { slee } from '../utils/assets'

const Tagan = () => {
  return (
    <section className='p-0 w-full mb-[80px] relative'>
        <img className=' w-full h-[700px] object-cover object-center' src={slee} alt="" />
        <div className='w-full h-full flex flex-col gap-[16px] text-white justify-center items-center absolute top-0 left-0'>
            <h1 className='uppercase font-bold text-lg'>Unser Versprechen</h1>
            <p className='text-4xl'>Spüre den Effekt in 30 Tagen, oder erhalte dein Geld zurück.</p>
        </div>
    </section>
  )
}

export default Tagan