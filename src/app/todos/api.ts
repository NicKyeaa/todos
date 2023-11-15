import { toDo } from '../../../types/todo';
import axios from 'axios';

const baseURL = 'http://localhost:3500';

export const getAllTodos = async () => {
  const res = await fetch(`${baseURL}/todos`, {
    cache: 'no-store',
  });
  const todos = await res.json();
  return todos;
};

export const addToDo = async (toDo: toDo) => {
  const newTodo = await axios.post(`${baseURL}/todos/post`, toDo);
  return newTodo;
};

export const deleteToDo = async (id: string) => {
  await axios.delete(`${baseURL}/todos/${id}`);
};
