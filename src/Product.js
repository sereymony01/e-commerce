state.categories.filter((category) => category.group === groupName);
    },

    /*
      getCategoriesByGroup: (state) => (groupName) => {
        return state.categories.filter(
          (category) => category.groupName === groupName
        );
      },
    */
    // getProductsByGroup(groupName): List all products by group name
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((product) => product.group === groupName);
    },

    /*
      getProductsByGroup: (state) => (groupName) => {
        return state.products.filter(
          (product) => product.groupName === groupName
        );
      },
    */
    // getProductsByCategory(categoryId): List all products by given categoryId
    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.filter((product) => product.categoryId === categoryId);
    },

    /*
      getProductsByCategory: (state) => (categoryId) => {
        return state.products.filter(
          (product) => product.categoryId === categoryId
        );
      },
    */
    // getPopularProducts(): Any product with countSold > 10 is considered popular
  getPopularProducts: (state) => {
    const popular = () => state.products.filter((product) => product.countSold > 10);
    return popular;
  }
    /*
      getPopularProduct: (state) => {
        return state.products.filter((product) => product.countSold > 10);
      },
    */
    getPopularProducts: (state) => {
      const popular = () =>
        state.products.filter((product) => product.countSold > 10);
      return popular;
    },
  },

  actions: {