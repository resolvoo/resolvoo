export interface Post {
    titulo: string
    capaDoPost: {
        id: string
        url: string
        width: number
        height: number
    }
    keyword: string
    descricao: string
    url: string
    createdAt: string
    content: {
        raw: {
            children: []
        }
    }
}

export interface Data {
    post: Post
}

export interface DataArray {
    posts: Post[]
}
