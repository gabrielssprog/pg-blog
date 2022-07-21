export const verifyAuth = () => {
    const token = localStorage.getItem('token')
    
    if (!token) {
        window.location.href = `${window.origin}/pages/signin`
    }

    return token
}

export const refreshToken = async () => {
    const oldToken = verifyAuth()

    const response = await fetch('/auth/refresh', {
        headers: {
            'Authorization': `Bearer ${oldToken}`
        }
    })
    const { token } = await response.json()

    localStorage.setItem('token', token)

    return token
}