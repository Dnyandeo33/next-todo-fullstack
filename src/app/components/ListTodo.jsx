import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import RemoveTodo from './RemoveTodo';

const ListTodo = ({ todo }) => {
  const [listOFTodo, setListOFTodo] = useState([]);

  const getTodo = async () => {
    try {
      const res = await axios.get('/api/todo/');
      const data = res.data;
      setListOFTodo(data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/todo/${id}`);
      if (res.status === 200) {
        setListOFTodo(listOFTodo.filter((todo) => todo._id !== id));
        getTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {listOFTodo.map((todo) => (
        <div
          key={todo._id}
          className="flex items-center justify-between w-full p-4 border rounded-xl border-slate-400"
        >
          <div className="flex flex-col justify-center ">
            <h2 className="text-xl font-medium capitalize text-slate-800 ">
              {todo.title}
            </h2>
            <p className="text-sm capitalize text-slate-600">
              {todo.description}
            </p>
          </div>
          <div className="flex justify-start gap-2">
            <Link
              href={`/edit/${todo._id}`}
              className="px-4 py-1 text-orange-400 border rounded-md border-slate-400 "
            >
              Edit
            </Link>
            <RemoveTodo id={todo._id} handleDelete={handleDelete} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTodo;
