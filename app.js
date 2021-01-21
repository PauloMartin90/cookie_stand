'use strict';

/////////////////////////////////////////////////////////////////////////////////////////////////
// Store Building Function
function storeBuilder(storeName, minCustomers, maxCustomer, avgCookie, hours) {  
    this.cookieLocation = storeName
    this.minCust = minCustomers
    this.maxCust = maxCustomer
    this.avgCookiesold = avgCookie
    this.storeHours = hours
  }
//////////////////////////////////////////////////////////////////////////////////////////////
  // Store Results Calcultor
  storeBuilder.prototype.salesResults = function() {

    var totalShiftsales = 0
    var shiftSaleSheet = []
  
    shiftSaleSheet.push(this.cookieLocation)

    for (var i = 1; i <= this.storeHours.length; i++) {

        var randomAmount = (Math.floor(Math.random() * (this.maxCust-this.minCust+1)) + this.minCust);
        shiftSaleSheet[i] = Math.round((randomAmount*this.avgCookiesold)); // mutation of our object 
        totalShiftsales = shiftSaleSheet[i] + totalShiftsales  
    }
    shiftSaleSheet.push(totalShiftsales)
    return shiftSaleSheet
  }
/////////////////////////////////////////////////////////////////////////////////////////////
// Document Writer for Heading Information
  function display(operationHours) {

    var heading = document.createElement('th')
    var tableRow = document.createElement('tr')

    heading.textContent = ' '
    tableRow.appendChild(heading)


    for (var i = 0; i <= operationHours.length; i++) {
      var heading = document.createElement('th')

      heading.textContent = operationHours[i];
      tableRow.appendChild(heading)
    }
    heading.textContent = 'Total';
    tableRow.appendChild(heading)
  return tableRow
  }
/////////////////////////////////////////////////////////////////////////////////////////////
// Document Writer for Data Row
  function salesData (Array) {
    var tableRow = document.createElement('tr')
      for(var i = 0; i < Array.length; i++ ) {
       var dataCell = document.createElement('td')
       dataCell.textContent = Array[i];
       tableRow.appendChild(dataCell)
       table.appendChild(tableRow)
       }
       return tableRow
  }
/////////////////////////////////////////////////////////////////////////////////////////////
// Main Code
/////////////////////////////////////////////////////////////////////////////////////////////
// Store Date Information
var storesLocation = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]
var minCustomersLocation =  [65, 24, 38, 38, 16]
var maxCustmerLocation = [23, 3, 11, 20, 2]
var avgCookieSoldLocation = [6.3, 1.2, 3.7, 2.3, 4.6]
var storeHoursLocation = ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ]
// Variables for Appending to Table & Body
var headInfo
var dataRow
var table = document.createElement('table')
var body = document.getElementById('table-body');

// Sales History for the Day Array
var todaysaleHistory = []
      
// Building Store Block
    for (var i = 0; i < storesLocation.length; i++) {

      // Constructor to Build Stores
      var storeStats = new storeBuilder(storesLocation[i], minCustomersLocation[i], maxCustmerLocation[i], avgCookieSoldLocation[i], storeHoursLocation)

      // Stores Results of Each Store
      todaysaleHistory[i] = storeStats.salesResults()
}


// Document Write to Page 
headInfo = display(storeHoursLocation)
table.appendChild(headInfo)

      for (let i = 0; i < todaysaleHistory.length; i++) {
          console.log(todaysaleHistory[i])
          dataRow = salesData(todaysaleHistory[i])
          table.appendChild(dataRow)
      }
      body.appendChild(table)




