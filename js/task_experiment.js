// Код получения результата и дальнейших операций с ним из HTML. Альтернатива prompt (тут: Возведение в степень)
// Math.pow

console.log(document); //заходим в DOM во вкладке Console
document.querySelector('input[name="number"]'); //передача любого CSS селектора (тут - селектор имени)

const numInputRef = document.querySelector('input[name="number"]'); // Ref-ссылка на элемент из HTML
const powInputRef = document.querySelector('input[name="power"]');
const buttonRef = document.querySelector(".powResult");

console.log(numInputRef); //Вывод ссылки на HTML в консоль
console.log(numInputRef.value); //Вывод значения. !!! typeof всегда string !!!

buttonRef.addEventListener("click", function () {
  // на кнопке слушатель событий по клику вызывает Функцию (новая форма записи: () => {})
  console.log("number Input value", numInputRef.value);
  console.log("power Input value", powInputRef.value);

  const number = Number(numInputRef.value); //приведение полученного из инпута значения (строки) в число
  const power = Number(powInputRef.value);

  const result = Math.pow(number, power);
  console.log(result);
});
