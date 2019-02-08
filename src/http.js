import axios from 'axios'

const env = process.env.NODE_ENV

if(env=="development") {
  axios.defaults.baseURL = 'https://wstshksabe.execute-api.ap-northeast-1.amazonaws.com/dev'
}

export default axios
