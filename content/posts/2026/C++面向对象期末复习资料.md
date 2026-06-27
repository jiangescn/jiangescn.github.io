---
title: 2026 | C++ 面向对象期末复习资料
description: C++ 面向对象程序设计期末复习笔记，整理类、对象、构造析构、继承、多态、模板、文件流和异常处理等重点。
date: 2026-06-27 21:19:34
updated: 2026-06-27 21:19:34
permalink: /2026/cpp-oop-final-review
image: /images/cpp-oop-final-review-cover.jpg
categories: [期末复习]
tags: [学习, "C++", 面向对象, 复习]
---

::alert{type="info" title="复习口径"}
这篇是临考前整理的 C++ 面向对象复习笔记。默认已经会一点 C/C++ 基础，所以不再展开循环、数组、普通函数这些内容，重点补考试更爱问的类生命周期、访问控制、继承、多态和模板写法。
::

## 0. 先看复习优先级

课件第 16 讲里给过一份题型参考，我先按这个排复习优先级：

| 题型 | 分值 | 复习侧重点 |
|---|---:|---|
| 选择题 | 30 | 概念、语法合法性、访问权限、构造析构规则 |
| 判断题 | 10 | 细节规则，如 `const`、`static`、虚函数、异常 |
| 填空题，阅读程序写结果 | 20 | 构造/析构输出顺序、重载调用、虚函数动态绑定 |
| 程序填空题 | 20 | 类、构造/析构、深拷贝、运算符重载、模板 |
| 函数题 | 20 | 手写成员函数、重载、文件/异常/模板函数 |

题型只当复习优先级参考，最后还是以老师通知和课堂要求为准。

最先看这几块：

1. 构造函数、析构函数、复制构造函数、赋值运算符。
2. 浅复制、深复制、`new/delete` 配对。
3. 作用域、对象生存期、`static` 静态成员、友元、`const` 保护。
4. 继承访问控制、派生类构造析构顺序、多继承二义性、虚基类。
5. 运算符重载，尤其 `= [] << >> ++ -- + +=`。
6. 虚函数、虚析构函数、纯虚函数、抽象类。
7. 模板、动态数组类、`operator[]` 返回引用。
8. 文件流、异常处理三段式。

## 1. 总知识点大纲

| 模块 | 对应课件 | 必会知识 |
|---|---|---|
| C++ 简单程序 | 第 1 讲，第 1、2 章 | `iostream`、`cin/cout`、命名空间、格式控制、`const`、强制类型转换、`auto/decltype` |
| 函数增强 | 第 2 讲，第 3 章 | 值传递、地址传递、引用传递、内联函数、默认参数、函数重载 |
| 类和对象 | 第 3、4、5 讲，第 4 章 | 抽象、封装、访问控制、对象、成员函数、`this`、构造/析构、复制构造、类组合 |
| 数据共享与保护 | 第 6 讲，第 5 章 | 作用域、可见性、生存期、静态成员、友元、常对象、常成员、常引用、多文件结构 |
| 数组、指针、字符串 | 第 7 讲，第 6 章 | 对象数组、对象指针、成员指针、`new/delete`、`vector`、浅/深复制、`string` |
| 继承与派生 | 第 8、9、10 讲，第 7 章 | 三种继承方式、类型兼容、派生类构造析构、同名隐藏、二义性、`using`、虚基类 |
| 多态性 | 第 11、12、13 讲，第 8 章 | 静态/动态多态、运算符重载、赋值重载、Big Three、虚函数、抽象类 |
| 模板和群体数据 | 第 14 讲，第 9 章 | 函数模板、类模板、动态数组类、链表结点、栈、队列 |
| STL、流、异常 | 第 15、16 讲，第 10、11、12 章 | 容器、迭代器、算法、函数对象、文件流、字符串流、异常处理 |

## 2. 算法竞赛背景下的复习提醒

平时写竞赛代码时常用“数据结构 + 函数 + 全局数组 + STL”，但这门课更容易考“类的生命周期”和“语法规则”。

我会专门留意这些坑：

- 竞赛里常写 `vector<int> a(n)`，但考试可能要求你手写动态数组类，必须会 `new[]`、`delete[]`、复制构造、赋值运算符。
- 竞赛里函数参数经常写引用或指针，但这里要能区分：值传递会拷贝，引用传递不会拷贝。
- 竞赛里不常手写析构函数，但只要类里有动态分配的指针成员，考试就很可能要求写析构、复制构造、赋值运算符。
- 竞赛模板里的宏、短变量名、`#define int long long` 不适合直接带进类设计题。类题要按课程格式写清楚接口、成员、构造函数和返回类型。
- 课件代码里有一些旧写法，例如 `void main()` 或 C++11 前后的规则说明。答题时优先贴合题目上下文，自己写完整程序时建议用标准 `int main()`。

## 3. 第 1、2 章：C++ 基础差异

### 3.1 最小 C++ 程序

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, welcome to C++!" << endl;
    return 0;
}
```

要点：

- C++ 头文件一般无 `.h`，如 `<iostream>`、`<cmath>`、`<string>`。
- `using namespace std;` 后可以写 `cout`，否则写 `std::cout`。
- `cout` 是输出流对象，`cin` 是输入流对象。
- `<<` 用于输出时叫插入运算符，`>>` 用于输入时叫提取运算符。
- `endl` 不只是换行，还会刷新输出缓冲区；普通输出换行可用 `'\n'`。

### 3.2 格式控制

需要 `<iomanip>`：

```cpp
cout << setw(10) << 100 << endl;
cout << setprecision(3) << 3.1415 << endl;
cout << hex << 100 << dec << endl;

//       100
//3.14
//64
```

必记：

- `setw(n)` 只影响紧随其后的一个输出项。
- `setprecision(n)` 默认表示有效数字位数，不是小数位数。
- `dec/hex/oct` 会持续生效，直到再次修改。
- `left/right` 会持续生效。

### 3.3 常量、类型转换、类型推断

```cpp
const double PI = 3.1415926;
static_cast<int>(x);
auto x = 1;
decltype(x) y = 2;
```

留意：

- `const int N;` 错，常量必须初始化。
- `N = 100;` 错，常量不能再赋值。
- `auto x; x = 10;` 错，`auto` 必须从初始化表达式推断类型。
- `auto y1 = 12, y2 = 'C';` 错，同一条声明里的 `auto` 类型必须一致。
- `decltype(expr)` 只取类型，不执行表达式。

## 4. 第 3 章：函数

### 4.1 三种参数传递

值传递：

```cpp
void swap(int a, int b) {
    int t = a;
    a = b;
    b = t;
}
```

不会改变实参。

地址传递：

```cpp
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
```

调用时写 `swap(&x, &y)`。

引用传递：

```cpp
void swap(int &a, int &b) {
    int t = a;
    a = b;
    b = t;
}
```

调用时仍写 `swap(x, y)`，但会改变实参。

### 4.2 引用的规则

```cpp
int count = 10;
int &ref_count = count;
cout << ref_count << endl;
// 10

