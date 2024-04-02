import { defineStore } from "pinia";

interface Todo {
  id: string;
  title: string;
  description: string;
  status: boolean;
  favourited: boolean;
}

const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [] as Todo[],
      favouritedTodos: [] as Todo[],
    };
  },
  
  actions: {
    bindDataToList() {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }

      const storedFavouritedTodos = localStorage.getItem("favouritedTodos");
      if (storedFavouritedTodos) {
        this.favouritedTodos = JSON.parse(storedFavouritedTodos);
      }
    },

    addTodo(todo: Todo): void {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
      if(todo.favourited){
        this.favouritedTodos.push(todo);
        localStorage.setItem("favouritedTodos", JSON.stringify(this.todos));
      }
    },

    removeTodo(todoId: string): void {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
      this.favouritedTodos = this.favouritedTodos.filter(todo => todo.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("favouritedTodos", JSON.stringify(this.favouritedTodos));
    },

    updateTodo(todoId: string, updatedTodo: Todo): void {
      const index = this.todos.findIndex(todo => todo.id === todoId);
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updatedTodo };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }

      const favIndex = this.favouritedTodos.findIndex(todo => todo.id === todoId);
      if (favIndex !== -1) {
        this.favouritedTodos[favIndex] = { ...this.favouritedTodos[favIndex], ...updatedTodo };
        localStorage.setItem("favouritedTodos", JSON.stringify(this.favouritedTodos));
      }
    },

    toggleFavourite(todoId: string): void {
      const index = this.todos.findIndex(todo => todo.id === todoId);
      if (index !== -1) {
        this.todos[index].favourited = !this.todos[index].favourited;
        if (this.todos[index].favourited) {
          this.favouritedTodos.push(this.todos[index]);
        } else {
          this.favouritedTodos = this.favouritedTodos.filter(todo => todo.id !== todoId);
        }
        localStorage.setItem("todos", JSON.stringify(this.todos));
        localStorage.setItem("favouritedTodos", JSON.stringify(this.favouritedTodos));
      }
    },

    toggleStatus(todoId: string): void {
      const index = this.todos.findIndex(todo => todo.id === todoId);
      if (index !== -1) {
        this.todos[index].status = !this.todos[index].status;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }
});

export default useTodosStore;
