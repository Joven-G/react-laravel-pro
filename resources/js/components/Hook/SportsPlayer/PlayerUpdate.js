import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const usePlayerUpdate = () => {
    const queryClient = useQueryClient();
    const playerUpdate = useMutation(
        (player) => axios.put("/api/players/" + player.id, {
            name: player.name,
        }),
        {
            onMutate: async (player) => {
                console.log(player);
                //実行中の処理をキャンセル
                await queryClient.cancelQueries("sports");
                //既存のsportsを取得する
                const previousPlayer = queryClient.getQueriesData("sports");
                //sportsのキャシューを更新する
                queryClient.setQueryData("sports", (oldSports) =>
                    oldSports.map((oldPlayer) => {
                        if (oldPlayer.id == player.sport_title_id) {
                            let newPlayer = [];
                            oldPlayer.players.map((oldPlayers) => {
                                if (oldPlayers.id == player.id) {
                                    newPlayer.push({
                                        ...oldPlayers,
                                        name: player.name,
                                    });
                                } else {
                                    newPlayer.push(oldPlayers);
                                }
                            });
                            oldPlayer.players = newPlayer;
                        }
                        return oldPlayer;
                    })
                );
                return { previousPlayer };
            },
            onSettled: () => {
                queryClient.invalidateQueries("sports");
            },
        }
    );
    return { playerUpdate };
}

export default usePlayerUpdate;
