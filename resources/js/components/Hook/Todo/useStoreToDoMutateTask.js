import axios from "axios";
import { useMutation, useQueryClient } from "react-query"

const useStoreToDoDetailMutateTask = () => {
    const QueryClient = useQueryClient();
    const storeToDoMutation = useMutation(
        () => axios.post("/api/toDos", {
            title: null,
        }),
        {
            onSettled: () => {
                QueryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { storeToDoMutation };
};

export default useStoreToDoDetailMutateTask;
