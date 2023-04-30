import React from "react";

export const Footer = () => {
  return (
    <>
    <div className="container-footer">
      <div className="container my-5">
        <h1>CONTACT US</h1>
        <p>Do you have any queries regarding music therapy?</p>
        <div className="row my-5">
          <div className="col">
            <h4>Our Address</h4>
            <div className="line my-4" />
            <p>
            Meerut Institute of Engineering and Technology
            </p>
            <p>
            Nh-58 Baghpat Road
            </p>
            <p> UP (India)</p>
          </div>
          <div className="col">
            <h4>Keep Connected</h4>
            <div className="line my-4" />
              <div className="icons">
                <div className="d-flex">
                    <a  href="https://cxi-miet.github.io/Frontend-Showdown/">
                    <img className="icon" src='FS Logo.jpeg' alt='FS'/>
                    </a>
                    <p className="px-4">Frontend Website</p>
                </div>
                <div className="d-flex">
                <a href="https://github.com/LeafyOjas">
                  <img className="icon" src="github.png" />
                </a>
                <p className="px-4">Github</p>
                </div>
                <div className="d-flex">
                <a href="https://www.linkedin.com/in/ojaswin-kaushik-475663193">
                  <img className="icon" src="linkedin.png" />
                </a>
                <p className="px-4">Linkdin</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
