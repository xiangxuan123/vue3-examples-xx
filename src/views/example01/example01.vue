<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="change">change</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    title: "Welcome"
  }),
  methods: {
    change() {
      this.$data.title = "Xiang";
    }
  }
});
</script>
<style scoped>
h1 {
  color: red;
}
</style>
