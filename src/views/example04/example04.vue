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
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { User } from "@/datasource/Types";
import { UPDATE_USER } from "@/store/VuexTypes";

function useAsyncUpdateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpdate = () =>
    store.dispatch(UPDATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address
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
        address: myUser.value.address
      } as User);
    };
    const { asyncUpdate } = useAsyncUpdateUser(myUser, store);
    return {
      updateUser,
      user,
      myUser,
      asyncUpdate
    };
  }
});
</script>
