import React from 'react'
import './Project.css'

const Projects = () => {
  return (
    <div className='pt-16 h-screen bg-ed-300 orbitron-family bg-neutral-100 overflow-hidden'>
      <div className='inline-flex items-center mx-8 bg-black w-fit pl-3 pr-[1.5rem] py-2'>
        <img className='w-10 md:w-16' src="\img\chevron-outline.png" alt="" />
        <h2 className='text-2xl md:text-5xl text-white font-semibold'>Projects</h2>
      </div>

      <div className="bg-re-300 w-full h-screen bg-emerald mx-2">
        {/* <!-- Main container div --> */}
        <div className="bg-whit w-full h-[20vh] p-6">
          <div className='bg-cya\n-400 w-fit'>
            <h2 className='text-lg md:text-3xl text-white bg-black w-fit pl-3 pr-3 py-2'>About project</h2>
            <p className='w-[40vh] md:w-[100vh] pt-6 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolores ducimus accusamus, modi deserunt, alias deleniti odit eaque voluptas doloribus iste dignissimos nostrum quam suscipit vitae dolorum praesentium corporis illum velit?</p>
          </div>

          {/* <!-- Grid container div with vertical scroll --> */}
          <div className="hidden md:grid grid-cols-4 h-full place-items-center translate-y-10">

            {/* <!-- Card boxes inside the grid --> */}
            <div className="bg-white w-72 h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.rYM9rWqzQmbykKZCAo_eagAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="public\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>


            <div className="bg-white w-72 h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://www.cointribune.com/app/uploads/2022/10/hacktober-1-1024x785.jpeg" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="public\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>


            <div className="bg-white w-72 h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://cdn.itemsatis.com/uploads/post_images/pubg-mobile-hesabi-23932771.jpg" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="public\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>


            <div className="bg-white w-72 h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://s101.daleelstore.com/public/classes/dc_236_1673026205.png" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="public\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>


            {/* <div className="bg-blue-500 w-72 h-[45vh] rounded-lg shadow-md p-4 text-white">
              Card 5
            </div> */}
            {/* <!-- Add more cards as needed --> */}
          </div>

          {/* Mobile View */}
          <div className='flex overflow-auto gap-[1rem] mt-[2rem] md:hidden lg:hidden'>

            <div className="bg-white min-w-[300px] h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.rYM9rWqzQmbykKZCAo_eagAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>
            <div className="bg-white min-w-[300px] h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.rYM9rWqzQmbykKZCAo_eagAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>
            <div className="bg-white min-w-[300px] h-[35vh] md:h-[45vh] shadow-md p-4 text-black">
              <div className='w-full h-3/4 bg-red-400'>
                <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.rYM9rWqzQmbykKZCAo_eagAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className='mt-2 inline-flex items-center bg-black text-white text-xs w-fit pl-2 pr-2 py-0.5'>
                <img className='w-6' src="\img\chevron-outline.png" alt="" />
                Hacktober 2024
              </div>
              <div>
                <span className='text-[10px] line-clamp-2 mt-1'>Re-open on 24 Nov, Claim your reward here!</span>
              </div>
              <div className='bg-re-200 flex justify-end items-center mt-2 mr-2'>
                <button className='bg-[#1ED746] border-2 border-[#1c7730] text-[10px] font-semibold px-3 py-0.5'>Get now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
