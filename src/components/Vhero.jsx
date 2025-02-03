import React from 'react'
import { hero } from '../utils/assets'

const Vhero = () => {
  return (
    <section className='w-full h-screen '>
        <div className=' w-full h- h-full '>
            <video className='w-full h-full object-cover object-center rounded-3xl' autoPlay loop muted src={hero}></video>
        </div>
    </section>
  )
}

export default Vhero