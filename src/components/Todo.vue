<template>
<div class="mb-3 mt-4 mx-auto w-50">
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Add New Todo" aria-label="First name" v-model="task">
    <div class="d-flex align-items-center justify-content-center">
    <button class="btn btn-primary mt-3" @click="handleTask" :disabled="task.length === 0">Submit</button>
    </div>
  </div>
</div>
 
  
   <div v-if="todos.length === 0">
    <div class="text-capitalize text-center mt-5 py-2">
      <h1>your todo is empty.</h1>
     <h2>please add a todo.</h2>
    </div>
     
   </div>
    
    <div v-else>
   <div class="mt-4 py-4">
    <div class="d-flex align-items-center justify-content-center gap-3 flex-column">
   <div v-for="todo in todos" :key="todo.id">
  
     <div class="card bg-light text-dark">
  <div class="card-body d-flex align-items-center justify-content-center gap-4 px-4">
    
 <input type="checkbox" @click="Togglecheck(todo)">

         <h1 :class="{active: todo.completed}">{{ todo.title }}</h1>
         <Icon icon="ic:twotone-delete" width="45" height="100" @click="DeleteTask(todo.id)"/>
   
  </div>
   </div>
</div>
   </div>
  </div>
  </div>
</div>

</template>

<script>
  import { Icon } from '@iconify/vue'
export default {
 name: 'Todo',
 components: {
    Icon,
  },
 data(){
  return{
   task: '',
   todos: []
  }
 },

 methods: {
  handleTask(){
   if(this.task.length > 0){
     this.todos.push({
       id: this.todos.length + 1,
       title: this.task,
       completed: false
     })
   }
    this.task = ''
  },

  Togglecheck(todo){
   todo.completed = !todo.completed
  },
  DeleteTask(itemID){
   this.todos = this.todos.filter((item) => item.id !== itemID)
  }
 }
}
</script>

<style>
.active{
  text-decoration: line-through;
}   
</style>