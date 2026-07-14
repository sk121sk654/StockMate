import React from "react";
import "./Chargers.css";

function Charges() {
  return (
    <div className="container charges px-5 ">
      <div className="table-wrapper px-5">
        <h2 className="charges-title fs-4">Charges for account opening</h2>
        <table className="charges-table">
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td>
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-wrapper px-5">
        <h2 className="charges-title fs-4">
          Demat AMC (Annual Maintenance Charge)
        </h2>
        <table className="charges-table">
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th> AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted mt-2 " style={{ fontSize: "13.25px" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, click here.
        </p>
      </div>
      <div className="table-wrapper px-5">
        <h2 className="charges-title fs-4">
          Charges for optional value added services
        </h2>
        <table className="charges-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>

            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charges;
