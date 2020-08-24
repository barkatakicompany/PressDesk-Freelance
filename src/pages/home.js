import React from "react";
// import { SingleCard } from "../components/shared";
// import { NavLink } from "react-router-dom";
// import { SubTopics } from "./";

// import assam_news from "../data/assam_news.js";
// import breaking_news from "../data/breaking_news.js";
// import national_news from "../data/national_news.js";
// import international_news from "../data/international_news.js";

// const newsConfig = [
//   {
//     1: {
//       gridArea: "1 / 2 / 3 / 3",
//     },
//   },
//   {
//     0: {
//       gridArea: "1 / 1 / 1 / 3",
//     },
//   },
//   {
//     0: {
//       gridArea: "1 / 1 / 4 / 1",
//       height: "480px",
//     },
//     1: {
//       height: "100%",
//     },
//   },
// ];

// const mergeStyles = function (posts, config) {
//   // posts.forEach((post, index) => {
//   //   post.style = config[index];
//   // });
//   console.log("posts", posts);
//   console.log("config", config);
// };

// mergeStyles(assam_news, assamNewsConfig);
// mergeStyles(breaking_news, breakingNewsConfig);
// mergeStyles(national_news, nationalNewsConfig);

export default function Home({ topics }) {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   fetch('http://3.133.84.12:8004/api/topics')
  //   .then((res) => )
  // })
  // console.log(topics);
  // var topic = {};

  // for (topic of topics) {
  //   const { _id, name, subTopics } = topic;
  //   // console.log(topic);
  //   var newsAll = {};

  //   newsAll["topic"] = name;
  //   newsAll["topicId"] = _id;
  //   // console.log(newsAll);

  //   for (var subTopic of subTopics) {
  //     console.log(subTopic);
  //     const { _id, name } = subTopic;
  //     break;
  //   }
  //   break;
  // }

  // useEffect(() => {
  //   fetch(
  //     `http://3.133.84.12:8004/api//newsbysubtopic/${_id}`
  //   ).then((result) => {
  //     console.log(result);
  //   });
  // }, [_id]);

  return (
    <section className="container home">
      <div
        style={{
          backgroundColor: "rgba(255, 59, 48)",
          height: "100px",
          width: "100%",
          margin: "10px",
        }}
      >
        Ads
      </div>

      {/* <div className="">
        {topics.map(({ _id, name, subTopics }) =>
          subTopics.length !== 0 ? (
            <section key={_id} className="">
              <h2 className="mt-2">{name}</h2>
              <div>
                {subTopics.map(({ name, _id, topic }) => (
                  <div key={_id}>
                    <div className="d-flex justify-content-between align-items-end">
                      <NavLink
                        exact
                        to={`/${_id}`}
                        className="btn btn-outline-danger"
                      >
                        View All
                      </NavLink>
                    </div>
                    <div>
                      <SubTopics subTopicId={_id} topicId={topic} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null
        )}
        ;
      </div> */}

      {/* <div className="row">
        <h2>Breaking News</h2>
        <section className="breaking-news-container">
          <div className="col-md" style={{paddingLeft: "0"}}>
          <PostMasonary posts={breaking_news} columns={2} overlay={false}/>
          </div>
          <div className="col-md-3" style={{backgroundColor: "red", padding: "0"}}>Ads</div>
        </section>
        <h2>Assam</h2>
        <PostMasonary posts={assam_news} columns={3} overlay={true}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
        <h2>National</h2>
        <PostMasonary posts={national_news} columns={3} overlay={false}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
        <h2>International</h2>
        <PostMasonary posts={international_news} columns={3} overlay={false}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
      </div> */}
    </section>
  );
}
