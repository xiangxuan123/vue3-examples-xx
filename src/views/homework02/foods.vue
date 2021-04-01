<template>
  <div>
    附近的美食
    <template v-for="(c, index) of shop" :key="index">
      <router-link :to="`shop/${c.id}`" style="text-decoration: none">
        <div id="shoplist">
          <span style="font-weight:bold">{{ c.name }}</span>
          <br />
          评分：{{ c.point }}
        </div>
      </router-link>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { useStore, Store } from "vuex";
import { SHOP_LIST } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const shop = computed(() => {
      if (store.state.shopList.length == 0) {
        store.dispatch(SHOP_LIST);
      }
      return store.state.shopList;
    });
    return {
      shop
    };
  }
});
</script>
<style scoped>
#shoplist {
  display: block;
  margin: 10px auto;
  padding: 0 10px;
  color: black;
}
#shoplist:hover {
  border: 1px solid gray;
  border-radius: 5px;
}
</style>
