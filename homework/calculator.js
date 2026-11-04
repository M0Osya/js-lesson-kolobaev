function print(text) {
  console.log(text);
  document.getElementById("out").textContent += text + "\n";
}
function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) {
        return "Ошибка: деление на ноль";
      }
      return a / b;
    default:
      return "Ошибка: неизвестная операция";
  }
}

function main() {
  document.getElementById("out").textContent = "";
  let a = Number(prompt("Введи первое число"));
  let b = Number(prompt("Введи второе число"));
  let op = prompt("Введи операцию: +, -, * или /");

  if (isNaN(a) || isNaN(b)) {
    print("Ошибка: нужно вводить числа");
    return;
  }

  print(a + " " + op + " " + b + " = " + calculate(a, b, op));
}