const toggle = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggle.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    toggle.textContent = isHidden ? 'visibility_off' : 'visibility';
});
