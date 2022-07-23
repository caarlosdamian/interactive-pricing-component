import React from "react";
import patter from '../../images/pattern-circles.svg'
import './Top.scss';

export const Top = () => {
  return (
    <div className="top-container">
      <h1 className="top-header">Simple, traffic-based pricing</h1>
      <h3 className="top-subheader">
        Sign-up for our 30-day trial. No credit card required.{" "}
      </h3>
      <img src={patter} alt="patter"  className="patter-img"/>
    </div>
  );
};
