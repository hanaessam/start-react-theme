import React, { Component } from "react";
export default class PortfolioCard extends Component {
  render() {
    // console.log(this.props.crd);
    let {id , name, img} = this.props.crd;
    return (
        <div className="col-md-4 col-sm-6">
        <div className="port-card">
          <img src={img} className="w-100" alt={name} />
          <div
            className="port-card-layer"
            data-bs-toggle="modal"
            data-bs-target={'#' + id}
          >
            <i className="fa-solid fa-plus text-light"></i>
          </div>
        </div>
      </div>
    );
  }
}
