let arr = []
let operationType = ""

function myNumber(value) {
    
    document.getElementById("display").innerText  = document.getElementById("display").innerText + " " + value
    console.log(value)
    arr.push(value)

}

function myOperator(operator) {
    switch(operator) {
        case '+':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '-':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '*':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '/':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
    }
}

function equate () {
    switch(operationType) {
        case '+':
            //document.getElementById("display").innerText =  arr[0] + arr[1]

            fetch(`/calculator/add?num1=${arr[0]}&num2=${arr[1]}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('retrieving data')
             document.getElementById("display").innerHTML = data.result;
      });
            
        break
        case '-':
            fetch(`/calculator/subtract?num1=${arr[0]}&num2=${arr[1]}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('retrieving data')
             document.getElementById("display").innerHTML = data.result;
      });
        
        break
        case '*':
            fetch(`/calculator/multiply?num1=${arr[0]}&num2=${arr[1]}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('retrieving data')
             document.getElementById("display").innerHTML = data.result;
      });
           
        break
        case '/':
            fetch(`/calculator/divide?num1=${arr[0]}&num2=${arr[1]}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('retrieving data')
             document.getElementById("display").innerHTML = data.result;
      });
           
        break
    }

}