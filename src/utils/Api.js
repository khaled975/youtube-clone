import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
    order: "date",
  },
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export async function GetVideos(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}

