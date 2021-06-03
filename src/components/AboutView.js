import Hero from "./Hero";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const AboutView = () => {
  const posterPath = process.env.PUBLIC_URL + '/index.jpg'
  return (
    <>
      <Hero text="Why Choose Us"  backdrop={posterPath}/>
      <div className="trending-container about-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead text-white">
                Movie Browser is a website biult for learning React. This is a little extension to project given by Kalob Taulien under a Udemy Course.
                Kalob teaches very good.<br/> Will add new featues in future.....
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <h5>Built by: Aayush Deshmukh</h5>
            <p className="text-info">Under Kalob Taulien (Udemy Instructor)</p>
          </div>
          <div className="d-flex">
            <div className="icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="i" icon={["fab", "github"]} />
            </div>
            <h5>Github: <a href="https://github.com/Aayushd18?tab=repositories">Aayushd18</a></h5>
          </div>
          <div className="d-flex">
            <div className="icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="i" icon={["fab", "linkedin"]} />
            </div>
            <h5>LinkedIn: <a href="https://www.linkedin.com/in/aayush-deshmukh-b88b6819a/">Aayush Deshmukh</a></h5>
          </div>
        </div>
        <div className="mx-3 end-label">
          <h5>@2021. All Rights Reserved</h5>
        </div>
      </div>
    </>
  );
};

export default AboutView;
