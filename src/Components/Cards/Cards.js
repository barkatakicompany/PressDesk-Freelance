import React from "react";

const VerticalCard = (newsList) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      {newsList.map((news, i) => (
        <div className="col mb-2" key={i}>
          <div className="card h-100">
            <img
              src={require("../../static/images/news.png")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-2">
              <p className="card-title text-bold-small m-0">{news.heading}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HorizontalCard = (newsList) => {
  return (
    <ul className="list-unstyled align-content-between m-0">
      {newsList.map((news, i) => (
        <li className="media py-2" key={i}>
          <img
            src={require("../../static/images/news.png")}
            className="mr-3 px-2"
            height="100px"
          />
          <div className="media-body align-self-center">
            <p className="mt-0 mb-1 text-bold-small">{news.heading}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const SingleCard = (news) => {
  return (
    <div className="card bg-darken-1 text-bold">
      <img src={require("../../static/images/news.png")} className="card-img" />
      <div className="card-img-overlay d-flex align-items-end p-0">
        <div
          className="w-100 p-2"
          style={{ backgroundColor: "#fff", opacity: ".7" }}
        >
          <p className="card-title text-bold-big m-0">{news.heading}</p>
        </div>
      </div>
    </div>
  );
};

export default function Cards({
  newsList,
  horizontal = false,
  single = false, // card type can be single or multi(for multi it will be false)
}) {
  if (single) return SingleCard(newsList);
  else return horizontal ? HorizontalCard(newsList) : VerticalCard(newsList);
}
