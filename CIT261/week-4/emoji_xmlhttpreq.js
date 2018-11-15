//Declare new object as XMLHttpRequest().
var xmlhttp = new XMLHttpRequest();
//Declare string object for 'server' text data .txt file
var url = "https://unpkg.com/emoji.json/emoji-compact.json";

/*When the readystate attribute changes, the onreadystatechange event handler
  Syntax: XMLHttpRequest.onreadystatechange = callback;
          callback is the function() that is executed when the readyState event is triggered*/
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //use JSON.parse to store server data into local array 'myArr'
        var myEmojiArr = JSON.parse(this.responseText);
        //pass myArr containing text data parsed by JSON to myFunction
        
        for (k = 0; k < myEmojiArr.length; k++) {
            switch (myEmojiArr[k]){
                case "🥰":
                    myEmojiArr.splice(k, 1);
                case "🥵":
                    myEmojiArr.splice(k, 1);
                case "🥶":
                    myEmojiArr.splice(k, 1);
                case "🥳":
                    myEmojiArr.splice(k, 1);
                case "🥴":
                    myEmojiArr.splice(k, 1);
                case "🥺":
                    myEmojiArr.splice(k, 1);
            }
        }
        myEmojiArr.splice(140);
        var dblArr = myEmojiArr.slice(0);
        dblArr = dblArr.concat(myEmojiArr).sort();
        myEmojiFunction(dblArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myEmojiFunction(arr) {
    var out = "";
    let i;
    out = '<p id="emoji">';
    for (i = 0; i < arr.length; i++) {
        out += arr[i];
    }
    out += '</p>';
    //JavaScript will set html id: favScripts, to the string value in 'out'
    document.getElementById("emojis").innerHTML = out;
}