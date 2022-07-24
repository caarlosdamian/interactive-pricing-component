import React, { useState } from "react";
import { bottomItems } from "../../utils";
import check from '../../images/icon-check.svg'
import "./Card.scss";

export const Card = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="card-container">
      <div className="top-card-content">
        <div className="top-card-left-content">
          <div className="span-card-left-title">100K</div>
          <div className="span-card-left-title">PAGEVIEWS</div>
        </div>
        <div className="top-card-right-content">
          <div className="span-card-right-title">$16.00</div>
          <div className="span-card-right-subtitle">/ month</div>
        </div>
      </div>
      <div className="top-middle-container">
        <input
          type="range"
          name=""
          id=""
          className="scroll-bar"
          onChange={(e) => console.log(e)}
        />
      </div>
      <div className="card-middle-top-container">
        <span className="middle-top-text">Monthly Billing</span>
        <div
          className={`toggle-component ${(toggle && "active") || ""}`}
          onClick={() => settoggle(!toggle)}
        >
          <div className="circle-white"></div>
        </div>
        <span className="middle-top-text">Yearly Billing</span>
        <span className="middle-top-label">25% discount</span>
      </div>
      <hr className="line" />
      <div className="card-bottom-container">
        <div className="bottom-left-container">
          <div className="bottom-items-wrapper">
            {bottomItems.map((item) => (
              <div className="bottom-wrapper-item-container" key={item.id}>
                <img src={check} alt="check" className="bottom-icon" />
                <span className="bottom-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-right-container">
            <button className="button-right">Start my trial</button>
        </div>
      </div>
    </div>
  );
};
