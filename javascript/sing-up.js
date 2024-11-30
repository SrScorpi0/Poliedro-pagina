const email = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

const password = document.getElementById('password');
const errorPassword = document.getElementById('errorPassword');

// Validaciones individuales
email.addEventListener('blur', () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            errorEmail.textContent = 'Email inválido.';
}
});

password.addEventListener('blur', () => {
    if (password.value.length < 8) {
    errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    }
    });
