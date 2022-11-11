import React, { Component } from 'react'
import { DarkStarDiv } from '../StarDiv/StarDiv'
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container-fluid contact">
            <div className="contact-headding">
                <h2>Contact me</h2>
                <DarkStarDiv/>
            </div>
            <div className="container contact-container">
                <div className="contact-form">
                <input className='contact-input' type="text" placeholder='Name'/>
                <input className='contact-input' type="email" placeholder='Eamil Address'/>
                <input className='contact-input' type="number" placeholder='Phone Number'/>
                <textarea className='contact-input' cols="30" rows="7" placeholder='Message'></textarea>
                <button className='btn contact-btn'>Send</button>
                </div>
            </div>
        </div>
      </>
    )
  }
}
