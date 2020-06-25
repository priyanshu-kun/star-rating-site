// Initial star rating's
let InitialRatings = {
    Samsung: 4.8,
    Apple: 4.9,
    Nokia: 3.8,
    Huwei: 4.2,
    LG: 4.5,
    Vivo: 3.7,
    Redmi: 4.1,
    Tecno: 3.9,
    Sony: 3.3
}


// Total ratings
const totalRating = 5;

document.addEventListener("DOMContentLoaded",GetStarRatings);

const ProductSelect = document.getElementById("product");
const Productrating = document.getElementById("manuly-typed-stars");

let Prod;


Productrating.addEventListener("focusout",() => {
    // alert("Bingo");
    // console.log(Productrating.value)
    if(Productrating.value > 5) {
        alert("Please Rate (1 - 5)");
        return;
    }
        InitialRatings[Prod] = Productrating.value;
        GetStarRatings()

})


ProductSelect.addEventListener("change",() => {
    Prod = ProductSelect.value;
    Productrating.disabled = false;
    Productrating.value = InitialRatings[Prod];
})


function GetStarRatings() {
    // alert("Bingo")
    for (const rating in InitialRatings) {
        if (InitialRatings.hasOwnProperty(rating)) {
            const element = InitialRatings[rating];
            document.querySelector(`.${rating}-ratings`).innerHTML = element;
            let starPercentage = ((element/totalRating)*100);
            let starRoundPercentage = `${Math.floor(starPercentage)}%`;
            // add empty stars
            document.querySelector(`.${rating} .inner-star`).style.width = starRoundPercentage;
        }
    }

}