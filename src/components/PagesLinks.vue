<template>
  <div class="pages-links">
    <router-link :to="page_href" class="page-link link">{{
      page_name
    }}</router-link>
    <p class="p">/</p>
    <p class="page-main p">{{ page_main }}</p>
  </div>
</template>

<script>
export default {
  name: "pagesLinks",
  props: ["page_main"],

  data() {
    return {
      page_href: "/home/booty",
      page_name: "Главная",
    };
  },
};
</script>
