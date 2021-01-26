import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";

import Base from "../Base";
import { getNewsByDateRange } from "../helper/coreapicalls";
import Cards from "../Cards/Cards";

import "react-datepicker/dist/react-datepicker.css";

export default function Archive() {
  const today = new Date();
  const [startDate, setStartDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [endDate, setEndDate] = useState(today);
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="btn-primary btn" onClick={onClick}>
      {value}
    </button>
  );

  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const topics = [
    {
      _id: "5f53b8655f93960f3df852b1",
      name: "Assam",
    },
    {
      _id: "5f53b9035f93960f3df852b8",
      name: "National",
    },
    {
      _id: "5f53b94f5f93960f3df852bd",
      name: "International",
    },
    {
      _id: "5f53b9d95f93960f3df852c7",
      name: "Sports",
    },
    {
      _id: "5fc89a79f2a72f067186b3fe",
      name: "Northeast",
    },
    {
      _id: "5fcde94b0835bb064a0094f7",
      name: "Opinion",
    },
    {
      _id: "5fcde9750835bb064a0094f8",
      name: "Business",
    },
    {
      _id: "5fcde97c0835bb064a0094f9",
      name: "Politics",
    },
  ];

  const [showSpinner, setShowSpinner] = useState(false);

  const loadNews = () => {
    setIsLoaded(false);
    setShowSpinner(true);
    getNewsByDateRange(startDate, endDate).then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
        console.error(res);
      } else {
        setNews(res);
        setIsLoaded(true);
        setShowSpinner(false)
      }
    });
  };

  const getSpecifiedNews = (allNews, topicId) => {
    var specifiedNews = [];
    allNews.forEach((item) => {
      var topic = item.topic;
      if (topic.includes(topicId)) {
        specifiedNews.push(item);
      }
    });
    return specifiedNews;
  };

  return (
    <Base>
      <div className="my-container p-3">
        <div className="text-bold row">
          <div className="col">
            Showing News From:{" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
              maxDate={today}
            />{" "}
          </div>
          <div className="col text-center">
            To:{" "}
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<ExampleCustomInput />}
              minDate={startDate}
              maxDate={today}
            />
            {"   "}
          </div>
          <div className="col ">
            <button
              type="button"
              className="btn btn-danger btn-sm float-right px-3 py-2"
              onClick={loadNews}
            >
              Show News
            </button>
          </div>
        </div>

        {isLoaded ? (
          <div>
            {topics.map((topic) => (
              <div key={topic._id}>
                {getSpecifiedNews(news, topic._id).length > 0 ? (
                  <>
                    <h3 className="text-bold">{topic.name}</h3>
                    <hr
                      style={{
                        height: "1px",
                        borderWidth: "0",
                        color: "gray",
                        backgroundColor: "gray",
                      }}
                    />
                  </>
                ) : null}

                <Cards
                  newsList={getSpecifiedNews(news, topic._id).slice(0, 8)}
                  horizontal={false}
                  topicName={topic.name}
                />
              </div>
            ))}
          </div>
        ) : (
          <div class="text-center" style={{marginTop: "10%", display: showSpinner ? "" : "none"}}>
            <div
              class="spinner-border text-danger"
              role="status"
              style={{ width: "7rem", height: "7rem" }}
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </Base>
  );
}
