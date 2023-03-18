const axios = require("axios");

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
    limit: "30",
    currency: "USD",
    distance: "2",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": "0f485e8ea1mshf523d04412d570ap150f2djsnfb30cf44c2ad",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
