// Local Storage API
var k = "";
var v = "";
var storeArry = new Object();

function doFirst() {
    var saveButton = document.getElementById("saveButton");
    var remButton = document.getElementById("remButton");
    var clrButton = document.getElementById("clrButton");
    var loadButton = document.getElementById("loadButton");
    saveButton.addEventListener("click", saveInfo, false);
    remButton.addEventListener("click", removeInfo, false);
    clrButton.addEventListener("click", clearLocalStore, false);
    loadButton.addEventListener("click", preLoad, false);
    display();
}
function saveInfo() {
    k = document.getElementById("person").value;
    v = document.getElementById("age").value;
    localStorage.setItem(k, v);
    display();
    document.getElementById("person").value = "";
    document.getElementById("age").value = "";
}
function arrayStore() {
    var rightbox = document.getElementById("rightbox");
    //clear associative array
    storeArry = {};
    rightbox.innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        var a = localStorage.key(i);
        var b = localStorage.getItem(a);
        storeArry[a] = b;
    }
}
function display() {
    arrayStore();
    rightbox.innerHTML = "<strong>Local Storage Items:</strong><br />";
    for (let j in storeArry) {
        rightbox.innerHTML += j + ": " + storeArry[j] + "<br />";
    }
}
function removeInfo() {
    let r = document.getElementById("person").value;
    localStorage.removeItem(r);
    display();
}
function clearLocalStore() {
    localStorage.clear();
    display();
}

function preLoad() {
    // create an array with persons and ages
    var localArry = ["Alex", 17, "Thomas", 12, "Joshua", 13, "Julia", 26];
    var rightbox = document.getElementById("rightbox");

    //load the local array to local storage
    for (i = 0; i < localArry.length;i++) {
        let a = localArry[i++];
        let b = localArry[i];
        localStorage.setItem(a, b);
    }

    //add one item as an object with an array
    let p = "Artem";
    let a = ["Love", "all", "men", 93];
    localStorage.setItem(p, a);
    display();
}


window.addEventListener("load", doFirst, false);