count = 20;
cout << ref_count << endl;
// 20
```

必记：

- 引用是已有变量的别名。
- 引用定义时必须初始化。
- 引用一旦绑定，不能再改绑到别的变量。
- 引用类型必须匹配，`double &ref = intVar;` 这种不行。
- 判断函数是否引用传递，不能只看调用语句，要看函数声明或定义。

### 4.3 内联函数

```cpp
inline double CalArea(double r) {
    return 3.14 * r * r;
}
```

适合小而频繁调用的函数。优点是减少函数调用开销，缺点是可能增大代码体积。

### 4.4 默认参数

```cpp
int add(int x, int y = 5, int z = 6);
```

规则：

- 默认参数必须从右向左连续给出。
- 默认参数右边不能再出现无默认值参数。
- 默认参数通常只在声明处写一次。

判断：

```cpp
int add1(int x, int y = 5, int z = 6); // 对
int add2(int x = 1, int y = 5, int z); // 错
int add3(int x = 1, int y, int z = 6); // 错
```

### 4.5 函数重载

函数名相同，但参数个数、类型或顺序不同。

```cpp
int add(int x, int y);
float add(float x, float y);
double add(int x, float y, double z);
```

留意：

- 仅返回值不同不能构成重载。
- 默认参数可能导致调用二义性。
- 函数重载属于静态多态，编译时决定调用哪个函数。

## 5. 第 4 章：类和对象

### 5.1 类、对象、封装

类是用户自定义类型，是对数据和操作的封装。

```cpp
class Clock {
public:
    void setHour(int newH);
    void showTime();
private:
    int hour, minute, second;
};
```

核心：

- 类定义本身不分配对象数据空间。
- 声明对象时才为数据成员分配空间。
- 成员函数在多个对象间共享一份代码。
- 数据成员原则上设为 `private`，通过 `public` 成员函数访问。

### 5.2 访问控制

| 访问属性 | 类内 | 类外对象 | 派生类内部 |
|---|---|---|---|
| `public` | 可访问 | 可访问 | 可访问 |
| `protected` | 可访问 | 不可访问 | 可访问 |
| `private` | 可访问 | 不可访问 | 不可直接访问 |

常见判断：

```cpp
class A {
protected:
    int x;
};

int main() {
    A a;
    a.x = 5; // 错，对象不能访问 protected
}
```

### 5.3 成员函数与作用域解析

类外定义成员函数：

```cpp
void Clock::setHour(int newH) {
    hour = newH;
}
```

如果形参与数据成员同名：

```cpp
void Calendar::SetDay(int year, int month, int day) {
    this->year = year;
    this->month = month;
    this->day = day;
}
```

也可以写 `Calendar::year = year;`，但 `this->` 更常见。

### 5.4 `this` 指针

`this` 是每个非静态成员函数中隐含的指针，指向当前调用对象。

常用场景：

- 区分同名形参和数据成员：`this->x = x;`
- 返回当前对象：`return *this;`

### 5.5 构造函数

构造函数规则：

- 函数名与类名相同。
- 没有返回值，不能写 `void`。
- 创建对象时自动调用。
- 通常放在 `public`。
- 不能声明为 `const` 或 `static`。

```cpp
class Clock {
public:
    Clock(int h, int m, int s);
private:
    int hour, minute, second;
};

Clock::Clock(int h, int m, int s) {
    hour = h;
    minute = m;
    second = s;
}
```

坑点：

```cpp
Clock c1;        // 调用默认构造函数
Clock c2(1,2,3); // 调用有参构造函数
Clock c3();      // 这是函数声明，不是对象
```

如果类中声明了任何构造函数，编译器不再自动生成默认构造函数。

```cpp
class YourClass {
public:
    YourClass(int x, char c);
};

YourClass object1(42, 'A');        // 对
YourClass object2;                 // 错，没有默认构造
YourClass *p = new YourClass;      // 错，没有默认构造
YourClass *q = new YourClass(3,'B'); // 对
```

不能显式调用构造函数：

```cpp
Student student.Student("lbw", 1, 100); // 错
student.Student("lbw", 1, 100);         // 错
```

### 5.6 构造函数初始化列表

```cpp
Clock::Clock(int h, int m, int s)
    : hour(h), minute(m), second(s) {}
```

必须用初始化列表的情况：

- 数据成员是 `const`。
- 数据成员是引用。
- 内嵌对象没有默认构造函数。

注意初始化顺序：

- 实际初始化顺序按数据成员在类中声明的顺序。
- 不是按初始化列表中的书写顺序。

### 5.7 委托构造函数

```cpp
class X {
public:
    X(string na, int co) : Name(na), Code(co) {}
    X() : X("", 42) {}
    X(string s) : X(s, 0) {}
private:
    string Name;
    int Code;
};
```

委托构造函数会先执行被委托构造函数的初始化列表和函数体，再回到自己函数体。

### 5.8 复制构造函数

我会按这个标准写：

```cpp
ClassName(const ClassName &other);
```

课件中也出现过：

```cpp
Clock(Clock &C);
```

复制构造函数在“用已有对象初始化新对象”时调用。

三种常见触发：

```cpp
Clock c2(8, 10, 20);
Clock c1(c2);       // 1. 用对象初始化对象

void fun(Clock p);  // 2. 形参为对象，值传递
fun(c2);

Clock makeClock() { // 3. 返回值为对象
    Clock A(10, 15, 0);
    return A;
}
```

留意：

- 引用传递不会调用复制构造函数。
- 返回对象时现代编译器可能优化掉临时对象，课件也提到 GCC 可能不输出复制构造信息。
- 默认复制构造是浅复制。

### 5.9 析构函数

```cpp
class Clock {
public:
    ~Clock() {}
};
```

规则：

- 名字是 `~类名`。
- 没有返回值。
- 没有参数。
- 一个类只能有一个析构函数。
- 对象生命周期结束时自动调用。
- `new` 创建的对象在 `delete` 时调用析构函数。

### 5.10 类组合

类组合：一个类的数据成员是另一个类的对象。

```cpp
class Line {
private:
    Point p1, p2;
    double len;
};
```

构造顺序：

1. 先构造成员对象，按它们在类中声明的顺序。
2. 再执行本类构造函数体。

析构顺序：

1. 先执行本类析构函数体。
2. 再析构成员对象，顺序与构造相反。

复制构造：

```cpp
Line::Line(const Line &L) : p1(L.p1), p2(L.p2) {
    len = L.len;
}
```

### 5.11 前向引用声明

```cpp
class B;

