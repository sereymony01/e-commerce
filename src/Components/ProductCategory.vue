<template>
  <div  :style = "{backgroundColor: color}" class="product-category">
    <img :src="image" :alt="name" class="product-image" />
    <h3>{{ name }}</h3>
    <p >
      {{ items }} items
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    productCount: Number,
    image: String,
    color: String,
  },

 
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..1000&display=swap');

.product-category {
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding: 10px;
  background-color: #f0f2f5;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}
.product-category p {
  font-weight: 400;
  color: gray;
}
.product-image {
 
  width: 100px;
  height: 100px;
  margin: 0.5rem;
  
}
</style>
