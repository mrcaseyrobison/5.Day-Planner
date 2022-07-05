// saveBtn variable
var button = $(".saveBtn");

// Moment JS to display current date (Day of Week / Month / Day of Month )
var todaysDate = moment().format("dddd MMMM Do");
$("#currentDay").text(todaysDate);
console.log(todaysDate);

// Function to show current time block (hour) in red, upcoming hours in green, and past hours in grey.
function currentTime() {
  var currentHour = moment().hours();
  var time = $(".time-block");
  time.each(function () {
    var hour = parseInt($(this).attr("id"));
    // JQuery callback to let initialize highlights
    if (hour === currentHour) {
      $(this)
        .children(".col-sm-10")
        .attr("class", "present col-sm-10 description");
    } else if (currentHour > hour) {
      $(this)
        .children(".col-sm-10")
        .attr("class", "past col-sm-10 description");
    } else {
      $(this)
        .children(".col-sm-10")
        .attr("class", "future col-sm-10 description");
    }
  });
  console.log("Current Hour: " + currentHour);
}

currentTime();

// Save to Local Storage
button.on("click", function (event) {
  var toDo = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, toDo);
  console.log(toDo);
});

// Get Items from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
