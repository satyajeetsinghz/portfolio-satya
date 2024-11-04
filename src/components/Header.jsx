import React from 'react'

const Header = () => {
    return (
        <div className=''>
            <div className="w-full h-64 mt-16 flex justify-center items-center">
                <div className="inline-flex translate-y-[-3.75rem] md:translate-y-[-50px]">
                    <img className="w-10 h-8 md:w-[4rem] md:h-[3rem] lg:w-20 lg:h-16" src="/img/chevron-outline 1.png" alt="" />
                    <h2 className="text-xl md:text-4xl lg:text-5xl bg-neutral-950/90 text-neutral-50 font-bold py-1.5 px-1 text-center md:py-3 md:px-4 md:text-center">Aspiring Software Enginner!</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
