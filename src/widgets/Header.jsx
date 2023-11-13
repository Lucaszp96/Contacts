import React from 'react'
import Logo from "../Logo.svg"
function Header() {
  return (
    <header className='flex justify-between items-center h-20 relative'>
        <img src={Logo} alt='' className='w-8 h-8'/>
        <nav className='flex items-center'>
            <a href="#" className='ml-8 bg-blue-400 px-4 py-4 rounded text-blue-50 flex items-center'>Contacts</a>
        </nav>
    </header>
  )
}

export default Header