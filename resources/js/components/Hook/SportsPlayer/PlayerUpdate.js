import axios from "axios";
import { useMutation, useQueryClient } from "react-query"

const usePlayerUpdate = () => {
    const queryClient = useQueryClient();
    const playerUpdate = useMutation(
        (player) => axios.put("/api/players" + player.id, {
            name: player.name,
            num: player.num,
            position: player.position
        }),
        {
            onMutate: async (player) => {
                await queryClient.cancelQueries("playerList");
                const previousPlayer = queryClient.getQueriesData("playerList");
                queryClient.setQueryData("playerList", (oldPlayerList) =>
                    oldPlayerList.map((oldPlayer) => {
                        if (oldPlayer.id == player.id) {
                            let newPlayer = [];
                            oldPlayer.player.map((oldPlayers) => {
                                if (oldPlayers.id == player.id) {
                                    newPlayer.push({
                                        ...oldPlayers,
                                        name: player.name,
                                        num: player.num,
                                        position: player.position
                                    });
                                } else {
                                    newPlayer.push(oldPlayers);
                                }
                            });
                            oldPlayer.player = newPlayer;
                        }
                        return oldPlayer;
                    })
                );
            },
            onSettled: () => {
                queryClient.invalidateQueries("playerLists");
            },
        }
    );
    return { playerUpdate };
}

export default usePlayerUpdate;