class A {
public:
    void f(B *b);
};
```

前向声明后可以声明指针或引用，但在完整类定义前不能：

- 声明该类对象作为成员。
- 在内联函数中使用该类对象的具体成员。

### 5.12 `struct`、`union`

`struct` 和 `class` 的主要区别：

- `struct` 默认成员访问权限是 `public`。
- `class` 默认成员访问权限是 `private`。

`union`：

- 所有成员共享同一片内存。
- 任意时刻通常只有一个成员有效。
- 课件中强调限制：联合体不适合包含有复杂构造、析构、赋值行为的对象成员。

## 6. 第 5 章：数据的共享与保护

这一章补的是“名字在哪里有效、对象活多久、类里哪些东西共享、共享后怎么保护”。它不像继承和多态那么显眼，但很适合出选择、判断、找错和填空。

### 6.1 作用域与可见性

作用域：标识符在程序中有效的区域。

可见性：从某个引用位置向外看，能不能看见某个标识符。

C++ 中课件列出的作用域：

| 作用域 | 典型例子 |
|---|---|
| 函数原型作用域 | `double Area(double radius);` 中的 `radius` |
| 局部作用域/块作用域 | 函数体、`if` 块、循环块内声明的变量 |
| 类作用域 | 类的数据成员、成员函数名 |
| 文件作用域 | 全局变量，从声明处到文件尾 |
| 命名空间作用域 | `namespace X { ... }` 中的名字 |
| 限定作用域的枚举类 | `enum class Color { red };` |

核心规则：

- 标识符先声明，后引用。
- 同一作用域中不能声明同名标识符，函数重载除外。
- 没有包含关系的不同作用域中，同名标识符互不影响。
- 有包含关系时，内层同名标识符会隐藏外层同名标识符。
- 外层声明且内层没有同名声明，则外层标识符在内层可见。
- 这些规则不只适用于变量，也适用于常量、类型名、函数名、枚举值等。

例：

```cpp
#include <iostream>
using namespace std;

int i; // 文件作用域

int main() {
    i = 5;
    {
        int i;
        i = 7;
        cout << i << endl; // 7，内层 i 隐藏外层 i
    }
    cout << i << endl; // 5，全局 i
}
```

### 6.2 命名空间

命名空间用于解决命名冲突。

```cpp
namespace LWJNS {
    class DayOfYear {
    public:
        DayOfYear(int y, int m, int d);
    };
}

LWJNS::DayOfYear d1(2012, 3, 5);
```

两种 `using`：

```cpp
using LWJNS::DayOfYear; // 只暴露 DayOfYear
using namespace LWJNS;  // 暴露整个命名空间
```

考试判断点：

- `using namespace` 方便，但可能重新引入命名冲突。
- `类名::成员名`、`命名空间名::标识符` 都是作用域解析。

### 6.3 限定作用域的枚举类

普通枚举：

```cpp
enum color { red, yellow, green };
color c = red;
```

限定作用域枚举：

```cpp
enum class color2 { red, yellow, green };
color2 c3 = color2::red;
```

留意：

```cpp
color2 c1 = red; // 错，red 不直接暴露在外层作用域
```

### 6.4 对象的生存期

对象生存期：对象从产生到结束的时间段。

静态生存期：

- 与程序运行期相同。
- 命名空间作用域中的对象通常是静态生存期。
- 函数内部用 `static` 声明的对象也是静态生存期。
- 未显式初始化的静态对象默认初始化为 0。

```cpp
int i = 5; // 全局变量，静态生存期

int main() {
    static int j; // 静态生存期，默认 0
}
```

动态生存期：

- 局部作用域中，没有 `static` 修饰的对象。
- 执行到声明点时产生。
- 离开所在块时结束。
- 课件提到 `auto`，在这里是旧意义的自动存储对象，可省略；不要和 C++11 类型推断混淆。

### 6.5 类的静态数据成员

静态数据成员用于同一类所有对象之间共享数据。

```cpp
class Employee {
private:
    int empNo;
    char *name;
    static int count; // 类内声明
};

int Employee::count = 0; // 类外定义并初始化
```

必记：

- `static` 数据成员是类的成员，不是某个对象独有的成员。
- 所有对象共享同一个副本。
- 静态数据成员具有静态生存期。
- 一般必须在类外定义和初始化，用 `类名::成员名`。
- 类外初始化静态数据成员时，不受 `private` 访问权限限制，因为这是定义性说明。

普通数据成员 vs 静态数据成员：

| 项目 | 普通数据成员 | 静态数据成员 |
|---|---|---|
| 副本数量 | 每个对象一份 | 全类共享一份 |
| 创建时机 | 对象实例化时 | 编译/链接层面分配 |
| 生存期 | 随对象 | 静态生存期 |
| 典型访问 | `obj.x`、`p->x` | `Class::x`、`obj.x`、`p->x` |

课件第 16 讲也补充了一个特例：

```cpp
class A {
public:
    const static int N = 100; // 整型 const static 可在类内初始化
};
```

一般静态数据成员仍按“类内声明，类外初始化”记。

### 6.6 静态成员函数

```cpp
class Apple {
public:
    static void ShowCount();
};

Apple::ShowCount();
```

规则：

- 静态成员函数用 `static` 声明。
- 可以用 `类名::函数名()` 调用，也可以用对象调用。
- 静态成员函数没有 `this` 指针。
- 只能直接访问静态数据成员和静态成员函数。
- 不能直接访问非静态数据成员和非静态成员函数。
- 静态成员函数不能用 `const` 修饰，因为 `const` 成员函数依赖 `this`，而静态成员函数没有 `this`。

找错经典：

```cpp
class Myclass {
public:
    static int fun(Myclass m);
private:
    int x;
    static int y = 9; // 一般写法错误，应类外初始化
};

int Myclass::fun(Myclass m) {
    cout << x + y;   // 错，静态函数不能直接访问非静态 x
    return m.x + y;  // 对，通过对象 m 访问 x
}

int Myclass::y = 9;
```

### 6.7 友元函数

友元是一个类主动授予外部函数或其他类访问本类私有/保护成员的权限。

友元函数声明：

```cpp
class Point {
public:
    friend float fDist(Point &p1, Point &p2);
private:
    float x, y;
};
```

友元函数定义：

```cpp
float fDist(Point &p1, Point &p2) {
    double x = p1.x - p2.x;
    double y = p1.y - p2.y;
    return static_cast<float>(sqrt(x * x + y * y));
}
```

留意：

- `friend` 只写在类内声明处。
- 函数定义时不要再写 `friend`。
- 友元函数不是类成员函数，不能用对象点号调用。
- 友元函数虽然不是成员函数，但有访问该类私有成员的权限。
- 友元声明可放在类中任何区域，通常放在 `public`。

### 6.8 友元类

```cpp
class A {
public:
    friend class B;
private:
    int x;
};

