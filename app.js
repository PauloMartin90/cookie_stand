'use strict';

var cookieSales = {
  cookieLocation: ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"],
  customerPerhour: null,
  minimumCustomers: [23, 3, 11, 20, 2],
  maximumCustomers: [65, 24, 38, 38, 16],
  averageCookiessold: [6.3, 1.2, 3.7, 2.3, 4.6],
  storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
  randomCustperhour: function (maximumCustomers, minimumCustomers) {
    var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
    this.customerPerhour = randomAmount; // mutation of our object
  }
}


var totalHourlysales
var cookiesSold
var arrayChecker = []
var locationArray = []

for (var j = 0; j < cookieSales.cookieLocation.length; j++ ) {
  var totalCookiessum = 0

  for ( var i = 0; i < cookieSales.storeHours.length; i++ ) {

    cookieSales.randomCustperhour(cookieSales.maximumCustomers[j], cookieSales.minimumCustomers[j])
    totalHourlysales = cookieSales.customerPerhour
    
    cookiesSold = Math.round((totalHourlysales*cookieSales.averageCookiessold[j]))
    
    totalCookiessum = cookiesSold + totalCookiessum

    arrayChecker.push(cookieSales.storeHours[i] + ": " + cookiesSold + "cookies")

  }
  arrayChecker.push("Total: " + totalCookiessum + " Cookies")
  // console.log(arrayChecker)
  locationArray[j] = arrayChecker
  console.log(locationArray)
  arrayChecker = [] // Clearing the Array for new Values
}



// Creating Headers for list
for (var i = 0; i < cookieSales.cookieLocation.length; i++) {
  var divElement = document.createElement('div'); // => <div></div>
  var h2Element = document.createElement('h2'); // <h2></h2>
  var sectionElement = document.getElementById('list'); // <section id="profiles></section>"

  sectionElement.appendChild(divElement); // appends everything
  h2Element.textContent = cookieSales.cookieLocation[i] // <h2>City Name</h2>
  divElement.appendChild(h2Element); // <div> </h2>City Name</h2> </div>
  


  // Making List Items
  for (var j = 0; j < cookieSales.storeHours.length; j++) {
    var liElement = document.createElement('li'); // <li></li>
    
    sectionElement.appendChild(liElement)
    liElement.textContent = locationArray[i][j] // <li>list name</li>
    divElement.appendChild(liElement)

  }
}
