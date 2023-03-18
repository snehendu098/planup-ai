import axios from "axios";

export const formatDataString = (string) => {
  console.log(string);
  let data = string
    .split("\n")
    .map((item) => {
      return item.trim();
    })
    .filter((item) => item !== "");
  return data;
};

export const destToLatLang = async (dest) => {
  const options = {
    method: "GET",
    url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
    params: { address: dest, language: "en" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);

  return res.data.results[0].geometry.location;
};
