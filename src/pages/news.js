import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { ShareWidget } from "../components";
import { AdsType0, AdsType1, SingleNews, ListNews } from "../components/shared";

const MoreSubTopicNews = ({
  currentNewsId,
  subTopicId,
  topicId,
  topicName,
  subTopicName,
}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsBySuptopic(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [topicId, subTopicId, isLoaded]);

  var moreNews = [];
  for (var news of newsBySuptopic) {
    if (news._id !== currentNewsId) moreNews.push(news);
  }
  return (
    <>
      <br />
      <h4 className="px-4 mt-4">More News</h4>
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 row-cols-sm-2">
        {moreNews.slice(0, 3).map((news, index) => (
          <div key={index} className="col mb-3 card-content">
            <SingleNews
              news={news}
              subTopicId={subTopicId}
              topicId={topicId}
              topicName={topicName}
              subTopicName={subTopicName}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const RelatedNews = ({
  newsTags,
  subTopicId,
  topicId,
  topicName,
  subTopicName,
}) => {
  const [listNews, setListNews] = useState([]);
  console.log(newsTags);
  const tag0 = newsTags[0];
  const tag1 = newsTags[1];

  var listNewsByTag = [];
  useEffect(() => {
    var listNews = [];
    fetch(`http://3.133.84.12:8004/api/getnewsbytagtext?search=${tag0}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(tag0);
        setListNews(result);
      });
  }, [tag0]);

  return (
    <ListNews
      listNews={listNews.slice(0, 5)}
      header="Related News"
      subTopicId={subTopicId}
      topicId={topicId}
      topicName={topicName}
      subTopicName={subTopicName}
    />
  );
};

export default function News(props) {
  const {
    params: { topicName, subTopicName, newsId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  const [subTopicId, setSubTopicId] = useState("");
  const [topicId, setTopicId] = useState("");

  const [news, setNews] = useState({
    subTopic: [
      {
        _id: "",
        name: "",
        description: "",
        topic: "",
        createdAt: "",
        updatedAt: "",
        __v: "",
      },
    ],
    tags: [],
    _id: "",
    dateOfNews: "",
    editor: "",
    heading: "",
    shortDsc: "",
    body: "",
    links: [],
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    __v: "",
  });

  useEffect(() => {
    if (props.location.newsProps) {
      var { tId, stId } = props.location.newsProps;
      setTopicId(tId);
      setSubTopicId(stId);
      sessionStorage.setItem("topicId", tId);
      sessionStorage.setItem("subTopicId", stId);
    } else {
      setTopicId(sessionStorage.getItem("topicId"));
      setSubTopicId(sessionStorage.getItem("subTopicId"));
    }
    fetch(`http://3.133.84.12:8004/api/news/${newsId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNews(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
    if (isLoaded)
      fetch(`http://3.133.84.12:8004/api/news/photo/${newsId}`)
        .then((res) => res.url)
        .then(
          (result) => {
            setNewsImage(result);
          },
          (error) => {
            setError(error);
          }
        );
  }, [newsId, isLoaded, props.location.newsProps]);

  var updatedAtDate = new Date(news.updatedAt);

  return !error && isLoaded ? (
    <div className="container-fluid">
      <br />
      <nav aria-label="breadcrumb" className="mx-md-5">
        <ol className="breadcrumb mx-md-5">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicName}/${topicId}`}>{topicName}</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicName}/${topicId}/${subTopicName}/${subTopicId}`}>
              {subTopicName}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {news.heading}
          </li>
        </ol>
      </nav>
      <br />
      <AdsType0 />
      <br />
      <div className="row mx-md-5 px-md-5" id="content">
        <section className="col-md-7 col-sm-12" id="left">
          <article className="news-container">
            <p className="news-time-wrapper">
              Last Updated:{" "}
              <span className="news-updated-time">
                {updatedAtDate.toString()}
              </span>
            </p>
            <h1 className="news-heading">{news.heading}</h1>
            <p className="news-desc news-text">{news.shortDsc}</p>
            <p className="">
              Written By <span className="news-editor">{news.editor}</span>
            </p>
            <div className="">
              <ShareWidget url={props.match.url} />
            </div>
            <hr />
            <img
              src={newsImage}
              className="img-fluid rounded w-100 mb-5"
              alt="...."
            />
            <div
              className="news-body news-text"
              dangerouslySetInnerHTML={{
                __html: news.body,
              }}
            ></div>
          </article>
          <br />
          <AdsType1 />
          <MoreSubTopicNews
            currentNewsId={newsId}
            subTopicId={subTopicId}
            topicId={topicId}
            topicName={topicName}
            subTopicName={subTopicName}
          />
        </section>

        <aside className="col-md-5 col-sm-12" id="right">
          <AdsType1 />
          <RelatedNews
            newsTags={news.tags}
            {...{ subTopicId, topicId, topicName, subTopicName }}
          />
          <AdsType1 />
        </aside>
      </div>
      <AdsType0 />
      <br />
    </div>
  ) : null;
}
