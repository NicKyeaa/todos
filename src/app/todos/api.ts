const baseURL = 'http://localhost:3500';

export const getAllTodos = async () => {
  const res = await fetch(`${baseURL}/todos`, {
    cache: 'no-store',
  });
  const todos = await res.json();
  return todos;
};
