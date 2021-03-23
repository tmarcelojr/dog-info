import axios from 'axios'

axios.create({
    baseURL: "https://dogs-api-info.herokuapp.com/dogs",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify()
})