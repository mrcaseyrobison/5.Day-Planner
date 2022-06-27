// saveBtn variable
var button = $(".saveBtn")

// Moment JS to display current date (Day of Week / Month / Day of Month )
var todaysDate = moment().format("dddd MMMM Do");
$("#currentDay").text(todaysDate);

// Function to show current time block (hour) in red, upcoming hours in green, and past hours in grey.
function currentTime() {
    var currentHour = moment().hours()
    var time = $(".time-block");
    time.each(function() {
        var hour = parseInt($(this).attr("id"))
        if (hour === currentHour) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (currentHour > hour) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }
    })
};
currentTime()


