import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { newsImageHelper, searchNews } from "../helper/coreapicalls";
import { API } from "../backend";
import Advertisement from "./Advertisement";

export default function BaseFrame({ children }) {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    loadTrendingNews();
  }, []);

  const loadTrendingNews = () => {
    searchNews({ keyword: "trending", type: "tags" }).then((res) => {
      if (res.error) {
        // todo
      } else {
        setTrendingNews(res);
      }
    });
  };

  return (
    <div>
      <div className="">
        <Advertisement type={0} speed={7000} />
        <hr />
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-2">
          <p className="small-heading-text mb-1">Trending News</p>
          <div
            style={{ borderTop: "solid #d10014 3px", width: "80%" }}
            className="mb-3"
          ></div>
          {trendingNews.map((news, i) => (
            <div className="">
              <div className="overflow card-img">
                <img
                  src={`${API}/news/photo/${news._id}`}
                  style={{ objectFit: "cover" }}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body pl-0 pt-1">
                <div className="text-dark">
                  <NavLink exact to={`/news/${news._id}`}>
                    <p className="card-title m-0 p-0 pt-1 blue-link-text">
                      {news.heading}
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md">{children}</div>
        <div className="col-md-3">
          <Advertisement type={1} speed={5000} />
          <Advertisement type={4} speed={3500} />
        </div>
      </div>
    </div>
  );
}
