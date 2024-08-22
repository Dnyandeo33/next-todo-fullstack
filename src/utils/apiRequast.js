import axios from "axios";

export const getTodo = async () => {
    const res = await axios.get('/api/todo/');
    return res.data;
};

export const getTodoById = async (id) => {
    const res = await axios.get(`/api/todo/${id}`)
    return res.data
}

export const removeTodo = async (id) => {
    const res = await axios.delete(`/api/todo/${id}`);
    return res.data;
};

export const createTodo = async (newTodo) => {
    const res = await axios.post('/api/todo', newTodo);
    return res.data;
}

export const updateTodo = async (updatedTodo) => {
    const res = await axios.put(`/api/todo/${updatedTodo.id}`, updatedTodo);
    return res.data;
}