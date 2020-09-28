// const invoice = 50;
const stock = 100;

// const message =
//   invoice <= stock
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";

// console.log(message);

// experiment
const invoiceInputRef = document.querySelector('input[name="invoice"]');
const checkoutRef = document.querySelector(".checkout");

let message;
checkoutRef.addEventListener("click", function () {
  if (Number(invoiceInputRef.value) <= stock) {
    message = "Заказ оформлен, с вами свяжется менеджер";
  } else {
    message = "На складе недостаточно товаров!";
  }

  console.log(message);
});
