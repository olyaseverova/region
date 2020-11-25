<template>
  <ul class="arrows-list list">
    <li v-for="arrow in arrows" class="arrows-list-item" :key="arrow.id">
      <router-link :to="arrow" class="arrow link"></router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: "arrows",
  props: ["arrows"],
};
</script>
