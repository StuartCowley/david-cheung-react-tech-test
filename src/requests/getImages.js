import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items.filter(
          (item) => item.data[0].media_type === "image"
        );
        const images = imageResults.map((image) => {
          const returnObj = {
            href: image.links[0].href,
            title: image.data[0].title,
          };
          return returnObj;
        });
        return images;
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject([]);
      });
  }
};

export default getImages;
