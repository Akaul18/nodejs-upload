;(function () {
    const token = localStorage.getItem('token')
    if (!token) {
        return
    }
    window.location.replace('http://localhost:5600/api')
})()

document.getElementById('login').addEventListener('click', login, false)

function login(e) {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
}
