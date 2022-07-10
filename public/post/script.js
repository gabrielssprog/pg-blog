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

export const renderPostCards = (element, posts) => {
    element.innerHTML = posts.map((post) => `
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="card-body w-100">
            <h5 class="card-title"><a href="${window.origin}/pages/posts/${post.id}">${post.title}<a></h5>
            <p class="card-text">${parseContentPost(post.content)}${post.content.length > 220 && '...'}</p>
        </div>
    </div>
    `).join('')
}