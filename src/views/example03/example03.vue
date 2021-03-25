<template>
  <div>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button">提交</button>
    </form>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, Ref } from "vue";
import { User, Course } from "@/datasource/Types";
import { listTitles, listCourses } from "@/datasource/DataSource";
interface VFile {
  fileName: string;
  fileSize: string;
}
function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name;
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)} MB`;
  };
  return {
    fileChange
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const file = ref({ fileName: "", fileSize: "" });
    const titles = listTitles();
    const courses = listCourses();
    const { fileChange } = useFile(file);
    return {
      user,
      titles,
      courses,
      file,
      fileChange
    };
  }
});
</script>
