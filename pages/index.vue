<template>
  <!-- <div class="card relative z-2"> -->
  <nav>
    <Menubar :model="items" class="justify-between bg-purple-50 shadow-lg">
      <template #start>
        <div class="flex items-center">
          <img alt="logo" src="~/assets/images/logo.jpg" width="50" class="mr-3 rounded-full shadow" />
          <h1 class="font-bold text-xl">{{ title }}</h1>
        </div>
      </template>
      <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
          <a :href="routerProps.href" v-bind="props.action">
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.label">{{ label }}</span>
          <span :class="[
            hasSubmenu &&
            (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right'),
          ]" class="submenu-icon ml-2" />
        </a>
      </template>
      <template #end>
        <a href="https://lin.ee/Ud0FbbD">
          <Button label="Line諮詢" severity="info" rounded />
        </a>
      </template>
    </Menubar>
  </nav>
  <header class="flex lg:flex-row flex-col shadow-md">
    <div class="lg:w-1/2 w-full flex justify-center items-center bg-white py-10">
      <div class="text-center">
        <h1 class="font-bold text-2xl text-purple-700">{{ title }}</h1>
        <h2 class="text-2xl font-bold">您的生活好幫手</h2>
      </div>
    </div>
    <div class="lg:w-1/2 w-full overflow-hidden h-80 lg:order-1 -order-1">
      <img alt="user header" src="~/assets/images/home.jpg" />
    </div>
  </header>
  <article class="my-10 bg-purple-100" id="about">
    <h2 class="text-center text-2xl font-bold text-purple-700 my-3">關於我們</h2>
    <div class="text-center w-[600px] max-w-full m-auto">
      基於現代人腳步匆促，難以兼顧或專精生活上與事業上的各項事務。
      <br>
      因此我們致力於協助客戶處理與解決社會團體(social groups)、親職教育(education)、文書代繕(writing)等需要專業處理的各項事務與疑難雜症。
      <br>
      我們的團隊具備豐富的專業知識、執行能力與親和力。
      <br>
      歡迎您利用LINE免費諮詢，我們會竭誠為您服務。
      <br>
      任何服務項目皆會經過估價、報價，您覺得合理、滿意再進行。
    </div>
  </article>
  <section class="my-10">
    <h2 class="text-center text-2xl font-bold text-purple-700 my-3">服務項目</h2>
    <div class="flex justify-center flex-wrap">
      <template v-for="item in items[1].items">
        <Card class="w-72 m-2 rounded-lg shadow-md">
          <template #title>{{ item.label }}</template>
          <!-- <template #subtitle> Card subtitle </template> -->
          <template #content>
            <ul>
              <li v-for="sub_item in item.items">{{ sub_item.label }}
                <template v-if="sub_item.addtion">
                  <br>
                  <small>{{ sub_item.addtion }}</small>
                </template>
              </li>
            </ul>
          </template>
          <!-- <template #footer>
        <Button
          icon="pi pi-check"
          label="Save"
        />
        <Button
          icon="pi pi-times"
          label="Cancel"
          severity="secondary"
          style="margin-left: 0.5em"
        />
      </template> -->
        </Card>
      </template>
    </div>
  </section>
  <!-- </div> -->
  <footer class="bg-purple-900 w-full text-white flex justify-center p-4">
    <p class="text-sm">Copyright © 2023 {{ title }} All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const title = ref("SEW顧問中心");

const items = ref([
  {
    label: "關於我們",
    route: "#about",
  },
  {
    label: "服務項目",
    items: [
      {
        label: "社會團體申請與管理",
        items: [
          {
            label: "人民團體申請立案",
            addtion: "(含法人登記)"
          },
          {
            label: "人民團體會務管理",
            addtion: "(會員大會 / 理監事會 / 年度計劃 / 年度預決算 / 稅籍處理)"
          }
        ],
      },
      {
        label: "長照機構立案申請",
        items: [
          {
            label: "協助處理長照機構立案",
          },
          {
            label: "長照機構管理顧問",
          },
        ],
      },
      {
        label: "文書代繕",
        items: [
          {
            label: "公文、書函釋疑與回函建議",
          },
          {
            label: "政府契約條文檢視與建議",
            addtion: "政府購買式契約(BOT / OT案)條文檢視與建議"
          },
          {
            label: "碩士論文寫作諮詢",
            addtion: "(限社科院)"
          },
        ],
      },
      {
        label: "工商登記與勞資爭議",
        items: [
          {
            label: "協助辦理工商登記",
          },
          {
            label: "勞資爭議諮詢與協調",
          },
        ],
      },
      {
        label: "簡報與網頁設計、製作、執行",
        items: [
          {
            label: "各項業務簡報的設計與製作",
          },
          {
            label: "代為執行各項業務簡報",
          },
          {
            label: "網頁設計與經營",
          },
        ],
      },
      {
        label: "親職教育諮詢",
        items: [
          {
            label: "學習評估",
          },
          {
            label: "家長諮商",
          },
          {
            label: "師資培訓",
          },
          {
            label: "親職講座",
          },
          {
            label: "教材教具",
          },
          {
            label: "專業演講",
          },
          {
            label: "教室規劃",
          },
          {
            label: "英語教學",
            addtion: "(拼音、拼字、聽力、口説、閱讀、寫作訓練)"
          },
        ],
      },
    ],
  },
]);
useHead({
  title: title.value,
  htmlAttrs: {
    lang: 'zh-TW'
  },
  meta: [
    { name: 'description', content: '我們致力於協助客戶處理與解決社會團體(social groups)、親職教育(education)、文書代繕(writing)等需要專業處理的各項事務與疑難雜症。服務項目包含：社團申請、長照立案、文書代筆、工商登記、簡報設計、親職教育。' }
  ],
  script: [],
  link: []
})
</script>
<style scoped>
:deep .p-button {
  background-color: #A854F6;
  border: none;
}

:deep .p-button:enabled:hover {
  background-color: #8a39d6;
  border: none;
}
</style>