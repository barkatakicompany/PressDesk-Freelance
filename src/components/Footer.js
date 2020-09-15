import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://3.133.84.12:8004/api/topics")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTopics(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, []);

  return isLoaded && !error ? (
    <div className="container-fluid mt-3 py-4 footer">
      <div className="mx-md-5 px-md-5 text-white">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="mb-3 footer-heading-text">Topics</div>
            {topics.map(({ name, _id }) => (
              <div key={_id}>
                <NavLink
                  to={{
                    pathname: `/${name}/${_id}`,
                    navProps: {
                      id: _id,
                    },
                  }}
                  className="footer-links"
                >
                  {name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb-3 footer-heading-text">PressDesk</div>
            <div>
              <NavLink to="#" className="footer-links">
                About Us
              </NavLink>
            </div>
            <div>
              <NavLink to="#" className="footer-links">
                Advertise
              </NavLink>
            </div>
            <div>
              <NavLink to="#" className="footer-links">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 footer-heading-text">Trending News</div>
          <div className="col-md col-sm-6 footer-heading-text">Follow Us</div>
        </div>
        <div className="d-flex justify-content-center footer-brand">
          <a className="site-name py-1" href="/">
            PressDesk<span style={{ color: "#e92525" }}>.</span>in
          </a>
        </div>
        <div className="pt-2 d-flex justify-space-between">
          <div className="copyrights text-center  ">
            &copy; 2020 PressDesk. All rights Reserved
          </div>
          {/* <div className="row">
            <div className="col">Terms and Conditions</div>
            <div className="col">Privacy Policy</div>
          </div> */}
        </div>
      </div>
    </div>
  ) : null;
}
