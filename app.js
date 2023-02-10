// basic $-function that returns the element object through its id
var $ = function(id){
    return document.getElementById(id);
}

//element object to access the text-content of h1 tag
var h1 = $('heading'); 

//element objects to access the text-content of currency-1's and currency-2's label tags
var currency1Label = $('currency1Label'); 
var currency2Label = $('currency2Label'); 

//element objects to access the currency-1 and currency-2 input tags
var currency1 =  $('currency1'); 
var currency2 =  $('currency2');

//element object to display data validation alerts
var required = $('required'); 

//currency conversion factor for USD to CAD
var conversionFactor = 1.341114; 


// function to convert currencies
var convert = function(){
    // to convert the user-input from string to a floating-point number 
    var currency1Value = parseFloat(currency1.value);

    // below if-elseif-else block displays all possible invalid input alerts
    if(currency1.value.length == 0){
        required.textContent = '*Currency Amount cannot be empty';
    }else if(isNaN(currency1Value)){
        required.textContent = '*Invalid Currency Amount, it must be a number';
    }else if(currency1Value < 0){
        required.textContent = '*Currency Amount must be positive';
    }else{
        required.textContent = '*';

        // calculating currency2 using conversionFactor
        var currency2Value = currency1Value * conversionFactor;

        // fixing the decimal places of the result to maximum 3 decimal places
        currency2.value = currency2Value.toFixed(3);
    }
}

// function to swap currencies
var swap = function(){

    // the below if-else blocks swaps the currencies from all html-tags
    if(h1.innerText == 'CAD to USD Converter'){
        h1.innerText = 'USD to CAD Converter';
    }else{
        h1.innerText = 'CAD to USD Converter';
    }

    if(currency1Label.textContent == "USD"){
        currency1Label.textContent = "CAD";
    }else{
        currency1Label.textContent = "USD";
    }

    if(currency2Label.textContent == "CAD"){
        currency2Label.textContent = "USD";
    }else{
        currency2Label.textContent = "CAD";
    }

    if(currency1.placeholder == "Enter CAD"){
        currency1.placeholder = "Enter USD";
    }else{
        currency1.placeholder = "Enter CAD";
    }

    if(currency2.placeholder == "Get CAD here"){
        currency2.placeholder = "Get USD here";
    }else{
        currency2.placeholder = "Get CAD here";
    }

    // to clear user inputs once currency swap is successful
    currency1.value = "";
    currency2.value = "";

    // to modify the currency conversion Factor once the user swaps currencies
    conversionFactor = 1/conversionFactor;
}

// function to clear user-entered currencies
var erase = function(){
    currency1.value = "";
    currency2.value = "";
}