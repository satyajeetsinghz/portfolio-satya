import React from 'react'
import HamburgerMenu from './Hamburger'

const Navbar = () => {

    return (

        <div className='flex justify-between items-center ml-4 md:ml-16 pt-8'>
            <h2 className="text-xl font-extrabold text-neutral-900/90"> SATYA </h2>
            <div className="inline-flex items-center gap-2 md:gap-6 mr-8 bg-urple-400">
                {/* <a className="hidden md:hidden lg:block text-lg text-neutral-900/90 font-semibold cursor-pointer" href="/">About</a> */}
                {/* <a className="hidden md:hidden lg:block text-lg text-neutral-900/90 font-semibold cursor-pointer" href='#'>About</a> */}
                <h2 className='hidden md:block lg:block text-base font-bold'>Connect on:</h2>
                <a className="hidden md:hidden lg:block text-lg text-neutral-900/90 font-semibold" href="/">
                    <img className='w-7' src="public\img\icons8-github-30.png" alt="" />
                </a>
                <a className="hidden md:hidden lg:block text-lg text-neutral-900/90 font-semibold" href="/">
                <img className='w-7' src="public\img\icons8-linkedin-30.png" alt="" />
                </a>
                <button className="bg-neutral-900 text-white text-xs md:text-base font-medium px-3 py-1 md:px-8 lg:px-8 md:py-3 rounded-full">Start Hacking</button>
                <button>
                    {/* <img className='w-10 lg:hidden' src="\img\reorder-two-outline.svg" alt="" /> */}
                    <HamburgerMenu />
                </button>
            </div>
        </div>
    )
}

export default Navbar