class B {
public:
    void Set(A &a, int i) {
        a.x = i; // B 是 A 的友元类，可以访问 A::x
    }
};
```

友元关系三条铁律：

- 不能传递：A 友元 B，B 友元 C，不代表 C 是 A 的友元。
- 单向：A 声明 B 为友元，不代表 A 自动成为 B 的友元。
- 不被继承：基类的友元关系不会自动给派生类。

友元不会“自己宣布”，必须由被访问的类在类内声明。

### 6.9 共享数据的保护：`const`

共享数据可能破坏安全性，所以把“要共享但不能改”的数据声明为常量。

`const` 可以修饰：

- 基本类型常量。
- 常对象。
- 常成员函数。
- 常数据成员。
- 常引用。
- 常数组。
- 指向常量的指针。
- 函数参数和返回值。

### 6.10 常对象

```cpp
const Point p1(1, 1);
```

常对象的数据成员在整个对象生存期内不能被修改。

常对象只能调用常成员函数，不能调用普通成员函数。

### 6.11 常成员函数

声明和定义都要带 `const`：

```cpp
class Point {
public:
    int GetX() const;
private:
    int X;
};

int Point::GetX() const {
    return X;
}
```

规则：

- `const` 是函数类型的一部分。
- 常对象只能调用常成员函数。
- 非常对象也可以调用常成员函数。
- 常成员函数执行期间，目的对象被视为常对象。
- 常成员函数不能修改普通数据成员。
- 常成员函数不能调用非 `const` 成员函数。
- 构造函数和析构函数不能是 `const` 成员函数。
- `const` 可以参与函数重载区分：

```cpp
void print();
void print() const;
```

找错：

```cpp
class Stack {
public:
    int GetCount() const;
    int Pop();
private:
    int num;
};

int Stack::GetCount() const {
    ++num; // 错，常成员函数不能改数据成员
    Pop(); // 错，常成员函数不能调用非 const 成员函数
    return num;
}
```

### 6.12 常数据成员

```cpp
class A {
public:
    A(int size);
private:
    const int SIZE;
};

A::A(int size) : SIZE(size) {}
```

常数据成员必须通过构造函数初始化列表初始化。

课件找错：

```cpp
class A {
    const int SIZE = 100; // 按课件语境：错误，不能在类声明中这样初始化普通 const 数据成员
    int array[SIZE];      // 错，SIZE 此处不能这样作为数组大小
};
```

实际写考试时按题目标准和课件语境答；现代 C++ 对类内初始化有所放宽，但课程常按传统规则考。

### 6.13 常引用

```cpp
const Point &p1 = point;
```

规则：

- 常引用不能通过该引用修改对象。
- 非 `const` 引用不能绑定到常对象。
- 常引用可以绑定到常对象，也可以绑定到普通对象。
- 通过常引用访问对象时，该对象被当作常对象，不能调用非 `const` 成员函数。

推荐：

```cpp
void PrintPoint(const Point &p);
```

类对象作函数参数时，`const 引用` 通常比值传递更高效，也能防止误修改。

指针参数也可用 `const` 保护源数据：

```cpp
void StringCopy(char *dest, const char *src);
```

### 6.14 多文件结构

较大 C++ 程序通常拆成：

| 文件 | 内容 |
|---|---|
| `.h` | 类定义、函数声明 |
| `.cpp` | 类成员函数实现 |
| `main.cpp` | 使用类，写主函数 |

示意：

```cpp
// main.cpp
#include "file1.h"
#include "file2.h"
```

### 6.15 编译预处理

包含文件：

```cpp
#include <iostream>  // 标准库头文件
#include "head.h"    // 先在当前目录找
```

宏定义：

```cpp
#define PI 3.1415926
#undef PI
```

课件提醒：很多符号常量可用 `const` 替代，很多带参数宏可用内联函数替代。

条件编译：

```cpp
#if TEST
    ...
#else
    ...
#endif
```

```cpp
#ifdef DEBUG
    cerr << "debug";
#endif
```

头文件保护：

```cpp
#ifndef HEAD_H
#define HEAD_H

class Point {
    ...
};

#endif
```

作用：防止同一个头文件被重复包含导致重复定义。

## 7. 第 6 章：数组、指针、字符串

### 7.1 数组作为函数参数

数组名作参数时传首地址，对形参数组的修改会影响实参数组。

```cpp
void rowSum(int a[][4], int nRow);
```

二维数组作参数时，第二维大小通常必须写明。

### 7.2 对象数组

```cpp
Clock C[2];
Point A[2] = {Point(1, 2), Point(3, 4)};
Point B[2] = {Point(1, 2)}; // 第二个元素调用默认构造
```

留意：

- 每个数组元素都是对象。
- 每个元素创建时都会调用构造函数。
- 数组释放时每个元素都会调用析构函数。

### 7.3 指针数组和数组指针

```cpp
int *p[10];    // 指针数组，p 是数组，每个元素是 int*
int (*q)[3];   // 数组指针，q 是指针，指向含 3 个 int 的数组
```

括号决定优先级。

### 7.4 对象指针

```cpp
Point A(5, 10);
Point *ptr = &A;
ptr->GetX();      // 等价于 (*ptr).GetX()
```

### 7.5 指向类成员的指针

指向数据成员：

```cpp
int Point::*pp = &Point::Z;
A.*pp;
p1->*pp;
```

指向成员函数：

```cpp
int (Point::*pf)() = &Point::GetX;
(A.*pf)();
(p1->*pf)();
```

这类语法不常用于竞赛，但选择/判断题可能考。

### 7.6 动态内存分配

```cpp
int *p1 = new int;     // 未初始化
int *p2 = new int();   // 初始化为 0
int *p3 = new int(2);  // 初始化为 2
delete p1;
delete p2;
delete p3;
```

动态数组：

```cpp
int *a = new int[10];
int *b = new int[10]();
delete[] a;
delete[] b;
```

必背配对：

| 申请 | 释放 |
|---|---|
| `new T` | `delete p` |
| `new T[n]` | `delete[] p` |

不要：

- `delete` 非 `new` 得到的内存。
- 对同一内存 `delete` 两次。
- `new[]` 后用 `delete`。
- `new` 后忘记释放。

如果 `new` 创建对象，会调用构造函数；`delete` 对象会调用析构函数。

### 7.7 `vector`

```cpp
#include <vector>
vector<int> arr(n);
vector<int> brr(n, 1);
arr.size();
arr[i];
```

留意：

- `vector` 对象名不是数组首地址。
- `vector` 是封装了动态数组的类模板。
- `vector` 大小可以运行时决定。

### 7.8 浅复制与深复制

如果类中只有普通变量或对象成员，默认浅复制通常安全。

如果类中有指针成员，默认浅复制会让多个对象共享同一片堆内存，导致：

- 析构时重复释放。
- 赋值时旧内存泄漏。
- 修改一个对象影响另一个对象。

深复制核心：重新分配独立堆空间，并复制内容。

```cpp
ArrayOfPoints::ArrayOfPoints(const ArrayOfPoints &v) {
    size = v.size;
    points = new Point[size];
    for (int i = 0; i < size; i++) {
        points[i] = v.points[i];
    }
}
```

只要构造函数里用 `new` 初始化指针成员，就要考虑：

- 析构函数释放。
- 复制构造函数深复制。
- 赋值运算符深复制。

### 7.9 `string`

```cpp
#include <string>
string s1;
string s2("China");
string s3 = "Wust";
string s4(s2);
```

输入：

```cpp
cin >> s;          // 空格、回车、Tab 结束
getline(cin, s);   // 读整行
getline(cin, s, ','); // 读到逗号
```

访问字符：

```cpp
s[0] = 'w';
s.at(0) = 'H';
```

## 8. 第 7 章：继承与派生

### 8.1 基本概念

继承：在已有类基础上构造新类。

派生：基类生成派生类。

```cpp
class Rectangle : public Point {
public:
    float GetW() { return W; }
private:
    float W, H;
};
```

派生类生成过程：

1. 吸收基类成员，构造函数和析构函数除外。
2. 改造基类成员，包括访问控制和同名隐藏。
3. 添加新成员，包括新数据成员、新成员函数、新构造/析构函数。

### 8.2 三种继承方式

| 基类成员 | `public` 继承后 | `protected` 继承后 | `private` 继承后 |
|---|---|---|---|
| `public` | `public` | `protected` | `private` |
| `protected` | `protected` | `protected` | `private` |
| `private` | 不可访问 | 不可访问 | 不可访问 |

口诀：公保公不变，私私保保，私不访。

更直观地说：

- `public` 继承：保留基类接口，是“is-a”关系。
- `protected` 继承：基类接口变成派生类内部可用，外部对象不可用。
- `private` 继承：基类接口变成派生类私有实现细节。
- 基类 `private` 成员无论怎么继承，派生类都不能直接访问。

### 8.3 类型兼容规则

只对公有继承重点掌握。

```cpp
Base base;
Derived derived;

