import { initializeApp } from 'firebase/app';
import { onValue, ref, getDatabase, off } from 'firebase/database';
import { useStore } from '../store';
import { getCurrentStep } from '../util/get-current-step';

const firebaseConfig = {
  databaseURL: 'https://perceived-performance-default-rtdb.firebaseio.com'
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = (query) => ref(db, query);
const stepRef = dbRef('step');

onValue(stepRef, (snapshot) => {
  const value = snapshot.val();
  const sectionId = getCurrentStep();
  if (sectionId > value) {
    window.location.href = `${window.location.origin}/${value === 0 ? '' : value}`;
    return;
  }

  useStore.setState({ presentationStep: value });
});
