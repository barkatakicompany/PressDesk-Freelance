import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { getAds } from "../helper/coreapicalls";

import {API} from "../backend"

export default function Advertisement({ type, speed }) {
  console.log(type);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = () => {
    getAds(type).then((res) => {
      if (res.error) {
        // todo
      } else {
        setAds(res);
      }
    });
  };

  console.log(ads);

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

  return (
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
  );
}
