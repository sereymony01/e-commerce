<template>
  <div class="product-category">
    <img :src="imageSrc" :alt="title" class="project-image" />
    <h3>{{ title }}</h3>
    <p>
      {{ items }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Number,
    imageSrc: String,
  },
};
</script>
<style scoped>
.product-category {
  text-align: center;
  width: 120px;
  padding: 10px;
  background-color: #f0f2f5;
  border-radius: 10px;
  margin: 10px;
}
.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 8px;
}
</style>
