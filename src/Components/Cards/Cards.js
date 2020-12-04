import React from "react";

const HorizontalCard = (newsList) => {
  console.log(newsList);
  return (
    <div className="d-flex justify-content-between w-100">
      {" "}
      {newsList.map((news, i) => (
        <div key={i} className="col-3">
          <img
            src={require("../../static/images/news.png")}
            style={{ width: "250px" }}
          />
          <h3>{news.heading}</h3>
        </div>
      ))}
    </div>
  );
};
const VerticalCard = (newsList) => {
  return (
    <div
      className="w-100 p-2"
      style={{ display: "grid", alignContent: "center" }}
    >
      {newsList.map((news, i) => (
        <div className="row">
          <div className="col-md-4">
            <img
              src={require("../../static/images/news.png")}
              style={{ width: "170px" }}
            />
          </div>
          <div className="col h-100 d-flex align-items-center">
            <p key={i}>{news.heading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const SingleCard = (news) => {};

export default function Cards({
  newsList,
  horizontal = false,
  single = false, // card type can be single or multi(for multi it will be false)
}) {
  if (single) return SingleCard(newsList);
  else return horizontal ? HorizontalCard(newsList) : VerticalCard(newsList);
}
