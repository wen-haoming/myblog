---
title: 聊一下 javascript 的字符串编码
nav:
    title: 聊一下 javascript 的字符串编码
    path: /javascript/base
order: 2
group:
    title: 重学前端
writing: false
---

# 聊一下 javascript 的字符串编码

> 有一次开发过程中，小伙伴遇到一个问题，就是当表单的输入框输入 emoji 表情 😄，然后提交给后端的时候，发现这个过程会报错，那时候小伙伴的解决方案其实就是直接网上找方案直接替换 emoji 的字符，这就让我产生一个疑问，emoji 和普通字符有什么区别 ？ 那么本着知识的广度来挖掘相关的知识来解释这其中的问题，话不多说我们开始吧~

## 什么是 Unicode 编码

> Unicode，官方中文名称为统一码[1]，也译名为万国码、国际码、单一码，是计算机科学领域的业界标准。它整理、编码了世界上大部分的文字系统，使得电脑可以用更为简单的方式来呈现和处理文字。 —— 维基百科

那么简单来说，我们一切能看到的字符，比如：英文，中文，日文，韩文，德文，少数民族字符，特殊符号，甚至 emoji 等等，一切用来展示的字符的在 **Unicode** 中都包含在内，其实 **Unicode** 就是一种字符集，每个字符都有它自己对应的编码位置，我们通俗叫**码点**。

Unicode 它码点规定了符号的`二进制`代码，为了方便表示，在开头以 `U+开头`，然后紧接`十六进制` ，譬如：`U+0061`，直接已经收录超过 13 万个字符，但是这么多符号，Unicode 不是一次性定义的，而是分区定义。每个区可以存放 **65536** 个（`2^16`）字符，称为一个平面（plane）。目前，一共有 17 个平面（关于平面会在后面有所提及）那么也就是说，整个 Unicode 字符集的大小现在是 `2^21`

```bash
U+0061 # a
U+0062 # b
U+0041 # A
U+4E91 # 云
```

然而这个世界存在多种编码字符集，Unicode 只是其中一种，同一个二进制码点在不同的字符集中都表示不同的字符，这也解释了

其实 Unicode 就像我们学生手里的一本新华字典，如果需要找一个字，里面都会有所记载，在哪个页码哪个位置，在 Unicode 中同样如此，那有人肯定会好奇 Unicode 怎么那么伟大，一开始就把全世界的字符都收纳起来呢？这其中有一段非常心酸编码的发展历史，在文末可以参考其中一篇知乎文章。

到这里你肯定会好奇，没有普及 Unicode 的时候，国内计算机是怎么显示中文？

那时候聪明的中国人在 ASCII 的基础上扩展了中文字符，规定：一个小于 127 的字符的意义与原来相同，但两个大于 127 的字符连在一起时，就表示一个汉字，前面的一个字节（他称之为高字节）从 0xA1 用到 0xF7，后面一个字节（低字节）从 0xA1 到 0xFE，这样我们就可以组合出大约 7000 多个简体汉字了，后续这个方案就是 **GB2312**，每个汉字以两个字节来存储，但是后续要照顾到小数民族和港澳台，毕竟我们的目标就是实现中华民族伟大复兴！所以加入繁体字，朝鲜语等等，总共有 20902 个。

<!-- 扯一些题外话

80，90 年，国内少数人开始使用计算机办公，那时候计算机内存非常小、运算速度也较慢，保存中文字符会占用大量内存，且显示中文也会增大 CPU 负担，处理中文字符那时候就是一个棘手的问题，所以那时候就有专门处理汉字的硬件设备 —— 汉卡，正是因为这个硬件设备，成就了倪光南教授团队的联想式汉卡（目前联想公司的前身），还有史玉柱的巨人汉卡，当时雷军也仿制过汉卡，他们因为这些机遇挖到第一桶金，突然想起一句台词，成功者总是不约而同的配合着时代的需要~ -->

## 什么是 UTF-8 和 Unicode 有什么关系？

首先简单概括：

-   Unicode 是 `字符集`
-   UTF-8 是 `编码规则`

Unicode 是多种字符的集合，上文有介绍，而 UTF

## 为什么不建议汉字充当变量

## UTF-8 和 UTF 16 的编码区别

## javascript 中的转义符号以及相关 api

## 实现一个 UTF-8 Encoding 的函数