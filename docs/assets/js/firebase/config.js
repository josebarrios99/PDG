const firebaseConfig = {
    apiKey: "AIzaSyBRmiZ0gSpvXzZ0uZZM9xfhLsfxpHpBgjQ",
    authDomain: "pdg-2-f85b2.firebaseapp.com",
    projectId: "pdg-2-f85b2",
    storageBucket: "pdg-2-f85b2.appspot.com",
    messagingSenderId: "157260285462",
    appId: "1:157260285462:web:ebba104e971a2bcbfcd737"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();