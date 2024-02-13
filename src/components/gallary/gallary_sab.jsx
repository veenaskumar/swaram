import React from 'react';
import '../../stylesheet/Gallery_sab.css'; 
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import GalComp from '../../json/GalComp';
const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[2rem] w-[100%] '>
    <Slide bottom className='w-[100%] sm:w-[100%]'>
    <div id='gallary' className=' flex items-center flex-col gap-[3rem] sm:h-[60vh] sm:mx-[40px] mx-[40px] sm:w-[100%] '>
      <div className='text-[28px] font-semibold text-[red] text-center sm:text-[20px]'>Gallary</div>
    <div className="gallery mx-[60px] sm:mx-[60px] ">
      <div className="gallery_line">
        {
          GalComp.map((item)=>{
            return (
              item.key=1 && item.id<=6?<img src={item.img} alt="" height={"200px"} width={"200px"} />:""
            )
          })
        }
      </div>
    
     
    
      <div className="gallery_line">
      {
          GalComp.map((item)=>{
            return (
              item.key=1 && (item.id>6 && item.id<=12)?<img src={item.img} alt="" height={"200px"} width={"200px"} />:""
              )
          })
        }
        
      </div>
      <div className="gallery_line">
      {
          GalComp.map((item)=>{
            return (
              item.key=1 && (item.id>12 && item.id<=18)?<img src={item.img} alt="" height={"200px"} width={"200px"} />:""
              )
          })
        }
        
      </div>
      <div className="gallery_line">
      {
          GalComp.map((item)=>{
            return (
              item.key=1 && (item.id>18 && item.id<=26)?<img src={item.img} alt="" height={"200px"} width={"200px"} />:""
              )
          })
        }
        
      </div>
    </div>
    </div>
    </Slide>
    <div>
      <Zoom duration={500} delay={200}> <Link to={"/gallary"} className='text-[white]'> <button className='bg-[red]  w-[120px] text-center py-[10px] rounded-2xl hover:font-semibold'>
            Read More 
            </button></Link> </Zoom>
    </div>
    </div>
  );
};

export default Gallery;
