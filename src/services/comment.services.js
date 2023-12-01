import axios from 'axios'

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comment`
        })
    }

    postComment(comment) {
        return this.api.post('/', comment)
    }
}

const commentService = new CommentService()
export default commentService
