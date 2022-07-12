export const getAllPosts = async () => {
    const response = await fetch(`${window.origin}/posts`)
    const { posts } = await response.json()

    return posts
}

export const findPostsByAuthor = async (author) => {
    const response = await fetch(`${window.origin}/posts/author/${author}`)
    const { posts } = await response.json()

    return posts
}

export const findPostById = async (id) => {
    const response = await fetch(`${window.origin}/posts/${id}`)
    const { post } = await response.json()

    return post
}

export const parseContentPost = (content) => content.slice(0, 220).replaceAll('\n', '<br>')

export const renderPostCards = (element, posts, options = {}) => {
    element.innerHTML = posts.map((post) => `
    <div id="post-${post.id}" class="card mb-3 mx-auto">
        <div class="card-body w-100">
            <h5 class="card-title"><a href="/pages/post/${post.id}">${post.title}<a></h5>
            <p class="card-text">${parseContentPost(post.content)}${post.content.length > 220 && '...'}</p>
            ${options.actions && options.actions.map((action) => action(post)).join('')}
        </div>
    </div>
    `).join('')
}

export const createPost = async (postData) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${window.origin}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: postData
        })
    })
    const { post } = await response.json()

    return post
}

export const updatePostById = async (postData, postId) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${window.origin}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: postData
        })
    })
    const { post } = await response.json()

    return post
}

export const deletePostById = async (postId) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${window.origin}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const { post } = await response.json()

    return post
}