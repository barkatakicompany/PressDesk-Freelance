import React, { useState, useEffect } from "react";
import { SingleNews } from "../components/shared";

export default function SearchResult({ location }) {
  const [searchResults, setSearchResults] = useState([]);
  const search = location.search;
  const searchKeyword = search.split("=");
  const keyword = searchKeyword[1];

  console.log(search);

  useEffect(() => {
    if (searchKeyword[0] === "?tag") {
      fetch(`http://3.133.84.12:8004/api/getnewsbytagtext?search=${keyword}`)
        .then((res) => res.json())
        .then((result) => {
          setSearchResults(result);
        });
    } else
      fetch(`http://3.133.84.12:8004/api/getnewsbysearchtext${search}`)
        .then((res) => res.json())
        .then((result) => {
          setSearchResults(result);
        });
  }, [keyword, search]);

  return (
    <div className="container-fluid">
      <div className="mx-md-5 px-md-5 row">
        <div className="col"></div>
        <div className="col-md-8">
          <h2 className="mt-5">Search Result for: {keyword}</h2>
          <hr />
          <div className="row row-cols-1 row-cols-2 mt-4">
            {searchResults.map((news, index) => (
              <div key={index} className="col mb-3 card-content">
                <SingleNews
                  news={news}
                  // subTopicId={subTopicId}
                  // topicId={topicId}
                  // topicName={topicName}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}
