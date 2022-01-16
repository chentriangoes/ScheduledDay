//set universal variables as reference to key DOM elements
var currentdayEl= $('#currentDay')

//set function to display the current day
function showDay () {
    var toDay = moment().format('dddd, MMMM Do');
    currentdayEl.text(toDay);
}


setInterval(showDay, 1000);