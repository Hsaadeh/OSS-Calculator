// import {MDCRipple} from '@material/ripple';


let calculate = document.querySelector("#calculateButton");

// cost per page in dollars ---> example: 0.075 is 7.5 cents, 0.75 is 75 cents
// CPP means "Cost Per Page"
let standardCPP = 0.075;
let LFDCPP = 1.75;
let BookCPP = 0.25
let MagCPP = 0.25;


calculate.addEventListener("click", () => {
    // standard types ---> variable = Number(domElement.value * (number of pages))
    let FD33value = Number(document.querySelector("#FD33value").value * (5800));
    let FD24value = Number(document.querySelector("#FD24value").value * (4200));
    let DABvalue = Number(document.querySelector("#DABvalue").value * (2700));
    let LDABvalue = Number(document.querySelector("#LDABvalue").value * (4200));
    let OS36value = Number(document.querySelector("#OS36value").value * (6300));

    // special types
    let LFDvalue = Number(document.querySelector("#LFDvalue").value * (1));
    let B24value = Number(document.querySelector("#B24value").value * (300));
    let MAGvalue = Number(document.querySelector("#MAGvalue").value * (80));

    let standardTypeCost = ((FD33value + FD24value + DABvalue + LDABvalue + OS36value) * standardCPP);
    let specialTypeCost = ((LFDvalue * LFDCPP) + (B24value * BookCPP) + (MAGvalue * MagCPP))

    let TotalCost = (standardTypeCost + specialTypeCost)
    
    console.log(TotalCost);
})