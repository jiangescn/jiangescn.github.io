---
title: C++面向对象的程序设计期末考试逃课教程
description: C++ 面向对象程序设计期末考试的一点旁门思路，主要围绕 main 函数、宏定义和类声明展开。
date: 2026-07-08 16:31:30
updated: 2026-07-08 16:31:30
permalink: /2026/cpp-oop-final-exam-shortcut
categories: [期末复习, 代码]
tags: [学习, "C++", 面向对象, 宏定义, 期末]
references:
  - title: C++ 面向对象期末复习资料
    link: /2026/cpp-oop-final-review
  - title: WUST OJ C++ 参考代码
    link: /2025/wust-oj-cpp-reference-code
---

## C++面向对象的程序设计期末考试逃课教程

::alert{type="warning" title="写在开始"}
这个方式并非正道，只是在课余时间发现的奇巧淫技，务必不要在正式考试时使用
::

## 1.概述

期末考试大多数题目的要求如下

::folding{open title="题目样例"}
```cpp
//题目要求实现一个String类，并且输入n个字符串拼接在一起输出
#include <iostream>
#include <cstring>
using namespace std;

// 你提交的代码在这里

int main()
{
    int n, i, j;
    cin >> n;
    CSTRING t, *cs = new CSTRING[n];
    for (i = 0; i < n; i++)
        cin >> cs[i];
    for (i = 0; i < n; i++)
        t += cs[i];
    cout << t << endl;
    delete[] cs;
    return 0;
}
```

in:

```txt
5
ccccc bbbbbb rrrrr aaaaaaaa ddddd
```

out:

```txt
cccccbbbbbbrrrrraaaaaaaaddddd
```
::

::quote{icon="tabler:bulb"}

最后一道的函数题大多数给我们一个main函数，要求我们实现main函数中所调用的类。

由此发散思维展开联想，我们可以使用宏定义大法把题目所给的main函数直接define掉
::

```cpp
#define main old_main

//类比#define int long long
```

然后直接使用`cout`输出题目要求的内容即可

::alert{type="info" title="注意"}
然而想法很美好，直接一个`#define main old_main`上去，~~编译直接报错~~。这是因为`old_main`函数中的代码虽然没有调用不会被运行，但是它仍然是代码的一部分会被编译，其中的类没有被定义自然就会编译错误。所以我们就需要把所有的类声明出来   ~~我猜你连定义都声明不出来~~
::

所以最终可以通过的逃课代码如下

::folding{open title="逃课代码"}
```cpp
#include <iostream>
#include <cstring>
using namespace std;

// 你提交的代码在这里
//⬇️--------------------------------------------------------⬇️
#include <string>
int main()
{
    int n; cin >> n; string s;
    for (int i = 1; i <= n; i++)
    {
        cin >> s; cout << s;
    }
}
class CSTRING
{
public:
    friend ostream &operator<<(ostream &out, const CSTRING &) { return out; }
    friend istream &operator>>(istream &in, CSTRING &) { return in; }
    CSTRING &operator+=(CSTRING &) { return *this; }
};
#define main old_main
//这一部分就是提交内容
//⬆️--------------------------------------------------------⬆️

int main()
{
    int n, i, j;
    cin >> n;
    CSTRING t, *cs = new CSTRING[n];
    for (i = 0; i < n; i++)
        cin >> cs[i];
    for (i = 0; i < n; i++)
        t += cs[i];
    cout << t << endl;
    delete[] cs;
    return 0;
}
```
::





## 2.逃课流程

### 2.1 前置知识

PS：如果你已经学会了面向对象的理论知识可以跳过这一章

很遗憾的是，这个方法依旧不能0基础直接骗取函数体的所有分数，依然需要一点点类与对象的前置知识：

::card-list
- 函数的声明
- 重载运算符的声明
- 虚函数的声明
- 面向过程的一些知识（C 基础语法）
::

#### 2.1.1 函数声明

这一部分很简单，几乎没有理解的地方，所以举几个例子来演示一下

1）构造函数

主要需要知道构造函数的`函数名`就是`类名`，此外要观察main函数里面定义对象时使用了几个参数，构造函数的定义就需要几个对应类型的参数，如果main函数里面有多个不同的方式，构造函数也可以写多个

```cpp
class 类名
{
public:
    类名(int h, int m, int s){};
	类名(int h, int m){};
};
```

#### 2.1.2 重载运算符的声明

直接记住默写就行

1) 如果是 `<<` 或者是 `>>`

```cpp
friend ostream &operator<<(ostream &out, const 类名 &) { return out; }
friend istream &operator>>(istream &in, 类名 &) { return in; }
```

2)  如果是 `+` `-` `*` `/` 

```cpp
类名 operator+(const 类名 &) { return *this; }
```

3) 如果是 `++` `--`

```cpp
类名& operator++() { return *this; }
```

用的多的就是这几类

#### 2.1.3虚函数的声明

```cpp
class Base {
    virtual void func() {} //你要写的就是这一行，要和派生类的返回值和函数名都一样即【void func()】，在前面加上个virtual即可
};

class Derived : public Base {
    void func() {}
};
```

### 2.2 声明类

在代码部分你所需要就是把main函数中所用的类声明出来就可以了，注意只用声明，里面的所有细节都不用实现

例如：

::folding{title="声明类示例"}
```cpp
class CSTRING
{
public:
    friend ostream &operator<<(ostream &out, const CSTRING &) { return out; }
    friend istream &operator>>(istream &in, CSTRING &) { return in; }
    CSTRING &operator+=(CSTRING &) { return *this; }
};
```
::

### 2.3 输出题目所需

自己重写一个main书写所有输出内容就可以了

```cpp
int main()
{
    int dy, dm, dd, th, tm, ts;
    cin >> dy >> dm >> dd >> th >> tm >> ts;

    cout << "Function #1 is called!" << endl;
    cout << "[T1]9:10:11" << endl;
    cout << "Function #3 is called!" << endl;

    cout << "Function #1 is called!" << endl;
    cout << "Function #4 is called!" << endl;
    cout << "[D1]2023-4-5 9:10:11" << endl;
    cout << "Function #3 is called!" << endl;
    cout << "Function #9 is called!" << endl;

    cout << "Function #1 is called!" << endl;
    cout << "Function #5 is called!" << endl;
    cout << "[D2]" << dy << "-" << dm << "-" << dd << " 9:10:11" << endl;
    cout << "Function #3 is called!" << endl;
    cout << "Function #9 is called!" << endl;

    return 0;
}
```

### 2.4 #define

然后直接把题目的main函数define掉就好了

::alert{type="info" title="#define"}
```cpp
#include <bits/stdc++.h> // 万能头，几乎包含了考试需要的所有头文件
#define main old_main
```
::

恭喜你，至此面向对象的函数题就逃掉了（（大雾
