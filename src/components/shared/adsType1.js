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
    <div className="carousel-item active">
      <a href={`https://${adsLink}`} target="_blank" rel="noopener noreferrer">
        <img class="d-block w-100" src={adsImg} alt="Advertisement" />
      </a>
    </div>
  ) : null;
}

export default function AdsType1() {
  const [adsType1, setAdsType1] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/getadvbytype/?type=1`)
      .then((res) => res.json())
      .then(
        (result) => {
          setAdsType1(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  console.log(adsType1)

  const settings = {
    dots: false,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return !error ? (
    <>
      <div className="advertisement-1">
        <div
          id="carouselExampleControls"
          className="carousel slide mx-auto"
          data-ride="carousel"
        >
          <Slider {...settings}>
            {adsType1.map((ads, index) => (
              <Ads key={index} ads={ads} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  ) : null;
}
