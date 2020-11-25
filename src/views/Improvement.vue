<template>
  <div class="construction page-style">
    <div class="page-content">
      <pagesLinks :page_main="page_main" />
      <p class="main-headline">{{ page_main }}</p>

      <ul class="carousel-images-list list">
        <li
          v-for="image in images"
          class="carousel-images-list-item none animate__animated animate__fadeIn"
          :key="image.id"
          :id="image.id"
          :class="{ item_img: image.status }"
        >
          <button
            class="arrow-button"
            type="button"
            @click="changeImg($event, -1, 3)"
            :id="image.id"
          ></button>
          <div class="carousel-image"></div>
          <button
            class="arrow-button"
            type="button"
            @click="changeImg($event, 1, 1)"
            :id="image.id"
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
    changeImg: function (event, direction, start) {
      document.querySelectorAll(".carousel-images-list-item").forEach(function (coop) {
        if (coop.id === event.target.id) {
          coop.classList.remove("item_img");
          var nextCoop = document.getElementById(
            "img" + (Number(coop.id.substring(3, 4)) + direction)
          );
          if (!nextCoop) {
            nextCoop = document.getElementById("img" + start);
          }
          nextCoop.classList.add("item_img");
        }
      });
    },
  },

  data() {
    return {
      page_main: "Благоустройство",

      images: [
        { status: false, id: "img1" },
        { status: true, id: "img2" },
        { status: false, id: "img3" },
      ],
    };
  },
};
</script>
