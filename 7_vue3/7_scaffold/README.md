# 脚手架

## vue2 和 vue3 项目构建 不同之处
- vue2使用webpack + vue/cli工具
- vue3使用vite + create-vue工具

## 安装前的准备
环境里安装node.js 和 包管理工具 npm。其实宝管理工具除了npm之外，还有其他的宝管理工具比如pnpm, yarn。但是刚开始接触vue时，还是用npm比较稳。当安装完node.js之后，npm也会被安装。通过如下命令查询安装的node和npm版本
```bash
$ node -v
$ npm -v
```

## 创建个测试项目
创建个目录并进入
```bash
$ mkdir vue-pro
$ cd vue-pro
```
运行如下命令,该命令会安装并执行create-vue，他是官方的项目脚手架工具
```bash
$ npm create vue@latest

> npx
> create-vue

┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  vue-project
│
◇  Use TypeScript?
│  No
│
◇  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle 
│  all, enter to confirm)
│  none
│
◇  Select experimental features to include in your project: (↑/↓ to navigate, space to select, 
│  a to toggle all, enter to confirm)
│  none
│
◇  Skip all example code and start with a blank Vue project?
│  Yes

Scaffolding project in /home/jiangche00/Projects/frontend_learning/7_vue3/7_scaffold/vue-pro/vue-project...
│
└  Done. Now run:

   cd vue-project
   npm install
   npm run dev

| Optional: Initialize Git in your project directory with:

   git init && git add -A && git commit -m "initial commit"

```
操作完之后就是会在```vue-pro```里面出现个名字为```vue-project```的文件夹这个vue-project文件夹就是创建的项目文件夹，里面有这些内容
```bash
vue-project/
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── App.vue
│   └── main.js
└── vite.config.js
```

## About vite
- Vite 2–4: Node 14.18+ / 16+
- Vite 5–6:	Node 18+ (some overlap)
- Vite 7: Node 20.19+ / 22.12+
- Vite 8 (latest): Node 20.19+ / 22.12+

how to get the current installed vite version:
```bash
$ npm list vite
```
or
```bash
$ egrep -nir "vite" package.json
```

## About vue3
minimum nodejs version: 18.3+

## How to configure npm taobao mirror
使用命令行的方式:
```bash
$ npm config set registry https://registry.npmmirror.com
```
修改配置文件的方式，下面几种方式任选一个

1. 修改家目录下面的```~/.npmrc```，添加如下内容
```ini
registry=https://registry.my-company.com/
```
2. 修改项目目录下面的```your-project/.npmrc```
```ini
registry=https://registry.my-company.com/
```
3. 修改全局配置```/etc/npmrc```
```ini
registry=https://registry.my-company.com/
```

## vscode plugin recommendation:
```bash
vue.volar
```