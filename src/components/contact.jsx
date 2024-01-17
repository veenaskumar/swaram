import React from "react";
import { useState } from "react";
import "../stylesheet/Contact.css"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "boxicons/css/boxicons.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Contact() {
  const [activeTab, setActiveTab] = useState('pills-home'); // Initialize with the ID of the first tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div id="contact" className="h-[100vh] top-0 min-h-screen">
      <section id="cta" className="py-5">
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
      </section>

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-md-4">
                <h4 className="logo-text">Lissome</h4>
                <p>poiuyts uuytfs iuahbj onx n a kni9 h i o8 8obb izb</p>
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
                  <a href="#">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">Navigation</h5>
                <div className="footer-links">
                  <a href="#">Services</a>
                  <a href="#">Our works</a>
                  <a href="#">Team</a>
                  <a href="#">Blog</a>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">More</h5>
                <div className="footer-links">
                  <a href="#">FAQ's</a>
                  <a href="#">Privacy</a>
                  <a href="#">License</a>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">Contact</h5>
                <div className="footer-links">
                  <p className="mb">
                    Dubai main road, Dubai kurukusandhu, Dubai (:
                  </p>
                  <p className="mb-">8(800)316-06-42</p>
                  <p className="mb">hello@you.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-between gy-3">
              <div className="col-md-6">
                <p className="mb-0">cheenathana-001</p>
              </div>
              <div className="col-auto">
                <p className="mb-0">Webpage created by rs</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section id="testimonials" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'pills-home' && 'active'}`}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected={activeTab === 'pills-home'}
                  onClick={() => handleTabClick('pills-home')}
                >
                  <img src="./Home-img/01.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'pills-profile' && 'active'}`}
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected={activeTab === 'pills-profile'}
                  onClick={() => handleTabClick('pills-profile')}
                >
                  <img src="./Home-img/01.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'pills-contact' && 'active'}`}
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected={activeTab === 'pills-contact'}
                  onClick={() => handleTabClick('pills-contact')}
                >
                  <img src="./Home-img/01.png" alt="" />
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className={`tab-pane fade show ${activeTab === 'pills-home' && 'active'}`} id="pills-hom" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="review">
                  <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt perferendis voluptatem corporis quis molestiae, ipsam atque optio et aliquid. Ex atque, rerum vel officia minus sunt ipsum fugit natus ducimus!
                  </p>
                  <h5 className="title-sm mb-0">John Doe</h5>
                  <small>Web Developer</small>
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === 'pills-profile' && 'active'}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="review">
                  <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt perferendis voluptatem corporis quis molestiae, ipsam atque optio et aliquid. Ex atque, rerum vel officia minus sunt ipsum fugit natus ducimus!
                  </p>
                  <h5 className="title-sm mb-0">Jane Doe</h5>
                  <small>UI/UX Designer</small>
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === 'pills-contact' && 'active'}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="review">
                  <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt perferendis voluptatem corporis quis molestiae, ipsam atque optio et aliquid. Ex atque, rerum vel officia minus sunt ipsum fugit natus ducimus!
                  </p>
                  <h5 className="title-sm mb-0">Jim Doe</h5>
                  <small>Marketing Specialist</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
