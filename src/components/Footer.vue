<template>
  <footer class="main-footer" id="form">
    <h2 class="main-headline">Оставьте заявку и мы с вами свяжемся</h2>
    <form class="footer-form" method="POST" action="">
      <input
        class="top-input"
        type="text"
        id="name"
        name="user_name"
        placeholder="ФИО"
        required
        oninvalid="this.setCustomValidity('Заполните поле')"
      />
      <input
        type="tel"
        id="phone"
        name="user_phone"
        class="top-input"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Телефон"
        required
      />
      <input
        class="top-input"
        type="email"
        id="email"
        name="user_mail"
        placeholder="E-mail"
      />
      <fieldset class="footer-fieldset fieldset-height">
        <legend class="footer-fieldset-legend" @click="openService">
          Услуга
        </legend>
        <ul class="services-list list hidden">
          <li
            v-for="service in services"
            class="services-list-item none"
            :key="service.id"
          >
            <label class="service-label" :for="service.id">{{
              service.label
            }}</label>
            <input
              type="radio"
              name="service"
              :value="service.value"
              :id="service.id"
              class="service-input"
              :checked="service.status"
            />
          </li>
        </ul>
      </fieldset>
      <textarea class="footer-textarea" placeholder="Комментарий"></textarea>
      <button type="submit" class="yellow-btn">Отправить</button>
    </form>
  </footer>
</template>

<script>
export default {
  name: "mainFooter",

  methods: {
    openService: function (event) {
      var serviceList = document.querySelector(".services-list");
      var serviceElements = document.querySelectorAll(".services-list-item");
      var fieldsetElement = document.querySelector(".footer-fieldset");
      event.target.classList.toggle("arrow-up");
      serviceList.classList.toggle("hidden");
      serviceList.classList.toggle("shown");

      serviceElements.forEach(function (service) {
        service.classList.toggle("none");
        service.classList.toggle("flex");
      });

      fieldsetElement.classList.toggle("fieldset-height");
    },
  },

  data() {
    return {
      step: 1,

      services: [
        { value: "production", id: "service1", label: "Добыча", status: true },
        {
          value: "improvement",
          id: "service2",
          label: "Благоустройство",
          status: false,
        },
        {
          value: "construction",
          id: "service3",
          label: "Строительство",
          status: false,
        },
        {
          value: "supply",
          id: "service4",
          label: "Поставки материалов",
          status: false,
        },
      ],
    };
  },
};
</script>
