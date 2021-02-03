import React, { useEffect, useState } from "react";
import Base from "../Base";
import Cards from "../Cards/Cards";
import CovidDashboard from "../CovidDashboard/CovidDashboard";
import { getNewsByTopicName } from "../helper/coreapicalls";
import { calculateElapsedTime, correctImageUrl } from "../helper/utilities";

// TODO Designing and responsive
// TODO Correcting Politics, Business, Sports
// TODO Correcting LifeStyleNews
// TODO Correcting EntertainmentNews

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

  const [isAssamLoaded, setIsAssamLoaded] = useState(false);
  const [isNortheastLoaded, setIsNortheastLoaded] = useState(false);
  const [isNationalLoaded, setIsNationalLoaded] = useState(false);
  const [isInternationalLoaded, setIsInternationalLoaded] = useState(false);
  const [isBusinessLoaded, setIsBusinessLoaded] = useState(false);
  const [isPoliticsLoaded, setIsPoliticsLoaded] = useState(false);
  const [isSportsLoaded, setIsSportsLoaded] = useState(false);
  const [isOpinionLoaded, setIsOpinionLoaded] = useState(false);
  const [isLifeStyleLoaded, setIsLifeStyleLoaded] = useState(false);
  const [isEntertainmentLoaded, setIsEntertainmentLoaded] = useState(false);

  const loadAssamNews = () => {
    getNewsByTopicName("Assam").then((res) => {
      if (res.error || res.length == 0) {
        setIsAssamLoaded(false);
      } else {
        setAssamNews(res);
        setIsAssamLoaded(true);
      }
    });
  };
  const loadNortheastNews = () => {
    getNewsByTopicName("Northeast").then((res) => {
      if (res.error || res.length == 0) {
        setIsNortheastLoaded(false);
      } else {
        setNortheastNews(res);
        setIsNortheastLoaded(true);
      }
    });
  };
  const loadNationalNews = () => {
    getNewsByTopicName("National").then((res) => {
      if (res.error || res.length == 0) {
        setIsNationalLoaded(false);
      } else {
        setNationalNews(res);
        setIsNationalLoaded(true);
      }
    });
  };
  const loadInternationalNews = () => {
    getNewsByTopicName("Interntaional").then((res) => {
      if (res.error || res.length == 0) {
        setIsInternationalLoaded(false);
      } else {
        setInternationalNews(res);
        setIsInternationalLoaded(true);
      }
    });
  };
  const loadBusinessNews = () => {
    getNewsByTopicName("Business").then((res) => {
      if (res.error || res.length == 0) {
        setIsBusinessLoaded(false);
      } else {
        setBusinessNews(res);
        setIsBusinessLoaded(true);
      }
    });
  };
  const loadPoliticsNews = () => {
    getNewsByTopicName("Politics").then((res) => {
      if (res.error || res.length == 0) {
        setIsPoliticsLoaded(false);
      } else {
        setPoliticsNews(res);
        setIsPoliticsLoaded(true);
      }
    });
  };
  const loadSportsNews = () => {
    getNewsByTopicName("Sports").then((res) => {
      if (res.error || res.length == 0) {
        setIsSportsLoaded(false);
      } else {
        setSportsNews(res);
        setIsSportsLoaded(true);
      }
    });
  };
  const loadOpinionNews = () => {
    getNewsByTopicName("Opinion").then((res) => {
      if (res.error || res.length == 0) {
        setIsOpinionLoaded(false);
      } else {
        setOpinionNews(res);
        setIsOpinionLoaded(true);
      }
    });
  };
  const loadLifeStyleNews = () => {
    getNewsByTopicName("Life-Style").then((res) => {
      if (res.error || res.length == 0) {
        setIsLifeStyleLoaded(false);
      } else {
        setLifeStyleNews(res);
        setIsLifeStyleLoaded(true);
      }
    });
  };
  const loadEntertainmentNews = () => {
    getNewsByTopicName("Entertainment").then((res) => {
      if (res.error || res.length == 0) {
        setIsEntertainmentLoaded(false);
      } else {
        setEntertainmentNews(res);
        setIsEntertainmentLoaded(true);
      }
    });
  };

  // console.log(nationalNews);

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
          <Cards
            newsList={assamNews.slice(0, 8)}
            horizontal={false}
            topicName={"Assam"}
          />
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
          {/* <div className="mt-m-0"> */}
          <Cards
            newsList={northeastNews.slice(0, 8)}
            horizontal={false}
            topicName={"Northeast"}
          />
          {/* </div> */}
        </div>
        {/* National / International */}
        <div className="row">
          {/* National */}
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
                  singleWithList={true}
                  className="card"
                  topicName={"National"}
                />
              </>
            </div>
          </div>
          {/* International */}
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
                  singleWithList={true}
                  className="card"
                  topicName={"International"}
                />
              </>
            </div>
          </div>
        </div>
        {/* Politics / Business / Sports */}
        {/* TODO Correct news */}
        <div className="row">
          {/* Politics */}
          <div className="col-sm-12 col-lg-4">
            <div className="p-3">
              <h3 className="text-bold text-red">Politics</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <Cards
                newsList={assamNews[0]}
                single={true}
                video={false}
                topicName={"Politics"}
              />
              <Cards
                newsList={assamNews[1]}
                single={true}
                video={false}
                topicName={"Politics"}
              />
            </div>
          </div>
          {/* Business */}
          <div className="col-sm-12 col-lg-4">
            <div className="p-3">
              <h3 className="text-bold text-red">Business</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <Cards
                newsList={northeastNews.slice(0, 5)}
                horizontal={true}
                className="card"
                topicName={"Business"}
              />
            </div>
          </div>
          {/* Sports */}
          <div className="col-sm-12 col-lg-4">
            <div className="p-3">
              <h3 className="text-bold text-red">Sports</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <Cards
                newsList={assamNews[0]}
                single={true}
                video={false}
                topicName={"Politics"}
              />
              <Cards
                newsList={assamNews[1]}
                single={true}
                video={false}
                topicName={"Politics"}
              />
            </div>
          </div>
        </div>
        {/* Life Style  */}
        {/* TODO Correct News */}
        <div className="">
          <div className="p-3">
            <h3 className="text-bold text-red">Life Style</h3>
            <hr
              style={{
                height: "1px",
                borderWidth: "0",
                backgroundColor: "gray",
              }}
            />
          </div>
          <div className="mt-2 m-0">
            <Cards
              newsList={assamNews.slice(0, 4)}
              horizontal={false}
              topicName={"Assam"}
            />
          </div>
        </div>
        {/* Opinion / Entertainment */}
        <div className="row">
          {/* Entertainment */}
        {/* TODO Correct News */}
          <div className="col-lg-7 col-sm-12">
            <div className="p-3">
              <h3 className="text-bold text-red">Entertainment</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <div className="row row-cols-2 row-cols-md-2 row-cols-sm-1 px-3">
                {assamNews.slice(0, 4).map((news, i) => (
                  <Cards
                    newsList={news}
                    single={true}
                    video={false}
                    topicName={"Entertainment"}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Opinion */}
          <div className="col-lg-5 col-sm-12">
            <div className="p-3">
              <h3 className="text-bold text-red">Opinion</h3>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  backgroundColor: "gray",
                }}
              />
              <Cards
                newsList={opinionNews.slice(0, 5)}
                horizontal={true}
                className="card"
                topicName={"Opinion"}
              />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
