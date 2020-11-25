<template>
  <div class="contacts page-style">
    <div class="page-content">
      <pagesLinks :page_main="page_main" />
      <p class="main-headline">{{ page_main }}</p>
      <ul class="links-list list">
        <li v-for="link in links" class="links-list-item" :key="link.id">
          <a class="link" :href="link.href">{{ link.title }}</a>
        </li>
      </ul>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.8677687873824!2d37.69206921591604!3d55.81289598056951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535b3fabf4a97%3A0x99e44cc6be8f0165!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgNiDRgdGC0YDQvtC10L3QuNC1IDIsINCc0L7RgdC60LLQsCwgMTA3NTY0!5e0!3m2!1sru!2sru!4v1606128752721!5m2!1sru!2sru"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    </div>
    <mainFooter />
    <div class="home-wrapper home-wrapper-info">
      <footerInfo />
    </div>
  </div>
</template>

<script>
import pagesLinks from "@/components/PagesLinks";
import mainFooter from "@/components/Footer";
import footerInfo from "@/components/FooterInfo";

export default {
  components: {
    pagesLinks,
    mainFooter,
    footerInfo,
  },

  methods: {
    changeProduct: function (event, direction, start) {
      document.querySelectorAll(".products-list-item").forEach(function (coop) {
        if (coop.id === event.target.id) {
          coop.classList.add("none");
          var nextCoop = document.getElementById(
            "prod" + (Number(coop.id.substring(4, 5)) + direction)
          );
          if (!nextCoop) {
            nextCoop = document.getElementById("prod" + start);
          }
          nextCoop.classList.remove("none");
        }
      });
    },
  },

  data() {
    return {
      page_main: "Контакты",

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
