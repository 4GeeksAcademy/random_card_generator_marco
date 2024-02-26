window.onload = function() {
    console.log("JS Connected!");

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
    topSymbolElement.innerHTML = symbolArr[symbolIndex];
    bottomSymbolElement.innerHTML = symbolArr[symbolIndex];
    numberElement.innerHTML = numberArr[numberIndex]; 

    // Conditional rendering for smybol colors
    if (symbolArr[symbolIndex] === "♥" || symbolArr[symbolIndex] === "♦") {
        const isRedSymbol = symbolArr[symbolIndex] === "♥" || symbolArr[symbolIndex] === "♦";
        topSymbolElement.style.color = bottomSymbolElement.style.color = isRedSymbol ? "red" : "black";
    };

};