base = derived;       // 派生类对象赋给基类对象，会发生切片
Base &rbase = derived; // 基类引用绑定派生类对象
Base *pb = &derived;   // 基类指针指向派生类对象
```

替代后只能使用基类部分。若要运行时调用派生类重写函数，需要虚函数。

### 8.4 对象切片

```cpp
Derived d;
Base b = d;
```

此时 `b` 是一个真正的 `Base` 对象，只复制了基类部分。即使有虚函数，`b.display()` 也调用 `Base::display()`，不需要动态绑定。

### 8.5 派生类构造与析构顺序

派生类构造函数一般形式：

```cpp
Derived::Derived(args)
    : Base(baseArgs), member(memberArgs) {
    // 初始化派生类新增成员
}
```

普通继承构造顺序：

1. 基类构造函数，按继承列表从左到右。
2. 内嵌对象构造函数，按成员声明顺序。
3. 派生类构造函数体。

析构顺序完全相反：

1. 派生类析构函数体。
2. 内嵌对象析构函数。
3. 基类析构函数。

### 8.6 同名隐藏与作用域分辨符

如果派生类中声明了和基类同名的成员，派生类成员会隐藏基类同名成员。

```cpp
d.fun();          // 默认找派生类里的 fun
d.Base::fun();    // 强行调用基类 fun
```

我会专门留意这些坑：函数同名时，即使参数表不同，派生类函数也会隐藏基类所有同名重载版本。

重载与隐藏的区别：

| 项目 | 重载 | 隐藏 |
|---|---|---|
| 作用域 | 同一个类/同一作用域 | 基类与派生类不同作用域 |
| 函数名 | 相同 | 相同 |
| 参数 | 必须不同 | 可同可不同 |
| 结果 | 编译器按实参匹配 | 派生类同名成员挡住基类同名成员 |

### 8.7 多继承二义性

```cpp
class A { public: void f(); };
class B { public: void f(); };
class C : public A, public B {};

C c;
c.f();      // 错，二义性
c.A::f();   // 对
c.B::f();   // 对
```

如果派生类自己定义了同名成员，则会隐藏所有基类同名成员：

```cpp
class C : public A, public B {
public:
    void f();
};
c.f(); // 调用 C::f，无二义性
```

### 8.8 `using` 引入基类成员

课件示例：

```cpp
class D1 : public B1, public B2 {
public:
    using B1::nV;
    using B1::fun;
    void fun(int i);
};
```

作用：

- 指定使用某个基类的同名成员，消除二义性。
- 引入基类函数名，使派生类中同名不同参函数和基类函数形成类似重载的效果。

### 8.9 虚基类

问题场景：菱形继承。

```cpp
class B0 {};
class B1 : virtual public B0 {};
class B2 : virtual public B0 {};
class D1 : public B1, public B2 {};
```

作用：

- 解决从共同基类经过多条路径继承导致的多份基类副本问题。
- 最远派生类中只保留一份虚基类成员。
- 避免访问共同基类成员时的二义性。

关键规则：

- 在第一级继承共同基类时就要写 `virtual`。
- 如果虚基类没有默认构造函数，所有直接或间接派生类构造函数初始化列表中通常都要列出虚基类初始化。
- 建立最远派生类对象时，虚基类由最远派生类构造函数负责初始化，中间类对虚基类构造函数的调用会被忽略。

含虚基类的构造顺序：

1. 虚基类构造函数。
2. 非虚基类构造函数，按继承列表顺序。
3. 内嵌对象构造函数，按声明顺序。
4. 派生类构造函数体。

析构顺序反过来。

## 9. 第 8 章：多态与运算符重载

### 9.1 多态分类

按使用分类：

- 重载多态：函数重载、运算符重载。
- 强制多态：强制类型转换。
- 包含多态：类族中虚函数的动态行为。
- 参数多态：模板。

按实现分类：

- 静态多态：编译时绑定，如函数重载、运算符重载、模板。
- 动态多态：运行时绑定，如虚函数。

### 9.2 运算符重载本质

运算符重载本质是函数重载。

```cpp
返回类型 operator 运算符(形参表) {
    ...
}
```

限制：

- 只能重载已有运算符，不能发明新运算符。
- 不能改变运算符优先级。
- 不能改变操作数个数。
- 至少有一个操作数是自定义类型。
- 不能重载：`.`、`.*`、`->*`、`::`、`sizeof`、`?:`。

### 9.3 成员函数形式与非成员函数形式

成员函数形式：

```cpp
Complex Complex::operator+(Complex c2) {
    return Complex(real + c2.real, imag + c2.imag);
}
```

非成员/友元形式：

```cpp
friend Complex operator+(Complex c1, Complex c2);

