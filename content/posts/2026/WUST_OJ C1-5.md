---
title: WUST OJ C1-5
description: WUST-OJ的C1-C5题集答案的分享
date: 2026-01-08 23:04:49
updated: 2026-01-12 20:51:50
permalink: /2026/wust-oj-c1-5
image: https://jianges.com/wp-content/uploads/2026/01/1767861378-wust-oj-lower.png
categories: [WUST-OJ]
tags: [代码, 前端, 问题]
---

::alert{type="info" title="题解说明"}
这篇主要保存 C1-C5 的 AC 代码，代码块已经按语言高亮；如题面更新，请以 WUST OJ 当前题面为准。
::

## C1

### 求圆的面积和周长

```c++
#include <stdio.h>


int main() {
	double r;
	double c, s;
	scanf("%lf", &r);
	c = r * 2 * 3.14;
	s = r * r * 3.14;
	printf("%f\n%f", s, c);

	return 0;
}
```

### 求2个整数的和

```c++
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}
```

### 输出2行信息

```c++
#include<iostream>
using namespace std;
 
int main(void) {

  cout<<"Programing is fun.\nPrograming in language C is even more fun!"<<endl;
  
  return 0;

}
```

### Hello World!

```c++
#include <iostream>
using namespace std;

	int main()
{
	cout << "Hello World!" << endl;

	return 0;
}
```

### 设计函数求2个整数的最大值

```c++
int max(int x,int y) {

	if (x > y) {
		return x;
	}
	else{
		return y;
	}
}
```

### 求2个整数的最大值

```c++
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > b) {
        printf("max=%d\n", a);
    } else {
        printf("max=%d\n", b);
    }
  
    return 0;
}
```

### This is a C program

```c++
#include <iostream>
using namespace std;

int main()
{
	cout << "This is a C program" << endl;

	return 0;
}
```







## C2

### 猫是液体

```c++
#include <iostream>
using namespace std;

int main ()
{
    int a, b, c;
    cin >> a >> b >> c;
    cout << a * b * c <<endl;
    return 0; 
}
```



###  中英长度单位换算

```c
#include <stdio.h>

int main() {
    int cm,foot,inch;
    double tfoot,tinch, m;
    
    scanf("%d", &cm);     
    m = cm / 100.0; 
   
    tfoot = m / 0.3048;
    foot = (int)tfoot;
   
    tinch = (tfoot - foot)*12;
    inch = (int)tinch;
    
    printf("%d %d", foot,inch); 
        return 0;
}
```

###  打妖怪

```c
#include <stdio.h>

int main() {
	int a, b;
	scanf("%d %d", &a, &b);
	if (a%b == 0) {
		printf("%d", a / b);
	}
	else {
		printf("%d", a / b + 1);
	}
	
	return 0;
}
```

###  求整数均值

```c
#include <stdio.h>

int main() {
	int a,b,c,d;
	float e;
	scanf("%d %d %d %d", &a, &b,&c,&d);
	e = a + b + c + d;
	printf("Sum = %d\nAverage = %.2f", a+b+c+d ,e/4);
	return 0;
}
```

###  整数四则运算

```c
#include <stdio.h>

int main() {
	int a,b;
	scanf("%d %d", &a, &b);
	printf("%d + %d = %d\n", a, b, a + b);
	printf("%d - %d = %d\n", a, b, a - b);
	printf("%d * %d = %d\n", a, b, a * b);
	printf("%d / %d = %d", a, b, a / b);
	return 0;
}
```

###  分糖果

```c
#include <stdio.h>

int main() {
    int x, y, z;
    scanf("%d %d %d", &x, &y, &z);
    // a--b/c
    y = y + (x / 3);
    z = z + (x / 3);
    x = x / 3;
    //b--a/c
    x = x + (y / 3);
    z = z + (y / 3);
    y = y / 3;
    //c--b/a
    x = x + (z / 3);
    y = y + (z / 3);
    z = z / 3;
    printf("%d %d %d", x, y, z);
        return 0;
}
```

###  自由落体

```c
#include <stdio.h>

int main() {
    int t;
    scanf("%d", &t);
    printf("%d", 10*t*t/2);
    return 0;
}
```

###  计算终止时间

```c
#include <stdio.h>

int main() {
    int time, plus;
    int h, min, hp, minp;
    
    scanf("%d %d", &time, &plus);
    
    min = time % 100;
    h=time/100;
    minp = plus % 60;
    hp = plus / 60;
    
    min = min + minp;
    h = h + hp;

    if (min > 60) {
        min = min - 60;
        h = h + 1;
    }
    else {
    }
    printf("%d%02d", h, min);
    return 0;
}
```

