<template>
  <div class="about page-style">
    <div class="page-content-about">
      <pagesLinks :page_main="page_main" />
      <p class="main-headline">О компании</p>
      <div class="about-info">
        <p class="about-info-text">
          Мы ведем деятельность с 2013 года и являемся официальными
          представителями 4 крупных месторождений гранита:
        </p>
        <p class="about-info-text">
          - <b>Цветок Урала</b> (г.Верхний Уфалей, Челябинская область)
        </p>
        <p class="about-info-text">
          - <b>Западно-Султаевское</b> (Сосновский р-н, Челябинская область)
        </p>
        <p class="about-info-text">
          - <b>Таркинское</b> (Кушва, Свердловская область)
        </p>
        <p class="about-info-text">
          - <b>Кунгурское</b> (Свердловская область)
        </p>
        <p class="about-info-text">
          Поставляем продукцию в Москву и по всей Росии, являемся одним из
          главных поставщиков гранита для проекта “Моя улица”.
        </p>
      </div>
      <ul class="topics-list list">
        <li v-for="topic in topics" class="topics-list-item" :key="topic.id">
          {{ topic }}
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

  data() {
    return {
      page_main: "О компании",

      topics: [
        "Мы используем итальянские станки и другое профессиональное оборудование, чтобы делать брусчатку, плиты мощения, бордюры и щебень по нормам ГОСТа.",
        "Собственная сырьевая база и просторные складские помещения позволяют оперативно отгружать изделия из гранита в промышленных масштабах:  до 30 000 м2 брусчатки/ плит мощения и до 20 000 п.м бордюров каждый месяц.",
      ],
    };
  },
};
</script>
