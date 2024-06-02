document.addEventListener('DOMContentLoaded', function () {
    const user = document.getElementById('user');
    const password = document.getElementById('password');
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        let messages = [];
        if (user.value === '' || user.value == 0) {
            messages.push('User harus diisi');
        }
        if (password.value === '' || password.value == 0) {
            messages.push('Password harus diisi');
        }
    });
});