###  输出四位整数的各位数字

```c
#include <stdio.h>


int main() {
	char a, b, c, d;
	int x;
	scanf("%c%c%c%c", &d, &c, &b, &a);
	printf("%c%c%c%c=%c+%c*10+%c*100+%c*1000", d,c,b,a,a,b,c,d);

	return 0;
}
```

###  两小时学完C语言

```c
#include <stdio.h>

int main() {
    int x,y,s,d;
    scanf("%d %d %d", &x, &y,& s);
    d = x - (y * s);
    printf("%d", d);
    return 0;
}
```

###  计算图形面积

```c
#include <stdio.h>

int main() {
    int x,y,s;
    scanf("%d %d", &x,&y);
    s = 5000 - (100 * y * 0.5) - (100 * (100 - x) * 0.5);
    printf("%d", s);
    return 0;
}
```

###  折扣

```c
#include <stdio.h>

int main() {
    int a,b;
    double c ;
    scanf("%d %d", &a,&b);
    c = a * b / 10.0;
    printf("%.2lf", c);
    return 0;
}
```

###  标准体重和身高的对应关系

```c
#include <stdio.h>

int main() {
    int a = 0;
    double b ;
    scanf("%d", &a);
    b = (a - 100) * 0.9 * 2;
    printf("%.1lf", b);
    return 0;
}
```

###  后天

```c
#include <stdio.h>

int main() {
    int a=0;
    scanf("%d", &a);
    a = a + 2;
    if (a > 7) {
        printf("%d", a - 7);
    }
    else {
        printf("%d", a );
    }
        return 0;
}
```



## C3

### 字母对应的ASCII 码

```c
#include <stdio.h>

int main() {
    char c;
    scanf("%c",&c);
    printf("%d",c);
    return 0;
}
```

###  温度转换

```c
#include <stdio.h>

int main() {
    double F;
    scanf("%lf", &F);
    printf("%lf", (F - 32) * 5 / 9);
    return 0;
}
```

###  计算圆的周长

```c
#include <stdio.h>
#include <math.h> 

int main() {
    double r;
    scanf("%lf", &r);
    printf("%lf", 2 * r * 3.14);
    return 0;
}
```

###  求三位整数的逆序数

```c
#include <stdio.h>

int main() {
    char x,y,z;
    scanf("%c%c%c", &x, &y, &z);
    printf("%c%c%c", z,y,x);
    return 0;
}
```

###  求三角形面积

```c
#include <stdio.h>
#include <math.h> 

int main() {
    float s,ss,x,y,z,p;
    scanf("%f %f %f", &x, &y, &z);
    p = (x + y + z) / 2;
    ss = p * (p-x) * (p-y) * (p-z);
    s = sqrt(ss);
    printf("%.2f", s);
    return 0;
}
```

###  计算浮点数相除的余数

```c
#include <stdio.h>
#include <math.h>

int main() {
    double a, b;
    scanf("%lf %lf", &a, &b);
    
    double r = fmod(a, b);
    if (r < 0) {
        r += b; 
    }
    printf("%g\n", r);
    return 0;
}
```

###  年增长率

```c
#include <stdio.h>
#include <math.h>

int main() {
    int years;
    double rate;
    scanf("%d", &years);
    
    rate = (pow(2.0, 1.0/years)-1);

    printf("%.2lf%%", rate*100);
    
    return 0;
}
```

###  快速求和

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    
    double s = 0.0;
    for (int i = 1; i <= n; i++) {
        s += 1.0 / (i * (i + 1));
    }
    
    printf("%.5f\n", s);
    return 0;
}
```

###  混合类型数据格式化输入

```c
#include <stdio.h>
#include <math.h>

int main() {
    int years;
    double rate;
    scanf("%d", &years);
    
    rate = (pow(2.0, 1.0/years)-1);

    printf("%.2lf%%", rate*100);
    
    return 0;
}
```

###  定期存款

```c
#include <stdio.h>

int main() {
    double base,up,upc;
    scanf("%lf %lf", &base, &up);
    upc = up / 100.0;
    printf("%11.2lf\n%11.2lf\n%11.2lf",base,base*upc,base*(1+upc));
    return 0;
}
```

###  日期格式变化

```c
#include <stdio.h>

