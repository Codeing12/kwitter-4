const firebaseConfig = {
  apiKey: "AIzaSyCX26V8Kh8jGNrl6zD7uyFNllnqveMhGAI",
  authDomain: "kwitter-test-e1466.firebaseapp.com",
  databaseURL: "https://kwitter-test-e1466-default-rtdb.firebaseio.com",
  projectId: "kwitter-test-e1466",
  storageBucket: "kwitter-test-e1466.appspot.com",
  messagingSenderId: "35095886699",
  appId: "1:35095886699:web:dd6a6ce2948f43a68dea2e"
};
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";
function addroom()
{
  var room_name = document.getElementById("room_name").Value;
  firebase.database().ref("/").child("room_name").update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = kwitter_page.html
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("roomname-"+room_name);
  row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div>"<hr>
  //End code
  m});});}
getData();
