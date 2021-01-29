export const arrayRemove = (arr, value, list = false) => {
  if (list) {
    return arr.filter(function (ele) {
      return !value.includes(ele);
    });
  } else {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  }
};

// export const isArrayEmpty = (array) => {
//   let emptyArray = []

//   if(array.)
// }

export const correctImageUrl = (imageUrl) => {
  var url = imageUrl.replace("http://qa.pressdesk.in", "https://3.133.84.12");
  return url;
};

export const sortTime = (arr) => {
  return arr.sort(function (a, b) {
    return new Date(b.dateOfNews) - new Date(a.dateOfNews);
  });
};

export const calculateElapsedTime = (time) => {
  var current = new Date();
  var timeDiff = current - new Date(time);

  // Convert time difference from milliseconds to seconds
  timeDiff = timeDiff / 1000;

  let seconds = Math.floor(timeDiff % 60);
  timeDiff = Math.floor(timeDiff / 60);
  let minutes = timeDiff % 60;
  timeDiff = Math.floor(timeDiff / 60);
  let hours = timeDiff % 24;
  timeDiff = Math.floor(timeDiff / 24);
  let days = timeDiff;

  var timeString = "";
  if (days !== 0) {
    timeString = days > 1 ? days + " days " : days + " day ";
  } else if (hours !== 0) {
    timeString = hours > 1 ? hours + " hours " : hours + " hour ";
  } else if (minutes !== 0) {
    timeString = minutes > 1 ? minutes + " minutes " : minutes + " minute ";
  } else {
    timeString = seconds > 1 ? seconds + " seconds " : seconds + " second ";
  }

  return timeString;
};

export const topicsWithSubtopics = {
  Assam: {
    _id: "5f53b8655f93960f3df852b1",
    slug: "Assam",
    subtopic: {
      Guwahati: {
        _id: "5fc89b93f2a72f067186b3ff",
        slug: "Guwahati",
      },
      "Upper Assam": {
        _id: "5fc89ba4f2a72f067186b400",
        slug: "Upper-Assam",
      },
      "Central Assam": {
        _id: "5fc89bbcf2a72f067186b401",
        slug: "Central-Assam",
      },
      "Lower Assam": {
        _id: "5fc89bc9f2a72f067186b402",
        slug: "Lower-Assam",
      },
    },
  },
  Northeast: {
    _id: "5fc89a79f2a72f067186b3fe",
    slug: "Northeast",
    subtopic: {
      "Arunachal Pradesh": {
        _id: "5fc8a286f2a72f067186b408",
        slug: "Arunachal-Pradesh",
      },
      Manipur: {
        _id: "5fc8a297f2a72f067186b40a",
        slug: "Manipur",
      },
      Meghalaya: {
        _id: "5fc8a29df2a72f067186b40b",
        slug: "Meghalaya",
      },
      Mizoram: {
        _id: "5fc8a2a7f2a72f067186b40c",
        slug: "Mizoram",
      },
      Nagaland: {
        _id: "5fc8a2b2f2a72f067186b40d",
        slug: "Nagaland",
      },
      Sikkim: {
        _id: "5fc8a2bbf2a72f067186b40e",
        slug: "Sikkim",
      },
      Tripura: {
        _id: "5fc8a2c3f2a72f067186b40f",
        slug: "Tripura",
      },
    },
  },
  National: {
    _id: "5f53b9035f93960f3df852b8",
    slug: "National",
    subtopic: {},
  },
  International: {
    _id: "5f53b94f5f93960f3df852bd",
    slug: "International",
    subtopic: {},
  },
  Business: {
    _id: "5fcde9750835bb064a0094f8",
    slug: "Business",
    subtopic: {},
  },
  Politics: {
    _id: "5fcde97c0835bb064a0094f9",
    slug: "Politics",
    subtopic: {},
  },
  Sports: {
    _id: "5f53b9d95f93960f3df852c7",
    slug: "Sports",
    subtopic: {},
  },
  Sports: {
    _id: "5f53b9d95f93960f3df852c7",
    slug: "Sports",
    subtopic: {},
  },
  Opinion: {
    _id: "5fcde94b0835bb064a0094f7",
    slug: "Opinion",
    subtopic: {},
  },
  Opinion: {
    _id: "5fcde94b0835bb064a0094f7",
    slug: "Opinion",
    subtopic: {},
  },
  "Life style": {
    _id: "6012ec6fb0556804eca40ae4",
    slug: "Life-style",
    subtopic: {},
  },
  Entertainment: {
    _id: "6012ec7bb0556804eca40ae5",
    slug: "Entertainment",
    subtopic: {},
  },
};

export const getTopic = () => {
  return Object.keys(topicsWithSubtopics);
};

export const getTopicSlug = (topic) => {
  return topicsWithSubtopics[topic].slug;
};

export const getSubtopics = (topicName) => {
  const subtopicObj = topicsWithSubtopics[topicName].subtopic;
  const subtopic = Object.keys(subtopicObj);
  return subtopic;
};

export const getSubtopicSlug = (topic, subtopic) => {
  const subtopicObj = topicsWithSubtopics[topic].subtopic;
  return subtopicObj[subtopic]["slug"];
};

export const getSubtopicId = (topic, subtopic) => {
  const subtopicN = subtopic.replace("-", " ");
  const subtopicObj = topicsWithSubtopics[topic].subtopic;
  return subtopicObj[subtopicN]["_id"];
};