int main() {
    int day, month, year;
    scanf("%d-%d-%d", &month, &day, &year);
    printf("%d-%02d-%02d", year, month, day);
    return 0;
}
```

###  水果店收款

```c
#include <stdio.h>

int main() {
    double a,b,c,d;
    scanf("%lf%lf%lf%lf", &a,&b,&c,&d);
    printf("%.2lf", (a * 2.5) + (b * 1.7) + (c * 2) + (d * 1.2));
    return 0;
}
```

###  计算房间面积

```c
#include <stdio.h>

int main() {
    double a,b;
    scanf("%lf\n%lf", &a,&b);
    printf("the area of the room:%lf",a*b);
    return 0;
}
```

## C4



### 三天打鱼两天晒网

```c
#include <stdio.h>
#include<math.h>

int main() {
    int a,b;
    scanf("%d", &a);
    b = a % 5;
    b <= 3&&b!=0 ? printf("Fishing in day %d", a): printf("Drying in day %d", a);
    return 0;
}
```

###  闰年

```c
#include <stdio.h>

int main() {
	int year;
	scanf("%d", &year);
	((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? (printf("%d is a leap year!", year)) :(printf("%d isn't a leap year!", year));
	return 0;
}
```

###  三个整数排序

```c
#include <stdio.h>

int main() {
    int a, b, c, max, med, min;
    scanf("%d %d %d", &a, &b, &c);

    max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    min = a;
    if (b < min) min = b;
    if (c < min) min = c;

    med = a + b + c - max - min;

    printf("a=%d,b=%d,c=%d\n", min, med, max);
    return 0;
}
```

###  判断水仙花数

```c
#include <stdio.h>
#include <math.h>

int main() {
    int a,b,c,x;
    scanf("%d", &x);
    a = x % 10;
    b = x / 10 % 10;
    c = x / 10 / 10;
    pow(a, 3) + pow(b, 3) + pow(c, 3) == x ? (printf("YES")) : (printf("NO"));
    
    return 0;
}
```

###  计算奖金

```c
#include <stdio.h>
#include<math.h>

int main() {
    double X, M;
    scanf("%lf", &X);
    X /= 10000.0;

    (X <= 10) ?  (M = 0.1 * X) : 
     X <= 20  ?  (M = 10 * 0.1 + (X - 10) * 0.075) : 
     X <= 40  ?  (M = 10 * 0.1 + 10 * 0.075 + (X - 20) * 0.05) : 
     X <= 60  ?  (M = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + (X - 40) * 0.03) : 
     X <= 100 ?  (M = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + 20 * 0.03 + (X - 60) * 0.015) : 
                 (M = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + 20 * 0.03 + 40 * 0.015 + (X - 100) * 0.01);
    printf("%.2lf", M*10000);
    return 0;
}
```

###  按公式计算y和z的值

```c
#include <stdio.h>
#include<math.h>

int main() {
    double x,y,z;

    scanf("%lf", &x);

    if (x <= 2.5) y = x * x + 1;
    else y = x * x - 1;


    if (1 <= x && x < 2) {
        z = 3 * x + 5;
    }
    else if (2 <= x && x < 3) {
        z = 2 * sin(x) - 1;
    }
    else if (3 <= x && x < 5) {
        z = pow(x*x+1,0.5);
    }
    else if (5 <= x && x < 8) {
        z = x * x - 2 * x + 5;
    }
    else z = 0;
    printf("%lf\n%lf", y, z);

    return 0;
}
```

###  24小时时间记法转12小时时间记法

```c
#include <stdio.h>

int main() {
    int h, m, s;
    scanf("%d %d %d", &h, &m, &s);
    
        (h >= 12)? printf("%d %d %d PM", h-12, m, s): printf("%d %d %d AM", h, m, s); 

    return 0;
}
```

###  能否构成三角形

```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    (a + b > c && a + c > b && b + c > a && a - c < b && c - a < b && a - b < c && b - a < c && b - c < a && c - b < a) ? (printf("YES")) : (printf("NO"));

    return 0;
}
```

###  找出3个整数居中的整数

```c
#include <stdio.h>

int main() {
    int a, b, c, max, med, min;
    scanf("%d %d %d", &a, &b, &c);

    max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    min = a;
    if (b < min) min = b;
    if (c < min) min = c;

    med = a + b + c - max - min;

    printf("%d",med);
    return 0;
}
```

###  学生成绩评定

```c
#include <stdio.h>

int main() {
	int score;
	scanf("%d", &score);
	if (score > 85)printf("very good");
	else if (score >= 60)printf("good");
	else printf("no good");

	return 0;
}
```

###  求月份对应的英文名称及天数

```c
#include <stdio.h>

int main() {
	int month;
	scanf("%d", &month);
	if (month == 1)printf("January,31");
	if (month == 2)printf("February,28/29");
	if (month == 3)printf("March,31");
	if (month == 4)printf("April,30");
	if (month == 5)printf("May,31");
	if (month == 6)printf("June,30");
	if (month == 7)printf("July,31");
	if (month == 8)printf("August,31");
	if (month == 9)printf("September,30");
	if (month == 10)printf("October,31");
	if (month == 11)printf("November,30");
	if (month == 12)printf("December,31");


	return 0;
}
```

###  百分制分数转换为等级

```c
#include <stdio.h>

int main() {
	int score;
	char a;
	scanf("%d", &score);
	if (score >= 90) { a = 'A'; }
	else {
		if (score >= 80) { a = 'B'; }
		else {
			if (score >= 70) { a = 'C'; }
			else {
				if (score >= 60) { a = 'D'; }
				else { a = 'E'; }
				}
			}
		}
	

	printf("score=%d,grade:%c", score, a);

	return 0;
}
```

## C5 P2

### 求若干整数的最大值

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int max=0, a;
    int i = 1;

    while ( i<= n) {
        scanf("%d", &a);
        i++;
        if (max < a) max = a;
    }
    printf("%d", max);

    return 0;
}
```

###  n！

```c
#include <stdio.h>

int main() {
    int n,m=1;
    
    scanf("%d", &n);

    if(n==0){
        printf("%d!=1", n);

    }
    else {
        for (int i=1; i<=n; i++) {
            m = m * i;
        }
        printf("%d!=%d\n", n, m);
    }
    
    

    return 0;
}
```

###  最大公约数

```c
#include <stdio.h>

int main() {
    int a=0, b=0,max=0,x=0;
    scanf("%d %d", &a, &b);
    a > b ? (max = a) : (max = b);
    int i = 1;
    while (i < max) {
        if (a % i == 0 && b % i == 0)
        {
            x = i;
        }
        i++;
    }
    printf("%d", x);
    return 0;
}
```

###  最小值和最大值

```c
#include<stdio.h>
#include<math.h>

int main(void) {

	int n;
	int a=0;
	int max=0, min=1000;
	int cmax=0,cmin=0;
	scanf("%d", &n);

	for (int i = 1;i <= n;i++) {
		scanf("%d", &a);
		if (a > max)
		{
			max = a;
			cmax = 0;
		}
		 if (a < min)
		{
			min = a;
			cmin = 0;
		}
		 if (a == max)cmax++;
		 if (a == min)cmin++;

	}
	printf("%d %d\n", min, cmin);
	printf("%d %d\n", max, cmax);

	return 0;
}
```

###  连续因子

```c
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    long long n;
    cin >> n;
    
    long long max_len = 0;
    long long start = 0;
    long long sqrt_n = sqrt(n);
    
    for (long long i = 2; i <= sqrt_n; i++) {
        long long temp = n;
        long long count = 0;
        long long j = i;
        
        while (temp % j == 0) {
            temp /= j;
            count++;
            j++;
        }
        
        if (count > max_len) {
            max_len = count;
            start = i;
        }
    }
    
    if (max_len == 0) {
        max_len = 1;
        start = n;
    }
    
    cout << max_len << endl;
    for (long long i = start; i < start + max_len; i++) {
        if (i != start) cout << "*";
        cout << i;
    }
    
    return 0;
}
```

###  打印沙漏

```c
#include <stdio.h>

int main() {
    int a=1,a_a=5;
    int n;
    int cs=0;
    scanf("%d", &n);

    while (n >= a) {
        n -= a;
        cs++;
        
        a = a + a_a;
        a_a = 4;

    }



    for (int i = 0;i <= cs -1;i++) {
        for (int k = 1;k <= i;k++)printf("\040");
        for (int x = 1;x <= 2 * (cs - i) - 1;x++)printf("*");
        printf("\n");
    }

    for (int i = 2;i <= cs;i++) {
        for (int k = 1;k <= cs - i;k++)printf("\040");
        for (int x = 1;x <= 2 * i - 1;x++)printf("*");
        printf("\n");
    }


    printf("%d",n);

    return 0;
}
```

###  念数字

```c
#include<stdio.h>
#include<math.h>

int main(void) {
	int n;
	scanf("%d", &n);

	int temp = n;
	(temp > 0) ? (temp = temp) : (temp = -temp);
	int ws=0;

	while (temp > 0) {
		ws++;
		temp /= 10;
	}
	if(n!=0)
	{
		(n > 0) ? (ws = ws) : (printf("fu "));

		int onebyone;
		(n > 0) ? (temp = n) : (temp = -n);


		for (int i = 1;i <= ws;i++) {
			int shi = pow(10, ws - i);
			onebyone = temp / shi;
			temp %= shi;

			if (ws - i == 0)
			{
				switch (onebyone) {
				case 0: printf("ling"); break;
				case 1: printf("yi"); break;
				case 2: printf("er"); break;
				case 3: printf("san"); break;
				case 4: printf("si"); break;
				case 5: printf("wu"); break;
				case 6: printf("liu"); break;
				case 7: printf("qi"); break;
				case 8: printf("ba"); break;
				case 9: printf("jiu"); break;
				}
			}
			else {
				switch (onebyone) {
				case 0: printf("ling "); break;
				case 1: printf("yi "); break;
				case 2: printf("er "); break;
				case 3: printf("san "); break;
				case 4: printf("si "); break;
				case 5: printf("wu "); break;
				case 6: printf("liu "); break;
				case 7: printf("qi "); break;
				case 8: printf("ba "); break;
				case 9: printf("jiu "); break;

				}
			}

		}
	}
	else {
		printf("ling");
	}


	return 0;
}
```

###  N个有理数求和

###  画方块

```c
#include <stdio.h>
#include<math.h>

int main() {
    
    int round=0,list;
    char a='a';
    scanf("%d %c",&round, &a);

    if (round % 2 == 0) { list = round / 2; }
    else list = (round + 1) / 2;

    for(int o=1;o<=list-1;o++)
    {
        for (int i = 1;i <= round;i++) {
            printf("%c", a);
        }
        printf("\n");
    }

    for (int i = 1;i <= round;i++) {
        printf("%c", a);
    }


    return 0;
}
```

###  守形数

```c
#include <stdio.h>
#include<math.h>

int main() {
    int m=0, n=0;
    scanf("%d %d", &m, &n);

    int round=0,temp,last;

    int first = 0;


    for (m;m <= n;m++) {
        temp = m;

            while (temp != 0) {
                round++;
                temp /= 10;
        }

            int www = pow(10, round);
            last = (m * m) % (www);

            if (last == m) {
                if(first==0)
                {
                    printf("%d", m);
                    first = 1;
                }
                else printf("\040%d", m);
                
            }
            round = 0;
    }

    if(first==0)printf("No exist");
    return 0;
}
```

###  含数字5且是3的倍数

```c
#include <stdio.h>
int main()
{
	int m, n, total = 0;
	scanf("%d %d", &m, &n);

	for (int i = m; i <= n; i++)
	{
		if (i % 3 == 0)
		{
			if (i % 10 == 5 || (i / 10) % 10 == 5 || (i / 100) % 10 == 5 || i / 1000 == 5) 
			{
				if (total == 0)
					printf("%d", i);
				else
					printf(" %d", i);
				total++;
			}
		}
	}

	if (total == 0)
		printf("No exist");
	return 0;
}
```

###  小球自由落体

```c
#include <stdio.h>

int main() {
    double n=0,m=100;
    double dt = 100;

    scanf("%lf", &n);



    for (int i = 1;i <= n;i++) {
        if(i==1) dt = 100;
        else  dt = dt + m*2;
        m /= 2.0;
    }


    printf("%lf %lf", dt,m);

    return 0;
}
```

###  鸡兔同笼

```c
#include <stdio.h>

int main() {
    int tou=0, n=0,set=0;
    scanf("%d %d", &tou, &n);

    int ji=0, tu=tou-ji;

    for (ji;ji <= tou;ji++) {
        
        tu = tou - ji;

        if (ji * 2 + tu * 4 == n) {
            set = 1;

            printf("%d %d", ji, tu);
            break;
        }

    }
    if (set == 0)printf("Error");

    return 0;
}
```

###  计算π的近似值

```c
#include <stdio.h>

int main() {
    int n=0;
    double p=0;
    scanf("%d", &n);
    for (int i = 1;i <= 4 * n - 1;i = i + 2) {

        if (i % 4 == 1)p = p + (1.0 / i);
        else p = p - (1.0 / i);


    }
  
    printf("%lf", p*4);

    return 0;
}
```

###  “韩信点兵”数

```c
#include <stdio.h>

int main() {
    int x, y,n=0,i=0;
    scanf("%d %d", &x, &y);
    while (x<=y) {
        if (x % 3 == 2 && x % 5 == 3 && x % 7 == 4)
        {
            i++;
            if(i>1)printf("\040%d", x);
            else printf("%d", x);
         
        }
        x++;   
        
    }
    if (i >= 1)printf("\ntotal=%d", i);
    else printf("total=%d", i);
    return 0;
}
```

###  祖孙年龄

```c
#include <stdio.h>

int main() {
    int x, y1, y2, y3, n=0;
    scanf("%d %d %d %d", &x, &y1, &y2, &y3);
    while (x > y1 + y2 + y3) {
        x++;
        y1++;
        y2++;
        y3++;
        n++;   
      
    }
    printf("%d", n);
    return 0;
}
```

###  输出Fibonacci数列的前n项

```c
#include <stdio.h>

int main() {
    int a = 1, b = 1, x, n,d=0;
    scanf("%d",&n);



    for (int i = 1;i <= n / 5;i++) {
        for (int h = 1;h <= 5;h++) {
            d++;
            if (d <= 2)x = 1;
            else
            {
                x = a + b;
                a = b;
                b = x;

            }
            printf("%10d", x);

        }
        printf("\n");
    }  
    
    
    for (int i = 1;i <= n % 5;i++) {
        d++;
        if (d <= 2)x = 1;
        else
        {
            x = a + b;
            a = b;
            b = x;

        }
        printf("%10d", x);
   
    }




    return 0;
}
```

###  菱形图案

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1;i <= n;i++) {
        for (int k = 1;k <= n - i;k++)printf("\040");
        for (int x = 1;x <= 2 * i - 1;x++)printf("*");
        printf("\n");
    } 
    
    for (int i = 1;i <= n-1;i++) {
        for (int k = 1;k <= i;k++)printf("\040");
        for (int x = 1;x <= 2 * (n - i) - 1;x++)printf("*");
        printf("\n");
    }

    return 0;
}
```

###  计算某分数序列的前n项之和

```c
#include <stdio.h>

