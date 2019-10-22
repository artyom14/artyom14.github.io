function GetCurrentYear()
{
    var date = new Date();
    var currentYear = date.getFullYear();

    document.getElementById("copyrightdate").innerHTML = currentYear;
}
function GetCurrentDate() {
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];                       
	var today = new Date();
	var dd   = today.getDate();
	var mm   = monthNames[today.getMonth()]; 
	var yyyy = today.getFullYear();
	var day  = days[today.getDay()];
	today = day + ', ' + dd + ' ' + mm 	+ ' ' + yyyy;
    document.getElementById("currentDate").innerHTML = today;
}
function UpdateDates()
{
    GetCurrentYear();
	GetCurrentDate();
}

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
$(document).ready(function () {
	var d = new Date();
    var dayOfWeek = d.getDay();
    
    // If it is Friday show banner
    if (dayOfWeek === 5) {
        $('.top-banner').show();
    }
});