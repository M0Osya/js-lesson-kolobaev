function print(text) {
  console.log(text);
  document.getElementById("out").textContent += text + "\n";
}
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function main() {
  document.getElementById("out").textContent = "";
  let n = Number(prompt("Введи число n"));

  if (isNaN(n) || n < 1) {
    print("Ошибка: нужно ввести целое число больше нуля");
    return;
  }

  print("Сумма чисел от 1 до " + n + " = " + sumTo(n));
}