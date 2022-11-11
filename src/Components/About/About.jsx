import React, { Component } from "react";
import StarDiv from "../StarDiv/StarDiv";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid about p-5">
            <div className="about-headding ">
                <h2>About</h2>
                <StarDiv/>
            </div>
          <div className="container about-container my-3">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
