import useResources from '@/hooks/useResources';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getTodo, removeTodo } from '../utils/apiRequast';

const ListTodo = () => {
  const { mutate } = useResources(removeTodo);

  const {
    data: listOFTodo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['todo'],
    queryFn: getTodo,
  });

  const handleDelete = (id) => {
    mutate(id);
  };

  if (isLoading) return <h1 className="text-center">Loading...</h1>;
  if (isError) return <h1 className="text-center">Error: {error.message}</h1>;

  return (
    <>
      {listOFTodo?.todo.map((todo) => (
        <div
          key={todo._id}
          className="flex items-center justify-between w-full p-5 border rounded-xl border-slate-400"
        >
          <div className="flex flex-col justify-center ">
            <h2 className="text-xl font-medium capitalize text-slate-600 ">
              {todo.title}
            </h2>
            <p className="text-sm capitalize text-slate-600">
              {todo.description}
            </p>
          </div>
          <div className="flex justify-start gap-2">
            <Link
              href={`/edit/${todo._id}`}
              className="px-4 py-1 text-blue-800 border rounded-md border-slate-400 "
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(todo._id)}
              className="px-4 py-1 text-red-700 border rounded-md border-slate-400"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTodo;
