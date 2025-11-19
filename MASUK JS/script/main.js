// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'image/tes.png') {
//       myImage.setAttribute ('src','image/tes2.png');
//     } else {
//       myImage.setAttribute ('src','image/tes.png');
//     }
// }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName=prompt('Please enter your Name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozila is cool, ' + myName;
}

// if(!localStorage.getItem('name')){
//     setUserName();
// }
if(localStorage.getItem('name')){
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozila is cool, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}