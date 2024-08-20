'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Add = () => {
    const { push } = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description } = formData;
        if (!title || !description) {
            alert('All fields repaired...')
            return;
        }

        try {
            const res = await axios.post('/api/todo', formData);
            const data = res.data;
            setMessage(data.message);
            setFormData({ title: '', description: '' });
            push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center w-2/3 mx-auto ">
                <div className="flex flex-col w-full gap-8 p-10 mt-8 rounded-lg shadow-lg bg-slate-500 h-90 ">
                    <h1 className="text-2xl font-bold text-center text-white">Add Todo</h1>
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
                        Add Todo
                    </button>
                    <p className="text-center text-white capitalize">{message}</p>
                </div>
            </div>
        </form>
    );
}

export default Add