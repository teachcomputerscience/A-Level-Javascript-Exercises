//declare array for values to be stored
const valueArray = [];

let btnAddValue = document.getElementById('btnAddToArray');
let btnRemoveValue = document.getElementById('btnRemoveFromArray');
let btnSortArray = document.getElementById('btnSortArray');
let btnDisplayArray = document.getElementById('btnDisplayArray');
let modalInput = document.getElementById('modalInput');

btnAddValue.addEventListener('click', addValueToArray);

function addValueToArray() {
    modalInput.style.display ="block";
}