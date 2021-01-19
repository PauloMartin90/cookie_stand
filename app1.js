'use strict';

var seattleSales = {
  cookieLocation: "Seattle",
  customerPerhour: null,
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookiessold: 6.3,
  storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
  randomCustperhour: function (maximumCustomers, minimumCustomers) {
    var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
    this.customerPerhour = randomAmount; // mutation of our object
  }
}

var tokyoSales = {
    cookieLocation: "Tokyo",
    customerPerhour: null,
    minimumCustomers: 3,
    maximumCustomers: 24,
    averageCookiessold: 1.2,
    storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
    randomCustperhour: function (maximumCustomers, minimumCustomers) {
      var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
      this.customerPerhour = randomAmount; // mutation of our object
    }
  }
  var dubaiSales = {
    cookieLocation: "Dubai",
    customerPerhour: null,
    minimumCustomers: 11,
    maximumCustomers: 38,
    averageCookiessold: 3.7,
    storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
    randomCustperhour: function (maximumCustomers, minimumCustomers) {
      var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
      this.customerPerhour = randomAmount; // mutation of our object
    }
  }

  var parisSales = {
    cookieLocation: "Paris",
    customerPerhour: null,
    minimumCustomers: 20,
    maximumCustomers: 38,
    averageCookiessold: 2.3,
    storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
    randomCustperhour: function (maximumCustomers, minimumCustomers) {
      var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
      this.customerPerhour = randomAmount; // mutation of our object
    }
  }

  var limaSales = {
    cookieLocation: "Lima",
    customerPerhour: null,
    minimumCustomers: 2,
    maximumCustomers: 16,
    averageCookiessold: 4.6,
    storeHours: ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ],
    randomCustperhour: function (maximumCustomers, minimumCustomers) {
      var randomAmount = (Math.floor(Math.random() * (maximumCustomers-minimumCustomers)) + minimumCustomers);
      this.customerPerhour = randomAmount; // mutation of our object
    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////////

// Main Code

var storesArray = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales]
var saleSheet = []

for (var i = 0; i < storesArray.length; i++) {
    saleSheet = sales(storesArray[i]) // Calculation Function
    documentWrtier(saleSheet) // Writes to HTML
    saleSheet = []
}

/////////////////////////////////////////////////////////////////////////////////////////////////



function sales(storeObject) {
    
    var totalHourlysales
    var cookiesSold
    var arrayChecker = []
    var totalCookiessum = 0

    arrayChecker.push(storeObject.cookieLocation)

  for ( var i = 0; i < storeObject.storeHours.length; i++ ) {

    storeObject.randomCustperhour(storeObject.maximumCustomers, storeObject.minimumCustomers)
    totalHourlysales = storeObject.customerPerhour // Total customers
    cookiesSold = Math.round((totalHourlysales*storeObject.averageCookiessold)) // Cookies sold that hour
    totalCookiessum = cookiesSold + totalCookiessum  // Total Cookies Sold
    arrayChecker.push(storeObject.storeHours[i] + ": " + cookiesSold + " cookies")

  }
  arrayChecker.push("Total: " + totalCookiessum + " Cookies")
  return arrayChecker
}


// Creating Headers for list
function documentWrtier(salesArray) {

  var divElement = document.createElement('div'); // => <div></div>
  var h2Element = document.createElement('h2'); // <h2></h2>
  var sectionElement = document.getElementById('list'); // <section id="profiles></section>"
  
  sectionElement.appendChild(divElement); // appends everything
  h2Element.textContent = salesArray[0] // <h2>City Name</h2>
  divElement.appendChild(h2Element); // <div> </h2>City Name</h2> </div>


  // Making List Items
  for (var j = 1; j < salesArray.length; j++) {
    var liElement = document.createElement('li'); // <li></li>
    
    sectionElement.appendChild(liElement)
    liElement.textContent = salesArray[j] // <li>list name</li>
    divElement.appendChild(liElement)

  }
}