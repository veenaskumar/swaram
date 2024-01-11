import React, { useRef, useEffect } from 'react';
import y from '../assest/pexels-pixabay-326055.jpg';
import './style.css'
const PanningRectangles = () => {
  const containerRef = useRef(null);
 const imageUrl=
  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      let decX = mouseX / window.innerWidth;
      let decY = mouseY / window.innerHeight;
      let mx = container.offsetWidth - window.innerWidth;
      let my = container.offsetHeight - window.innerHeight;
      let px = mx * decX - 400;
      let py = my * decY - 300;
      container.animate({
        transform:`translate(${-px}px, ${-py}px)`
      },{
        duration:4000,
        fill:"forwards",
        easing:"ease"
      })
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        id="container"
        ref={containerRef}
        style={{
          position: 'absolute',
          width: '150%',
          height: '260%',
          top: '-45%',
          left: '-30%',
          border: '8% solid #000',
          backgroundColor: '#000',
        }}
      >
        {/* <div
          className="rectangle"
          style={{ width: '450px', height: '300px', top: '5%', left: '20%', position: 'absolute', backgroundColor: '#3498db', borderRadius: '10px' }}
        ></div>
        <div
          className="rectangle"
          style={{ width: '450px', height: '250px', top: '10%', left: '60%', position: 'absolute', backgroundColor: '#3498db', borderRadius: '10px' }}
        ></div> */}
        <div className="rectangle" style={{ width: '450px', height: '300px', top: '5%', left: '20%', position: 'absolute', borderRadius: '10px' }}>
        <img src={y} alt="Description of the image" />
        </div>
        <div className="rectangle" style={{ width: '450px', height: '250px', top: '10%', left: '60%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '350px', height: '250px', top: '70%', left: '10%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '350px', height: '250px', top: '80%', left: '60%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '200px', height: '200px', top: '30%', left: '5%', position: 'absolute',  borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '400px', height: '200px', top: '30%', left: '25%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '350px', height: '220px', top: '30%', left: '50%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '250px', height: '350px', top: '45%', left: '60%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectange" style={{ width: '250px', height: '350px', top: '45%', left: '30%', position: 'absolute', borderRadius: '10px' ,color: 'antiquewhite'}}>
           Throw back
        </div>
        <div className="rectangle" style={{ width: '300px', height: '350px', top: '45%', left: '10%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        <div className="rectangle" style={{ width: '200px', height: '300px', bottom: '30%', left: '75%', position: 'absolute', borderRadius: '10px' }}><img src={y} alt="Description of the image" /></div>
        {/* Add more rectangles as needed */}
      </div>
    </div>
  );
};

export default PanningRectangles;
