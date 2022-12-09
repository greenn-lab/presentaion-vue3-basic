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


---
# 3 Page
---
<h1>준비물</h1>

- HTML
- 자바(~~타입~~)스크립트
- IDE (VSCode, WebStorm, ...)
- [ESLint](https://eslint.org), [Prettier](https://prettier.io/), [Editorconfig](https://editorconfig.org/)
- [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)


---
# 4 Page
---
<h1>
<code>Options API</code> vs <code>Composition API</code>
</h1>

---
# 5 Page
layout: 'sfc'
example: '01.OptionsAPI'
---

---
# 6 Page
layout: 'sfc'
example: '02.CompositionAPI'
---

---
# 7 Page
layout: 'image'
---
# 응집도 <sub>Cohesion</sub>
![](https://bryceandy-devblog.s3-us-east-2.amazonaws.com/1652174208.png)
https://www.bryceandy.com/posts/vue-composition-api-vs-options-api
