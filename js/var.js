var theYears = 2023;
// document.getElementById('get').textContent = theYears;
// alert('Next year should be:' + ' ' + theYears);
console.log('The first year is ', theYears);
theYears = "nosense";
console.log('the second year is', 'mumu ');



function addNumber() {
    let num1 = document.getElementById('fnumber').value;
    let num2 = document.getElementById('snumber').value;
    let add = document.getElementById('add').textContent = 'compute';
    let result = document.getElementById('box');

    let res = parseInt(num1) + parseInt(num2);

    result.textContent = res;
}
