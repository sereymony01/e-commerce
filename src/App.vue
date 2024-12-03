<template>
  <div>
    <MenuComponent
      v-for="menu in menus.filter((menu) => menu.id !== 2)"
      :key="menu.id"
      :textTitle="menu.textTitle"
      v-bind="menu"
      @groupSelected="updateCategoryGroup"
    />
  </div>
  <div class="row-1">
    <CategoryComponent
      v-for="category in categories"
      :key="category.id"
      :image="category.image"
      :name="category.name"
      :productCount="category.productCount"
      :color="category.color"
    />
  </div>
  <div class="row-2">
    <PromotionComponent
      v-for="promotion in promotions"
      :key="promotion.id"
      :color="promotion.color"
      :title="promotion.title"
      :image="promotion.image"
      :buttonColor="promotion.buttonColor"
    />
  </div>
  <div>
    <MenuComponent
      v-if="menus.find((menu) => menu.id === 2)"
      :key="menus.find((menu) => menu.id === 2).id"
      :textTitle="menus.find((menu) => menu.id === 2).textTitle"
      v-bind="menus.find((menu) => menu.id === 2)"
      @groupSelected="updateProductGroup"
    />
  </div>
  <div class="row-3">
    <ProductComponent
      v-for="product in productsByGroup"
      :key="product.id"
      :name="product.name"
      :rating="product.rating"
      :size="product.size"
      :images="product.image"
      :price="product.price"
      :promotionAsPercentage="product.promotionAsPercentage"
      :categoryId="product.categoryId"
      :instock="product.instock"
      :coundSold="product.countSold"
      :group="product.group"
    />
  </div>
</template>

<script>
import CategoryComponent from "./components/CategoryComponent.vue";
import PromotionComponent from "./components/PromotionComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
// import axios from "axios";
import MenuComponent from "./components/MenuComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";
import { useProductStore } from "./stores/Product";
import { mapState } from "pinia";
export default {
  components: {
    CategoryComponent,
    PromotionComponent,
    ButtonComponent,
    MenuComponent,
    ProductComponent,
  },
  
  data() {
    return {
      currentGroupname: "Group A",
      currentProductGroup: null, //For product filtering
      currentCategoryGroup:null, //For Category filtering
      menus: [
        {
          id: 1,
          textTitle: "Featured Categories",
        },
        {
          id: 2,
          textTitle: "Popular Component",
        },
      ],
    };
  },
  methods: {},
  methods: {
    updateCategoryGroup(group){
      this.currentCategoryGroup = group || null;
    },
    updateProductGroup(group){
      this.currentProductGroup = group || null;
    }
  },
  mounted() {
    const productStore = useProductStore();
    productStore.fetchCategories();
    productStore.fetchPromotions();
    productStore.fetchGroup();
    productStore.fetchProducts();
  },
  computed: {
    // Map state and getters from the Pinia store
    ...mapState(useProductStore, {
      // Map the getter getPopularPRoduct to popularProducts
      popularProducts: "getPopularProduct",
      // Dynamically call getCategoriesByGroup with currentGroupName
      categories(store) {
        return store.getCategoriesByGroup(this.currentGroupname);
        if (!this.currentCategoryGroup) {
          // If no group is selected, return all categories
          return store.categories;
        }
        return store.getCategoriesByGroup(this.currentCategoryGroup);
      },
      // Dynamically call getProductsByGroup with currentGroupName
      productsByGroup(store) {
        return store.getProductsByGroup(this.currentGroupname);
        // return store.getProductsByGroup(this.currentGroupname);
        
        if (!this.currentProductGroup) {
          return store.products;
        }
        return store.getProductsByGroup(this.currentProductGroup);
      },
      // Dynamically call getProductsByCategory
      getProductsByCategory(store){
      getProductsByCategory(store) {
        return store.getProductsByCategory;
      },
      // Get all products directly from the state
      allProducts(store) {
        return store.products;
      },
      // products(store) {
      //   return store.products;
      // },
      // categories(store){
      //   return store.categories;
      // },
      promotions(store) {
        return store.promotions;
      },
    }),
  },
};
</script>

<style>
.row-1,
.row-2 {
.row-2,
.row-3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>