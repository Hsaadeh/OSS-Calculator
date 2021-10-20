

let calculateButton = document.querySelector("#calculateButton");
let clearButton = document.querySelector("#clearButton");

// cost per page in dollars ---> example: 0.075 is 7.5 cents, 0.75 is 75 cents
// CPP means "Cost Per Page"
let standardCPP = 0.075;
let LFDCPP = 1.75;
let BookCPP = 0.25
let MagCPP = 0.25;

// Initialized values
let FD33value = document.querySelector("#FD33value").value = 0;
let FD24value = document.querySelector("#FD24value").value = 0;
let DABvalue = document.querySelector("#DABvalue").value = 0;
let LDABvalue = document.querySelector("#LDABvalue").value = 0;
let OS36value = document.querySelector("#OS36value").value = 0;
let LFDvalue = document.querySelector("#LFDvalue").value = 0;
let B24value = document.querySelector("#B24value").value = 0;
let MAGvalue = document.querySelector("#MAGvalue").value = 0;

let standardTypeCost = ((FD33value + FD24value + DABvalue + LDABvalue + OS36value) * standardCPP);
let specialTypeCost = ((LFDvalue * LFDCPP) + (B24value * BookCPP) + (MAGvalue * MagCPP));

let TotalCost = (standardTypeCost + specialTypeCost);

// Calculate Button
calculateButton.addEventListener("click", () => {
    // standard types ---> variable = Number(domElement.value * (number of pages))
    FD33value = Number(document.querySelector("#FD33value").value * (5800));
    FD24value = Number(document.querySelector("#FD24value").value * (4200));
    DABvalue = Number(document.querySelector("#DABvalue").value * (2700));
    LDABvalue = Number(document.querySelector("#LDABvalue").value * (4200));
    OS36value = Number(document.querySelector("#OS36value").value * (6300));

    // special types
    LFDvalue = Number(document.querySelector("#LFDvalue").value * (1));
    B24value = Number(document.querySelector("#B24value").value * (300));
    MAGvalue = Number(document.querySelector("#MAGvalue").value * (80));

    standardTypeCost = ((FD33value + FD24value + DABvalue + LDABvalue + OS36value) * standardCPP);
    specialTypeCost = ((LFDvalue * LFDCPP) + (B24value * BookCPP) + (MAGvalue * MagCPP));

    TotalCost = (standardTypeCost + specialTypeCost);

    console.log(TotalCost);
});

// Clear Button
clearButton.addEventListener("click", () => {
    FD33value = document.querySelector("#FD33value").value = 0;
    FD24value = document.querySelector("#FD24value").value = 0;
    DABvalue = document.querySelector("#DABvalue").value = 0;
    LDABvalue = document.querySelector("#LDABvalue").value = 0;
    OS36value = document.querySelector("#OS36value").value = 0;
    LFDvalue = document.querySelector("#LFDvalue").value = 0;
    B24value = document.querySelector("#B24value").value = 0;
    MAGvalue = document.querySelector("#MAGvalue").value = 0;
});

