import React from "react";
import '../../stylesheet/home.css';
import LaunchTimer from "./Home-LaunchTimer";
import TypewriterComponent from "./Home-Typewriter";
import useDeviceSize from '../useWindowSize'


function Home() {
  const [width, height] = useDeviceSize()
  return (
    <div >
      <div id="home" className="home-SCC  w-[100%] h-[100vh] sm:h-[80vh] ">
        <div className="home-section-Rpp bg-fixed  w-[100%] ">
          <div className="auto-group-rk2v-NBe  w-[100%] sm:h-[10px]  ">
            <img
              className="rectangle-2-hji sm:hidden"
              src="./Home-img/rectangle-2.png"
              alt="Rectangle 2"
              
            />
            <div className="sm:flex justify-center gap-[0px] pt-[-100px]">
            <div className="sm:flex sm:justify-center sm:text-center sm:pr-[10%]">
            <div className="music-event-qDe absolute  sm:w-[100%] sm:top-[-5%] sm:text-wrap">
            <TypewriterComponent />
            </div>
            <div>
            { width<=414 ?
            <div className="crazy-non-stop-music-jpp  sm:text-wrap w-[100%] sm:w-[100%] sm:right-[10%] sm:top-[-7%] absolute  top-27.2   text-[20px] sm:pt-[-100px]font-semibold text-white capitalize  sm:flex " id="type-text">
              KEC’s gala of all times <br /> welcomes u all hii
            </div>:<div className="crazy-non-stop-music-jpp  sm:text-wrap w-[100%] sm:w-[100%] sm:right-[30%] sm:top-[-7%] absolute  top-27.2   text-[20px] sm:pt-[-100px]font-semibold text-white capitalize  sm:flex " id="type-text">
              KEC’s gala of all times welcomes u all
            </div> 
              }
              </div>  
            </div>
            <div className="details-3ac absolute left-12.4 top-49.1 w-12.7 h-9.8  sm:w-[100%] sm:mt-[-100px]  md:pl-[12.4rem] sm:flex sm:flex-col sm:justify-center ">
              <div className="group-2-aKe flex items-center mb-1.6 sm:flex sm:justify-center ml-[0.5%] ">
                <img
                  className="vector-VhW mr-1.6 w-2.6 h-3.5 "
                  src="./Home-img/vector.png"
                  alt="Vector"
                  
                />
                <p className="erode-qFa text-3  sm:text-[14px]" id="type-text">
                Kongu Convention Centre
                </p>
              </div>
              <div className="group-1-WFE flex items-center mb-1.6 sm:flex sm:justify-center ">
                <img
                  className="vector-esE "
                  src="./Home-img/vector-UvQ.png"
                  alt="Vector"
                  
                />
                <p className="jan-5-ZDW text-3 font-bold text-white capitalize " id="type-text">
                  JAN 5
                </p>
              </div>
            </div>
            <div className="timer-VN4 md:pl-[60rem] md:pt-[39.4rem]  md:ml-[5%]  sm:w-[100vw] sm:mt-[300px] sm:ml-[5%] ">
              <LaunchTimer />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;