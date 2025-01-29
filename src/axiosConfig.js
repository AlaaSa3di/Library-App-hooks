import axios from 'axios';

const firebaseDatabaseURL = 'https://react-a2554-default-rtdb.firebaseio.com/'; 
const firebaseAuthURL = 'https://identitytoolkit.googleapis.com/v1/accounts:'; 
const apiKey = 'AIzaSyDnNyh7tH2Kv5imicEQUqnhl58m8QEcSos'; 

const axiosAuth = axios.create({
  baseURL: firebaseAuthURL,
  params: {
    key: apiKey,
  },
});

const axiosDB = axios.create({
  baseURL: firebaseDatabaseURL,
});

export { axiosAuth, axiosDB };