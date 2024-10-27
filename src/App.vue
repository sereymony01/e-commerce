<template>
 <div>

  <product-categories/>
  <promotion-banners/>

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
    return {
     

    
    };
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:black;
  
}
body{
  background-color: rgb(198, 198, 198);
}

</style>
