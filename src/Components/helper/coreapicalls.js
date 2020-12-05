import { API } from "../../backend";

export const getNewsByTopicName = (topicName) => {
  return fetch(`${API}/getnewsbytopicname/${topicName}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
