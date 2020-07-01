// ;(function () {
//     const token = localStorage.getItem('token')
//     if (!token) {
//         return
//     }
//     window.location.replace('http://localhost:5600/api')
// })()

document.getElementById('login').addEventListener('click', login, false)

function login(e) {
    const body = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }

    // console.log(isNaN(body.username))
    if (
        !body.username ||
        !isNaN(body.username) ||
        !body.password ||
        !isNaN(body.password)
    ) {
        alert('please enter valid details')
        return false
    }

    const url = 'http://localhost:5600/api/login'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
    })
        .then((res) => res.json())
        .then((token) => console.log(token))
        .catch((err) => console.error(err))
}
