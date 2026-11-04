using System.Globalization;

Console.OutputEncoding = System.Text.Encoding.UTF8;
Console.InputEncoding = System.Text.Encoding.UTF8;

while (true)
{
    Console.WriteLine();
    Console.WriteLine("Выбери программу:");
    Console.WriteLine("1 — Калькулятор");
    Console.WriteLine("2 — Таблица умножения");
    Console.WriteLine("3 — Сумма чисел");
    Console.WriteLine("0 — Выход");
    Console.Write("> ");

    string? choice = Console.ReadLine();
    switch (choice)
    {
        case "1": Calculator(); break;
        case "2": Multiplication(); break;
        case "3": Sum(); break;
        case "0": case null: return;
        default: Console.WriteLine("Нет такой программы"); break;
    }
}

static double ReadNumber(string message)
{
    while (true)
    {
        Console.Write(message);
        string text = (Console.ReadLine() ?? "").Replace(',', '.');
        if (double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out double value))
        {
            return value;
        }
        Console.WriteLine("Ошибка: нужно ввести число");
    }
}

static string Calculate(double a, double b, string op)
{
    switch (op)
    {
        case "+": return (a + b).ToString(CultureInfo.InvariantCulture);
        case "-": return (a - b).ToString(CultureInfo.InvariantCulture);
        case "*": return (a * b).ToString(CultureInfo.InvariantCulture);
        case "/":
            if (b == 0)
            {
                return "Ошибка: деление на ноль";
            }
            return (a / b).ToString(CultureInfo.InvariantCulture);
        default:
            return "Ошибка: неизвестная операция";
    }
}

static void Calculator()
{
    double a = ReadNumber("Введи первое число: ");
    double b = ReadNumber("Введи второе число: ");
    Console.Write("Введи операцию (+, -, *, /): ");
    string op = (Console.ReadLine() ?? "").Trim();
    Console.WriteLine($"{a} {op} {b} = {Calculate(a, b, op)}");
}

static void PrintTable(int n)
{
    for (int i = 1; i <= 10; i++)
    {
        Console.WriteLine($"{n} x {i} = {n * i}");
    }
}

static void Multiplication()
{
    int n = (int)ReadNumber("Введи число: ");
    PrintTable(n);
}

static long SumTo(int n)
{
    long sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}

static void Sum()
{
    int n = (int)ReadNumber("Введи число n: ");
    if (n < 1)
    {
        Console.WriteLine("Ошибка: нужно ввести целое число больше нуля");
        return;
    }
    Console.WriteLine($"Сумма чисел от 1 до {n} = {SumTo(n)}");
}