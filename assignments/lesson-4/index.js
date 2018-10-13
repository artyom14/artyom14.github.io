document.getElementById("date").innerHTML = Date();

function UpdateInfo() {
    document.getElementById("date").innerHTML = Date();
}

function ShowDetails(clickedId) {
    window.alert("This is extra weather info for " + clickedId + ".");
}