import React from "react";
// import './LaunchTimer'
import LaunchTimer from "./Home-LaunchTimer";
import Typewritter from "./Home-Typewriter";

function Home() {
  return (
    <>
      <div id="home" className="home-SCC min-h-screen">
        <div className="home-section-Rpp  bg-no-repeat  bg-center bg-fixed flex items-center w-screen bg-contain">
          <div className="auto-group-rk2v-NBe relative h-screen ">
            <img
              className="rectangle-2-hji absolute w-96.3 h-full  bg-contain"
              src="./Home-img/rectangle-2.png"
              alt="Rectangle 2"
            />
            <div className="booknow-crg absolute left-11.1 top-20.1 w-19.9 h-6.1 flex items-center  text-2.9 font-bold text-white border-2 border-fuchsia-500 rounded-md">
              <button>BOOK NOW</button>
            </div>
            <p className="music-event-qDe absolute left-11.1 top-13.5 w-66.5 h-13.7 text-10 font-bold text-white animate-multicolor-change">
              <Typewritter/>
            </p>
            <p className="crazy-non-stop-music-jpp absolute left-11.1 top-27.2 w-35.8 h-4.8 text-3.5 font-semibold text-white capitalize">
              Crazy Non stop Music
            </p>
            <div className="details-3ac absolute left-12.4 top-49.1 w-12.7 h-9.8">
              <div className="group-2-aKe flex items-center mb-1.6">
                <img
                  className="vector-VhW mr-1.6 w-2.6 h-3.5"
                  src="./Home-img/vector.png"
                  alt="Vector"
                />
                <p className="erode-qFa text-3 font-semibold text-white capitalize">
                  Erode
                </p>
              </div>
              <div className="group-1-WFE flex items-center">
                <img
                  className="vector-esE mr-1 w-3.2 h-2.9"
                  src="./Home-img/vector-UvQ.png"
                  alt="Vector"
                />
                <p className="jan-5-ZDW text-3 font-semibold text-white capitalize">
                  JAN 5
                </p>
              </div>
            </div>
            <div
  style={{ width: "600px", height: "60px" }}
  className="timer-VN4 absolute left-84.5 top-39.4 flex items-center justify-between"
>
  <LaunchTimer />
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
