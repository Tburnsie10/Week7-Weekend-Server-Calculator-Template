

function formSubmit(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll('input')
    let num1 = inputs[0].value;
    let num2 = inputs[1].value;
    let op = document.querySelector('select').value
    console.log(eval(num1 + op + num2))
    
}





function reset(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll('input')
    for(let input of inputs) {
        input.value = ''
    }
    document.querySelectorAll('option')[0].selected = true;
}