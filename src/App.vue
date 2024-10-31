<template>
  <div>
    <product-categories />
    <promotion-banners />
  </div>

  <RouterView />
</template>

<script>
import ProductCategories from "./Views/ProductCategories.vue";
import PromotionBanners from "./Views/PromotionBanners.vue";

export default {
  components: {
    ProductCategories,
    PromotionBanners,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
html {
  background-color: rgb(255, 255, 255);
}
</style>
