import { useState } from "react";
import "./supportlink.css";

function SupportLinks() {
  const [open, setOpen] = useState(true);

  return (
    <div className="support-links">
      {/* LEFT */}
      <div className="left">
        {/* Account Opening */}
        <div className="card">
          <div className="card-header" onClick={() => setOpen(!open)}>
            <div className="title">
              <span className="plus">
                <i class="fa-regular fa-circle-user"></i>
              </span>
              <span>Account Opening</span>
            </div>
            <span className="arrow">
              {open ? (
                <i class="fa-solid fa-angle-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </span>
          </div>

          {open && (
            <ul className="list">
              <li>Resident individual</li>
              <li>Minor</li>
              <li>Non Resident Indian (NRI)</li>
              <li>Company, Partnership, HUF and LLP</li>
              <li>Glossary</li>
            </ul>
          )}
        </div>

        {/* Other sections */}
        <div className="card simple">👤 Your Zerodha Account</div>
        <div className="card simple">📈 Kite</div>
        <div className="card simple">💰 Funds</div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="featured">
          <a href="#">Offer for sale (OFS) – January 2026</a>
          <a href="#">Current Takeovers and Delisting – January 2026</a>
        </div>

        <div className="quick-links">
          <h4>Quick links</h4>
          <p>1. Track account opening</p>
          <p>2. Track segment activation</p>
          <p>3. Intraday margins</p>
          <p>4. Kite user manual</p>
          <p>5. Learn how to create a ticket</p>
        </div>
      </div>
    </div>
  );
}

export default SupportLinks;
