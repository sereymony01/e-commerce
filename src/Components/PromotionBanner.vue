<template>
  <div :style="{ backgroundColor: color }" class="promotion-banner">
    <div class="Banner-content">
      <h2>{{ title }}</h2>
      <!-- <p>{{ description }}</p> -->
      <!-- <button :style="{ backgroundColor: buttonColor }" @click=" ">Shop Now <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</button> -->

      <shop-button :bg-btn-color="buttonColor" :message="title" />
    </div>
    <div class="bannerImg">
      <img :src="image" :alt="title" class="banner-image" />
    </div>
  </div>
</template>

<script>
import ShopButton from "./ShopButton.vue";

export default {
  components: {
    ShopButton,
  },
  props: {
    title: String,
    image: String,
    color: String,
    buttonColor: String,
    url: String,
  },
  method: {
    shopNow() {
      alert("Redirecting to shop!");
    },
  },
};
</script>

<style scoped>
.Banner-content {
  width: inherit;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
}
.promotion-banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 10px;
}

.bannerImg {
  /* width: 300px; */
  height: 300px;
  display: flex;
  align-items: end;
}
.banner-image {
  width: 180px;
  height: 180px;
  /* object-fit: cover; */
  margin-right: 20px;
}
.banner-content {
  flex: 1;
}

button {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-items: center;
  padding: 8px 16px;
  color: white;
  /* background-color: #36b37e; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
