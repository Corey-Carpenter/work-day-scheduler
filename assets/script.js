// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//function to set the color of blocks depending on the time of day it is
function setHourColors() {
  var now = dayjs();

  for (var i = 8; i < 17; i++) {
    if (i < now.hour()) {
      $("#hour-" + i + " textarea").addClass("past");
    } else if (i == now.hour()) {
      $("#hour-" + i + " textarea").addClass("present");
    } else if (i > now.hour()) {
      $("#hour-" + i + " textarea").addClass("future");
  }
}};

function loadStoredData() {
  //TODO Load existing data from local storage
}

function handleSaveClick(event) {
  var saveButton = $(event.target);
  //TODO store thi hour's data in local storage
}

$(function() {
  setHourColors();
  loadStoredData();
});