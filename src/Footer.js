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
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">
                About Us
              </h3>
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
              <div className="col container history-overview side-spacer">
                <h5 className="text-center">
                  <i>
                    {/* <strong> */}
                    “It takes a lifetime to build a brand, and another to learn
                    to sustain.”
                    {/* </strong> */}
                  </i>
                </h5>
                <div className="row container-fluid justify-content-center align-items-center m-0 p-0">
                  {/* <img
                className="col-lg rounded border border-light m-3 p-0 shadow"
                src="Images/barkOldImg.jpg"
                alt=""
              /> */}
                  <div className="col-lg container-fluid text-justify p-0 m-0">
                    <p>
                      Our story began in 1898. Back then we were a book
                      supplier. Today we are privileged to be able to connect to
                      more than a million subscribers through our Barkataki
                      Company Dewal Panjika. We are also glad to share that we
                      have been recognized for being the best publisher and
                      printing organization thrice.
                      <br />
                      <br />
                      We go to work everyday hoping to do two things: share our
                      experiences with our friends and help make the world a
                      better place to live. We have always believed in serving
                      the best of services to our esteemed clientele. It’s our
                      goal to adhere to the highest quality parameters, using
                      ethical sources and practices to achieve our outputs.
                      <br />
                      <br />
                      We DARE!! There are times when our buddy competitors have
                      gone to great lengths to achieve the unachievable. We have
                      continued our search to surpass them in many a manner
                      possible pulling the bar even at a higher ground. The idea
                      is to fulfill our dreams and aspirations whilst staying
                      focused and maintaining the practical framework intact.
                      <br />
                      <br />
                      We ACHIEVE!! There are a few who might think about the
                      ‘other things’ before taking a work at hand. For us, our
                      patrons comes first, ALWAYS. After all, not everything
                      comes first before profits.
                      <br />
                      We are now a full fledged offset printing house, a
                      publisher, a book store and e-publisher.
                    </p>
                  </div>
                </div>
              </div>
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
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
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
        <div className="row text-bold" style={{ fontSize: "1.4rem" }}>
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
        <div className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
          &copy; 2021 PressDesk. All rights reserved.
        </div>
      </div>
    </div>
  );
}
