'use strict';

/////////////////////////////////////////////////////////////////////////////////////////////////
// Main Code
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
// Store Building Function
function storeBuilder(storeName, minCustomers, maxCustomer, avgCookie, hours) {  
    this.cookieLocation = storeName
    this.minCust = minCustomers
    this.maxCust = maxCustomer
    this.avgCookiesold = avgCookie
    this.storeHours = hours
  }
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////


  // Document Write Function To Create Rows
  function display(operationHours) {

    var heading = document.createElement('th')
    var tableRow = document.createElement('tr')
    var table = document.createElement('table')


    heading.textContent = ' '
    tableRow.appendChild(heading)


    for (var i = 0; i < operationHours.length; i++) {
      var heading = document.createElement('th')

      heading.textContent = operationHours[i];
      tableRow.appendChild(heading)
    }
    return tableRow
  }

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



var storesLocation = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]
var minCustomersLocation =  [65, 24, 38, 38, 16]
var maxCustmerLocation = [23, 3, 11, 20, 2]
var avgCookieSoldLocation = [6.3, 1.2, 3.7, 2.3, 4.6]
var storeHoursLocation = ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm" ]

var saleSheet = []
var todaysaleHistory = []
      

    for (var i = 0; i < storesLocation.length; i++) {

      var storeStats = new storeBuilder(storesLocation[i], minCustomersLocation[i], maxCustmerLocation[i], avgCookieSoldLocation[i], storeHoursLocation)

      // Show results
      todaysaleHistory[i] = storeStats.salesResults()

}

var headInfo
var dataRow
var table = document.createElement('table')
var body = document.getElementById('table-body');
var rowOne = document.createElement('tr')


headInfo = display(storeHoursLocation)
table.appendChild(headInfo)




for (let i = 0; i < todaysaleHistory.length; i++) {
  console.log(todaysaleHistory[i])
  dataRow = salesData(todaysaleHistory[i])
  console.log(dataRow)
  table.appendChild(dataRow)
  console.log(table)
}
body.appendChild(table)




