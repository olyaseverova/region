<template>
  <div class="home-wrapper home-wrapper-top">
    <div class="home-wrapper-square"></div>
    <article class="home-content">
      <h1 class="home-headline">{{ top_headline }}</h1>
      <p class="p">
        {{ top_text }}
      </p>
      <p class="p-mob">{{ top_text_mob }}</p>
      <a
        :to="btn_href"
        class="yellow-btn link"
        @click="scroll($event, '#form')"
        >{{ btn }}</a
      >
    </article>
  </div>
</template>

<script>

export default {
  name: "mainTop",
  props: ["top_headline", "top_text", "top_text_mob"],

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
      btn: "Заказать услугу",
      btn_href: "/1",
    };
  },
};
</script>
