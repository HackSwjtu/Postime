# HackSwjtuDeanPK

![](https://img.shields.io/badge/HackSwjtu-Chrome--Plugin-green.svg)
![](https://img.shields.io/badge/license-MIT-green.svg?style=flat)

Hackers assess courses with no time. 😎

![](images/icon128.png)

## Features

- [x] 自动显示课程评价的所有问题 (2017.2.10 功能更新)
- [x] 一键课程评价 (2016.12.12 功能更新)
- [x] 一键导师评价 (2016.12.12 功能更新)
- [x] 一键暑期实习评价 (2016.12.12 功能更新)
- [x] 自助学期评价 (2016.12.12 功能更新)
- [x] 教务学生登录验证码识别 (2017.3.17 首次合并)
- [x] 教务家长登录验证码识别 (2017.3.17 首次合并)
- [x] 网络自助服务验证码识别 (2017.3.17 首次合并)

## Description

针对于西南交通大学教务系统的一键课程评价的 Chrome 插件。可以迅速在查看成绩之前迅速评价课程，避免时间浪费。随机生成课程评价，抛开脑洞。

## Screenshot

![Screenshot](assets/screenshots/2017-03-15-2.png)
![Screenshot](assets/screenshots/2017-03-15-3.png)

## Usage

须知：因为现在仅上线了测试版本，所以请在 Chrome 的 Plugin Developer 模式下启动插件。

### 1. 下载仓库代码

```shell
git clone https://github.com/HackSwjtu/HackSwjtuDeanPK.git
```

### 2. 通过 Chrome 插件管理界面导入工程目录

访问 [chrome 插件管理页面](chrome://extensions/)，点击 `加载已压缩的扩展程序` 按钮，选中工程目录即可。

![](http://ofmxkmiv3.bkt.clouddn.com/PKflow1.png)

![](http://ofmxkmiv3.bkt.clouddn.com/PKflow2.png)

### 3. 在浏览器右上方看见插件 icon 即启动成功

![](http://ofmxkmiv3.bkt.clouddn.com/PKflow3.png)

### 4. 鼠标右键点击问卷链接,在新标签或新窗口打开

![](assets/usage/4-1.png)

### 5. 打开教师评价页面立即使用

![](http://ofmxkmiv3.bkt.clouddn.com/PKflow4.png)

## Q & A

> Q：导入插件后打开教务系统的评价课程页面，没有看见页面变化？

A: 在新版的西南交大教务系统中采用的页面中嵌套页面的方式，由于在 url 中只显示了教务系统的初级页面，所以插件无法匹配。可以在打开页面的时候，点击`右键` -> `在新标签页中打开` 即可解决。另外一种可能是你选择了 **选课通道** 进行访问，由于当前测试版本只匹配了 `jiaowu.swjtu.edu.cn` 以 `jiaowu` 为前缀的 URL ，所以请使用通用通道进行账户登录。

## MIT License

MIT License

Copyright (c) 2017 Hack Swjtu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
