var firebaseConfig = {
    apiKey: "AIzaSyDU50mm7XBDgIvjKAV1fo55KyofYXsv3gQ",
    authDomain: "swebwaveproject.firebaseapp.com",
    databaseURL: "https://swebwaveproject.firebaseio.com",
    projectId: "swebwaveproject",
    storageBucket: "swebwaveproject.appspot.com",
    messagingSenderId: "1097032753650",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("users").add({
    first: "Son",
    last: "Dang",
    born: 1991
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

function login(user, pass) {

}