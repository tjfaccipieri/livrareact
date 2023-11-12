import { ShoppingCart, User } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around py-4 bg-purple-700 text-white'>
      <h2>Livrareact</h2>
      <div className='w-2/3 hidden md:block'>
        <label htmlFor=""></label>
        <input type="text" className='w-full border-2 rounded-lg border-purple-900 py-1' />
      </div>
      <div className='flex gap-2 items-center'>
        <span><ShoppingCart weight='fill' size={32} /></span>
        <span><User weight='fill' size={32} /></span>
        <span className='text-sm'>Faça <Link className='underline' to='/login'>login</Link> ou <Link className='underline' to='/cadastro'>cadastre-se</Link></span>
      </div>
    </div>
  )
}

export default Navbar