int main() {
    double a, a1 = 2, a2 = 3;
    double b, b1 = 1, b2 = 2;
    int n;
    double m = 2/1.0+3/2.0;
    scanf("%d", &n);


    double x, y;
    int i = 3;

    if (n == 1)printf("%lf", 2 / 1.0);
    else if (n == 2) printf("%lf", 2 / 1.0+3/2.0);
    else if (n >= 3) {

        while (i <= n) {
            x = a1 + a2;
            a1 = a2;
            a2 = x;

            y = b1 + b2;
            b1 = b2;
            b2 = y;

            m = m + x/y;
            i++;

        }    printf("%f\n", m);
    }

    return 0;
}
```

###  素数

```c
#include <stdio.h>

int main() {
    int n,m=0;
    
    scanf("%d", &n);
    if (n <= 1) {
        m = 1;
    }
    else
    {
        for (int i = 2;i < n;i++) {
            if (n % i == 0) {
                m = 1;
            }
        }
    }

    switch(m){
    case 1:printf("NO");
        break;
    case 0:printf("YES");
        break;
    }

    return 0;
}
```

## C5 P2

### 寻找250

```c
#include<stdio.h>
#include<math.h>

int main(void) {
	int a;
	int count=0;

	while (scanf("%d", &a) == 1) {
		count++;
		if (a == 250) {
			printf("%d", count);
			break;
		}

	}
	return 0;
}
```

###  计算阶乘和

```c
#include<stdio.h>

