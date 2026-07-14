import React, { Component } from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-10 col-md-8 text-center ">
          <h2>Pepole</h2>
        </div>
      </div>

      <div className="row justify-content-center   about-text">
        <div className="col-md-4 me-5 mt-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-3 text-muted ">Nithin Kamath</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        <div className="col-md-4 mt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage </a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
