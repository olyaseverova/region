<template>
  <header class="main-header" id="header">
    <div class="header-hamburger">
      <input
        type="checkbox"
        id="checkbox"
        class="checkbox visuallyHidden"
        @click="showTabs"
      />
      <label for="checkbox">
        <div class="hamburger hamburger3">
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar3"></span>
          <span class="bar bar4"></span>
        </div>
      </label>
    </div>

    <ul class="tabs-list list none">
      <li v-for="tab in tabs" class="tabs-list-item header-tabs" :key="tab.id">
        <router-link :to="tab.href" class="tab-link link" @click="hideTabs">
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
  </header>
  <router-view />
</template>

<script>
export default {
  methods: {
    showTabs: function () {
      var tabsList = document.querySelector(".tabs-list");
      tabsList.classList.toggle("none");
    },

    hideTabs: function () {
      var tabsList = document.querySelector(".tabs-list");
      tabsList.classList.add("none");
    },
  },
  
  data() {
    return {
      tabs: [
        { name: "Главная", href: "/home/booty" },
        { name: "Продукция", href: "/production" },
        { name: "Добыча", href: "/booty" },
        { name: "Благоустройство", href: "/improvement" },
        { name: "Строительство", href: "/construction" },
        { name: "О компании", href: "/about" },
        { name: "Контакты", href: "/contacts" },
      ],
    };
  },
};
</script>
