const names = ['Aditya Kulkarni', 'Apurva Kulkarni', 'Arush Pareek', 'Asawari Pandit', 'Ashfaq Raj', 'Chandra Shekhar Rawat', 'Darshan Rathod', 'Dhananjay Nagawade', 'Hitesh Nemade', 'Kapil Negi', 'Kishor Abhale', 'Kumar Gagare', 'Mahesh Bale', 'Nitish Joshi', 'Priti Bisht', 'Ragini Agrawal', 'Rahul Shah', 'Ritesh Thakur', 'Shashank Rawlani', 'Sourabh Kumar', 'Sudarshan Modhave', 'Suhas Kadam']



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generateRandomUser(array){
    if (array.length > 0)
        return array.pop();
    else
        return "Game Over"
}

function add(type) {
    var foo = document.getElementById("fooBar").innerHTML = type;
}

document.getElementById("btnAdd").onclick = function() {
    shuffleArray(names)
    randomUser = generateRandomUser(names);
    add(randomUser);
};

