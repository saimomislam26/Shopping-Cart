var total = 0;
let myvar;

let btn_inc = document.querySelectorAll('.inc')
let btn_dec = document.querySelectorAll('.dec')
let input = document.querySelectorAll('.input');
let price = document.querySelectorAll('.price');
let price_count = document.querySelectorAll('.itemval');
let total_amount = document.getElementById('product_total_amt');
let btn_checkout = document.querySelector('.checkout');
btn_inc = Array.from(btn_inc);
btn_dec = Array.from(btn_dec);
input = Array.from(input);
price_count = Array.from(price_count);
price = Array.from(price);


//Event Listener
btn_checkout.addEventListener('click', checked);
//function

function checked() {
    total_amount.innerHTML = '0.00'
    total = 0;
    input.forEach((item, i) => {
        input[i].value = '0'
    })
    price_count.forEach((item, i) => {
        price_count[i].innerHTML = '0.00'
    })
    alert('Added Successfully')
}

btn_inc.forEach((btn, i) => {

    val = 0;
    btn_inc[i].addEventListener("click", function (event) {
        if (parseInt(input[i].value) > 4) {
            input[i].style.background = 'red';
            input[i].style.color = '#fff';
        }
        else {
            input[i].value = parseInt(input[i].value) + 1;
            price_count[i].innerHTML = parseInt(price[i].innerHTML) * input[i].value;
            total = total + parseInt(price[i].innerHTML);
            total_amount.innerHTML = total;
        }

    });




});


btn_dec.forEach((btn, i) => {

    btn_dec[i].addEventListener("click", function (event) {

        if (parseInt(input[i].value) === 0) {

        }
        else {
            input[i].style.background = '#fff';
            input[i].style.color = '#000';
            input[i].value = parseInt(input[i].value) - 1;
            price_count[i].innerHTML = parseInt(price_count[i].innerHTML) - parseInt(price[i].innerHTML);
            // val1 = parseInt(price[i].innerHTML) - val1;
            // val = val - val1;
            total = total - parseInt(price[i].innerHTML);
            total_amount.innerHTML = total;
        }


    });

});


// function showalertdone(message, classname) {
//     removealert();
//     let div = document.createElement('div');
//     div.className = `alert ${classname} text-white`;
//     div.appendChild(document.createTextNode(message));
//     cont.insertBefore(div, body);

//     myvar = setTimeout(function () {
//         document.querySelector('.alert').remove();
//     }, 3000);

// }

// function removealert() {
//     let currentdiv = document.querySelector('.alert');
//     if (currentdiv) {
//         currentdiv.remove();
//     }
//     clearTimeout(myvar);
// }


