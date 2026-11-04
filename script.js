function print(text) {
  console.log(text);
  document.getElementById("out").textContent += text + "\n";
}

function clearOut(title) {
  document.getElementById("out").textContent = "";
  console.log("----- " + title + " -----");
}

function program1() {
  clearOut("Программа №1");
  print("Привет, мир!");
  print("Я учу JavaScript");
  print("Меня зовут Даниил Колобаев");
  print("Моя группа: ИС 3.2");
}

function program2() {
  clearOut("Программа №2");
  let name = prompt("Как тебя зовут?");
  let age = prompt("Сколько тебе лет?");
  let city = prompt("Из какого ты города?");

  print("Привет, " + name + "!");
  print("Тебе " + age + " лет.");
  print("Ты из " + city);
}

function program3() {
  clearOut("Программа №3");
  let age = Number(prompt("Сколько тебе лет?"));

  if (age < 7) {
    print("Ты ещё школьник");
  } else if (age >= 18) {
    print("Ты совершеннолетний");
  } else {
    print("Ты ещё несовершеннолетний");
  }
}

function program4() {
  clearOut("Программа №4");
  let n = Number(prompt("Введи число"));

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      print(i);
    }
  }
}

function isEven(x) {
  return x % 2 === 0;
}

function isPositive(x) {
  return x > 0;
}

function program5() {
  clearOut("Программа №5");
  let n = Number(prompt("Введи число"));

  for (let i = 1; i <= n; i++) {
    if (isEven(i)) {
      print(i + " — чётное");
    }
  }

  for (let i = -n; i <= n; i++) {
    if (isPositive(i)) {
      print(i + " — положительное");
    } else {
      print(i + " — не положительное");
    }
  }
}
