'use client';
import useResources from '@/hooks/useResources';
import { createTodo } from '@/utils/apiRequast';
import Form from '../../components/Form';


const Add = () => {
    const { mutate } = useResources(createTodo)

    const newTodo = (formData) => {
        mutate(formData)
    }

    return (
        <Form btnText={'add todo'} onclick={newTodo} initialData={{}} />
    );
}

export default Add