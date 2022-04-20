import { useQueryClient } from "react-query"

const useCurrentSports = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData("sports");
}

export default useCurrentSports;
