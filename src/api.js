import axios from 'axios';

const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    // key: process.env.REACT_APP_YT_API_KEY,
    key: 'AIzaSyB36CVi8OTGmq2odp_YdTlQHBJTfeAdDyw',
  },
});

export default request;
