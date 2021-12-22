function adduser(){
    var user_name =document.getElementById("username").Value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}