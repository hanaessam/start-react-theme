import React, { Component } from 'react';
import avatar from './avi.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './home.css';
import StarDiv from '../StarDiv/StarDiv';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="container-fluid home-bg">
        <div className="container home-cont">
            <img src={avatar} className="w-25 mt-5 py-4" alt="avi" />
            <h1 className='my-1'>Start React</h1>
            <StarDiv/>
            <h6 className='my-1'>Graphic Artist - Web Designer - Illustrator</h6>
        </div>
      </div>
      <Portfolio/>
      <About/>
      <Contact/>
      </>
    )
  }
}
