import axios from 'axios';

console.log(process.env.REACT_APP_YT_API_KEY, 'hi');

const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    // key: process.env.REACT_APP_YT_API_KEY,
    key: 'AIzaSyB36CVi8OTGmq2odp_YdTlQHBJTfeAdDyw',
    // key: 'AIzaSyCXskCtpuWucNCd6QgWYKAKcQ0Obc_tfx8',
  },
});

export default request;
