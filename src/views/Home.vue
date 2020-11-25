<template>
  <div class="home">
    <arrows :arrows="arrows" />
    <article class="home-choice">
      <h2 class="main-headline">Почему стоит выбрать нас</h2>
      <ul class="options-list list">
        <li
          v-for="choice in choices"
          class="options-list-item choice-item"
          :key="choice.id"
        >
          <p class="options">{{ choice }}</p>
        </li>
      </ul>
    </article>
    <div class="home-wrapper">
      <article class="home-service">
        <h2 class="main-headline">Какие услуги мы предоставляем</h2>
        <ul class="options-list list">
          <li
            v-for="service in services"
            class="options-list-item service-item"
            :key="service.id"
          >
            <p class="options">{{ service }}</p>
            <router-link
              :to="btn_service_href"
              class="yellow-btn link"
              @click="scroll($event, '#header')"
              >{{ btn_service }}</router-link
            >
          </li>
        </ul>
      </article>
    </div>
    <article class="home-advantage">
      <h2 class="main-headline">Главные преимущества гранита</h2>
      <div class="advantage-square advantage-square-below"></div>
      <div class="advantage-square advantage-square-higher"></div>
      <div class="home-advantage-content">
        <p class="p">
          <b>Гранит</b> - это строительный материал премиум-класса. Мы выбрали
          использовать гранит для облицовочных и строительных работ по ряду
          причин:
        </p>
        <ul class="reasons-list list">
          <li
            v-for="reason in reasons"
            class="reasons-list-item"
            :key="reason.id"
          >
            <p class="reasons">{{ reason }}</p>
          </li>
        </ul>
      </div>
    </article>
    <div class="home-wrapper">
      <article class="home-sample" id="sample">
        <h2 class="main-headline">Образцы гранита</h2>
        <ul class="options-list list">
          <li
            v-for="sample in samples"
            class="options-list-item samples-item"
            :key="sample.id"
            :class="{ none: sample.status }"
          >
            <p class="options">{{ sample.name }}</p>
          </li>
        </ul>
        <a class="yellow-btn link" href="#sample" @click="changeSamples">{{
          btn_sample
        }}</a>
      </article>
    </div>
    <article class="home-cooperation">
      <h2 class="main-headline">С кем мы сотрудничаем</h2>
      <ul class="cooperations-list list">
        <li
          v-for="cooperation in cooperations"
          class="cooperations-list-item animate__animated animate__fadeIn"
          :key="cooperation.id"
          :id="cooperation.id"
          :class="{ none: cooperation.status }"
        >
          <button
            class="arrow-button"
            type="button"
            @click="changeCoop($event, -1, 3)"
            :id="cooperation.id"
          ></button>
          <p class="cooperations">{{ cooperation.name }}</p>
          <button
            class="arrow-button"
            type="button"
            @click="changeCoop($event, 1, 1)"
            :id="cooperation.id"
          ></button>
        </li>
      </ul>
    </article>
    <div class="home-wrapper">
      <mainFooter />
    </div>
    <div class="home-wrapper home-wrapper-info">
      <footerInfo />
    </div>
  </div>
</template>

<script>
import mainFooter from "@/components/Footer";
import footerInfo from "@/components/FooterInfo";
import arrows from "@/components/Arrows";

export default {
  name: "Home",
  components: {
    mainFooter,
    footerInfo,
    arrows,
  },

  methods: {
    changeCoop: function (event, direction, start) {
      document
        .querySelectorAll(".cooperations-list-item")
        .forEach(function (coop) {
          if (coop.id === event.target.id) {
            coop.classList.add("none");
            var nextCoop = document.getElementById(
              "coop" + (Number(coop.id.substring(4, 5)) + direction)
            );
            if (!nextCoop) {
              nextCoop = document.getElementById("coop" + start);
            }
            nextCoop.classList.remove("none");
          }
        });
    },

    scroll: function (event, elementId) {
      window.scroll({
        left: 0,
        top: document.querySelector(elementId).offsetTop,
        behavior: "smooth",
      });
    },

    changeSamples: function (event) {
      var samples = document.querySelectorAll(".samples-item");
      samples.forEach(function (sample) {
        sample.classList.toggle("none");
      });
      event.target.classList.toggle("yellow-btn-trans");
    },
  },

  data() {
    return {
      btn: "Заказать услугу",
      btn_href: "/home/booty",
      btn_service: "Подробнее",
      btn_service_href: "/improvement",
      btn_sample: "Смотреть ещё",

      arrows: ["/home/booty", "/home/improvement"],

      choices: [
        "Собственное производство",
        "Высокое качество",
        "Большие объемы поставок",
        "Индивидуальный подход",
      ],

      services: [
        "Изделия из гранита",
        "Благоустройство",
        "Поставки строительных материалов",
        "Строительство",
      ],

      reasons: [
        "прочность",
        "долговечность",
        "термостойкость",
        "экологичность",
        "совместимость с другими",
        "видами камня",
        "разнообразие фактур",
        "широкая цветовая палитра",
      ],

      samples: [
        { name: "Сибирский", status: false },
        { name: "Сосновый бор", status: false },
        { name: "Южно-султаевский", status: false },
        { name: "Мансуровский", status: false },
        { name: "Режевский", status: false },
        { name: "Таркинский", status: false },
        { name: "Цветок Урала", status: false },
        { name: "Габбро", status: false },
        { name: "Западно-султаевский", status: false },
        { name: "Малыгинский", status: true },
        { name: "Кунгурский", status: true },
        { name: "Монетный", status: true },
        { name: "Исетский", status: true },
        { name: "Камбулатский", status: true },
        { name: "Малышевский", status: true },
      ],

      cooperations: [
        { name: "CG CAPITAL GROUP", status: false, id: "coop1" },
        {
          name: "Московская Инженерно-Строительная компания",
          status: true,
          id: "coop2",
        },
        {
          name: "ГБУ Города Москвы Автомобильные Дороги",
          status: true,
          id: "coop3",
        },
      ],
    };
  },
};
</script>

