var eventsData;

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
     }
  }
  //TODO Load existing data from local storage
}

function handleSaveClick(event) {
  //grab data from HTML
  var saveButton = $(event.target);
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id").split("-")[1];

//modify our data object
  eventsData["hour" + hour] = value;

  //TODO store this hour's data in local storage
  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(function() {
  setHourColors();
  loadStoredData();
});

$(".saveBtn").on("click", handleSaveClick);



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//function to set the color of blocks depending on the time of day it is