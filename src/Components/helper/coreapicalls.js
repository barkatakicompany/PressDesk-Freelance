import { API, COVIDAPI } from "../../backend";

export const getTopicByTopicName = (topicName) => {
  return fetch(`${API}/getnewsbytopicname/${topicName}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getCovidCases = () => {
  return fetch(COVIDAPI)
  .then((res) => {
    return res.json();
  })
  .catch((err) => console.log(err))
}
