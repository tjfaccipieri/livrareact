import { MagnifyingGlass, ShoppingCart, User } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around py-4 bg-purple-700 text-white'>
      <h2 className='text-2xl font-mono font-bold'>Livrareact</h2>
      <div className='w-2/3 hidden md:block relative'>
        <label htmlFor=""><MagnifyingGlass size={28} weight="bold" className='absolute top-1 text-purple-900 right-2' /></label>
        <input type="text" className='w-full border-2 rounded-lg border-purple-900 py-1 text-black px-4 font-medium' />
      </div>
      <div className='flex gap-2 items-center'>
        <span><ShoppingCart weight='fill' size={32} /></span>
        <span className="w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden border-2"><User weight='fill' size={32} /></span>
        <span className="w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden border-2"><img src='https://i.imgur.com/0Hpwnjx.png' alt="" /></span>
        <span className='text-sm'>Faça <Link className='underline' to='/login'>login</Link> ou <Link className='underline' to='/cadastro'>cadastre-se</Link></span>
      </div>
    </div>
  )
}

export default Navbar