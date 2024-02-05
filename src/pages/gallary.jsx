import React,{ useState }  from 'react'
import Paragraphs from '../components/gallary/GParagraphs'
import GCarsol from '../components/gallary/GCarousel'
import Navbar1 from '../components/navbar';
function Gal() {
  const [selectedYear, setSelectedYear] = useState('G2k17'); // Initial selected year state

  const handleButtonClick = (year) => {
    setSelectedYear(year);
    alert(year)
  };
  return (
    <div className='flex flex-col gap-[2rem]'>
    <Navbar1 />
    <div className='pt-[7%]'>
    <div className='flex flex-col justify-evenly items-center min-h-screen w-[100%] mt-[30px]'>
     <div className='text-6xl font-mono text-[red] mb-[30px] font-semibold'>A Throw Back</div> 
    <div className='flex justify-evenly min-h-[100%] mb-[30px] min-w-[80%] rounded-20 bg-[#252424] pt-[10px] pb-[10px]'>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k17')}>2k17</button>
      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k18')}>2k18</button>
      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k19')}>2k19</button>
      <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k20')}>2k20</button>
      <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-full focus:outline-none" onClick={() => handleButtonClick('G2k21')}>2k21</button>
    </div>
    <div className='bg-[#252424]'>
    <GCarsol selectedYear={selectedYear}></GCarsol>
    </div>
    <Paragraphs selectedYear={selectedYear} className='mt-[200vh]'></Paragraphs>
  </div>
  </div>
  </div>
  
  )
}

export default Gal