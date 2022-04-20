import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const getSports = async () => {
    const { data } = await axios.get("/api/sportTitles");
    return data;
}

const useGetSports = () => {
    const queryClient = useQueryClient();
    return useQuery("sports", getSports, {
        onError: () => {
            queryClient.setQueryData("sports", null);
        }
    });
}

export default useGetSports;
