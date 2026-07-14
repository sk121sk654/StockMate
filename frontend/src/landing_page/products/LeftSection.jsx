import React, { Component } from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>

        <div className="col-6 p-5 mt-5 mb-5">
          <h2>{productName}</h2>
          <p className="text-muted">{productDesription}</p>
          <div>
            {" "}
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-4 mb-5">
            <a href={googlePlay} className="mt-3">
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt=""
                style={{ marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
