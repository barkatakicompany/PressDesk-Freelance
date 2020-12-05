import { API } from "../../backend";

export const getTopicByTopicName = (topicName) => {
  return fetch(`${API}/getnewsbytopicname/${topicName}`)
    .then((res) => {
      // console.log('res',res)
      return res.json();
    })
    .catch((err) => console.log(err));
};
