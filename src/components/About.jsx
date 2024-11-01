import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <div className='orbitron-family bg-neutral-100 overflow-hidden'>
        {/* Large Screen View  */}
        <div className='hidden md:block md:min-h-[100vh] w-[100%]'>
          <div className='hidden md:grid grid-cols-2 w-full min-h-screen mb-0'>
            <div className='h-screen bg-ed-200'>
              <div className='inline-flex items-center bg-black px-2 py-2 translate-x-10 translate-y-40'>
                <img className='w-16' src="public\img\chevron-outline.png" alt="" />
                <h2 className='text-white md:text-2xl lg:text-5xl font-semibold'>Frontend Developer</h2>
              </div>
              <div className='inline-flex items-center bg-black px-2 py-2 translate-x-10 translate-y-44'>
                <h2 className='text-white md:text-xl lg:text-4xl font-semibold'>React.js | Javascript</h2>
              </div>

              <div className=' translate-x-10 translate-y-52 w-[85%]'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum distinctio nam expedita earum vero sed, at quis neque deleniti, voluptatem, libero repellat. Quisquam illum at autem voluptate adipisci provident sed iusto nulla eum libero laudantium delectus excepturi, nemo beatae?</p>
                <p className=' translate-y-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum distinctio nam expedita earum vero sed, at quis neque deleniti, voluptatem, libero repellat. Quisquam illum at autem voluptate adipisci provident sed iusto nulla eum libero laudantium delectus excepturi, nemo beatae?</p>
              </div>
            </div>

            <div className='bg-yan-200 translate-y-20'>
              <div className='relative bg-ed-300 flex justify-between items-center translate-y-40 max-w-[78%] translate-x-10'>
                <div className='w-6 h-6 bg-black -ml-[23px]'>

                </div>
                <div className='w-6 h-6 bg-black'>

                </div>
              </div>
              
              <div className=' md:max-w-[72%] md:min-h-[25%] lg:max-w-[75%] lg:min-h[30%] bg-[#1ED746] translate-x-10 translate-y-40 grid grid-rows-2 -space-y-14'>
                <div className='ml-6 translate-y-10 w-[90%]'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae tempore ab ducimus!</p>
                </div>
                <div className='ml-6 translate-y-16'>
                  <button className='bg-black text-white px-8 py-4 rounded-full'>go to my project</button>
                </div>
              </div>
              <div className='relative bg-ed-300 flex justify-between items-center translate-y-40 max-w-[78%] translate-x-10'>
                <div className='w-6 h-6 bg-black -ml-[23px]'>

                </div>
                <div className='w-6 h-6 bg-black'>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View  */}

        <div className='bg-red md:hidden lg:hidden'>

          <div className='h-[55vh] bg-ed-200'>
            <div className='inline-flex items-center bg-black px-2 py-2 translate-x-10 translate-y-40'>
              <img className='w-10 h-8' src="public\img\chevron-outline.png" alt="" />
              <h2 className='text-white text-2xl font-semibold'>Frontend Developer</h2>
            </div>
            <div className='inline-flex items-center bg-black px-2 py-2 translate-x-10 translate-y-44'>
              <h2 className='text-white text-lg font-semibold'>React.js | Javascript</h2>
            </div>

            <div className=' translate-x-10 translate-y-52 w-[85%]'>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum distinctio nam expedita earum vero sed, at quis neque deleniti, voluptatem, libero repellat. Quisquam illum at autem voluptate adipisci provident sed iusto nulla eum libero laudantium delectus excepturi, nemo beatae?</p>
              <p className=' translate-y-6 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum distinctio nam expedita earum vero sed, at quis neque deleniti, voluptatem, libero repellat. Quisquam illum at autem voluptate adipisci provident sed iusto nulla eum libero laudantium delectus excepturi, nemo beatae?</p>
            </div>
          </div>

          <div className='h-[55vh] bg-yan-200'>
            <div className='relative bg-ed-300 flex justify-between items-center translate-y-60 max-w-[84%] translate-x-10'>
              <div className='w-6 h-6 bg-black -ml-[7px]'>

              </div>
              <div className='w-6 h-6 bg-black'>

              </div>
            </div>
            <div className=' max-w-[75%] min-h-[30%] bg-[#1ED746] translate-x-14 translate-y-60 grid grid-rows-2 -space-y-14'>
              <div className='ml-6 translate-y-6 w-[90%]'>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae tempore ab ducimus!</p>
              </div>
              <div className='ml-6 translate-y-16 md:translate-y-20'>
                <button className='bg-black text-xs text-white px-4 py-2 rounded-full'>go to my project</button>
              </div>
            </div>
            <div className='relative bg-ed-300 flex justify-between items-center translate-y-[242px] max-w-[84%] translate-x-10'>
              <div className='w-6 h-6 bg-black -ml-[7px]'>

              </div>
              <div className='w-6 h-6 bg-black'>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
