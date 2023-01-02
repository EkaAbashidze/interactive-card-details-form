const main = document.querySelector(".main-container");
const added = document.querySelector(".added-container");
const confirm = document.getElementById("btn");
const userName = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const month =  document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const errors = document.querySelectorAll("h5");
const onCardNumber = document.getElementById("on-card-number");
const onCardOwner = document.getElementById("on-card-owner");
const onCardCvc = document.getElementById("on-card-cvc");
const onCardMonth = document.getElementById("on-card-expiry-month");
const onCardYear = document.getElementById("on-card-expiry-year");

console.log(onCardCvc);

confirm.addEventListener("click", confirmForm);

cardNumber.addEventListener("input", () => validateCard(cardNumber, errors[0]));

cardNumber.addEventListener("keyup", function () {
    const value = cardNumber.value;
    const chunks = value.match(/.{1,4}/g);
    onCardNumber.innerHTML = chunks.join(" ");
});


userName.addEventListener("keyup", function () {
    const value = userName.value;
    onCardOwner.innerHTML = value;
});


cardNumber.addEventListener("keyup", function () {
    const value = cardNumber.value;
    const chunks = value.match(/.{1,16}/);
    cardNumber.value = chunks.join(" ");
    });

cvc.addEventListener("input", () => validateCvc(cvc, errors[2]))

cvc.addEventListener("keyup", function () {
    const value = cvc.value;
    const chunks = value.match(/.{3}/);
    cvc.value = chunks.join(" ");
    onCardCvc.innerHTML = cvc.value;
});

month.addEventListener("input", () => validateDate(month, errors[1]))

month.addEventListener("keyup", function () {
    const value = month.value;
    const chunks = value.match(/.{1,2}/);
    month.value = chunks.join(" ");
    onCardMonth.innerHTML = month.value + "/";
});

year.addEventListener("input", () => validateDate(year, errors[1]))

year.addEventListener("keyup", function () {
    const value = year.value;
    const chunks = value.match(/.{2,4}/);
    year.value = chunks.join(" ");
    onCardYear.innerHTML = year.value;
});

function validateCvc(input, err) {
    if (input.value === "") {
        err.style.display = "block";
        input.style.border = "1px solid #FF5050";
    } else {
        err.style.display = "none";
        input.style.backgroundImage = "linear-gradient(white, white), linear-gradient(to top, #610595, #6348fe)";
        input.style.border = "double 1px transparent";
    }
}

function validateDate(input, err) {
    if (input.value === "") {
        err.style.display = "block";
        input.style.border = "1px solid #FF5050";
    } else {
        err.style.display = "none";
        input.style.backgroundImage = "linear-gradient(white, white), linear-gradient(to top, #610595, #6348fe)";
        input.style.border = "double 1px transparent";
    }
}


function validateCard(input, err) {
    const regEx = /^[0-9]*$/;
    if (input && !input.value.match(regEx)) {
        err.style.display = "block";
        err.innerText = "Wrong format, numbers only";
        input.style.border = "1px solid #FF5050";
    } else {
        err.style.display = "none";
        input.style.backgroundImage = "linear-gradient(white, white), linear-gradient(to top, #610595, #6348fe)";
        input.style.border = "double 1px transparent";
    }
}


function confirmForm() {

    if ((userName && userName.value) &&
        (cardNumber && cardNumber.value) &&
        (month && month.value) &&
        (year && year.value) &&
        (cvc && cvc.value)
        ) {
            added.style.display = "flex";
            main.style.display = "none";
            const value = cardNumber.value;
            const chunks = value.match(/.{1,4}/g);
            onCardNumber.innerHTML = chunks.join(" ");
            // onCardNumber.innerHTML = cardNumber.value;
            onCardOwner.innerHTML = userName.value;
            onCardCvc.innerHTML = cvc.value;
            onCardMonth.innerHTML = month.value + "/";
            onCardYear.innerHTML = year.value;
            console.log("Hello");
        };  
};



    // validateLength(cardNumber, errors[0]);

// function validateLength(input, err) {
//     if (input.value.length === 16) {
//         err.style.display = "none";
//         input.style.backgroundImage = "linear-gradient(white, white), linear-gradient(to top, #610595, #6348fe)";
//         input.style.border = "double 1px transparent";
//     } else {
//         err.style.display = "block";
//         err.innerText = "There should be 16 digits";
//         input.style.border = "1px solid #FF5050";

//     };
// }




// cardNumber.addEventListener("input", () => {
//     validate(cardNumber, error1);
//     console.log(cardNumber.value);
// });



    // if (cardNumber.value.includes("e") || cardNumber.value.includes("-")) {
    //     errors[0].style.display = "block";
    // } else {
    //     errors[0].style.display = "none";
    // }




    // if (cardNumber.value.includes("-") || cardNumber.value.includes("e")) {
    //     errors[0].style.display = "block";} 











// userName.addEventListener("input", updateValue);
// cardNumber.addEventListener("input", updateValue);
// month.addEventListener("input", updateValue);
// year.addEventListener("input", updateValue);
// cvc.addEventListener("input", updateValue);

// function updateValue(e) {
//   console.log(e.target.value);
// }

