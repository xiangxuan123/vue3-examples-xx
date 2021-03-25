import { createStore, MutationTree, ActionTree } from "vuex";
import { User } from "@/datasource/Types";
import * as vxt from "./VuexTypes";

export interface State {
  user?: User;
}

const myState: State = {
  user: {
    name: "Xiang",
    address: "310"
  }
};

const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data)
};

const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  }
};

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
