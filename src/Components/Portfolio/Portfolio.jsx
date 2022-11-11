import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./portfolio.css";
import { DarkStarDiv } from "../StarDiv/StarDiv";
import cabin from "./cabin.png";
import cake from "./cake.png";
import circus from "./circus.png";
import game from "./game.png";
import safe from "./safe.png";
import submarine from "./submarine.png";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Modal from "../Modal/Modal";

export default class Portfolio extends Component {
  state = {
    cards: [
      {id: "logCabin", name: "cabin", img: cabin , label: "Log Cabin" },
      {id: "tastyCake",  name: "cake", img: cake, label:"Tasty Cake"},
      {id: "circusTent",  name: "circus", img: circus, label:"Circus Tent"},
      {id: "controller",  name: "game", img: game, label:"Controller"},
      {id: "lockedSafe",  name: "safe", img: safe, label:"Locked Safe"},
      {id: "submarine",  name: "submarine", img: submarine, label:"Submarine"}
    ]
  };
  render() {
    return (
      <>
        <div className="container portfolio py-5">
          <div className="headding py-2">
            <h2>Portfolio</h2>
            <DarkStarDiv />
          </div>
          <div className="row">
            {this.state.cards.map((card)=>{return <PortfolioCard crd={card} /> })}
            
          </div>
        </div>

        {this.state.cards.map((card)=>{return <Modal info = {card}/>})}
        
      </>
    );
  }
}
