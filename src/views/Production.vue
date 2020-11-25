<template>
  <div class="production page-style">
    <div class="page-content">
      <pagesLinks :page_main="page_main" />
      <p class="main-headline">Наша продукция</p>
      <ul class="products-list list">
        <li
          v-for="product in products"
          class="products-list-item animate__animated animate__fadeIn"
          :key="product.id"
          :id="product.id"
          :class="{ none: product.status }"
        >
          <button
            class="arrow-button"
            type="button"
            @click="changeProduct($event, -1, 6)"
            :id="product.id"
          ></button>
          <p class="products p">{{ product.name }}</p>
          <button
            class="arrow-button"
            type="button"
            @click="changeProduct($event, 1, 1)"
            :id="product.id"
          ></button>
        </li>
      </ul>
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
      page_main: "Продукция",

      products: [
        { name: "Тактильные плиты", status: false, id: "prod1" },
        { name: "Пандусы", status: true, id: "prod2" },
        { name: "Угловые скамейки", status: true, id: "prod3" },
        { name: "Радиальные бордюры", status: true, id: "prod4" },
        { name: "Плиты-скалы", status: true, id: "prod5" },
        { name: "Лотки", status: true, id: "prod6" },
      ],
    };
  },
};
</script>
