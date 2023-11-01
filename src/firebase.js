import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB36CVi8OTGmq2odp_YdTlQHBJTfeAdDyw',
  authDomain: 'yt-clonning.firebaseapp.com',
  projectId: 'yt-clonning',
  storageBucket: 'yt-clonning.appspot.com',
  messagingSenderId: '458262799626',
  appId: '1:458262799626:web:edfe6a784b0bfdb49c86f3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
