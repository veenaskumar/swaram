import React, { useState,useEffect } from 'react';
import confetti from 'canvas-confetti';
import './style.css'

const SideWindow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3); // Toggle between 0, 1, and 2
    }, 2000); // Change slides every 2 seconds
 
    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, []);
  useEffect(() => {
    // Delaying the appearance of the pop-up after 5 seconds
    const timeout = setTimeout(() => {
      setShowPopup(true);
      confetti({
        particleCount: 1000,
        spread: 700,
        origin: { y: 0.4 },
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);
const renderDivs = () => {
    const divs = [
      <div className=" ml-[15px] w-[300px] h-[300px] bg-green-500 border-2 border-green-500 transition-opacity duration-2500 ease-in opacity-100">hi</div>,
      <div className="ml-[15px] w-[300px] h-[300px] bg-blue-500 border-2 border-blue-500 transition-opacity duration-2500 ease-in opacity-100">hi</div>,
      <div className="ml-[15px] w-[300px] h-[300px] bg-red-500 border-2 border-black-500 transition-opacity duration-2500 ease-in opacity-100">hi</div>,
    ];
    return divs.map((div, index) => (
      <div key={index} style={{ display: index === visibleIndex ? 'block' : 'none' }} className={`transition-opacity duration-500 ease-in-out opacity-${index === visibleIndex ? '100' : '0'} `}>
        {div}
      </div>
    ));
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-[700px]">
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {/* <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <i className="fas fa-user" />
        </button> */}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded" style={{ width: '30%', height: '70%' }}>
          <button onClick={closePopup} className="block mx-[320px] mt-[-9px] px-4 py-2  text-blue rounded">
              Close
            </button>
            {renderDivs()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideWindow;
