// function for the solve the 
function solve(val) {
    var v = document.getElementById("b");
    v.value += val;
}

// for displaying the final ans to the display screen
function result() {
    var num1 = document.getElementById("b").value;
    var num2 = eval(num1);

    // logic
    // b.value = 'eval(b.value)'
    
    document.getElementById("b").value = num2;
}

function ca() {
    document.getElementById("b").value = ' ';
}

function d() {
    document.getElementById("b").value = document.getElementById("b").value.toString().slice(0, -1);
}
