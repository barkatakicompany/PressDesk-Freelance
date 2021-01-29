import React, { useEffect, useState } from "react";
import Base from "../Base";
import Cards from "../Cards/Cards";
import CovidDashboard from "../CovidDashboard/CovidDashboard";
import { getNewsByTopicName } from "../helper/coreapicalls";
import { calculateElapsedTime, correctImageUrl } from "../helper/utilities";

export default function Home() {
  var showCovidDashboard = true;

  const [assamNews, setAssamNews] = useState([]);
  const [northeastNews, setNortheastNews] = useState([]);
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [opinionNews, setOpinionNews] = useState([]);
  const [lifeStyleNews, setLifeStyleNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  useEffect(() => {
    loadAssamNews();
    loadNortheastNews();
    loadNationalNews();
    loadInternationalNews();
    loadBusinessNews();
    loadPoliticsNews();
    loadSportsNews();
    loadOpinionNews();
    loadLifeStyleNews();
    loadEntertainmentNews();
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  const loadAssamNews = () => {
    getNewsByTopicName("Assam").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setAssamNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadNortheastNews = () => {
    getNewsByTopicName("Northeast").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setNortheastNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadNationalNews = () => {
    getNewsByTopicName("National").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setNationalNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadInternationalNews = () => {
    getNewsByTopicName("Interntaional").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setInternationalNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadBusinessNews = () => {
    getNewsByTopicName("Business").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setBusinessNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadPoliticsNews = () => {
    getNewsByTopicName("Politics").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setPoliticsNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadSportsNews = () => {
    getNewsByTopicName("Sports").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setSportsNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadOpinionNews = () => {
    getNewsByTopicName("Opinion").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setOpinionNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadLifeStyleNews = () => {
    getNewsByTopicName("Life-Style").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setLifeStyleNews(res);
        setIsLoaded(true);
      }
    });
  };
  const loadEntertainmentNews = () => {
    getNewsByTopicName("Entertainment").then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setEntertainmentNews(res);
        setIsLoaded(true);
      }
    });
  };

  return (
    <Base>
      <div className="my-container">
        {" "}
        {showCovidDashboard ? <CovidDashboard /> : null}
        {/* Assam */}
        <div className="">
          <div className="p-3">
            <h3 className="text-bold text-red">Assam</h3>
            <hr
              style={{
                height: "1px",
                borderWidth: "0",
                backgroundColor: "gray",
              }}
            />
          </div>
          <div className="row mt-2 m-0">
            <Cards
              newsList={assamNews.slice(0, 8)}
              horizontal={false}
              topicName={"Assam"}
            />
          </div>
        </div>
        {/* Northeast */}
        <div className="">
          <div className="p-3">
            <h3 className="text-bold text-red">Northeast</h3>
            <hr
              style={{
                height: "1px",
                borderWidth: "0",
                backgroundColor: "gray",
              }}
            />
          </div>
          <div className="row mt-2 m-0">
            <Cards
              newsList={northeastNews.slice(0, 8)}
              horizontal={false}
              topicName={"Northeast"}
            />
          </div>
        </div>
        {/* National / International */}
        <div className="row">
          <div className="col">
            <div className="p-3">
              <h3 className="text-bold text-red">National</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <>
                <Cards
                  newsList={nationalNews.slice(0, 4)}
                  horizontal={true}
                  className="card"
                  topicName={"National"}
                />
              </>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="text-bold text-red">International</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <>
                <Cards
                  newsList={internationalNews.slice(0, 4)}
                  horizontal={true}
                  className="card"
                  topicName={"International"}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
