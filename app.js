'use strict';

var cookieSales = {
  cookieLocation: ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"],
  customerPerhour: null,
  minimumCustomers: [23, 3, 11, 20, 2],
  maximumCustomers: [65, 24, 38, 38, 16],
  averageCookiessold: [6.3, 1.2, 3.7, 2.3, 4.6],
  randomCustperhour: function (maximumCustomers, minimumCustomers) {
    var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
    this.customerPerhour = randomAmount; // mutation of our object
  }
}

var testValue
var cookiesSold
var arrayChecker = []
var locationArray = []

for (var j = 0; j < 5; j++ ) {
  var totalCookiessum = 0

  for ( var i = 0; i < 14; i++ ) {

    cookieSales.randomCustperhour(cookieSales.maximumCustomers[j], cookieSales.minimumCustomers[j])
    testValue = cookieSales.customerPerhour
    
    cookiesSold = Math.round((testValue*cookieSales.averageCookiessold[j]))
    
    totalCookiessum = cookiesSold + totalCookiessum

    arrayChecker.push(i + "am: " + cookiesSold + "cookies")

  }
  arrayChecker.push("Total: " + totalCookiessum + " Cookies")
  locationArray[j] = arrayChecker
  console.log(locationArray)
  arrayChecker = [] // Clearing the Array for new Values
}



// Maybe we can create a function that does this???
for (var i = 0; i < 4; i++) {
  var divElement = document.createElement('div'); // => <div></div>
  var h2Element = document.createElement('h2'); // <h2></h2>
  var sectionElement = document.getElementById('profiles'); // <section id="profiles></section>"
  sectionElement.appendChild(divElement); // appends everything
  h2Element.textContent = cookieSales.cookieLocation[i] // <h2>City Name</h2>
  divElement.appendChild(h2Element); // <div> </h2>Frankie</h2> </div>

  for (var j = 0; j < 14; j++) {
    var liElement = document.createElement('li'); // <li></li>
    sectionElement.appendChild(liElement)
    liElement.textContent = locationArray[i][j] // <li>list name</li>
    divElement.appendChild(liElement)

  }
}
