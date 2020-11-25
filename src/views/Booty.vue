<template>
  <div class="booty page-style">
    <div class="page-content-about">
      <pagesLinks :page_main="page_main" />
      <p class="main-headline">Добыча</p>
      <div class="about-info">
        <p class="about-info-text">
          Мы добываем 13 видов гранита в 4 крупных месторождениях. Это дает нам
          неограниченные запасы сырья и позволяет сотрудничать с крупными
          строительными холдингами.
        </p>
        <p class="about-info-text">
          Добыча гранита ведется на высококлассном итальянском оборудовании,
          поэтому наша продукция соответствует всем нормам ГОСТа.
        </p>
        <p class="about-info-text">
          Так же мы осуществляем отгрузку и доставку продукции во все регионы
          России розничными и оптовыми партиями (до 200 наименований)
        </p>
      </div>
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
      page_main: "Добыча",
    };
  },
};
</script>
