function print(text) {
  console.log(text);
  document.getElementById("out").textContent += text + "\n";
}
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    print(n + " x " + i + " = " + n * i);
  }
}

function main() {
  document.getElementById("out").textContent = "";
  let n = Number(prompt("Введи число"));

  if (isNaN(n)) {
    print("Ошибка: нужно ввести число");
    return;
  }

  printTable(n);
}