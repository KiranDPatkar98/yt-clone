import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxKdthdR3Gz6lUA-XcrfrdUnI1BWpD6KI',
  authDomain: 'kiran-yt-cloning.firebaseapp.com',
  projectId: 'kiran-yt-cloning',
  storageBucket: 'kiran-yt-cloning.appspot.com',
  messagingSenderId: '862702426633',
  appId: '1:862702426633:web:ac2bb3742495eb888ab6d8',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
