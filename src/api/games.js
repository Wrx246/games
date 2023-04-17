import { API } from "./config"


export const GamesApi = {
    async getGamesList(page) {
        try {
            const response = await API.get(`games`, {
                params: {
                    page: page
                }
            });
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }
}