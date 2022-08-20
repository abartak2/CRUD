// define elements
let eventInput = document.getElementById('newEvent');
let dateInput = document.getElementById('newDate');
let submitEventInfo = document.getElementById('submitEventInfo')
let allEventDataInformation = [];
let allEventData = [];
let allDateData = [];
let selectedRow = null;

// create function to add new events to event list form
function eventData(){
    let eventTable = document.getElementById('eventTable').insertRow();
    let y = eventTable.insertCell(0);
    let z = eventTable.insertCell(1);
    let x = eventTable.insertCell(2);
    y.innerHTML = eventInput.value;
    z.innerHTML = dateInput.value;
    x.innerHTML = `<button onClick='editEvent(this)' class='btn btn-primary' id= 'editButton'>Edit Event</button><button onClick = 'deleteEvent(this)' class='btn btn-danger' id='deleteButton'>Delete Event</button>`
    allEventData.push(y.innerHTML);
    allDateData.push(z.innerHTML);
    clearForm();
}
     console.log(allEventData, allDateData);

// clear input fields on form for new submission 
function clearForm() {
    eventInput.value ='';
    dateInput.value = '';
    selectedRow = null;
}


// create function to delete events
function deleteEvent(tr) {
    row= tr.parentElement.parentElement;
    document.getElementById('eventTable').deleteRow(row.rowIndex);
    clearForm();
}

// edit button function to bring the row being edited back to the form and clear out the row from the table for resubmitting edits
function editEvent(tr) {
    row= tr.parentElement.parentElement;
    document.getElementById('eventTable').deleteRow(row.rowIndex);
    selectedRow = tr.parentElement.parentElement;
    eventInput.value = selectedRow.cells[0].innerHTML;
    dateInput.value = selectedRow.cells[1].innerHTML;
}

















