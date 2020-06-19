
var currentDate = $("#currentDay");
currentDate.text(moment().format('MMMM Do YYYY, h:mm a'))

var currentTime = moment().format('H');

var userInput = [];




function dailySched() {
    const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    let html = "";  
    
    timeArray.forEach( (time, i)=> {
        const hr = i+9;
        const nw = moment().hour();
        const color = (hr === nw) ? "present" :
        (hr > nw) ? "future" :
        "past";
        
        html += `<div class="row">
        <div class="col-md-1 hour d-flex justify-content-center align-items-center">${time}</div> 
        <input class='user-event-input col-md-10 event-input-block ${color}' id="${time}Row"> 
        <div class="col-md-1 saveBtn" data-hour=${hr}><i class="fas fa-save pl-4 pt-4 " aria-hidden="true"></i></div> 
    </div>`

    });

    $("#mainContainer").append(html);


}
dailySched();
userTask()

function userTask() {
    // Get stored userInput from localStorage
    // Parsing the JSON string to an object
    var storedInput = JSON.parse(localStorage.getItem("userInput"));
  
    // If userInput was retrieved from localStorage, update the userInput array to it
    if (storedInput !== null) {
      userInput = storedInput;
    }
  
    // Render userInput to the DOM
    dailySched();
  }
  
  function storedInput() {
    // Stringify and set "userInput" key in localStorage to todos array
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }
  
  // When form is submitted...
  $("#mainContainer").on('click', '.saveBtn', function(event){
    event.preventDefault();
  
    var userText = userInput.value;
  
    // Return from function early if submitted userText is blank
    if (userText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    userInput.push(userText);
    userInput.value = "";
  
    // Store updated input in localStorage, re-render the list
    storedInput();
    dailySched();
  });

$("#mainContainer").on('click', '.saveBtn', function(event){
    var element = event.target;

    if(element.matches("saveBtn")===true ){
        const index = element.parentElement.getAttribute("data-index");
        userText.splice(index, 1);
        storedInput();
        dailySched();

    }
})




  

//     var userInput = localStorage.setItem('time', +i);
//     console.log(userInput)







// // ===== Looping through 9am to 17pm ===== //
// for (i = 9; i < 18; i++) {
//     // Grab value from local storage.
//     var inputValue = localStorage.getItem('time', + i);
//     if (!inputValue) {
//         inputValue = '';
//     }
// }