int main() {
	int n=0;
	int count=0;


	scanf("%d", &n);

	for (int i = 1;i <= n;i++) {

		int x = 1;

		for (int j = 1;j <= i;j++) {

			x = x * j;

		}

		count = count + x;

	}

	printf("%d",count);

	return 0;
}
```

###  整除光棍

```
#include<stdio.h>

int main() {
	int x;
	scanf("%d", &x);

	int yushu = 0;
	int count = 0;

	int zero = 0;

	while (1) {

		count++;
		yushu = yushu * 10 + 1;
		if (yushu >= x) {
			
			printf("%d", yushu / x);
			yushu = yushu % x;
			zero = 1;

			if (yushu == 0) {
				break;
			}
		}
		if(zero==1)
		{
		if  (yushu * 10 + 1 < x){
			printf("0");
		}
		}

	}
	printf(" %d",count);

	return 0;
}
```

###  求幂级数展开的部分和

```c
#include<stdio.h>
#include<math.h>

int main() {
	
	double x;
	scanf("%lf", &x);

	double sum = 1;
	double fm = 1.0;

	double m=1;
	int i = 1;

	while((m/fm)>=0.000001) {

		m = pow(x, i);

		fm = fm * i;

		sum = sum + m / fm;

		i++;
	}
	
	printf("%.5lf", sum);

	return 0;
	}
