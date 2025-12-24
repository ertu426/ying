---
title: "[C++] 1.1 std::cout、std::endl、std::cin"
description: "Lorem ipsum dolor sit amet"
pubDate: "2025-08-20"
heroImage: "../../assets/images/learncpp.png"
categorie: "C++"
tags: ["C++", "LearnCPP"]
---

## 介绍

`std::cout`、`std::endl` 、`std::cin` 都位于 C++ 标准库 iostream 中。

## std::cout

`std::cout` 它允许我们将数据发送到控制台并以文本形式打印。`std::cout` 先将数据发送到缓存中，C++自动将缓存中的数据按一定规则输出到控制台中。

## 示范

1. 输出 `字面量`

```c++
#include <iostream> //引入标准输出、输入库

int main()
{
    std::cout << "Hello world!"; // 输出 Hello world! 到控制台
    std::cout << 4;                 // 输出 4 到控制台

    return 0;
}
```

2. 输出 `变量`

```c++
#include <iostream> //引入标准输出、输入库

int main()
{
    int number {18};

    std::cout << number; // 输出 number 的值到控制台

    return 0;
}
```

3. 混合输出

```c++
#include <iostream> //引入标准输出、输入库

int main()
{
    int age {18};

    std::cout << "My Name is Alex, and I am " << age << " years old.";

    return 0;
}
```

## std::endl

`std::endl` 它先发送一个换行命令到缓存中，并立刻将缓存中的数据输出到控制台。

`std::endl` 和 `\n` 的效果上都是换行。但`std::endl` 是先换行并立刻刷新缓存到控制台。`\n` 只进行换行。因此当有大量换行需求时推荐时候 `\n` 来进行换行，因为每个`std::endl` 都执行一次刷新缓存会影响性能。

## 示范

```c++
#include <iostream> //引入标准输出、输入库

int main()
{
    std::cout << "Hi" << std::endl;
    std::cout << "My Name is Alex.";

    return 0;
}
```

## std::cin

`std::cin` 它允许我们从键盘读取输入并将其存储到变量中。通常使用提取运算符 `>>` 将输入数据放入变量中。同时 `std::cin` 也是有缓存的。

### 示范

1. 单次输入

```c++
#include <iostream>

int main()
{
    std::cout << "Enter a numbers: ";

    int x{};
    std::cin >> x;

    std::cout << "You entered " << x << '\n';

    return 0;
}
```

2. 多次输入

```c++
#include <iostream>

int main()
{
    std::cout << "Enter two numbers: ";

    int x{};
    std::cin >> x;

    int y{};
    std::cin >> y;

    std::cout << "You entered " << x << " and " << y << '\n';

    return 0;
}
```

> 该程序将输入存入两个变量（这次作为分开的语句）。我们尝试运行这个程序两次。
>
> 运行 #1：当遇到 `std::cin >> x;` 时，程序将等待输入。当输入 `4` 时。值 `4\n` 进入输入缓冲区，值 4 被提取到变量 x 中。
> 当遇到 `std::cin >> y;` 时，程序将再次等待输入。当输入 `5` 时。值 `5\n` 进入输入缓冲区，值 5 被提取到变量 y 中。最后，程序将打印 `You entered 4 and 5`。
> 这次运行的结果应该没有什么令人惊讶的地方。
>
> 运行 #2：当遇到 `std::cin >> x;` 时，程序将等待输入。当输入 `4 5` 时。值 `4 5\n` 进入输入缓冲区，但只有 `4` 被提取到变量 `x`（提取在空格处停止）。
> 当遇到 `std::cin >> y` 时，程序不会等待输入。相反，输入缓冲区中仍然存在的 `5` 被提取到变量 `y` 中。然后程序打印 `You entered 4 and 5`。
> 注意，在第二次运行中，当提取到变量 `y` 时，程序没有等待用户输入额外的内容，因为输入缓冲区中已经存在可用的先前输入。

3. 输入错误

```c++
#include <iostream>

int main()
{
    std::cout << "Enter a numbers: ";

    int x{};
    std::cin >> x;

    std::cout << "You entered " << x << '\n';

    return 0;
}
```

> 如果用户输入 `5a` 并按下回车，缓冲区中会添加 `5a\n`。`5` 将被提取，转换为整数，并赋值给变量 `x`。`a\n` 将留在输入缓冲区中，供下一次提取使用。
> 如果用户输入 `b` 并按回车键，`b\n` 将被添加到缓冲区中。因为 `b` 不是有效的整数，所以无法提取任何字符，这是一个提取失败。变量 `x` 将被设置为 `0`，并且在输入流被清除之前，未来的提取操作都将失败。
> 如果 `std::cin` 由于之前提取失败而处于不良状态，那么这里什么也不会发生。变量 `x` 的值不会被改变。
> `<<` 和 `>>` 的分辨
> 插入运算符（`<<`）和提取运算符（`>>`）都表示数据移动的方向。经常并搞混。一个简单的记忆方法：

`std::cin` 和 `std::cout` 始终位于运算符的左侧。

`std::cout` 用于输出一个值（cout = character output）。

`std::cin` 用于获取输入值（cin = character input）。

`<<` 与 `std::cout` 一起使用，表示数据移动的方向。`std::cout` << 4 将值 4 移动到控制台。

`>>` 与 `std::cin` 一起使用，表示数据移动的方向。`std::cin` >> x 将用户从键盘输入的值移动到变量 x 中。