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

export const correctImageUrl = (imageUrl) => {
  var url = imageUrl.replace("http://qa.pressdesk.in", "https://3.133.84.12")
  return url
}

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
