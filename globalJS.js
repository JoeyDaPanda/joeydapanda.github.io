window.onload = function(){ 

var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Password functions for downloads page

  

// BACKGROUND COLOR BUTTONS

/*

function bgwhite() {
    document.body.style.backgroundColor = "White";
}

function bgliblue() {
    document.body.style.backgroundColor = "#ADD8E6";
}

function bgred() {
    document.body.style.backgroundColor = "Red";
}

function bgnormal() {
    document.body.style.backgroundColor = "#505050";
}

*/

// BG COLOR FUNCTIONS SAVE COOKIE
	
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

var backColor = new Array();

backColor[0] = 'White';
backColor[1] = '#ADD8E6';
backColor[2] = 'Red';
backColor[3] = '#505050';


function changeBG(whichColor) {
 document.body.style.backgroundColor = backColor[whichColor];
 createCookie('backColor', whichColor);
}

if(readCookie('backColor'))
 document.write('<style type="text/css">body {background-color: ' + backColor[readCookie("backColor")] + ';}<\/style>');
