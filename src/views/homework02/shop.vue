<template>
  <div>
    <h3>{{ shop?.name }}</h3>
    <br />
    <template v-for="(c, index) of shop?.items" :key="index">
      <div id="item">
        <div>
          <img v-bind:src="c.url" />
        </div>
        <div>
          {{ c.name }}
          <br />
          价格:{{ c.price }}
          <br />
          月销量:{{ c.sales }}
          <br />
          <button @click="remove(c)">-</button>
          {{ num(c) }}
          <button @click="add(c)">+</button>
        </div>
      </div>
      <br />
    </template>
  </div>
</template>
<script lang="ts">
import { Store, useStore } from "vuex";
import { computed, defineComponent, Ref } from "vue";
import { Item, Order } from "./homework02";
import { GET_SHOPDETAIL, UPDATE_ORDER } from "@/store/VuexTypes";
import { State } from "@/store";
function updateOrder(order: Ref<Order[]>, store: Store<State>) {
  const add = (item: Item) => {
    let flag = false;
    order.value.forEach(o => {
      if (o.item.id == item.id) (flag = true), o.quantity++;
    });
    if (flag == false) {
      order.value.push({ item: item, quantity: 1 });
    }
    store.commit(UPDATE_ORDER, order.value);
  };

  const remove = (item: Item) => {
    order.value.forEach((o, index) => {
      if (o.item.id == item.id) o.quantity--;
      if (o.quantity == 0) order.value.splice(index, 1);
    });
    store.commit(UPDATE_ORDER, order.value);
  };

  return {
    add,
    remove
  };
}
export default defineComponent({
  props: ["sid"],
  setup(props) {
    const store: Store<State> = useStore();
    const orders = computed(() => store.state.orders);

    const shop = computed(() =>
      store.state.shopCache.find(sh => sh.id == props.sid)
    );
    !shop.value && store.dispatch(GET_SHOPDETAIL, props.sid);

    const num = (item: Item) => {
      let number = 0;
      orders.value.forEach((s: Order) => {
        if (s.item.id == item.id) number = s.quantity;
      });
      return number;
    };
    const { add, remove } = updateOrder(orders, store);
    return {
      shop,
      orders,
      num,
      add,
      remove
    };
  }
});
</script>
<style scoped>
img {
  width: 150px;
}
#item {
  padding: 10px 0;
  display: flex;
}
</style>
