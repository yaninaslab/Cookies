function clear_cookies() {
    Cookies.remove("pushed");
}
var pushed_status = Cookies.get("pushed");
var selection = document.getElementById("selection_status");

if(pushed_status === "red") {
    selection.innerText = "Congrats, you clicked on RED button!";
}else if(pushed_status === "blue") {
    selection.innerText = "Congrats, you clicked on BLUE button!";
}else if(pushed_status === "green") {
    selection.innerText = "Congrats, you clicked on GREEN button!";
}else if(pushed_status !== "pushed") {
    selection.innerText = "Go click the button!";
}

var select_new_option = clear_cookies("pushed");
