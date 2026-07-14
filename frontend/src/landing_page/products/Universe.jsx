import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-7" style={{ marginBottom: "80px" }}>
        <p className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-normal">The Zerodha Universe</h2>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center justify-content-center">
        <div className="col-md-4 mb-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ height: "50px" }}
          />
          <p className="text-muted mt-3 small px-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ height: "40px" }}
          />
          <p className="text-muted mt-3 small px-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/images/tijori.svg" style={{ height: "40px" }} />
          <p className="text-muted mt-3 small px-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/images/streakLogo.png" style={{ height: "45px" }} />
          <p className="text-muted mt-3 small px-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ height: "45px" }}
          />
          <p className="text-muted mt-3 small px-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/images/dittoLogo.png" style={{ height: "40px" }} />
          <p className="text-muted mt-3 small px-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary px-5 py-2 fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
