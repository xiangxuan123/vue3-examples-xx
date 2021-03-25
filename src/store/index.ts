import { createStore } from "vuex";
import { User } from "@/datasource/Types";

export interface State {
  user?: User;
}

const myState: State = {
  user: {
    name: "Xiang",
    address: "310"
  }
};

export default createStore({
  state: myState,
  mutations: {},
  actions: {},
  modules: {}
});
