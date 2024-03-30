/*
function Add() {
    console.log("Inside The Func");
    let number_1_raw = document.getElementById("num1");
    let number_2_raw = document.getElementById("num2");

    let number_1 = parseFloat(number_1_raw.value);
    let number_2 = parseFloat(number_2_raw.value);
    sum = number_1 + number_2;
    console.log(sum)

    document.getElementById("solution").innerText = sum;
    document.getElementById('sol_p').innerText = `The Sum of ${number_1} and ${number_2} is`;

}
*/




function Calc(int) {
    console.log("Inside The Func");
    let number_1_raw = document.getElementById("num1");
    let number_2_raw = document.getElementById("num2");

    let n1 = parseFloat(number_1_raw.value);
    let n2 = parseFloat(number_2_raw.value);
    var solution = 0;
    const operation = ["+", "-", "×", "÷", "^"];
    var need = true
    if (int == 1) {
        console.log(n1 + n2);
        solution = n1 + n2;
    }

    else if (int == 2) {
        console.log(n1 - n2);
        solution = n1 - n2;
    }


    else if (int == 3) {
        console.log(n1 * n2);
        solution = n1 * n2;
    }


    else if (int == 4) {
        console.log(n1 / n2);
        solution = n1 / n2;
        solution = solution.toFixed(3);

    }

    else if (int == 5) {
        console.log(n1 ** n2);
        solution = n1 ** n2;
    }
    
    
    else if (int == 6) {
        //console.log(n1 ** n2);
        //solution = n1 ** n2;
        var solution = 1;
        for (var i = 1; i < n1+1; i++) {
            solution *= i;
        }
        need = false;
    }

    
    else  {
        console.log("No Conditions met")
    }

    console.log(int)

    document.getElementById("solution").innerText = solution;
    
    if (need == true) {
        document.getElementById('sol_p').innerText = operation[int-1];

    }
    else {
        document.getElementById('sol_p').innerText = " ";

    }
    /*
    const length = solution.toString().length 
    console.log(`length is ${length}`)
    if (length > 16 && length < 20) {
        document.getElementById("solution").style.fontSize = "60px";
    }

    else if (length > 18 && length < 28) {
        document.getElementById("solution").style.fontSize = "40px";
    }

    else if (length > 28) {
        document.getElementById("solution").style.fontSize = "20px";
    }
    else {
        document.getElementById("solution").style.fontSize = "80px";

    }
    */
    
}


