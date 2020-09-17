import React, { useState } from "react";
import Slider from "react-slick";
import { API } from "../backend.js";

import { getAds, adsImageHelper } from "./helper/coreapicalls.js";

const Ads = ({ ad }) => {
  const [adImage, setAdIamge] = useState("");
  adsImageHelper(ad._id).then(setAdIamge);

  return (
    <div className="carousel-item active">
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
  );
};

export default function Advertisement({ type, speed }) {
  // console.log(type)
  const [ads, setAds] = useState([]);
  getAds(type).then(setAds);

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
          <Ads key={index} ad={ad} />
        ))}
      </Slider>
    </>
  );
}
