<template>
  <div id="app">
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li>
        <router-link to="/example02">
          setup(ref computed watch)
        </router-link>
      </li>
      <li><router-link to="/example03">数据绑定</router-link></li>
      <!-- Homework -->
      <hr />
      <li><router-link to="/homework01">homework01</router-link></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
