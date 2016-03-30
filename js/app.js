//Global variable
var surveyImagesArray = [];
var totalClicks = 0;

//Object constructor
function SurveyImages(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.timesRendered = 0;
  this.timesClicked = 0;
  this.percentClicked = parseInt(this.timesRendered) / parseInt(this.timesClicked);
  surveyImagesArray.push(this);
}

// SurveyImages.prototype.percentClicked = function(){
//   this.percentClicked = this.timesRendered / this.allPieData;
// };

//function generates an array of random numbers within min and max values
function randomNoArray (min, max) {
  for (var i = 0; i < 3; i++) {
    var displayedArray = [];
    displayedArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  while (displayedArray[0] === displayedArray[1] || displayedArray[1] === displayedArray[2] || displayedArray[0] === displayedArray[2]) {
    displayedArray.splice(1, 2);
    displayedArray.push(Math.floor(Math.random() * (max - min)) + min);
    displayedArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return displayedArray;
}

//function to clear elements from page
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = '';
}

//function to count number of clicks
function addClicks(id) {
  for (var i = 0; i < surveyImagesArray.length; i++) {
    if (surveyImagesArray[i].name == id) {
      surveyImagesArray[i].timesClicked ++;
      totalClicks ++;
      console.log('total clicks: ' + totalClicks);
    }
  }
}


//function to render three different random images to a page
function renderImages() {
  key = randomNoArray(0, surveyImagesArray.length);
  for (var i = 0; i < 3; i++) {
    randomObject = surveyImagesArray[key[i]];
    elBody = document.getElementById('marketResearch');
    elImg = document.createElement('img');
    elImg.setAttribute('class', 'survey-display');
    elImg.setAttribute('src', randomObject.filePath);
    elImg.setAttribute('id', randomObject.name);
    elBody.appendChild(elImg);
    randomObject.timesRendered ++;
  }
}

//create an instance of Survey Images for each product
var bagImg = new SurveyImages('bag', 'img/bag.jpg');
var bananaImg = new SurveyImages('banana', 'img/banana.jpg');
var bathroomImg = new SurveyImages('bathroom', 'img/bathroom.jpg');
var bootsImg = new SurveyImages('boots', 'img/boots.jpg');
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

//event Handler for clicking an image
function handleImageClick(event) {
  imgEl = event.target;
  idEl = imgEl.id;
  addClicks(idEl);
  clearBox('marketResearch');
  if (totalClicks < 25) {
    renderImages();
    eventListener();
  }
}

function eventListener() {
  var surveyDisplay = document.getElementsByClassName('survey-display');
  for (var i = 0; i < surveyDisplay.length; i++){
    surveyDisplay[i].addEventListener('click', handleImageClick);
  }
}

// var ctx = document.getElementById('myChart').getContext('2d');
// var myNewChart = new Chart(ctx).Bar(setUpBarChart);

function BarChartData () {
  this.labels = [];
  this.datasets = [];
}

function BarDataSet(labelName, color) {
  this.label = labelName;
  this.fillColor = color;
  this.strokeColor = color;
  this.highlightFill = color;
  this.highlightStroke = color;
  this.data = [];
}

BarDataSet.prototype.getFields = function (inputArray, field) {
  for (var i = 0; i < inputArray.length ; i++)
    this.data.push(inputArray[i][field]);
};

BarChartData.prototype.getLabels = function (inputArray, field) {
  for (var i = 0; i < inputArray.length ; i++)
    this.labels.push(inputArray[i][field]);
};

BarChartData.prototype.pushData = function(chartData) {
  this.datasets.push(chartData);
};

var clicksforgraph = new BarDataSet('clicks', 'rgba(220,220,220,1)');
clicksforgraph.getFields(surveyImagesArray, 'timesClicked');

var renderedforgraph = new BarDataSet('rendered', 'rgba(151,187,205,1)');
renderedforgraph.getFields(surveyImagesArray, 'timesRendered');

var setUpBarChart = new BarChartData();
setUpBarChart.pushData(clicksforgraph);
setUpBarChart.pushData(renderedforgraph);
setUpBarChart.getLabels(surveyImagesArray, 'name');

//call render Images function
renderImages();
//call event listner
eventListener();
