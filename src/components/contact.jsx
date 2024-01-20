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

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-md-3">
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
              <div className="col-md-2 fl">
                <h5 className="title-sm kk text-[red]">Navigation</h5>
                <div className="footer-links">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Gallery</a>
                  <a href="#">OurTeam</a>
                </div>
              </div>
              <div className="col-md-4 mr-[50px]">
                <h5 className="title-sm k text-[red]">Contact</h5>
                <div className="footer-links">
                  <p className="mb">
                    Shriram S:
                  </p>
                  <p className="mb">9994562922</p>
                  <p className="mb"><a href="mailto:tharuntharun7248@gmail.com.com">shrirams.20ece@gmail.com</a></p>
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
