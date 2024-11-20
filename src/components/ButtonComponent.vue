<template>
  <button :style="{ backgroundColor: buttonColor }">
    <span>Shop Now</span> <i class="fa-solid fa-arrow-right"></i>
  </button>
</template>

<script>
export default {
  props: {
    buttonColor: String,
  },
};
</script>

<style>
button {
  font-size: 12px;
  font-family: "Quicksand";
  color: white;
  width: 6.785em;
  height: 31px;
  border-radius: 5px;
  border-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
</style>