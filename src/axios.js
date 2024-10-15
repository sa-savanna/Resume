import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const db = axios.create({
    baseURL: 'https://resume-287513-default-rtdb.europe-west1.firebasedatabase.app/'
});


const firebaseConfig = {
  projectId: "resume-287513",
  storageBucket: "gs://resume-287513.appspot.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export {db, storage};