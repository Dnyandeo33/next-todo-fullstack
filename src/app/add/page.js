'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Form from '../components/Form';
import { createTodo } from '../utils/apiRequast';

const Add = () => {
    const { push } = useRouter();
    const queryClient = useQueryClient();

    const createTodoMutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            push('/')
            queryClient.invalidateQueries({ queryKey: ['todo'] })
        },
    })

    const newTodo = (formData) => {
        createTodoMutation.mutate(formData)
    }

    return (
        <Form btnText={'add todo'} onclick={newTodo} initialData={{}} />
    );
}

export default Add