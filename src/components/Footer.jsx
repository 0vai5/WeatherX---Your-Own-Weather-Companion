import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <section className='flex justify-between items-center'>
        <h1 className='text-xl'><span className='text-[#696969] font-semibold'>©</span><a href="https://github.com/0vai5">Ovais Raza</a></h1>
        <div>
            <Socials />
        </div>
    </section>
  )
}

export default Footer