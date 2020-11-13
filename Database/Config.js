import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyB-nyb5lOyLNRqrdj1zmveOKssD02H6vkM",
    authDomain: "wheel-game-5498e.firebaseapp.com",
    databaseURL: "https://wheel-game-5498e.firebaseio.com",
    projectId: "wheel-game-5498e",
    storageBucket: "wheel-game-5498e.appspot.com",
    messagingSenderId: "40632834649",
    appId: "1:40632834649:web:7b1986e88e09dde6036f48"
};

export default firebase.initializeApp(firebaseConfig);