---
# theming
theme: './'
title: 'Vue 3 Basic'
titleTemplate: '%s'
colorSchema: 'dark'
fonts:
  sans: 'Hi Melody'
  serif: 'Noto Sans'
  mono: 'JetBrains Mono'
defaults:
  layout: 'centre'


# 1 Page
layout: 'cover'
---
<div class="text-center">시작!</div>


---
# 2 Page
layout: 'quote'
preload: false
---
<div class="text-4xl pt-2">
  <div
    class="text-4xl"
    v-motion
    :initial="{ y: 80, opacity: 0}"
    :enter="{ y: 0, opacity: 1, transition: { delay: 1000, duration: 1000 } }">
    <code>If I have seen further than others, </code>
  </div>
  <div
    class="text-4xl"
    v-motion
    :initial="{ y: 80, opacity: 0}"
    :enter="{ y: 0, opacity: 1, transition: { delay: 5000, duration: 1000 } }">
    <code>it is by standing upon the shoulders of giants.</code>
  </div>
</div>


<i v-click class="text-lg p-2">
  <code>- Isaac Newton</code>
</i>

---
# 3 Page
---
<h1 class="text-5xl">준비물</h1>

- IDE (VSCode, WebStorm, ...)
- ESLint, Prettier, Editorconfig
- [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)<li v-click>꿈⭐️은 이루어진다!</li>
  

