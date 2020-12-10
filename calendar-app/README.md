# calendar-app
## 学到什么？
1. bulma.css / front-awesome.css 可以直接放在 public 就可以使用了
2. 需要安装 sass 的依赖
```
npm install -D sass sass-loader 
```
3. v-model: 是一个双向绑定，一旦一个地方改变，另一个地方也会随之改变，非常适合用来传递用户输入的值给函数
4. 一个 vue 文件分为三部分
```
<template></template>
<script></script>
<style lang="scss" scoped></style>
```
5. 数据的传递方式
父传子： 子组件使用 props: ["day"],父组件直接在标签上绑定相关数据。
兄弟节点的传递，使用第三方管理

6. 在自定义标签中使用 v-for 的时候，需要显式的指定 :key 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute. 它是 Vue 识别节点的一个通用机制，而且 key 并不仅与 v-for 特别关联。 



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
