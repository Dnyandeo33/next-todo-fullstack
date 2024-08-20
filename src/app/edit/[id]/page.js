'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Edit = ({ params }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const { push } = useRouter()
    const { id } = params

    useEffect(() => {
        const getTodoById = async () => {
            try {
                const res = await axios.get(`/api/todo/${id}`)
                const data = res.data
                setFormData({ title: data.todo.title, description: data.todo.description })
            } catch (error) {
                console.error(error)
            }
        }
        getTodoById()
    }, [id])



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/todo/${id}`, formData);
            const data = res.data;
            push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center w-2/3 mx-auto ">
                <div className="flex flex-col w-full gap-8 p-10 mt-8 rounded-lg shadow-lg bg-slate-500 h-90 ">
                    <h1 className="text-2xl font-bold text-center text-white">Update Todo</h1>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                        <input
                            className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter you title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                        <input
                            className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter you description"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </label>

                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg "
                    >
                        Update Todo
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Edit