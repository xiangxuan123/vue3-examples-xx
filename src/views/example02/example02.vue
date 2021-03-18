<template>
  <div>
    <h1>composition</h1>
    <h1>ref()</h1>
    <p>
      响应式属性messageRef: {{ messageRef }}
      <br />
    </p>
    <button type="button" @click="changeMessage">changeMessage</button>
    <button type="button" @click="changeUserRef">changeUserRef</button>
    <br />
    {{ UserRef?.name }} / {{ UserRef?.insertTime }} / {{ UserRef?.addAddress }}
    <hr />
    <h1>computed()</h1>
    <p>
      computed()函数，声明计算属性，对象改变重新计算
      <br />
      {{ userComputed }}
    </p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, Ref } from "vue";
import { User } from "@/datasource/Types";
function useMessage(msg: Ref<string>) {
  const changeMessage = () => (msg.value = "MessageChanged");
  return {
    changeMessage
  };
}
function useUser(user: Ref<User>, user2: User) {
  const userComputed = computed(() => user.value.insertTime?.replace("T", " "));
  const changeUserRef = () => {
    setTimeout(() => {
      user.value = user2;
    }, 1000);
  };
  watch(user, (newUser, oldUser) => alert(`用户名被改为：${newUser.name}`));
  return {
    userComputed,
    changeUserRef
  };
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "Xiang",
      insertTime: "2021-03-18T16:05:37"
    };
    const userAsync: User = {
      name: "XX",
      insertTime: "2022-04-29T17:25:46"
    };
    const messageRef = ref<string>("hello world");
    const UserRef = ref<User>(user);
    const { changeMessage } = useMessage(messageRef);
    const { changeUserRef, userComputed } = useUser(UserRef, userAsync);
    return {
      messageRef,
      UserRef,
      userComputed,
      changeUserRef,
      changeMessage
    };
  }
});
/*function useMessage(msg: Ref<string>) {
    const reversMessage = computed(() => msg.v)
  }*/
</script>
