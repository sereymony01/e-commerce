<template>
  <div class="promotion-banner-list">
    <PromotionBanner
      v-for="(banner, index) in banners"
      :key="index"
      :title="banner.title"
      :description="banner.description"
      :imageSrc="banner.imageSrc"
      :bgColor="banner.bgColor"
      :bgBtnColor="banner.bgBtnColor"
      :label="banner.label" />
  </div>
</template>
<script>
import PromotionBanner from "@/Components/PromotionBanner.vue";
export default {
  components: { PromotionBanner },
  data() {
    return {
      banners: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          description: "Try it!",
          imageSrc: "./public/images/OnionNew.png",
          bgColor: "#F0E8D5",
          bgBtnColor: "#36b37e",
          label: "Shop Now",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          description: "Try it!",
          imageSrc: "./public/images/myStraw.png",

          bgColor: "#F3E8E8",
          bgBtnColor: "#36b37e",
          label: "Shop Now",
        },
        {
          title: "The best Organic Products Online",
          description: "Try it!",
          imageSrc: "./public/images/allveg.png",
          bgColor: "#E7EAF3",
          bgBtnColor: "#FDC040",
          label: "Shop Now",
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
  /* justify-content: space-around; */
  /* padding: 20px; */
  /* background-color: #f0f2f5; */
}
</style>
