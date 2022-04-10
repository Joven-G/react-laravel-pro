import axios from "axios";
import { useQuery, useQueryClient } from "react-query";


const getToDoList = async () => {
    const { data } = await axios.get("/api/toDos");
    return data;
}

const useGetTodoList = () => {
    const queryClient = useQueryClient();
    return useQuery("toDoList", getToDoList, {
        onError: () => {
            queryClient.setQueryData("toDoList", null);
        }
    });
}

export default useGetTodoList;
