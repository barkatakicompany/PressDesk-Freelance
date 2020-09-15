import React, { useState, useEffect } from "react";
import { SearchNews } from "../pages";

// const searchAll = async (keyword) => {
//   const response = await fetch(
//     `http://3.133.84.12:8004/api/getnewsbytagtext?search=${keyword}`
//   );
//   const data = await response.json();

//   return data;
// };

// const searchTags = (keyword) => {
// const response = fetch(
//   fetch(`http://3.133.84.12:8004/api/getnewsbysearchtext${keyword}`)
// );
// const data = await response.json();
// // console.log(data);
// return data;
// };

const SearchTags = (keyword) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/getnewsbytagtext?search=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, [keyword]);

  return news;
};

export default function search({ keyword, searchByTags = false }) {
  if (searchByTags) {
    return SearchTags(keyword);
  }
}
