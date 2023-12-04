import axios from 'axios'

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comment`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    postComment(comment) {
        return this.api.post('/', comment)
    }
    getComments(recipeId) {
        return this.api.get('/', { params: { recipeId } })
    }
}

const commentService = new CommentService()
export default commentService
