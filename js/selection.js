// Setting function for removing cookies on the selection page
function clear_cookies() {
    Cookies.remove("pushed");
}
// Setting up variables to define the status and assign it to the id
var pushed_status = Cookies.get("pushed");
var selection = document.getElementById("selection_status");
// Condition for red button
if(pushed_status === "red") {
    selection.innerText = "Congrats, you clicked on RED button!";
// Condition for blue button  
}else if(pushed_status === "blue") {
    selection.innerText = "Congrats, you clicked on BLUE button!";
// Condition for green button
}else if(pushed_status === "green") {
    selection.innerText = "Congrats, you clicked on GREEN button!";
// Condition if none of buttons are pushed
}else if(pushed_status !== "pushed") {
    selection.innerText = "Go click the button!";
}
// Setting variable to remove cookies but I am not sure if this is correct
var select_new_option = clear_cookies("pushed");
