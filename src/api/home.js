import axios from 'axios'


const fakeUrl = 'http://127.0.0.1:8000'
export const Home_Api = {
    getHomeData: async () => {
        return axios.get(`${fakeUrl}/api/home`).then((res) => {
            return res.data
        })
            .catch((err) => console.log(err))
    }
}