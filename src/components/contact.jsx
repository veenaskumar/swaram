import React from "react";
import { useState } from "react";
import "../stylesheet/Contact.css"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "boxicons/css/boxicons.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Contact() {
  const [activeTab, setActiveTab] = useState('pills-home'); 
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div id="contact" className="h-auto top-0 ">
      

      <footer className="flex justify-between ">
        <div className="footer-top w-[100%] flex flex-col gap-[2rem]">
          <div className="container  flex justify-between">
            <div className=" flex justify-around items-center   w-[100%]">
              <div className=" w-[100%]">
                <h4 className="logo-text text-[red]">veega</h4>
                <p className="o">The soulful music event of KEC</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[28px] text-[red] font-semibold">Contact</div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-[#7e7874] text-[18px] font-semibold">Staff Coordinator</p>
                    <p className="text-[15px]">Vishnuvardhan K - +91 97916 74174</p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                    <p className="text-[#7e7874] text-[18px] font-semibold">Student Coordiantors</p>
                    </div>
                    <div className="flex gap-[2rem]">
                    <p className="text-[15px]">Shreeram - +91 93448 42723</p>
                    <p className="text-[15px]">Shreeram - +91 93448 42723</p>
                    <p className="text-[15px]">Shreeram - +91 93448 42723</p>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        <div className="font-semibold text-[14px]"><center>Developed and maintained by <span className="text-[red]">KEC</span> </center></div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
