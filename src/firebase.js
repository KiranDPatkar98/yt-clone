import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
