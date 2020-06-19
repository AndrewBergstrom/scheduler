function dailySched(){
    const timeArray = ["9AM", "10AM", "11AM","12"]
    
    let html = "";

    timeArray.forEach(time => {
        html += `<div class="row">
        <div class="col-md-1 hour d-flex justify-content-center align-items-center">${time}</div> 
        <input class='user-event-input col-md-10 event-input-block' id="${time}Row"> 
        <div class="col-md-1 saveBtn" data-hour=9><i class="fas fa-save pl-4 pt-4" aria-hidden="true"></i></div> 
    </div>`

    });

    $("#mainContainer").append(html)
}
dailySched();