Complex operator+(Complex c1, Complex c2) {
    return Complex(c1.real + c2.real, c1.imag + c2.imag);
}
```

参数个数规则：

- 成员函数：参数个数 = 原操作数个数 - 1。
- 非成员函数：参数个数 = 原操作数个数。
- 后置 `++`、`--` 有一个无实际意义的 `int` 参数，用来区分前置和后置。

### 9.4 哪些必须成员，哪些适合友元

| 运算符 | 推荐/限制 |
|---|---|
| 一元运算符 | 建议成员函数 |
| `= () [] ->` | 只能重载为成员函数 |
| `<< >>` | 通常重载为非成员/友元函数 |
| `+= -= *= /=` 等复合赋值 | 建议成员函数 |
| `+ - == <` 等不修改操作数的二元运算符 | 常用友元函数 |

### 9.5 前置与后置 `++`

```cpp
Clock& Clock::operator++() {
    // 先改自己
    return *this;
}

Clock Clock::operator++(int) {
    Clock old = *this;
    ++(*this);
    return old;
}
```

记忆：

- 前置：先变后用，通常返回引用。
- 后置：先用后变，通常返回旧值对象。
- 后置多一个 `int` 占位参数。

### 9.6 `<<` 和 `>>`

```cpp
friend ostream& operator<<(ostream &out, const Complex &c);
friend istream& operator>>(istream &in, Complex &c);
```

返回流引用是为了支持链式调用：

```cpp
cout << a << b;
cin >> a >> b;
```

`ostream` 不能复制，所以第一个形参必须是引用。

### 9.7 赋值运算符与 Big Three

默认四个函数：

```cpp
A();
A(const A &a);
~A();
A& operator=(const A &a);
```

只要类中有动态分配内存的指针成员，就要写 Big Three：

1. 析构函数。
2. 复制构造函数。
3. 赋值运算符。

赋值运算符模板：

```cpp
String& String::operator=(const String &rhs) {
    if (this != &rhs) {
        delete[] s;
        s = new char[strlen(rhs.s) + 1];
        strcpy(s, rhs.s);
    }
    return *this;
}
```

四步：

1. 检查自赋值。
2. 释放原有资源。
3. 分配新资源并复制内容。
4. 返回 `*this`。

### 9.8 复制构造 vs 赋值运算符

```cpp
Myclass a("hello");
Myclass b("world");

Myclass c = a; // 复制构造，等价于 Myclass c(a)
c = b;         // 赋值运算符
```

判断关键：

- 新对象创建时用已有对象初始化：复制构造。
- 两个对象都已存在，再赋值：赋值运算符。

### 9.9 `operator+`、`operator+=`、`operator[]` 返回值

`operator+`：

```cpp
String String::operator+(const String &rhs);
```

返回新对象，不要返回局部对象引用。`a + b = c` 这种表达式不合理，所以返回值对象即可。

`operator+=`：

```cpp
String& String::operator+=(const String &rhs) {
    ...
    return *this;
}
```

返回引用，用于链式调用：

```cpp
str1 += str2 += str3;
```

`operator[]`：

```cpp
char& String::operator[](int n) {
    return s[n];
}
```

必须返回引用，才能作为左值：

```cpp
s[0] = 'g';
```

### 9.10 虚函数

声明：

```cpp
class B0 {
public:
    virtual void display();
};
```

规则：

- 虚函数是动态绑定的基础。
- 必须是非静态成员函数。
- `virtual` 只写在类内声明处，类外定义不再写。
- 基类函数声明为虚函数后，派生类同原型函数自动成为虚函数。
- 通过基类指针或引用调用虚函数时，根据实际对象类型决定调用哪个版本。

动态多态三个条件：

1. 类之间满足类型兼容规则，通常是公有继承。
2. 基类中有虚函数。
3. 通过基类指针或引用调用虚函数。

例：

```cpp
void fun2(B0 *ptr) {
    ptr->display();
}

B1 b1;
D1 d1;
fun2(&b1); // 调 B1::display
fun2(&d1); // 调 D1::display
```

### 9.11 虚析构函数

```cpp
class Base {
public:
    virtual ~Base() {}
};
```

如果可能通过基类指针删除派生类对象，基类析构函数必须是虚函数：

```cpp
Base *p = new Derived;
delete p; // 需要 virtual ~Base()
```

否则派生类析构函数可能不被正确调用。

留意：

- 构造函数不能是虚函数。
- 析构函数可以是虚函数。
- 基类析构函数是虚函数后，派生类析构函数也自动具有虚函数性质。

### 9.12 纯虚函数与抽象类

```cpp
class Convert {
public:
    virtual void compute() = 0;
};
```

含有纯虚函数的类是抽象类。

规则：

- 抽象类不能实例化对象。
- 可以声明抽象类指针和引用。
- 抽象类通常作为基类，统一接口。
- 派生类若没有实现所有纯虚函数，仍是抽象类。

纯虚析构函数必须提供函数体：

```cpp
class A {
public:
    virtual ~A() = 0;
};

A::~A() {}
```

纯虚函数和空虚函数区别：

| 类型 | 函数体 | 类是否抽象 | 能否实例化 |
|---|---|---|---|
| 纯虚函数 | 通常没有函数体 | 是 | 否 |
| 空虚函数 | 有空函数体 | 否 | 可以 |

## 10. 第 9 章：模板和群体数据

### 10.1 函数模板

```cpp
template <typename T>
T abs(T x) {
    return x < 0 ? -x : x;
}
```

或：

```cpp
template <class T>
```

`typename` 和 `class` 在模板参数中多数情况下等价。

模板实例化：

- 模板本身不生成目标代码。
- 只有使用具体类型调用时，编译器才按模板生成具体函数。

函数模板定义通常放在头文件里，不能像普通函数那样只把声明放头文件、定义放 `.cpp`。

### 10.2 函数模板重载与显式指定类型

```cpp
template <typename T1, typename T2>
T1 min(const T1 &a, const T2 &b) {
    return (a < b) ? a : b;
}
```

调用：

```cpp
min<int, double>(3, 5.0); // 返回 int
min<int>(3, 5.0);         // 返回 int
min<double>(3, 5.0);      // 返回 double
min(3.0, 5);              // 推断 T1=double, T2=int
```

如果同时有普通函数和模板函数，编译器会按匹配程度选择，普通函数可能优先。

### 10.3 类模板

```cpp
template <class T>
class Store {
private:
    T item;
    int haveValue;
public:
    Store();
    T GetElem();
    void PutElem(T x);
};
```

类外定义成员函数：

```cpp
template <class T>
Store<T>::Store() : haveValue(0) {}

