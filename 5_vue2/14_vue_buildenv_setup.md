# vue build env setup in localhost

## 1. node installation
apt install, or go to nodejs website to find a proper installation solution. or google to find how to install specified node version on speficied operation system
after installation, use ```node -v``` to verify. ```node``` is the basic command for nodejs, and ```npm``` is the basic package management tool. also there are lots of other package management tools and multi-version nodejs installation controller, like ```nvm``` or ```n```, you can download and install them afterwards
```bash
$ node -v
v18.20.8

$ npm -v
10.8.2
```
## 2. create a project
first create a empty folder and go into it
```bash
$ mkdir vue-project
$cd vue-project
```
then use ```npm ``` to init, like below
```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (vue-project) 
version: (1.0.0) 
description: test
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/jiangche00/Projects/frontend_learning/5_vue2/vue-project/package.json:

{
  "name": "vue-project",
  "version": "1.0.0",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
```

if you want a non-interactive approach, add ```-y``` flag, like below. if non-interactive the default ```package.json``` will be generated, and you may need to modify ```package.json``` to fill-in proper information afterwards
```bash
$ npm init -y
```

## 3. about vue2 basic dependencies
if you want to bootstrap a vue2 project from scratch you need to install the following packages before hand ...
```bash
$ npm install vue@^2 # install latest supported vue2 as vue2 has already benn EOL

$ npm install babel-loader @babel/core @babel/preset-env # ES6/ES7 support

$ npm install webpack webpack-cli html-webpack-plugin # code packaging support

$ npm install less-loader sass-loader # css support

$ npm install vue-template-compiler # template support

$ npm install vue-router vuex # router, vuex support

$ npm install .......

```

## 4. about vue scaffold
since build the vue project from scratch is a really nightmare for developers, we need to use a scaffold

### 4.1 vue/cli
you can install vue/cli globally, say, with ```-g``` flag, to install it in your system, vue/cli supports both vue2 and vue3
```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```
create a project
```bash
vue create vue-project # cli mode
# OR
vue ui # ui mode
```
these commands prompts you to pick a preset, including options for Vue 2 or Vue 3
about manually select features:
```
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
❯◯ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
```Babel```: ES6/ES7 support, etc.
```TypeScript```: TS/Vue3 support, etc.
```Router```: Vue router, etc.
```Vuex```: Vuex support, etc.

```
? Choose a version of Vue.js that you want to start the project with 
  3.x 
❯ 2.x 
```

### 4.2 create-vue
[create-vue](https://github.com/vuejs/create-vue) is a mordern way to start a Vite-powered Vue project
```bash
$ npm create vue@latest # vue3
# OR
$ npm create vue@legacy # vue2
```

## 5. npm run serve
you can use ```npm run serve``` to start a server to test your vue project
you need to run the above command in the directory where the ```package.json``` locates
in the ```package.json```, you can find the following snippets
```json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build"
}
```
when you run ```npm run serve```, actually it runs the "serve" scripts, which is, ```vue-cli-service serve```

## 5. Project Layout
```
.
├── babel.config.js
├── jsconfig.json
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── src
└── vue.config.js
```
```node_modules```: stores 3pp packages</br>
```babel.config.js```: configuration about babel</br>
```jsconfig.json```:The jsconfig.json file indicates that a directory is the root of a JavaScript project. It is used by code editors and tools, primarily Visual Studio Code, to configure the JavaScript language service, which provides features like IntelliSense (code completion), path mapping, and error checking</br>
```package.json```:  project manifest file that defines high-level dependencies using version ranges and includes project metadata and scripts</br>
```package-lock.json```: an automatically generated snapshot that locks down the exact versions and full dependency tree to ensure consistent, reproducible installs across all environments</br>
```public```: store public resources, inddex.html, favico.icon, etc.</br>
```src```: where to put your code into

about the ```src``` directory:</br>
```src/assets```: store static files, *.png, *.css, etc.</br>
```src/components```: store the public vue components</br>
```src/store```: something related to vuex</br>
```src/App.vue```: a 'single file' component, with suffix .vue</br>
```src/main.js```: main entry</br>

default ```main.js``` content:
```javascript
import Vue from 'vue' // import vue module from 'node_modules'
import App from './App.vue' // import App from App.vue file
import store from './store' // import store from files in store directory

Vue.config.productionTip = false // disable error print console in production environment

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

it is recommended that the root vue instance in the ```main.js``` is just a root vue itself, not recommended to write data, methods, etc. in this instance, but create other components to implement

## 6 vue router
you can add vue router to your existing project
```
$ npm install vue-router
# OR
$ npm install vue-router@^3 # for vue 2.x, because vue 2.x use vue router 3.x
```

then it is recommended to create a folder under ```src```, whose name is ```router```, then we will put the router code into this folder

### 7 npm install, node_modules, dependencies and devDependencies
about dependencies in package.json:<br>
packages used in product environment<br>

about devDependencies in package.json:<br>
packages used in dev environment<br>

if run ```npm install <package>```, the package will be installed and the package information will be written in the dependencies section in package.json. 

if run ```npm install <package> -D```, the package will be installed and the package information will be written both in dependencies section and devDependencies section in package.json

run ```npm install```, nodejs will read the ```package.json```, and generate ```node_modules``` folder, download packages into it

it's necessary to exclude ```node_modules``` folder(s) in gitignore, add the following line into ```.gitignore```
```
**/node_modules/
```