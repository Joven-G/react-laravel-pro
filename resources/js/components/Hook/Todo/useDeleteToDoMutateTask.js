import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoMutateTask = () => {
    const queryClient = useQueryClient();
    const deleteToDoMutation = useMutation(
        (toDo) => axios.delete("/api/toDos/" + toDo.id),
        {
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoMutation };
}

export default useDeleteToDoMutateTask;
