<template>
  <div class="footer-info">
    <ul class="tabs-list list">
      <li v-for="tab in tabs" class="tabs-list-item" :key="tab.id">
        <router-link :to="tab.href" class="tab-link" @click="scroll($event, '#header')">
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
    <ul class="links-list list">
      <li v-for="link in links" class="links-list-item" :key="link.id">
        <a class="link" :href="link.href">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerInfo",

  methods: {
    scroll: function (event, elementId) {
      window.scroll({
        left: 0,
        top: document.querySelector(elementId).offsetTop,
        behavior: "smooth",
      });
    },
  },

  data() {
    return {
      tabs: [
        { name: "Главная", href: "/home/booty" },
        { name: "Продукция", href: "/production" },
        { name: "Добыча", href: "/booty" },
        { name: "Благоустройство", href: "/improvement" },
        { name: "О компании", href: "/about" },
      ],
      links: [
        {
          href: "tel:8-800-123-123-45",
          title: "8 800 123 123 45",
        },
        {
          href: "mailto:vlad@htmlbook.ru",
          title: "mezhregionstroy-1@bk.ru",
        },
      ],
    };
  },
};
</script>
