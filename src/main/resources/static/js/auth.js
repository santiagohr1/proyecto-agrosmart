document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const loginForm = document.getElementById('loginForm');
    const registerBtn = document.getElementById('registerBtn');
    const registerModal = document.getElementById('registerModal');
    const registerForm = document.getElementById('registerForm');
    const closeModal = document.querySelector('.close');
    
    // Mostrar modal de registro
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'flex';
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
    
    // Manejar envío del formulario de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulación de autenticación
        if (email && password) {
            // En una aplicación real, aquí harías una petición al servidor
            localStorage.setItem('userEmail', email);
            
            // Redirigir al dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Por favor ingresa correo y contraseña');
        }
    });
    
    // Manejar envío del formulario de registro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Validaciones básicas
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        if (name && email && password) {
            // Simulación de registro exitoso
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            registerModal.style.display = 'none';
            registerForm.reset();
        } else {
            alert('Por favor completa todos los campos');
        }
    });
});