import { initializeApp } from 'firebase/app';
import { onValue, ref, getDatabase, off } from 'firebase/database';
import { useStore } from '../store';

const firebaseConfig = {
  // apiKey: "AIzaSyBb4-iG5zYKztXVTvqe4JN3tOOV03xIqeI",
  // authDomain: "perceived-performance.firebaseapp.com",
  databaseURL: 'https://perceived-performance-default-rtdb.firebaseio.com'
  // projectId: "perceived-performance",
  // storageBucket: "perceived-performance.appspot.com",
  // messagingSenderId: "254890518854",
  // appId: "1:254890518854:web:5202efaca1cf115781dd47",
  // measurementId: "G-X24DK5291C"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = (query) => ref(db, query);
const stepRef = dbRef('step');

onValue(stepRef, (snapshot) => {
  const value = snapshot.val();
  useStore.setState({ presentationStep: value });
  const sectionId = Number(window.location.pathname.replace('/', ''));
  if (sectionId > value) {
    window.location.href = `${window.location.origin}/${value === 0 ? '' : value}`;
  }
});
