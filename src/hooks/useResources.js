import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useResources = (mutationQueryFn) => {
    const { push } = useRouter()
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: mutationQueryFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todo'] });
            push('/')
        },
    });

    return { mutate };
}

export default useResources
