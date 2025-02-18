const number = document.getElementById('number');
const convert = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumerals = [
    {symbol: 'M', value: 1000},
    {symbol: 'CM', value: 900},
    {symbol: 'D', value: 500},
    {symbol: 'CD', value: 400},
    {symbol: 'C', value: 100},
    {symbol: 'XC', value: 90},
    {symbol: 'L', value: 50},
    {symbol: 'XL', value: 40},
    {symbol: 'X', value: 10},
    {symbol: 'IX', value: 9},
    {symbol: 'V', value: 5},
    {symbol: 'IV', value: 4},
    {symbol: 'I', value: 1},
]

function toRoman(num){
    let result = '';

    for (let i = 0; i < romanNumerals.length; i++){
        while  (num >= romanNumerals[i].value){
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

convert.addEventListener('click', () => {
    const numberInput = parseInt(number.value);

    if (numberInput < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (numberInput >= 4000){
        output.innerText = "Please enter a number less than or equal to 3999"
    }
    else if (numberInput > 1){
        output.innerText = toRoman(numberInput);
    }
    else if (isNaN(numberInput) || numberInput === ''){
        output.innerText = "Please enter a valid number"
    }
})
