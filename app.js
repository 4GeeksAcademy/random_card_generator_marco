// Function for card generation

function generateCard() {
    // Arrays for the cards
    const symbolArr = ["♦", "♥", "♠", "♣"];
    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    // Random number generation for arrays 
    let symbolIndex = Math.floor(Math.random() * symbolArr.length);
    let numberIndex = Math.floor(Math.random() * numberArr.length);

    // Access to the divs
    let topSymbolElement = document.getElementById("top-symbol");
    let bottomSymbolElement = document.getElementById("bottom-symbol");
    let numberElement = document.getElementById("card-number");


    // Inner html for substitution
    let symbol = symbolArr[symbolIndex]; // Save the symbol value

    topSymbolElement.innerHTML = symbol;
    bottomSymbolElement.innerHTML = symbol;
    numberElement.innerHTML = numberArr[numberIndex];

    // Conditional rendering for symbol colors
    const isRedSymbol = symbol === "♥" || symbol === "♦";
    topSymbolElement.style.color = bottomSymbolElement.style.color = isRedSymbol ? "red" : "black";
    };


window.onload = function() {
    console.log("JS Connected!");
    
    generateCard();

    document.getElementById("generateButton").addEventListener("click", generateCard);
};


