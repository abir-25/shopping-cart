
function updateProductQuantity(product, price, isincreasing) {
    const productText = document.getElementById(product + "-quantity").value;
    let productQuantity = parseInt(productText);
    if (isincreasing) {
        productQuantity++;
        document.getElementById(product + "-quantity").value = productQuantity;
    }
    else if (productText > 0) {
        productQuantity--;
        document.getElementById(product + "-quantity").value = productQuantity;
    }

    document.getElementById(product + "-price").innerText = productQuantity * price;
    updateTotal();
}

function updateTotal() {
    const phonePriceText = document.getElementById("phone-price").innerText;
    const casePriceText = document.getElementById("case-price").innerText;

    const subTotal = parseInt(phonePriceText) + parseInt(casePriceText);
    document.getElementById("sub-total").innerText = subTotal;
    const taxAmount = subTotal / 10;
    document.getElementById("tax-amount").innerText = taxAmount;
    const totalAmount = subTotal + taxAmount;
    document.getElementById("total-price").innerText = totalAmount;

}

document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductQuantity('phone', 1219, true);
});

document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductQuantity('phone', 1219, false);
});
document.getElementById("case-plus").addEventListener('click', function () {
    updateProductQuantity('case', 59, true);
});
document.getElementById("case-minus").addEventListener('click', function () {
    updateProductQuantity('case', 59, false);
});

