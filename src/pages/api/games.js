import { API } from "./config"


export const GamesApi = {
    async getGamesList(page, ordering, platforms) {
        try {
            const response = await API.get(`games`, {
                params: {
                    page: page,
                    ordering: ordering,
                    platforms: platforms
                }
            });
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    },
    async getGame(id) {
        try {
            const response = await API.get(`games/${id}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    async getGameScreenshots(id) {
        try {
            const response = await API.get(`games/${id}/screenshots`);
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    },
    async getSearchGame(game) {
        try {
            const response = await API.get(`games`, {
                params: {
                    search: game
                }
            })
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }
}