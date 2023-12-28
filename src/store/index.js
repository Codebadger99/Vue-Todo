import { createStore } from "vuex";
export default createStore({
  state: {
    todos: [],
  },

  mutations: {
    addTask(state, payload) {
      state.todos.push({
        id: state.todos.length + 1,
        title: payload,
        completed: false,
      });
    },

    deleteTask(state, payload) {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
  },
});
