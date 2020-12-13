import React from "react";

export default function Footer() {
  return (
    <div className="border-top" style={{ height: "20vh" }}>
      <br />
      <div className="my-container">
        <div className=" row pt-5 text-black-75">
          <div className="col-md-3">
            <h2 className="text-red text-bold-big">PressDesk.in</h2>
            <p>
              <span className="text-red text-bold-small">
                Corporate Office:
              </span>{" "}
              <br />
              Barkataki Company Barkataki Market, <br />
              A. T. Road, Jorhat <br /> Jorhat-785001 Assam, India
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <span className="text-red text-bold-small">
                Editorial &amp; Syndication issues
              </span>{" "}
              <br /> In case of any issues regarding the content on the site
              please mail us at: <br />
              <a
                href="mailto:editor@pressdesk.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                editor@pressdesk.in
              </a>
            </p>
            <p>
              <span className="text-red text-bold-small">Business queries</span>
              <br /> To reach out to us for any business related queries please
              mail us at: <br />
              <a
                href="mailto:editor@pressdesk.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@pressdesk.in
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <span className="text-red text-bold-small">
                Editorial Office:{" "}
              </span>
              <br />
              House No. 10, <br />
              Purbanchal Path, <br />
              Near Sun Valley Hospital, <br />
              Bormotoria, <br />
              Guwahati-781006 <br />
              Website –
              <a href="#" className="footer-link">
                www.pressdesk.in <br />
              </a>
              Email id-{" "}
              <a
                href="mailto:editor@pressdesk.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                editor@nenow.in
              </a>{" "}
              <br />
              Contact No- 0361-3561270
            </p>
          </div>
          <div className="col-md-3">
            <a href="#" className="footer-list">
              About Us
            </a>{" "}
            <br />
            <a href="#" className="footer-list">
              Adveritse
            </a>{" "}
            <br />
            <a href="#" className="footer-list">
              Careers
            </a>{" "}
            <br />
            <a href="#" className="footer-list">
              Intern With Us
            </a>{" "}
            <br />
            <a href="#" className="footer-list">
              Contact Us
            </a>
          </div>
        </div>
        <br />
        <div>
          <a
            href="#"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={require("./static/images/logo.png")}
              alt="LOGO"
              style={{ width: "60px" }}
            />
            <span className="text-bold-big" style={{ fontSize: "3rem" }}>
              PressDesk.in
            </span>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}
