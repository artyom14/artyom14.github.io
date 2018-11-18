// Memory Game JavaScript
var memory_array = [];
var emoji_array = [];
var memory_values = [];
var memory_card_ids = [];
var cards_flipped = 0;
var moves = 0;
var seconds = 0;

//get emojis array from JSON webservice
var xmlhttp = new XMLHttpRequest();
var url = "https://unpkg.com/emoji.json/emoji-compact.json";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //use JSON.parse to store server data into local array 'myArr'
        emoji_array = JSON.parse(this.responseText);
        //remove some unrecgonized emojis
        for (k = 0; k < emoji_array.length; k++) {
            switch (emoji_array[k]) {
                case "🥰":
                    emoji_array.splice(k, 1);
                case "🥵":
                    emoji_array.splice(k, 1);
                case "🥶":
                    emoji_array.splice(k, 1);
                case "🥳":
                    emoji_array.splice(k, 1);
                case "🥴":
                    emoji_array.splice(k, 1);
                case "🥺":
                    emoji_array.splice(k, 1);
            }
        }
        newBoard();
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//select random playful emojis
function loadEmojis() {
    emoji_array.splice(140);
    emoji_array.memory_card_shuffle();
    for (j = 0; j < emoji_array.length; j++) {
        memory_array[j] = emoji_array[j];
    }
    memory_array.splice(8);
    memory_array = memory_array.concat(memory_array);
}


//Shuffle memory_array values
Array.prototype.memory_card_shuffle = function () {
    let i = this.length, j, temp;
    for (i = this.length - 1; i > 0; --i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//Create new board within div
function newBoard() {
    cards_flipped = 0;
    moves = 0;
    memory_values = [];
    memory_card_ids = [];
    document.getElementById('moves').innerHTML = moves;
    document.getElementById('timer').innerHTML = 0;
    var output = '';
    loadEmojis();
    memory_array.memory_card_shuffle();
    //output = '<table>';
    for (let i = 0; i < memory_array.length; ) {
        output += '<tr>';
        for (let j = 0; j < 4; j++) {
            //output += '<td>';
            output += '<div class="front" id="card_' + i + '" ontouchend="memoryFlipcard(this,\'' + memory_array[i] + '\')" " onclick="memoryFlipcard(this,\'' + memory_array[i] + '\')"></div>';
            //output += '<div class="back" id="card_' + i + '">' + memory_array[i] + '</div>';
            output += '</td>';
            i++;
        }
        //output += '</tr>';
    }
    //output += '</table>';
    document.getElementById('memory_board').innerHTML = output;
    initTime();
}

function memoryFlipcard(card, val) {
    if (card.innerHTML == "" && memory_values.length < 2) {
        moves++;
        document.getElementById('moves').innerHTML = moves;
        card.className = "back";
        card.innerHTML = val;


        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_card_ids.push(card.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_card_ids.push(card.id);
            if (memory_values[0] == memory_values[1]) {
                cards_flipped += 2;
                //Clear both arrays
                memory_values = [];
                memory_card_ids = [];
                //Check for board complete
                if (cards_flipped == memory_array.length) {                    
                    clearInterval(nowTime);
                    document.getElementById('timer').innerHTML = seconds;
                    //alert("Congratulations! \nYou took " + moves + " moves and " + seconds + " seconds.");
                    document.getElementById('memory_board').innerHTML = "<h1><p>Congratulations! <br/>You took " + moves + " moves and " + seconds + " seconds.<br/>Press 'Restart' to Play Again!<br/><div class = 'clown'>🎈🤡</div></h1 > ";
                    //document.getElementById('memory_board').innerHTML = "";
                    //newBoard();
                }
            } else { setTimeout(flip2Back, 400);}
        }
    }
}

function flip2Back() {
    //Flip the 2 cards back over
    var card_1 = document.getElementById(memory_card_ids[0]);
    var card_2 = document.getElementById(memory_card_ids[1]);
    card_1.className = "front";
    card_2.className = "front";
    card_1.innerHTML = "";
    card_2.innerHTML = "";
    //Clear both arrays
    memory_values = [];
    memory_card_ids = [];
}

function initTime() {
    seconds = 0;
    nowTime = setInterval(function () {
        document.getElementById('timer').innerHTML = seconds;
        seconds++;
    }, 1000)
}