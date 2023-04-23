var eventsData;

//function to set the color of blocks depending on the time of day it is
function setHourColors() {
  var now = dayjs();

  for (var i = 9; i < 18; i++) {
    if (i < now.hour()) {
      $("#hour-" + i + " textarea").addClass("past");
    } else if (i == now.hour()) {
      $("#hour-" + i + " textarea").addClass("present");
    } else if (i > now.hour()) {
      $("#hour-" + i + " textarea").addClass("future");
  }
}};

//loads data from local storage
function loadStoredData() {
  var eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
  //sets them to blank if there's no data
  if (!eventsData) {
     eventsData = {
        hour9: "",
        hour10: "",
        hour11: "",
        hour12: "",
        hour13: "",
        hour14: "",
        hour15: "",
        hour16: "",
        hour17: "",
     };
  };
};

function handleSaveClick(event) {
  //grab data from HTML
  var hourBlock = $(event.target).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id").split("-")[1];

//modify our data object
  eventsData["hour" + hour] = value;

  //store in local storage
  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
};

//when save buttons are clicked, it activates handleSaveClick function
$(".saveBtn").on("click", handleSaveClick);

//calls my functions
$(function() {
  loadStoredData();
  setHourColors();
});


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

