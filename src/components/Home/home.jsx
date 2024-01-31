import React from "react";
import '../../stylesheet/home.css';
import LaunchTimer from "./Home-LaunchTimer";
import TypewriterComponent from "./Home-Typewriter";


function Home() {
  return (
    <>
      <div id="home" className="home-SCC  w-[100%] h-[80vh]">
        <div className="home-section-Rpp bg-fixed">
          <div className="auto-group-rk2v-NBe ">
            <img
              className="rectangle-2-hji "
              src="./Home-img/rectangle-2.png"
              alt="Rectangle 2"
            />
           
            <p className="music-event-qDe absolute  ">
            <TypewriterComponent/>
            </p>
            <p className="crazy-non-stop-music-jpp absolute left-11.1 top-27.2 w-35.8 h-4.8 text-[20px] font-semibold text-white capitalize" id="type-text">
              Crazy Non stop Music
            </p>
            <div className="details-3ac absolute left-12.4 top-49.1 w-12.7 h-9.8">
              <div className="group-2-aKe flex items-center mb-1.6">
                <img
                  className="vector-VhW mr-1.6 w-2.6 h-3.5"
                  src="./Home-img/vector.png"
                  alt="Vector"
                  
                />
                <p className="erode-qFa text-3 " id="type-text">
                Kongu Convention Centre
                </p>
              </div>
              <div className="group-1-WFE flex items-center">
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
            <div className="timer-VN4  ">
              <LaunchTimer />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
