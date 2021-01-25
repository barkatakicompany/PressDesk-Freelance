import React from "react";

export default function Footer() {
  return (
    <div className="border-top" style={{ height: "20vh" }}>
      {/* About Us model start */}
      <div
        class="modal fade"
        id="aboutUsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                About Us
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>About Us</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* About Us model end */}

      {/* Contact Us model start */}
      <div
        class="modal fade"
        id="contactUsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Contact Us</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us model end */}

      <br />
      <div className="my-container p-4">
        <div className="row text-black-75" style={{ fontSize: "1.4rem" }}>
          <div className="col-md-3">
            <a
              href="#"
              className="footer-list"
              data-toggle="modal"
              data-target="#aboutUsModal"
            >
              About Us
            </a>{" "}
          </div>
          <div className="col-md-3">
            <a
              href="#"
              className="footer-list"
              data-toggle="modal"
              data-target="#contactUsModal"
            >
              Contact Us
            </a>{" "}
          </div>
          <div className="col-md-3">
            <a href="/Archives" className="footer-list">
              Archives
            </a>{" "}
          </div>
          <div className="col-md-3">
            <a href="/Gallery" className="footer-list">
              Gallery
            </a>{" "}
          </div>
        </div>

        <div className=" row pt-3 text-black-75">
          <div className="col-md-3">
            {/* <h2 className="text-red text-bold-big">PressDesk.in</h2> */}
            <p>
              <span className="text-red text-bold-small">
                Corporate Office:
              </span>
              <br />
              Barkataki Company
              <br /> Barkataki Market, A. T. Road
              <br /> Jorhat-785001 Assam, India
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <span className="text-red text-bold-small">
                Editorial Office:{" "}
              </span>
              <br />
              House No. 10, Purbanchal Path, <br />
              Near Sun Valley Hospital, <br />
              Bormotoria, Guwahati-781006 <br />
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
                editor@pressdesk.in
              </a>{" "}
              <br />
              Contact No- 0361-3561270
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
          </div>
          <div className="col-md-3">
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
          {/* <div className="col-md-3">
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
          </div> */}
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
