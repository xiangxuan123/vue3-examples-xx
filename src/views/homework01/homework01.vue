<template>
  <div id="red-border">
    <span :style="{ color: colorPoint }">{{ sumPoint }}</span>
    /17.5
    <br />
    <template v-for="(c, index) of courses" :key="index">
      <label>
        <input type="checkbox" v-model="scheckboxRef" :value="c" />
        {{ c.name }}-{{ c.point }}({{ c.term }})
      </label>
      <br />
    </template>
  </div>
  <div id="red-border">
    <br />
    <template v-for="(c, index) of scheckboxRef" :key="index">
      <label>{{ c.name }}-{{ c.point }}({{ c.term }})</label>
      <br />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Course } from "@/views/homework01/Type-homework";
import { listCourses } from "@/views/homework01/homeworkData";
const selectedCourses: Course[] = [];
export default defineComponent({
  setup() {
    const scheckboxRef = ref<Course[]>(selectedCourses);
    const courses = listCourses().sort((a, b) => {
      return a.term - b.term;
    });
    const sumPoint = ref(0);
    const colorPoint = ref("red");
    watch(scheckboxRef, () => {
      sumPoint.value = 0;
      scheckboxRef.value.forEach(
        c => (sumPoint.value = sumPoint.value + c.point)
      );
      if (sumPoint.value >= 17.5) colorPoint.value = "green";
      scheckboxRef.value.sort((a, b) => {
        return a.term - b.term;
      });
    });
    return {
      courses,
      scheckboxRef,
      sumPoint,
      colorPoint
    };
  }
});
</script>
<style scoped>
#red-border {
  border: 1px solid red;
  padding-left: 3px;
}
</style>
