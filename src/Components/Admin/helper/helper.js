import { API } from "../../../backend";
import { isAuthenticated } from "../../Auth/helper/authApis";

export const getTopics = () => {
  document.getElementById("loading").classList.remove("d-none");
  return fetch(`${API}/alltopics`, {
    method: "GET",
  })
    .then((response) => {
        document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getNewsByTopic = (topicId) => {
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/getnewsbytopic/${topicId}`, {
    method: "GET",
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getNews = (newsId) => {
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/news/${newsId}`, {
    method: "GET",
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const uploadFile = (data) => {
  document.getElementById("loading").classList.remove("d-none");

  const { id, token } = isAuthenticated();

  return fetch(`${API}/upload/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addResource = (data) => {
  const { id, token } = isAuthenticated();
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/resource/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addNews = (data) => {
  const { id, token } = isAuthenticated();
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/news/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const updateNews = (data) => {
  const { id, token } = isAuthenticated();
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/news/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getSubTopicsByTopicId = (topicId) => {
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/subtopics/${topicId}`, {
    method: "GET",
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getAllAlbums = () => {
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/allalbums`, {
    method: "GET",
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addAlbum = (data) => {
  const { id, token } = isAuthenticated();
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/album/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const updateAlbum = (data) => {
  const { id, token } = isAuthenticated();
  document.getElementById("loading").classList.remove("d-none");

  return fetch(`${API}/album/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      document.getElementById("loading").classList.add("d-none");

      return response.json();
    })
    .catch((err) => console.log(err));
};