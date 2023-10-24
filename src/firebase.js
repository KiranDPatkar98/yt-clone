import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB36CVi8OTGmq2odp_YdTlQHBJTfeAdDyw',
//   authDomain: 'yt-clonning.firebaseapp.com',
//   projectId: 'yt-clonning',
//   storageBucket: 'yt-clonning.appspot.com',
//   messagingSenderId: '458262799626',
//   appId: '1:458262799626:web:edfe6a784b0bfdb49c86f3',
// };

//real
const firebaseConfig = {
  apiKey: 'AIzaSyCXskCtpuWucNCd6QgWYKAKcQ0Obc_tfx8',
  authDomain: 'kpatkar-yt-clone.firebaseapp.com',
  projectId: 'kpatkar-yt-clone',
  storageBucket: 'kpatkar-yt-clone.appspot.com',
  messagingSenderId: '971161519967',
  appId: '1:971161519967:web:2ad48e74b2b7a9bf3f58ea',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
