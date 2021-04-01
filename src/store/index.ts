import { createStore, MutationTree, ActionTree, GetterTree } from "vuex";
import { User } from "@/datasource/Types";
import * as vxt from "./VuexTypes";
import {
  getShop,
  Item,
  listShops,
  Order,
  Shop
} from "@/views/homework02/homework02";

export interface State {
  user?: User;
  orders: Order[];
  shopList: Shop[];
  shopCache: Shop[];
}

const myState: State = {
  user: {
    name: "Xiang",
    address: "310",
    level: 1
  },
  orders: [],
  shopList: [],
  shopCache: []
};

const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  //homework02
  [vxt.UPDATE_ORDER]: (state, data: Order[]) => (state.orders = data),
  [vxt.SHOP_LIST]: (state, data: Shop[]) => (state.shopList = data)
  // [vxt.GET_SHOPDETAIL]: (state, data: Shop) => state.shopCache.push(data)
};

const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  },
  //homework02
  [vxt.SHOP_LIST]: ({ commit }) => {
    const shoplist = listShops();
    setTimeout(() => commit(vxt.SHOP_LIST, shoplist), 1000);
  },
  [vxt.GET_SHOPDETAIL]: ({ state }, sid: number) => {
    setTimeout(() => {
      const shop = getShop(sid);
      shop && state.shopCache.push(shop);
    }, 1000);
  }
};

const myGetters: GetterTree<State, State> = {
  [vxt.GETTER_PREMISSION]: state => (level: number) =>
    state.user?.level == level
};

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {}
});