template <class T>
T Store<T>::GetElem() {
    return item;
}
```

留意：

- 写类名时要带模板参数：`Store<T>::GetElem`。
- 使用时要指定类型：`Store<int> s;`。

### 10.4 动态数组类模板

课件的 `array.h` 是核心样例。

重点结构：

```cpp
template <class T>
class Array {
private:
    T *list;
    int size;
public:
    Array(int sz = 50);
    Array(const Array<T> &a);
    ~Array();
    Array<T>& operator=(const Array<T> &rhs);
    T& operator[](int i);
    const T& operator[](int i) const;
    operator T*();
    int getSize() const;
    void resize(int sz);
};
```

必会：

- 构造函数里 `list = new T[size];`
- 析构函数里 `delete[] list;`
- 复制构造要深复制。
- 赋值运算符要防自赋值。
- `operator[]` 返回 `T&`，这样 `a[i] = value;` 才能成立。
- `const` 版本返回 `const T&`。
- `resize` 申请新空间、复制较小长度、释放旧空间、更新指针和大小。

### 10.5 类型转换函数

```cpp
Array<T>::operator T*() {
    return list;
}
```

作用：让 `Array<int>` 对象在需要 `int*` 的地方能转换成内部数组首地址。

留意：

- 类型转换函数不写返回类型。
- 函数名就是 `operator 目标类型`。

### 10.6 链表结点

```cpp
template <class T>
class Node {
private:
    Node<T> *next;
public:
    T data;
    void InsertAfter(Node<T> *p);
    Node<T>* DeleteAfter();
    Node<T>* NextNode() const;
};
```

插入当前结点之后：

```cpp
template <class T>
void Node<T>::InsertAfter(Node<T> *p) {
    p->next = next;
    next = p;
}
```

删除当前结点之后：

```cpp
template <class T>
Node<T>* Node<T>::DeleteAfter() {
    Node<T> *tempPtr = next;
    if (next == NULL) return NULL;
    next = tempPtr->next;
    return tempPtr;
}
```

### 10.7 栈与队列

栈：后进先出。

基本操作：

- `push`
- `pop`
- `peek`
- `clear`
- `isEmpty`
- `isFull`

队列：一端入队，另一端出队。

循环队列关键：

```cpp
front = (front + 1) % SIZE;
rear = (rear + 1) % SIZE;
```

## 11. 第 10 章：STL

STL 四大组件：

| 组件 | 含义 |
|---|---|
| 容器 | 存储一组元素的对象 |
| 迭代器 | 泛化指针，连接容器和算法 |
| 算法 | 函数模板，如查找、排序、变换 |
| 函数对象 | 重载 `operator()` 的对象 |

常见容器：

- 顺序容器：`vector`、`deque`、`list`。
- 关联容器：`set`、`multiset`、`map`、`multimap`。

示例：

```cpp
#include <vector>
#include <iterator>
#include <algorithm>
#include <functional>

vector<int> s(N);
transform(s.begin(), s.end(),
          ostream_iterator<int>(cout, " "),
          negate<int>());
```

理解重点：

- 算法不直接依赖容器类型，而是通过迭代器访问。
- 函数对象作为算法参数，决定具体操作。

## 12. 第 11 章：流类库与输入输出

### 12.1 常用头文件和对象

| 头文件 | 内容 |
|---|---|
| `<iostream>` | `cin`、`cout`、`cerr`、`clog` |
| `<iomanip>` | `setw`、`setprecision` 等格式控制 |
| `<fstream>` | 文件输入输出 |
| `<sstream>` | 字符串流 |

对象：

- `cin`：标准输入。
- `cout`：标准输出，缓冲。
- `cerr`：标准错误，非缓冲，立即输出。
- `clog`：标准错误，缓冲。

### 12.2 输出格式

```cpp
cout.width(10);
cout.fill('*');
cout << value << '\n';
```

或：

```cpp
cout << setw(10) << value << endl;
cout << setprecision(1) << value << endl;
cout << setiosflags(ios_base::scientific);
```

`width` 和 `setw` 只影响下一个输出项。

### 12.3 文件输出六步

```cpp
#include <fstream>

ofstream myFile;
myFile.open("test.txt", ios_base::out);
if (!myFile) {
    cout << "Error opening the file!" << endl;
    exit(-1);
}
myFile << "Hello world";
myFile.put('A');
myFile.close();
```

三种打开方式：

```cpp
ofstream f1;
f1.open("filename");

ofstream f2("filename");

ofstream *pf = new ofstream;
pf->open("filename");
```

### 12.4 文件输入

```cpp
ifstream infile("outputtestfile.txt");
string str;
getline(infile, str);
cout << str << endl;
infile.close();
```

### 12.5 字符串流

```cpp
#include <sstream>

istringstream istr("1 56.7");
int a;
float b;
istr >> a >> b;
```

## 13. 第 12 章：异常处理

### 13.1 基本思想

异常处理让“发现异常”和“处理异常”可以分离：

- 底层函数负责发现错误并 `throw`。
- 上层调用者在合适位置 `try/catch`。

### 13.2 三段式

```cpp
try {
    // 正常执行代码
    if (bad) throw value;
}
catch (Type e) {
    // 处理 Type 类型异常
}
catch (...) {
    // 处理其他所有异常
}
```

规则：

- `throw 表达式;` 抛出异常。
- 抛出后立即停止执行当前 `try` 块剩余语句。
- 程序依次查找第一个类型匹配的 `catch`。
- 找不到匹配时调用 `terminate`，通常导致程序终止。
- `catch(...)` 必须放在所有具体 `catch` 之后。

### 13.3 多个异常

```cpp
try {
    ...
}
catch (int e) {
    ...
}
catch (const char *s) {
    ...
}
catch (...) {
    ...
}
```

每次执行一个 `try` 块，最多抛出一个异常，但不同执行路径可抛不同类型。

### 13.4 栈解旋

抛出异常后，找到匹配 `catch` 前，会自动析构从 `try` 块开始到异常抛出点之间已经构造、尚未析构的自动对象。析构顺序与构造顺序相反。

如果 `catch` 参数是值，会复制异常对象；如果是引用，会引用异常对象。

### 13.5 异常接口声明

课件使用旧式异常规格：

```cpp
void fun() throw(A, B, C);
void fun() throw();
```

按课件记：

- `throw(A, B, C)` 表示函数只允许抛出这些类型及其子类型。
- `throw()` 表示不抛任何异常。
- 现代 C++ 已不推荐这种写法，但考试若按课件问，要按课件规则答。

## 14. 程序阅读题解题套路

遇到“写输出结果”的题，按这个顺序标记。

### 14.1 对象生命周期题

1. 先找所有对象定义，按作用域标出创建顺序。
2. 判断调用哪个构造函数：默认、有参、复制。
3. 若有类组合，先构造成员对象，再执行本类构造函数体。
4. 若有继承，先构造基类，再构造成员对象，最后派生类本体。
5. 若有虚基类，虚基类最先，由最远派生类初始化。
6. 离开作用域时析构，顺序与构造反过来。

### 14.2 复制构造与赋值

看到：

```cpp
A b = a;
A b(a);
fun(a);       // fun(A x)
return a;     // 返回 A
```

考虑复制构造。

看到：

```cpp
b = a;
```

如果 `b` 已存在，考虑赋值运算符。

### 14.3 运算符重载题

把表达式翻译成函数调用：

```cpp
c1 + c2    // c1.operator+(c2) 或 operator+(c1, c2)
++a        // a.operator++()
a++        // a.operator++(0)
cout << a  // operator<<(cout, a)
a[i]       // a.operator[](i)
```

再看返回值是对象还是引用。

### 14.4 虚函数题

判断步骤：

1. 基类函数是否有 `virtual`。
2. 调用表达式是否通过基类指针或引用。
3. 指针或引用实际绑定的是哪个派生类对象。
4. 如果发生对象切片，如 `Base b = d;`，那 `b` 已经是基类对象。

### 14.5 继承访问控制题

先判断成员原始权限，再看继承方式。

- 基类 `private`：派生类不能直接访问。
- 派生类对象只能访问最终为 `public` 的成员。
- `protected` 对派生类内部可见，对对象不可见。

## 15. 程序填空常用模板

### 15.1 指针成员类的 Big Three

```cpp
#include <cstring>