```

###  求奇数和

```c
#include<stdio.h>
#include<math.h>

int main() {
	
	int n=0;

	int sum = 0;

	while (1) {

		scanf("%d", &n);

		if (n > 0) {

			if (n % 2 == 1) {

				sum += n;

			}


		}
		else {

			break;

		}

	}

	printf("%d", sum);

	return 0;
	}
```

###  猴子吃桃问题

```c
#include<stdio.h>
#include<math.h>

int main() {
	
	int day = 0;
	int sum = 1;

	scanf("%d", &day);

	for (int i = 1;i < day;i++) {

		sum = (sum + 1) * 2;

	}

	printf("%d", sum);

	return 0;
	}
```

###  水仙花数

```c
#include<stdio.h>
#include<math.h>

int lf(int x,int n) {

	int re = 1;

	for (int o = 1;o <= n;o++) {

		re = re * x;
	}

	return re;
}


int main() {
	
	int n=0,x,sum=0;

	scanf("%d", &n);

	int start = lf(10, n - 1);
	int end = lf(10, n) - 1;




	for (int i = start;i <= end;i++) {

		sum = 0;

		x = i;

		for (int j = 1; j <= n; j++) {

			int temp = x % 10;
			
			sum = sum + lf(temp, n);

			x = x / 10;
		}

		if (sum == i)printf("%d\n", i);


	}

	return 0;
	}
