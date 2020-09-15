import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function Ads({ ads }) {
  const [adsImg, setAdsImg] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var adsLink = "#";

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/getadvimage/${ads._id}`)
      .then((res) => res.url)
      .then(
        (result) => {
          setIsLoaded(true);
          setAdsImg(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [ads._id]);

  adsLink = ads.toLink !== "" ? ads.toLink : "#";

  return isLoaded && !error ? (
    <div>
      <a href={`https://${adsLink}`} target="_blank" rel="noopener noreferrer">
        <img className="w-100 ads-img" src={adsImg} alt="Advertisement" />
      </a>
    </div>
  ) : null;
}

export default function AdsType0() {
  const [adsType0, setAdsType0] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/getadvbytype/?type=0`)
      .then((res) => res.json())
      .then(
        (result) => {
          setAdsType0(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };

  return !error ? (
    <>
      <div className="mx-auto advertisement-0">
        <Slider {...settings}>
          {adsType0.map((ads, index) => (
            <Ads key={index} ads={ads} />
          ))}
        </Slider>
        {/* <div
          id="carouselExampleControls"
          className="carousel slide advertisement-slider"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {adsType0.map((ads, index) => (
              <Ads key={index} ads={ads} />
            ))}
          </div>
        </div> */}

        {/* <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt=".1." />
            </div>
            <div className="carousel-item" data-interval="10">
              <img src="..." className="d-block w-100" alt=".2." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt=".3." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      </div>
    </>
  ) : null;
}
