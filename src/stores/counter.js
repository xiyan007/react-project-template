export default {
  state: {
    count: 0,
  },
  reducers: {
    updateCount(state, payload) {
      state.count = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    plus(payload, rootState) {
      this.updateCount(rootState.counter.count + 1);
    },
    minus(payload, { counter: { count } }) {
      this.updateCount(count - 1);
    },
  }),
};