```

###  兔子繁衍问题

```c
#include<stdio.h>
#include<math.h>


int main() {
	int a, b, d, n,sum;


	scanf("%d", &n);

	a = 1;
	b = 0;
	d = 0;

	sum = a + b + d;

	int time = 1;

	if (n == 1) {
		printf("1");
		return 0;
	}

	while (sum < n) {
		int b2 = a;
		int a2 = d+b;
		int d2 = d + b;

		a = a2;
		b = b2;
		d = d2;
				
		sum = a + b + d;

		time++;
	}

	printf("%d", time);

	return 0;
	}
```

###  黑洞数

```c
#include<stdio.h>


int main() {
	int x;
	int a, b, c;

	int num = 0;

	scanf("%d", &x);

	if (x == 495) {
		int a = 5, b = 9, c = 4; 
		int max = 954, min = 459;
		x = max - min; 
		printf("1: %d - %d = %d\n", max, min, x);
		return 0;
	}
	
		
	while (x != 495){

		a = x % 10;

		b = x/10 % 10;

		c = x/100;

		int re_x_max;
		if (a >= b && a >= c)re_x_max = a;
		else if (b >= a && b >= c)re_x_max = b;
		else re_x_max = c;

		int re_x_min;
		if (a <= b && a <= c)re_x_min = a;
		else if (b <= a && b <= c)re_x_min = b;
		else re_x_min = c;

		int re_x_mid = a + b + c - re_x_max - re_x_min;

		int max = re_x_max * 100 + re_x_mid * 10 + re_x_min;
		int min = re_x_min * 100 + re_x_mid * 10 + re_x_max;

		x = max - min;

		num++;

		printf("%d: %d - %d = %d\n", num, max, min, x);

		if (x == 0)break;
	}

	return 0;
	}
```

###  输出三角形字符阵列

```c
#include<stdio.h>


int main() {
	int x=0;
	scanf("%d", &x);

	int c = 65;

	int n = x;

	for (int i = 1;i <= x;i++) {

		int spa = 0;
		for (int j = 1;j <= n;j++) 
		{
			if (spa == 0) {
				printf("%c", c);
				c++;
				spa = 1;
			}
			else {
				printf(" %c", c);
				c++;
			}
		}

		n--;

		printf("\n");

		if (x == 0)break;
	}

	return 0;
	}
```

###  求整数的位数及各位数字之和

```c
#include<stdio.h>


