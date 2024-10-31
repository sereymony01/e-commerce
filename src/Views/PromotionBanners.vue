<template>
  <div class="promotion-banner-list">
    <PromotionBanner
      v-for="(banner, index) in promotions"
      :key="index"
      :title="banner.title"
      :image="banner.image"
      :color="banner.color"
      :buttonColor="banner.buttonColor" />
  </div>
</template>
<script>
import PromotionBanner from "@/Components/PromotionBanner.vue";
export default {
  components: { PromotionBanner },
  data() {
    return {
      promotions: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          image: "./public/images/OnionNew.png",
          color: "#F0E8D5",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          description: "Try it!",
          image: "./public/images/myStraw.png",
          color: "#F3E8E8",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "The best Organic Products Online",
          description: "Try it!",
          image: "./public/images/allveg.png",
          color: "#E7EAF3",
          buttonColor: "#FDC040",
          url: "https://www.google.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.promotion-banner-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
