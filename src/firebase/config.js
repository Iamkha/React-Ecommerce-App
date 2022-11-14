import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCXJmUaJ8u06Y82FxRVHaMp3Cg3lc0o55w',
  authDomain: 'eshop-451f2.firebaseapp.com',
  projectId: 'eshop-451f2',
  storageBucket: 'eshop-451f2.appspot.com',
  messagingSenderId: '152050999949',
  appId: '1:152050999949:web:f4a6970103370bfbe2f8c4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
