'use client';
import Form from '@/app/components/Form';
import { getTodoById, updateTodo } from '@/app/utils/apiRequast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Edit = ({ params }) => {
    const { push } = useRouter();
    const queryClient = useQueryClient();
    const { id } = params

    const {
        data: listOFTodo,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['todo', id],
        queryFn: () => getTodoById(id),
    });


    const createTodoMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            push('/')
            queryClient.invalidateQueries({ queryKey: ['todo'] })
        },
    })

    const updatedPost = (updateTodo) => {
        console.log(updateTodo);

        createTodoMutation.mutate({ id, ...updateTodo })
    }
    if (isLoading) return <h1 className='text-center'>Loading...</h1>
    return (
        <Form btnText={'update todo'} onclick={updatedPost} initialData={listOFTodo} />
    );
}

export default Edit