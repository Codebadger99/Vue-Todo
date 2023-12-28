<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 15px">
            <div class="card-body p-5">
              <h6 class="mb-3">Awesome Todo List</h6>

              <form
                class="d-flex justify-content-center align-items-center mb-4"
                @submit.prevent
              >
                <div class="form-outline flex-fill">
                  <input
                    type="text"
                    id="form3"
                    class="form-control form-control-lg"
                    v-model="task"
                  />
                  <label class="form-label" for="form3"
                    >What do you need to do today?</label
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-lg ms-2"
                  @click="handleTask(task)"
                  :disabled="task.length === 0"
                >
                  Add
                </button>
              </form>

              <ul class="list-group mb-0">
                <div v-for="todo in todos" :key="todo.id">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                  >
                    <div class="d-flex align-items-center">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        @click="Togglecheck(todo)"
                      />
                      <span :class="{ active: todo.completed }">{{
                        todo.title
                      }}</span>
                    </div>
                    <a data-mdb-toggle="tooltip" @click="DeleteTask(todo.id)">
                      <i class="fas fa-times text-primary"></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      task: "",
    };
  },

  methods: {
    handleTask(item) {
      if (this.task.length > 0) {
        this.$store.commit("addTask", item);
      }
      this.task = "";
      console.log(this.$store.state.todos);
    },

    Togglecheck(todo) {
      todo.completed = !todo.completed;
    },
    DeleteTask(itemID) {
      this.$store.commit("deleteTask", itemID);
    },
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style>
section {
  font-family: "Gochi Hand", sans-serif;
  background-color: #e2d5de;
}

.active {
  text-decoration: line-through;
}
</style>
