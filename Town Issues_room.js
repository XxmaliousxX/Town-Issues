var firebaseConfig = {
      apiKey: "AIzaSyBWpQA1AUpoWcBHscPB92mtbmp00dRmiTg",
      authDomain: "town-issues.firebaseapp.com",
      databaseURL: "https://town-issues-default-rtdb.firebaseio.com",
      projectId: "town-issues",
      storageBucket: "town-issues.appspot.com",
      messagingSenderId: "935780701200",
      appId: "1:935780701200:web:8adcc9fc0958ae4e62a695"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+" "+user_name;

    function addRoom() {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
          });
          
          localStorage.setItem("room_name", room_name);

          window.location="Town Issues_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location-"Town Issues_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
