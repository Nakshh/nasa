var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "zz45Z34b2Gf7TYyl04kXR5gsSijGNT9P9wRY8VDo";

req.open("GET", url + api_key);
req.send();
console.log(req);
req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.url;
    document.getElementById("explanation").textContent = response.explanation;
  }
})