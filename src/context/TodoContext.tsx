import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Todo } from "../types/todo.types";
import * as todoApi from "../api/todo";

interface TodoContextValue {
  todos: Todo[];
  onAddTodo: (todo: Partial<Todo>) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextValue | null>(null);

interface TodoContextProps {
  children: ReactNode;
}

function TodoContextProvider({ children }: TodoContextProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await todoApi.getTodos();
      setTodos(res.data.todos); // Assuming res.data.todos contains the array of todos
    } catch (err) {
      console.log(err);
    }
  };

  const onAddTodo = async (todo: Partial<Todo>) => {
    if (!todo.title) {
      return alert("This is required");
    }
    await todoApi.createTodo(todo);
    fetchTodos();
  };

  const onDeleteTodo = async (id: number) => {
    await todoApi.deleteTodo(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value = { todos, onAddTodo, onDeleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;

export const useTodo = () => {
  const ctx = useContext(TodoContext);

  if (!ctx) {
    throw new Error("useTodo must be used within TodoContextProvider");
  }
  return ctx;
};
