

function formSubmit(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll('input')
    let num1 = inputs[0].value;
    let num2 = inputs[1].value;
    let op = document.querySelector('select').value
    console.log(eval(num1 + op + num2))

    

    fetch("/calc", {method: 'POST',body: JSON.stringify({"op":num1 + op + num2}), headers: {Accept: 'application.json','Content-Type': 'application/json'}})
    .then(response => {
        console.log(response.status)
    })
    
    fetch("/calc")
    .then(response => response.json())
    .then(history => {
        document.querySelector("#result").innerHTML = `<h3>${history[0]}</h3>`;
        console.log(history.slice(1))
        let his = document.querySelector("#history")
        his.innerHTML = '';
        for(let item of history.slice(1)) {
            his.innerHTML += `<a class="list-group-item list-group-item-action list-group-item-dark">${item}</a>`
            
        }
    })
}


function reset(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll('input')
    for(let input of inputs) {
        input.value = ''
    }
    document.querySelectorAll('option')[0].selected = true;
}
