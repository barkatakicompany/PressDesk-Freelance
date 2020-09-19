import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { getAds } from "../helper/coreapicalls";

import { API } from "../backend";

export default function Advertisement({ type, speed }) {
  const [ads, setAds] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = () => {
    getAds(type).then((res) => {
      if (res.error) {
        // todo
        console.log(res.error)
        setIsLoaded(false);
      } else {
        setAds(res);
        setIsLoaded(true);
      }
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed,
    cssEase: "linear",
  };

  return isLoaded ? (
    <>
      <br />
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index}>
            <a
              href={`https://${ad.toLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="d-block w-100"
                src={`${API}/getadvimage/${ad._id}`}
                alt="Advertisement"
              />
            </a>
          </div>
        ))}
      </Slider>
    </>
  ) : null;
}
