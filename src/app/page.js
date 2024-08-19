"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [listOFTodo, setListOFTodo] = useState([])
  const { push } = useRouter()

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get('/api/todo/')
        const data = res.data
        setListOFTodo(data)

      } catch (error) {
        console.log(error);
      }
    }
    getTodo()
  }, [])



  const handelAdd = () => {
    push('/add')
  }
  const handelEdit = (id) => {
    push(`/edit/${id}`)
  }


  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/todo/${id}`)
      if (res.status === 200) {
        setListOFTodo(listOFTodo.todo.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-2/3 p-4 mx-auto mt-8 bg-blue-100">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">Todo list </h1>
        <button className="font-medium text-green-500 uppercase" onClick={handelAdd}>Add</button>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div>
          {
            listOFTodo.todo?.map((todo) => (
              <div key={todo._id} className="flex items-center justify-between w-full p-4 border-b-4 rounded-xl border-b-black">
                <div className="flex flex-col justify-center ">
                  <h2 className="text-xl font-medium capitalize ">{todo.title}</h2>
                  <p className="capitalize text-md">{todo.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="font-medium text-yellow-700 uppercase" onClick={() => handelEdit(todo._id)}>Edit</button>
                  <button className="font-medium text-red-600 uppercase" onClick={() => handleDelete(todo._id)}>Delete</button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </main >
  );
}
