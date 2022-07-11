export const verifyAuth = () => {
    const token = localStorage.getItem('token')
    
    if (!token) {
        window.location.href = `${window.origin}/pages/signin`
    }
}