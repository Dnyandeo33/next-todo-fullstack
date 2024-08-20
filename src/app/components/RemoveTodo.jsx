const RemoveTodo = ({ id, handleDelete }) => {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="px-4 py-1 text-red-500 border rounded-md border-slate-400"
    >
      Remove
    </button>
  );
};

export default RemoveTodo;
