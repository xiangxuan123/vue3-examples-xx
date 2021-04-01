<template>
  <div>
    <ul>
      <li><router-link to="/homework02/foods">美食</router-link></li>
      |
      <li><router-link to="/homework02/location">本地</router-link></li>
      |
      <li><router-link to="#">跑腿</router-link></li>
    </ul>
    <br />
    <router-link to="/homework02/order">订单:{{ total }}</router-link>
    <br />
    <!-- <router-link to="#">Order</router-link> -->
    <router-view />
  </div>
</template>
<script lang="ts">
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const orders = computed(() => store.state.orders);
    const total = computed(() => {
      let sum = 0;
      orders.value.forEach(o => {
        if (o.item.price != undefined) sum = sum + o.item.price * o.quantity;
      });
      return sum.toFixed(2);
    });
    return {
      total
    };
  }
});
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  display: inline-block;
}
</style>
