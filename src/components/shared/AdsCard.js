import React, { useEffect, useState } from "react";

export default function AdsCard(ads) {
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
