<template>
<nav class="navbar">
    <div class="menu-text">
      <h1>{{ textTitle }}</h1>
    </div>
    <ul class="nav-links">
      <li><button @click="filterGroup(null)" >All</button></li>
      <li><button @click="filterGroup('Milks & Dairies')" >Milks & Dairies</button></li>
      <li><button @click="filterGroup('Coffees & Teas')" >Coffees & Teas</button></li>
      <li><button @click="filterGroup('Pet Foods')" >Pet Foods</button></li>
      <li><button @click="filterGroup('Meats')" >Meats</button></li>
      <li><button @click="filterGroup('Vegetables')">Vegetables</button></li>
      <li><button @click="filterGroup('Fruits')">Fruits</button></li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    textTitle: String,
  },
  methods: {
    filterGroup(group){
      this.$emit('groupSelected', group);
    }
  }
};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
.navbar .menu-text {
  font-family: "Quicksand";
  font-size: 22px;
}
.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 5px;
  font-family: "Lato";
  font-size: 18px;
  
}
.navbar .nav-links button {
  color: #000000;
  background-color: transparent;
  width: 110px;
  font-size: 14px;
}
.navbar .nav-links button:hover{
  background-color: #537637;
  color: white;
  transition: ease-in-out 0.2s;
}
</style>