<template>
  <router-link :to="btn_href" class="yellow-btn link">{{ btn }}</router-link>
</template>

<script>
export default {
  name: "yellowBtn",
  props: ["btn", "btn_href"],
};
</script>
