import axios from "../config/axios";
import { Todo } from "../types/todo.types";

export const getTodos = () => axios.get("/todo"); // ตรวจสอบให้แน่ใจว่าเส้นทางตรงกับ API endpoint

export const createTodo = (todo: Partial<Todo>) => axios.post("/todo", todo); // แก้ URL ให้ถูกต้อง

export const deleteTodo = (id: number) => axios.delete(`/todo/${id}`);
