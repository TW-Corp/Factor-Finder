var input = document.getElementById("input");

function viewUpdates() {
    var inputNum = input.value;
    var updateH = document.getElementById("updateH");
    var update1 = document.getElementById("update1");
if (inputNum === 'updates') {
        if (updateH.className === "invisible") {
            updateH.className = "";
            update1.className = "";
        }  
    }
}

function findFactors() {
    var inputNum = input.value;
    document.getElementById("1").innerHTML = '1 and ' + inputNum;
    document.getElementById("2").innerHTML = '2 and ' + inputNum / 2;
    document.getElementById("3").innerHTML = '3 and ' + inputNum / 3;
    document.getElementById("4").innerHTML = '4 and ' + inputNum / 4;
    document.getElementById("5").innerHTML = '5 and ' + inputNum / 5;
    document.getElementById("6").innerHTML = '6 and ' + inputNum / 6; 
    document.getElementById("7").innerHTML = '7 and ' + inputNum / 7;
    document.getElementById("8").innerHTML = '8 and ' + inputNum / 8;
    document.getElementById("9").innerHTML = '9 and ' + inputNum / 9;
    document.getElementById("10").innerHTML = '10 and ' + inputNum / 10; 
}

function evenFactors() {
    var inputNum = input.value;
    document.getElementById("2").innerHTML = '2 and ' + inputNum / 2;
    document.getElementById("4").innerHTML = '4 and ' + inputNum / 4;
    document.getElementById("6").innerHTML = '6 and ' + inputNum / 6; 
    document.getElementById("8").innerHTML = '8 and ' + inputNum / 8;    
    document.getElementById("10").innerHTML = '10 and ' + inputNum / 10; 
}

function oddFactors() {
    var inputNum = input.value;
    document.getElementById("1").innerHTML = '1 and ' + inputNum;
    document.getElementById("3").innerHTML = '3 and ' + inputNum / 3;
    document.getElementById("5").innerHTML = '5 and ' + inputNum / 5;
    document.getElementById("7").innerHTML = '7 and ' + inputNum / 7;
    document.getElementById("9").innerHTML = '9 and ' + inputNum / 9;
}

function one10Factors() {
    var inputNum = input.value;
    document.getElementById("1").innerHTML = '1 and ' + inputNum;
    document.getElementById("2").innerHTML = '2 and ' + inputNum / 2;
    document.getElementById("3").innerHTML = '3 and ' + inputNum / 3;
    document.getElementById("4").innerHTML = '4 and ' + inputNum / 4;
    document.getElementById("5").innerHTML = '5 and ' + inputNum / 5;
    document.getElementById("6").innerHTML = '6 and ' + inputNum / 6; 
    document.getElementById("7").innerHTML = '7 and ' + inputNum / 7;
    document.getElementById("8").innerHTML = '8 and ' + inputNum / 8;
    document.getElementById("9").innerHTML = '9 and ' + inputNum / 9;
    document.getElementById("10").innerHTML = '10 and ' + inputNum / 10; 
}

function clearFactors() {
    document.getElementById("1").innerHTML = '';
    document.getElementById("2").innerHTML = '';
    document.getElementById("3").innerHTML = '';
    document.getElementById("4").innerHTML = '';
    document.getElementById("5").innerHTML = '';
    document.getElementById("6").innerHTML = '';
    document.getElementById("7").innerHTML = '';
    document.getElementById("8").innerHTML = '';
    document.getElementById("9").innerHTML = '';
    document.getElementById("10").innerHTML = '';
      }



