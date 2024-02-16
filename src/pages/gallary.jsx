import React,{ useState }  from 'react'
import Paragraphs from '../components/gallary/GParagraphs'
import GCarsol from '../components/gallary/GCarousel'
import Navbar1 from '../components/navbar';
import '../stylesheet/gal.css'
import LBackground from '../assets/swaram_videos/logos/swaram_original_background.png'
import Contact from '../components/contact';
function Gal() {
  const [selectedYear, setSelectedYear] = useState('G2k17'); // Initial selected year state

  const handleButtonClick = (year) => {
    setSelectedYear(year);
  };
  return (
    <>
    <Navbar1 />
    <div className='flex flex-col gap-[2rem] ' id='gallary_page_background'>
    <div className='pt-[7%]'>
    <div className='flex flex-col justify-evenly items-center min-h-screen w-[100%] o mt-[20px] mb-[20px]'>
    <div className='flex justify-evenly min-h-[100%] mb-[30px] min-w-[80%] rounded-20  pt-[10px] pb-[10px] sm:mt-[30px]'>
      <button className="hover:bg-[red] text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k17')}>2k17</button>
      <button className="hover:bg-[red] text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k18')}>2k18</button>
      <button className="hover:bg-[red] text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k19')}>2k19</button>
      <button className="hover:bg-[red] text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k20')}>2k20</button>
      <button className="hover:bg-[red] text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k21')}>2k21</button>
    </div>
    <div className='mt-[-2px] ' >
    <GCarsol selectedYear={selectedYear} ></GCarsol>
    </div>
    <Paragraphs selectedYear={selectedYear} className='mt-[200vh]'></Paragraphs>
  </div>
  </div>
  </div>
  <Contact />
  </>
  
  )
}

export default Gal