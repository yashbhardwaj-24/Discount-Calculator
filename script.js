const btn1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const discount = document.getElementById("discount");
const total = document.getElementById("total");

function calTotal(){
    const billValue = billInput.value;
    const discountValue = discount.value;
    const totalValue = billValue - ((discountValue * billValue)/100);  // 100 - 20% of total =>80%
    total.innerText = totalValue.toFixed(2);
}

btn1.addEventListener("click", calTotal);