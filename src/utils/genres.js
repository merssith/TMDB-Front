const getGenreName = (id, type, movieArray, tvArray) => {
  if (type === "movie") {
    for (let i = 0; i < movieArray.length; i++) {
      if (id === movieArray[i].id) return movieArray[i].name;
    }
  } else if (type === "tvshow") {
    for (let i = 0; i < tvArray.length; i++) {
      if (id === tvArray[i].id) return tvArray[i].name;
    }
  } else {
    return "";
  }
};

export { getGenreName };
