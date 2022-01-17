function logout() {
      
}
const firebaseConfig = {
      apiKey: "AIzaSyDrs5hPuAa_WeYhDXkuRkXZi9kutW0-Fjo",
      authDomain: "class-test-6c03d.firebaseapp.com",
      databaseURL: "https://class-test-6c03d-default-rtdb.firebaseio.com",
      projectId: "class-test-6c03d",
      storageBucket: "class-test-6c03d.appspot.com",
      messagingSenderId: "1035047782842",
      appId: "1:1035047782842:web:35b03c5cde2772e345f583"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



