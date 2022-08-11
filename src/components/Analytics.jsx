import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
   return (
      <div className='w-full bg-white py-16 px-4'>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4'src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
               <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
               <h1 className='md;text-4xl sm:text-3xl texl-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repudiandae consectetur alias, nesciunt 
                voluptates maxime explicabo, libero quasi porro n
                ecessitatibus, ut mollitia recusandae totam r
                epellendus hic iste. Sed, eaque? Hic, quod?
               </p>            
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
               Get Started
            </button>
            </div>
         </div>
      </div>
   )
}

export default Analytics
