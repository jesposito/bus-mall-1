//Global variable
surveyImagesArray = [];
displayedArray = [];

//Object constructor
function SurveyImages(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.timesRendered = 0;
  this.timesClicked = 0;
  surveyImagesArray.push(this);
}

var bagImg = new SurveyImages('bag', 'img/bag.jpg');
var bananaImg = new SurveyImages('banana', 'img/banana.jpg');
var bathroomImg = new SurveyImages('bathroom', 'img/bathroom.jpg');
var bootsImg = new SurveyImages('boots', 'img/bathroom.jpg');
var breakfastImg = new SurveyImages('breakfast', 'img/breakfast.jpg');
var bubblegumImg = new SurveyImages('bubblegum', 'img/bubblegum.jpg');
var chairImg = new SurveyImages('chair', 'img/chair.jpg');
var cthulhuImg = new SurveyImages('cthulhu', 'img/cthulhu.jpg');
var dogduckImg = new SurveyImages('dog-duck', 'img/dog-duck.jpg');
var dragonImg = new SurveyImages('dragon', 'img/dragon.jpg');
var penImg = new SurveyImages('pen', 'img/pen.jpg');
var petsweepImg = new SurveyImages('pet-sweep', 'img/pet-sweep.jpg');
var scissorsImg = new SurveyImages('scissors', 'img/scissors.jpg');
var sharkImg = new SurveyImages('shark', 'img/shark.jpg');
var sweepImg = new SurveyImages('sweep', 'img/sweep.png');
var tauntaunImg = new SurveyImages('tauntaun', 'img/tauntaun.jpg');
var unicornImg = new SurveyImages('unicorn', 'img/unicorn.jpg');
var usbImg = new SurveyImages('usb', 'img/usb.gif');
var watercanImg = new SurveyImages('water-can', 'img/water-can.jpg');
var wineglassImg = new SurveyImages('wine-glass', 'img/wine-glass.jpg');

console.log('bag: ', bagImg);
console.log('array: ', surveyImagesArray);

function renderImages(surveyImagesArray) {
  for (var i = 0; i < 3; i++) {
    randomObject = randomImageObject(surveyImagesArray);
    elBody = document.getElementById('marketResearch');
    elImg = document.createElement('img');
    elImg.setAttribute('class', 'survey-display');
    elImg.setAttribute('src', randomObject.filePath);
    elImg.setAttribute('id', randomObject.name);
    elBody.appendChild(elImg);
    randomObject.timesRendered += 1;
  }
}

//function that call a random filePath from the Array
function randomImageObject(globalArray) {
  return globalArray[randomNo(0, globalArray.length)];
}

//function to generate random number between inclusive min and exclusive max
function randomNo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function randomNoArray (min, max) {
//   for (var i = 0; i < 3; i++) {
//     displayedArray.push(Math.floor(Math.random() * (max - min)) + min);
//   }
//   if (displayedArray[0] === displayedArray[1] || displayedArray[1] === displayedArray[2] || displayedArray[0] === displayArray[2]) {
//
//   }
// }

//function to clear elements from page
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = '';
}

//function to add to clicks
function addClicks(id) {
  for (var i = 0; i < surveyImagesArray.length; i++) {
    if (surveyImagesArray[i].name == id) {
      surveyImagesArray[i].timesClicked += 1;
    }
  }
}

//call render Images function
renderImages(surveyImagesArray);

function handleImageClick(event) {
  imgEl = event.target;
  idEl = imgEl.id;
  console.log('id ', idEl);
  addClicks(idEl);
  clearBox('marketResearch');
  renderImages(surveyImagesArray);
  eventListener();
}

function eventListener() {
  var surveyDisplay = document.getElementsByClassName('survey-display');
  for (var i = 0; i < surveyDisplay.length; i++){
    surveyDisplay[i].addEventListener('click', handleImageClick);
  }
}

eventListener();