class String {
private:
    char *s;
public:
    String() {
        s = new char[1];
        s[0] = '\0';
    }

    String(const char *a) {
        s = new char[strlen(a) + 1];
        strcpy(s, a);
    }

    String(const String &t) {
        s = new char[strlen(t.s) + 1];
        strcpy(s, t.s);
    }

    ~String() {
        delete[] s;
    }

    String& operator=(const String &rhs) {
        if (this != &rhs) {
            delete[] s;
            s = new char[strlen(rhs.s) + 1];
            strcpy(s, rhs.s);
        }
        return *this;
    }
};
```

### 15.2 `operator+`

```cpp
String String::operator+(const String &t2) {
    char *st = new char[strlen(s) + strlen(t2.s) + 1];
    strcpy(st, s);
    strcat(st, t2.s);
    String ans(st);
    delete[] st;
    return ans;
}
```

返回值不能是局部对象引用。

### 15.3 `operator+=`

```cpp
String& String::operator+=(const String &rhs) {
    char *st = new char[strlen(s) + strlen(rhs.s) + 1];
    strcpy(st, s);
    strcat(st, rhs.s);
    delete[] s;
    s = st;
    return *this;
}
```

返回引用支持链式运算。

### 15.4 `operator[]`

```cpp
char& String::operator[](int n) {
    return s[n];
}
```

返回引用才能修改字符。

### 15.5 `operator<<` 和 `operator>>`

```cpp
ostream& operator<<(ostream &out, const String &t) {
    out << t.s;
    return out;
}

istream& operator>>(istream &in, String &t) {
    char buf[1000];
    in >> buf;
    t = buf;
    return in;
}
```

### 15.6 派生类赋值运算符

```cpp
Child& Child::operator=(const Child &rhs) {
    if (this != &rhs) {
        Parent::operator=(rhs);
        score = rhs.score;
        delete[] name;
        name = new char[strlen(rhs.name) + 1];
        strcpy(name, rhs.name);
    }
    return *this;
}
```

赋值运算符不能被继承，派生类需要处理自己的新增成员。

### 15.7 类模板成员函数类外定义

```cpp
template <class T>
Array<T>::Array(int sz) {
    size = sz;
    list = new T[size];
}

template <class T>
Array<T>::~Array() {
    delete[] list;
}

template <class T>
T& Array<T>::operator[](int i) {
    assert(i >= 0 && i < size);
    return list[i];
}
```

## 16. 一页速记表

### 16.1 构造析构顺序

普通派生类构造：

```text
基类 -> 成员对象 -> 派生类自身
```

普通派生类析构：

```text
派生类自身 -> 成员对象 -> 基类
```

含虚基类构造：

```text
虚基类 -> 非虚基类 -> 成员对象 -> 最远派生类自身
```

### 16.2 复制构造触发

```text
新对象用旧对象初始化
对象值传参
函数返回对象
```

### 16.3 赋值运算符触发

```text
两个对象都已经存在，执行 a = b
```

### 16.4 动态内存类必写

```text
析构函数
复制构造函数
operator=
```

### 16.5 虚函数动态绑定条件

```text
公有继承/类型兼容
基类中有 virtual
通过基类指针或引用调用
```

### 16.6 运算符返回值

| 运算符 | 常用返回 |
|---|---|
| `operator=` | `A&` |
| 前置 `++` | `A&` |
| 后置 `++` | `A` |
| `operator+` | `A` |
| `operator+=` | `A&` |
| `operator[]` | `T&` |
| `operator<<` | `ostream&` |
| `operator>>` | `istream&` |

### 16.7 必须成员函数重载

| 运算符 | 规则 |
|---|---|
| `= () [] ->` | 只能重载为成员函数 |
| `<< >>` | 通常重载为非成员/友元函数 |
| `+= -= *= /=` | 不是强制成员，但建议写成成员函数 |
| `+ - == <` | 可成员可非成员，不修改操作数时常写友元 |

记准确：真正“只能成员函数重载”的是 `= () [] ->`。`+=` 只是建议成员，不属于只能成员的列表。

### 16.8 不能重载的运算符

```text
.   .*   ->*   ::   sizeof   ?:
```

### 16.9 文件流六步

```text
include <fstream>
定义文件流对象
open 文件
检查是否成功
读/写
close
```

### 16.10 异常三段式

```text
try -> throw -> catch
```

### 16.11 第 5 章速记

```text
static 数据成员：类内声明，类外定义初始化
static 成员函数：无 this，只能直接访问 static 成员
friend：单向、不传递、不继承
常对象：只能调用常成员函数
常成员函数：声明和定义都要写 const，不能改普通数据成员
常数据成员/引用成员：必须初始化列表初始化
头文件保护：#ifndef / #define / #endif
```

## 17. 最后复习路线

第一轮，按章节扫：

1. 第 4 章类和对象。
2. 第 5 章数据共享与保护。
3. 第 6 章动态内存和深复制。
4. 第 7 章继承与虚基类。
5. 第 8 章运算符重载与虚函数。
6. 第 9 章模板和动态数组类。
7. 第 11、12 章流和异常。
8. 第 1、2、3 章补基础选择判断。

第二轮，专项刷：

1. 写出构造析构输出顺序。
2. 判断复制构造还是赋值运算符。
3. 判断 `static`、`friend`、`const`、作用域隐藏是否合法。
4. 手写 `String` 类的 Big Three 和运算符。
5. 手写 `Array<T>` 的 `operator[]`、复制构造、赋值、析构。
6. 判断虚函数调用结果。
7. 判断多继承成员访问是否二义。
8. 写文件读写和异常处理框架。

第三轮，临考速记：

- 访问控制表。
- 构造析构顺序。
- 静态成员、友元、常成员函数。
- Big Three。
- 运算符重载返回类型。
- 虚函数动态绑定条件。
- `new/delete` 配对。
- 模板类外定义格式。
