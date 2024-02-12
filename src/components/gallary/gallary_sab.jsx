import React from 'react';
import '../../stylesheet/Gallery_sab.css'; 
import Slide from 'react-reveal/Slide';
const Gallery = () => {
  return (
    <Slide bottom className='w-[100%] '>
    <div id='gallary' className=' flex items-center flex-col gap-[3rem] sm:h-[60vh] sm:mx-[40px] mx-[40px]'>
      <div className='text-[28px] font-semibold text-[red] text-center sm:text-[20px]'>Gallary</div>
    <div className="gallery mx-[60px] sm:mx-[60px] ">
      <div className="gallery_line">
        <img src="E:\swaram\src\assets\swaram_videos\2019\swaram\swaram 190 final\untitled folder\bDS_7424.jpg" alt="Gallery Image"/>
        <img src="https://picsum.photos/200/300?random=1" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=2" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=3" alt="Gallery Image"/>
        <img src="https://picsum.photos/200/300?random=4" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=5" alt="Gallery Image"/>
        
      </div>
    
     
    
      <div className="gallery_line">
        <img src="https://picsum.photos/200/300?random=12" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=13" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=14" alt="Gallery Image"/>
        <img src="https://picsum.photos/200/300?random=15" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=16" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=17" alt="Gallery Image"/>
        
      </div>
      <div className="gallery_line">
        <img src="https://picsum.photos/200/300?random=12" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=13" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=14" alt="Gallery Image"/>
        <img src="https://picsum.photos/200/300?random=15" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=16" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=17" alt="Gallery Image"/>
        
      </div>
      <div className="gallery_line">
        <img src="https://picsum.photos/200/300?random=12" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=13" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=14" alt="Gallery Image"/>
        <img src="https://picsum.photos/200/300?random=15" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=16" alt="Gallery Image"/>
        <img src="https://picsum.photos/300/200?random=17" alt="Gallery Image"/>
        
      </div>
    </div>
    </div>
    </Slide>
  );
};

export default Gallery;
