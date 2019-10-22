function GetCurrentYear()
{
    var date = new Date();
    var currentYear = date.getFullYear();

    document.getElementById("copyrightdate").innerHTML = currentYear;
}

function GetCurrentDate()
{
    var date = new Date();

    var dayOfWeek = date.toLocaleDateString("en-gb", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); 

    document.getElementById("currentdate").innerHTML = dayOfWeek;
}

function UpdateDates()
{
    GetCurrentYear();
    GetCurrentDate();
}