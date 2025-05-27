function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    window.location.href = 'login.html';
}
//registration
const welcomeMessage = document.querySelector('.fred')
welcomeMessage.textContent = `welcome , ${localStorage.getItem('username')}`
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'blog.html';
    } else {
        alert('Invalid username or password');
    }
}
//login
window.onload = function() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'login.html';
    }
};