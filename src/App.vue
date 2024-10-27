<template>
  <!-- Category List -->

  <div class="product-list">
    <product-category
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :items="product.items"
      :imageSrc="product.imageSrc" />
  </div>

  <!--Promotion List  -->

  <RouterView />
</template>

<script>
import ProductCategory from "./Components/ProductCategory.vue";

export default {
  components: {
    ProductCategory,
  },

  data() {
    return {
      products: [
        { title: "Buger", items: 14, imageSrc: "@/assets/Hamburger.svg" },
        { title: "Peach", items: 17, imageSrc: "@/assets/Peach.svg" },
        { title: "Organic Kiwi", items: 21, imageSrc: "@/assets/Kiwi.svg" },
        { title: "Red Apple", items: 25, imageSrc: "@/assets/RedApple.svg" },
        { title: "Snack", items: 34, imageSrc: "@/assets/snacks.svg" },
        { title: "Black Plum", items: 25, imageSrc: "@/assets/BlackPulm.svg" },
        { title: "Vegetables", items: 63, imageSrc: "@/assets/Vegetable1.svg" },
        { title: "Headphone", items: 53, imageSrc: "@/assets/HeadPhone.svg" },
        {
          title: "Cake and Milk",
          items: 53,
          imageSrc: "./assets/CakeAndMilk.avg",
        },

        { title: "Orange", items: 63, imageSrc: "./assets/Orange.svg" },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  overflow-x: auto;
  padding: 20px;
  background-color: #333;
}
.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 8px;
}
</style>
