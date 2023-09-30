import axios from 'axios'


export const fakeUrl = 'http://127.0.0.1:8000'
//export const fakeUrl = 'http://shop.calcarela.com'
export const Home_Api = {
    getHomeData: async () => {
        return axios.get(`${fakeUrl}/api/home`).then((res) => {
            return res.data
        })
            .catch((err) => console.log(err))
    }
}