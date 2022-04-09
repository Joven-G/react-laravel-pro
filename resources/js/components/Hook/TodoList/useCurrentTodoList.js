import { useQueryClient } from "react-query"

const useCurrentTodoList = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData("toDoList");
}

export default useCurrentTodoList;
