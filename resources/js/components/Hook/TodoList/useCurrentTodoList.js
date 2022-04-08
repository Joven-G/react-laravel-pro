import {useQueryCliant} from "react-query";

const useCurrentTodoList = () =>{
    const queryClient = useQueryCliant();
    return queryClient.getQueryData("toDoList");
}

export default useCurrentTodoList;