import { API } from "../backend";

export const getTopics = () => {
  return fetch(`${API}/topics`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// News API
export const getNewsByTopics = (topicId) => {
  return fetch(`${API}/getnewsByTopic/${topicId}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getNewsBySubTopics = (id, limit) => {
  return fetch(`${API}/newsbysubtopic/${id}?${limit ? "limit=" + limit : ""}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};


export const getNews = (newsSlug) => {
  return fetch(`${API}/getnewsbyslug/?slug=${newsSlug}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// Search API
export const searchNews = ({ keyword, type = "text" }) => {
  if (type === "tags")
    return fetch(`${API}/getnewsbytagtext?search=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
};

// Ads API
export const getAds = (type) => {
  return fetch(`${API}/getadvbytype/?type=${type}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const adsImageHelper = (id) => {
  return fetch(`${API}/getadvimage/${id}`)
    .then((res) => {
      return res.url;
    })
    .catch((err) => console.log(err));
};
