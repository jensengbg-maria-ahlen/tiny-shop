<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product.index">
        <h3>Name: {{ product.name }}</h3>
        <h4>Price: {{ product.price }} :-</h4>
      </li>
      <button @click="reducePrice">Reduce Price</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-one',
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    reducePrice() {
      this.$store.commit('reducePrice')
    }
  }
}
</script>

<style lang="scss">
#product-list-one {
  background: #47ac96;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  h2 {
      color: white;
  }
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
