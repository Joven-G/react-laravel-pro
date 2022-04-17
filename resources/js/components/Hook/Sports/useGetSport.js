import axios from "axios"
import { useQuery, useQueryClient } from "react-query";

const getSport = async () => {
    const { data } = await axios.get("/api/sports");
    return data;
}

const useGetSport = () => {
    const queryClient = useQueryClient();
    return useQuery("sport", getSport, {
        onError: () => {
            queryClient.setQueryData("sport", null);
        }
    });
}

export default useGetSport;
