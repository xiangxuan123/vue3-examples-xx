<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router" :key="$route.path" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/sidebar.vue";
export default defineComponent({
  components: { sidebar }
});
</script>
<style>
#app {
  margin: 10px;
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
  border-radius: 5px;
  margin: 0 5px;
}
</style>
