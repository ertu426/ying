---
title: "[C++] 字符串去元音"
description: "将字符串中的元音字母（a、e、i、o、u）移除"
pubDate: "2026-01-11"
heroImage: "../../assets/images/learncpp.png"
categorie: "C++"
tags: ["C++", "LearnCPP"]
---

# 题目

> 给定一个字符串 `str` ，请你删除其中所有的元音字母（a、e、i、o、u），并返回结果字符串。

# 解决方法

1. 使用正则表达式

```c++
# include <string>
# include <regex>
std::string disemvowel(std::string str)
{
  std::regex vowels("[aeiouAEIOU]");
  return std::regex_replace(str, vowels, "");
}
```

时间复杂度：O(n)，其中 n 是字符串的长度。
空间复杂度：O(n)，其中 n 是字符串的长度。

首先使用 `std::regex` 定义正则表达式模式 `vowels`，然后使用 `std::regex_replace` 替换匹配`[aeiouAEIOU]`的字符串值为 `""`，即删除匹配的字符。

注: `std::regex_replace` 方法在 C++ 11 之后 才被引入。
`std::regex_replace(字符串, 正则表达式变量名, 替换字符串)` 将`字符串`中所有匹配 `正则表达式变量名` 的字符串替换为 `替换字符串`。

2. 遍历字符串

```c++
# include <string>

std::string disemvowel(std::string str)
{
    for ( auto letter : "AEIOUaeiou" ) {
      str.erase(std::remove(str.begin(), str.end(), letter), str.end());
    }

    return str;
}
```

时间复杂度：O(n)，其中 n 是字符串的长度。
空间复杂度：O(n)，其中 n 是字符串的长度。

首先遍历字符串中的每个字符 `letter`，如果 `letter` 是元音字母（a、e、i、o、u），则使用 `std::remove` 函数删除该字符。最后使用 `std::string::erase` 方法删除所有被删除的字符。

`std::erase` 和 `std::erase_if` 方法在 C++ 20 之后 才被引入。
`std::erase` 方法用于删除容器中的指定元素，而 `std::erase_if` 方法用于删除容器中满足指定条件的元素。
`std::erase(容器.begin(), 容器.end(), 元素)` 用于删除容器中所有等于 `元素` 的元素。
`std::erase_if(容器.begin(), 容器.end(), 条件)` 用于删除容器中所有满足 `条件` 的元素。
`std::remove` 方法用于删除容器中满足指定条件的元素，而 `std::remove_if` 方法用于删除容器中满足指定条件的元素。
`std::remove(容器.begin(), 容器.end(), 元素)` 用于删除容器中所有等于 `元素` 的元素。
`std::remove_if(容器.begin(), 容器.end(), 条件)` 用于删除容器中所有满足 `条件` 的元素。

# 相关函数

## 1. `std::regex` 和 `std::regex_replace`

定义
> 用于定义正则表达式的模式。并替换匹配的字符串值。

使用方法
> 1. 引入 `<regex>` 头文件
> 2. 使用 `std::regex` 定义正则表达式模式
> 3. 使用 `std::regex_replace` 替换匹配的字符串值

std::regex 变量名("正则表达式模式");
std::string 变量名 = std::regex_replace(字符串, 正则表达式变量名, 替换字符串);
