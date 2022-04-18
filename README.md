# vite2-markdown


Markdown for Vite2

- Use Vue components in Markdown

[![NPM version](https://img.shields.io/npm/v/vite-plugin-md?color=a1b858)](https://www.npmjs.com/package/vite-plugin-md)

## Install

Install

```bash
npm i vite2-md
```



```ts
// vite.config.js

import Vue from '@vitejs/plugin-vue'
import md from 'vite2-md'

export default {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    md(),
  ],
}
```

And import it as a normal Vue component

## Import Markdown as Vue components

```html
<!-- MarkDown Compontents -->
<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts" setup>
const props = defineProps({
  content: String
})
</script>
```
```html
<template>
      <Markdown :content="intro"/>
</template>
<script lang="ts" setup>
  import Markdown from "@/components/Markdown.vue";
  import intro from "../markdown/intro.md";

</script>
```

## Recommend
You can import A CSS package for It looks beautiful
```bash
npm i github-markdown-css
```
```js
// main.js
import 'github-markdown-css'

```

## License

MIT License © 2020-PRESENT [Anthony Xiaoy](https://github.com/pro-xiaoy)
