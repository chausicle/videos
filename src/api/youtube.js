import axios from 'axios'

const KEY = 'AIzaSyDUtWc1XQkNU4FK4lf6J4ecO9dhy3va-Sg'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
