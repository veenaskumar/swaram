import React from 'react'
import Navbar1 from '../components/navbar'
import Contact from '../components/contact'
import '../stylesheet/gal.css'
function Sponser() {
  return (
    <>
    <Navbar1 className='fixed' />
    <div className='w-[100% ] flex flex-col gap-[2rem]' id='gallary_page_background'>
      <div className='mt-[100px] flex flex-col gap-[5rem] px-[7%] '>
        <div className='flex items-center justify-center flex-col gap-[2rem] '>
          <h1 className='text-[red]'>Sponser</h1>
          <img src="https://t4.ftcdn.net/jpg/00/90/16/51/360_F_90165155_MCR2C1DvJnu7cJ8hGcGTkwDqyApPdH9q.jpg" alt="" height={"400px"} width={"400px"} />
        </div>
        <div className='flex justify-between '>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/90/16/51/360_F_90165155_MCR2C1DvJnu7cJ8hGcGTkwDqyApPdH9q.jpg" alt="" height={"300px"} width={"300px"} className='sm:h-[150px] sm:w-[150px]' />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/90/16/51/360_F_90165155_MCR2C1DvJnu7cJ8hGcGTkwDqyApPdH9q.jpg" alt="" height={"300px"} width={"300px"} className='sm:h-[150px] sm:w-[150px]'/>
          </div>
        </div>
        <div className='row justify-center gap-[3rem] items-center gap-y-[4rem] '>
          <div>
            <img src="https://www.shutterstock.com/image-vector/sponsor-banner-template-ribbon-label-260nw-1725400003.jpg" alt="" height={"250px"} width={"250px"} className='sm:h-[100px] sm:w-[100px]' />
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-vector/sponsor-banner-template-ribbon-label-260nw-1725400003.jpg" alt="" height={"250px"} width={"250px"} className='sm:h-[100px] sm:w-[100px]'/>
            </div>
          <div>
            <img src="https://www.shutterstock.com/image-vector/sponsor-banner-template-ribbon-label-260nw-1725400003.jpg" alt="" height={"250px"} width={"250px"} className='sm:h-[100px] sm:w-[100px]'/>
            </div>
            <div>
            <img src="https://www.shutterstock.com/image-vector/sponsor-banner-template-ribbon-label-260nw-1725400003.jpg" alt="" height={"250px"} width={"250px"} className='sm:h-[100px] sm:w-[100px]'/>
            </div>
            <div>
            <img src="https://www.shutterstock.com/image-vector/sponsor-banner-template-ribbon-label-260nw-1725400003.jpg" alt="" height={"250px"} width={"250px"} className='sm:h-[100px] sm:w-[100px]' />
            </div>
        </div>
      </div>
      <Contact />
    </div>
    </>
  )
}

export default Sponser