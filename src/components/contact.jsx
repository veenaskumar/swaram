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
      {/* <section id="cta" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3 className="text-white">Let's build something great.</h3>
            </div>
            <div className="col-auto">
              <a href="#" className="btn btn-light">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="flex justify-between ">
        <div className="footer-top w-[100%] flex flex-col gap-[2rem]">
          <div className="container  flex justify-between">
            <div className="row gy-5">
              <div className="col-md-3 w-[100%]">
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
              {/* <div className="col-md-2 fl">
                <h5 className="title-sm kk text-[red]">Navigation</h5>
                <div className="footer-links">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Gallery</a>
                  <a href="#">OurTeam</a>
                </div>
              </div> */}
              <div className="col-md-6 mr-[50px] flex ">
                <h5 className="title-sm k text-[red] border w-[100%]">Contact</h5>
                <div className="footer-links w-[500px] border">
                  <h4>Staff Coordinator</h4>
                  <p>Vishnuvardhan K - +91 9791674174</p>
                  <h4>Student Coordinator</h4>
                  <p className="mb w-[100%]">Shreeram S</p>
                  <p className="mb w-[100%]">Shrawin</p>
                  <p className="mb w-[100%]">Karthik</p>
                  
                  {/* <p className="mb"><a href="mailto:tharuntharun7248@gmail.com.com">shrirams.20ece@gmail.com</a></p> */}
                </div>
              </div>
            </div>
          </div>
        <div className="font-bold"><center>Developed and maintained by <span className="text-[red]">KEC</span> </center></div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
