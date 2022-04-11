import axios from 'axios';
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoDetailMutateTask = () => {
    const queryClient = useQueryClient();
    const updateToDoDeleteilMutation = useMutation(
        (toDoDetail) =>
            axios.delete("/api/toDoDetails/" + toDoDetail.id),
        {
            onMutate: async (toDoDetail) => {
                await queryClient.cancelQueries("toDoList");
                const previousToDoList = queryClient.getQueriesData("toDoList");
                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        let newToDoDetails = [];
                        oldToDo.to_do_detail.map((oldToDoDetail) => {
                            if (oldToDoDetail.id != toDoDetail.id) {
                                newToDoDetails.push({ oldToDoDetail });
                            }
                        });
                        oldToDo.to_do_details = newToDoDetails;
                        return oldToDo;
                    })
                );
                return { previousToDoList };
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDolist");
            },
        }
    );
    return { updateToDoDeleteilMutation };
}

export default useDeleteToDoDetailMutateTask;
