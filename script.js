function login() {
    const email = document.querySelector('.text-field[type="email"]').value;
    const password = document.querySelector('.text-field[type="password"]').value;
    if (email === 'maicol' && password === '1234') {
        window.location.href = 'index.html';
    } else 
    if (email === 'admin' && password === '1234') {
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