int main() {
	long long n=0;
	scanf("%d", &n);

	int count = 0;
	int sum = 0;

	if (n == 0) {
		printf("1 0\n");
		return 0;
	}

	while (n>0) {

		int last = n%10;
		sum += last;
		count++;
		n /= 10;

	}

	printf("%d %d", count, sum);


	return 0;
	}
```

###  特殊a串数列求和

```c
#include<stdio.h>

int main() {
	
	int a, n;
	int sum=0;

		scanf("%d %d", &a, &n);

	int ls = a;

	for (int i = 1;i <= n;i++) {

		sum = sum + a;
		a = a * 10 + ls;

	}


	printf("%d", sum);

	return 0;
	}
```

###  验证“哥德巴赫猜想”

```c
#include <stdio.h>
#include <math.h> 

int isPrime(long num) {
    if (num <= 1) return 0;
    if (num == 2) return 1;
    if (num % 2 == 0) return 0;

    for (long i = 3; i <= sqrt(num); i += 2) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

int main() {
    long n;
    scanf("%ld", &n);


    for (long p = 2; p <= n / 2; p++) {
        long q = n - p;
        if (isPrime(p) && isPrime(q)) {
            printf("%ld = %ld + %ld", n, p, q);
            return 0; 
        }
    }

    return 0;
}
```

###  换硬币

```c
#include<stdio.h>

int main() {
	int n=03;
	int fen5 = 0, fen2 = 0, fen1 = 0;
	int count = 0;

	scanf("%d", &n);

	for (fen5 = (n - 3) / 5;fen5 >=1;fen5--){

		for (fen2 = (n - (5 * fen5) - 1);fen2 >= 1;fen2--) {

			fen1 = n - fen5 * 5 - fen2 * 2;

			if (fen1 >= 1) {

				int total = fen5 + fen2 + fen1;
				printf("fen5:%d, fen2:%d, fen1:%d, total:%d\n", fen5, fen2, fen1, total);
				count++;

			}
		}

	}

	printf("count = %d\n", count);
	return 0;

}
```

###  统计素数并求和

```c
#include<stdio.h>

int main() {
	int m,n;
	scanf("%d %d",&n,&m);

	int sum = 0;
	int num = 0;

	int su = 1;


	for (n;n <= m;n++) {

		if (n == 1)su = 0;
		else
		{
			for (int i = 2;i < n;i++) {

				if (n % i == 0) {
					su = 0;
					break;
				}

			}
		}

		if (su == 1) {
			num++;
			sum += n;
		}

		su = 1;

	}
	


	printf("%d %d",num,sum);

}
```

###  求e的近似值

```c
#include<stdio.h>

int main() {
	int n;
	scanf("%d",&n);


	double sum=0;

	double fm=1;

	for (int i=1; i <= n+1;i++) {
	
		sum = sum + 1.0/fm ;

		fm=fm*i;

	}


	printf("%.8lf",sum);

}
```

###  求平方与倒数序列的部分和

```c
#include<stdio.h>

int main() {
	int m, n;
	scanf("%d %d", &m, &n);

	double sum=0;

	for (m; m <= n;m++) {

		sum = sum + (m * m) + (1.0 / m);

	}

	printf("%lf",sum);

}
```

###  求组合数

```c
#include<stdio.h>

int main() {
	double c;
	double m, n;
	double up=1, down=1;

	scanf("%lf %lf", &m, &n);

	double ls = m;
	while (ls != 0) {

		up = up * n;
		n --;
		ls--;

	}

	ls = m;
	while (ls != 0) {

		down = down * m;
		ls--;
		m--;

	}

	printf("%.0lf",up/down);

}
```

###  求简单交错序列前N项和

```c
#include<stdio.h>

int main() {

	int fm = 1;
	int num = 1;
	int n = 0;
	double sum = 0;

	scanf("%d", &n);

	for (int i = 0; i < n; i++) {

		if (num % 2 == 0) {
			sum = sum - (1.0 / fm);
		}
		else {
			sum = sum + (1.0 / fm);
		}

		fm += 3;
		num++;

	}

	printf("%.4lf", sum);

}
```

###  最佳情侣身高差

```c
#include<stdio.h>

int main() {
	int x = 0;

	scanf("%d", &x);

	for (int i = 1;i <= x;i++) {

		double n;
		char sex;


		scanf(" %c %lf", &sex, &n);

		if (sex == 'M') {
			printf("%.2lf\n", n / 1.09);
		}
		else {
			printf("%.2lf\n", n * 1.09);
		}

	}



	return 0;
}
```
