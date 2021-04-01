<template>
  <div>
    {{ user.name }} / {{ user.address }}
    <br />
    <input type="text" v-model="myUser.name" />
    <br />
    <input type="text" v-model="myUser.address" />
    <br />
    <button type="button" @click="updateUser">update</button>
    <button type="button" @click="asyncUpdate">asyncUpdate</button>
    <br />
    <span v-if="premissionGetter(1)">用户权限为1显示</span>
    <br />
    <span v-if="premissionGetter(2)">用户权限为2显示</span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { User } from "@/datasource/Types";
import { GETTER_PREMISSION, UPDATE_USER } from "@/store/VuexTypes";

function useAsyncUpdateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpdate = () =>
    store.dispatch(UPDATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address,
      level: store.state.user?.level
    } as User);
  return {
    asyncUpdate
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = computed(() => store.state.user);
    const myUser = ref<User>({});
    const updateUser = () => {
      store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address,
        level: store.state.user?.level
      } as User);
    };
    const { asyncUpdate } = useAsyncUpdateUser(myUser, store);
    const premissionGetter = computed(() => store.getters[GETTER_PREMISSION]);
    return {
      updateUser,
      user,
      myUser,
      asyncUpdate,
      premissionGetter
    };
  }
});
</script>
