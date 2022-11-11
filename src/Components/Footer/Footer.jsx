import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container-fluid footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-col">
                            <h3>Location</h3>
                            <p>2215 John Daniel Drive <br/>
                                Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-col">
                            <h3>Around the web</h3>
                            <div className="icons">
                                <div className="icon-outline"><i class="fa-brands fa-facebook-f"></i></div>
                                <div className="icon-outline"><i class="fa-brands fa-twitter"></i></div>
                                <div className="icon-outline"><i class="fa-brands fa-linkedin-in"></i></div>
                                <div className="icon-outline"><i class="fa-brands fa-dribbble"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-col">
                            <h3>About Freelancer</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
        <div className="container-fluid copyrights"><p>Copyright © Your Website 2021</p></div>
      </>
    )
  }
}
