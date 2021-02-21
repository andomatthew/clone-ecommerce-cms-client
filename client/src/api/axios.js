import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://e-commerce-cms-server-matthew.herokuapp.com/'
})

export default instance
