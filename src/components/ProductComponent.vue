

<div class="container">
    <div
      v-if="badgeText"
      class="badge"
      :style="{ backgroundColor: badgeColor }"
    >
      {{ badgeText }}
    </div>
    <img
      class="product-image"
      :src="'http://localhost:3000/' + parsedImages[0]"
      alt=""
    />
    <div class="product-info">
      <h3 class="brand">Hodo Foods</h3>
      <p class="product-name">{{ name }}</p>
      <div class="rating">      
      <span v-for="n in Math.round(rating)" :key="n">
          <i class="ri-star-fill star-icon"></i>
        </span>
        <span class="rating-value">({{ rating }}.00)</span>
      </div>
      <p class="weight">{{ size }}</p>
      <div class="price-container">
        <div class="price">
          <span class="current-price">$ {{ price }}</span>
          <span v-if="promotionAsPercentage > 0" class="old-price"
            >$ {{ oldPrice.toFixed(2) }}</span
          >
        </div>
        <div class="button-container">
          <button
            v-if="!showQuantitySelector"
            @click="toggleQuantitySelector"
            class="add-button"
          >
            Add +
          </button>
          <div v-else class="quantity-selector">
            <span class="quantity">{{ quantity }}</span>
            <div class="controls">
              <button class="increase" @click="increaseQuantity">
                <i class="ri-arrow-up-s-line"></i>
              </button>
              <button class="decrease" @click="decreaseQuantity">
                <i class="ri-arrow-down-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    rating: Number,
    size: String,
    images: String,
    price: Number,
    promotionAsPercentage: Number,
    categoryId: Number,
    instock: Number,
    countSold: Number,
    group: String,
  },
  data() {
    return {
      customBadge: "Hot",
      showQuantitySelector: false,
      quantity: 1,
    };
  },
  methods: {
    toggleQuantitySelector() {
      this.showQuantitySelector = true;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
  computed: {
    oldPrice() {
      return this.price / (1 - this.promotionAsPercentage / 100);
    },
    parsedImages() {
      return JSON.parse(this.images);
    },
    badgeText() {
      if (
        typeof this.promotionAsPercentage === "number" &&
        this.promotionAsPercentage > 0
      ) {
        return `-${this.promotionAsPercentage} %`; // Display discount badge
      } else if (this.promotionAsPercentage === 0) {
        return Math.random() > 0.5 ? "Sale" : "Hot"; //Display randomly between Sale and Hot
      }
      return null;
    },
    badgeColor() {
      if (this.promotionAsPercentage > 0) {
        return "#3bb77e";
      } else if (this.promotionAsPercentage === 0) {
        return this.badgeText === "Sale" ? "#ffa500" : "#fd6e6e";
      }
      return "transparent";
    },
  },
};
</script>
<style scoped>
.container {
  width: 250px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}
.badge {
  position: absolute;
  top: 20px;
  left: 0px;
  background: #3bb77e;
  width: 60px;
  height: 30px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  color: #ffffff;
  font-family: "Lato";
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-image {
  width: 75%;
  height: 35%;
  margin-top: 40px;
  margin-bottom: 10px;
}
.product-info {
  text-align: left;
}
.brand {
  font-size: small;
  font-family: "Lato";
  font-weight: 600;
  color: #7e7e7e7e;
}
.product-name {
  font-family: "Quicksand";
  font-weight: bold;
  margin: 5px 0;
}
.rating {
  display: flex;
  align-items: center;
  color: #7e7e7e;
}
.rating-value {
  font-family: "Lato";
  margin-left: 10px;
}
.rating .star-icon {
  color: #fdc040;
}
.weight {
  color: #7e7e7e;
  font-family: "Lato";
}
.price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  font-family: "Quicksand";
}
.current-price {
  color: #3bb77e;
  font-weight: bold;
  font-size: larger;
}
.old-price {
  text-decoration: line-through;
  color: #7e7e7e;
  font-size: smaller;
}
.button-container {
  font-family: "Quicksand";
}
.add-button {
  background-color: #def9ec;
  color: #3bb77e;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-in-out, box-shadow 0.3s ease;
}
.add-button:hover {
  background-color: #a5e8b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.add-button:active {
  background-color: #8fd4a4;
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.add-button:focus {
  outline: none;
}
.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  padding: 5px 10px;
  border: 2px solid #28a745;
  border-radius: 5px;
  font-size: 16px;
  color: #28a745;
  font-weight: bold;
  transition: border-color 0.3s, transform 0.2s ease-in-out, box-shadow 0.3s ease;
  position: relative;
}
.quantity {
  text-align: center;
  width: 25px;  /* Ensure enough space for the quantity number */
}
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px; /* Space between the buttons */
  position: absolute;
}
.controls button {
  background: none;
  border: none;
  color: #28a745;
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  transition: color 0.3s, transform 0.2s ease-in-out;
  height: 25px;
}
.controls button:hover {
  color: #218838;
  transform: scale(1.2);
}
.controls button:active {
  color: #1c7430;
  transform: scale(1);
}
</style>