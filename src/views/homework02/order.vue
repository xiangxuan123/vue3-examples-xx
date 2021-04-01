<template>
  <h1>order</h1>
  <div>
    <template v-for="(c, index) of orders" :key="index">
      {{ c.item.name }}/{{ c.quantity }}
      <br />
    </template>
  </div>
</template>
<script lang="ts">
import { Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const orders = computed(() => store.state.orders);
    return { orders };
  }
});
</script>
