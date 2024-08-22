'use client';
import Form from '@/components/Form';
import useResources from '@/hooks/useResources';
import { getTodoById, updateTodo } from '@/utils/apiRequast';
import { useQuery } from '@tanstack/react-query';


const Edit = ({ params }) => {
    const { id } = params
    const { mutate } = useResources(updateTodo)
    const {
        data: listOFTodo,
        isLoading,
    } = useQuery({
        queryKey: ['todo', id],
        queryFn: () => getTodoById(id),
    });

    const updatedPost = (updateTodo) => {
        mutate({ id, ...updateTodo })
    }
    if (isLoading) return <h1 className='text-center'>Loading...</h1>
    return (
        <Form btnText={'update todo'} onclick={updatedPost} initialData={listOFTodo} />
    );
}

export default Edit