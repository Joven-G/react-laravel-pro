import { useQueryClient } from "react-query"

const useCurrentSport = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData("sport");
}

export default useCurrentSport;
