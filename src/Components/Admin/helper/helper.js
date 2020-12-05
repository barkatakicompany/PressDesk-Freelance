import { API } from "../../../backend";

export const getTopics = () => {
  return fetch(`${API}/alltopics`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getNewsByTopic = (topicId) => {
  return fetch(`${API}/getnewsbytopic/${topicId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getNews = (newsId) => {
  return fetch(`${API}/news/${newsId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
