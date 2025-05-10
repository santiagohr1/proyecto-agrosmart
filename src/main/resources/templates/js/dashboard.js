document.addEventListener('DOMContentLoaded', function() {
    // Simular datos de usuario
    const userEmail = localStorage.getItem('userEmail') || 'usuario@agrosmart.com';
    document.getElementById('userName').textContent = userEmail.split('@')[0];
    
    // Mostrar menú de admin si el correo contiene "admin"
    if (userEmail.includes('admin')) {
        document.getElementById('userRole').textContent = 'Administrador';
        document.getElementById('adminMenu').style.display = 'block';
    }
    
    // Manejar logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });
    
    // Gráfico de progreso de cultivos
    const ctx = document.getElementById('cultivosChart').getContext('2d');
    const cultivosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Maíz', 'Frijol', 'Trigo', 'Arroz', 'Soja'],
            datasets: [{
                label: 'Progreso (%)',
                data: [65, 30, 45, 80, 50],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(139, 195, 74, 0.7)',
                    'rgba(205, 220, 57, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(255, 152, 0, 0.7)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(139, 195, 74, 1)',
                    'rgba(205, 220, 57, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(255, 152, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    
    // Actualizar contadores (simulación)
    updateCounters();
    
    function updateCounters() {
        // En una aplicación real, estos datos vendrían de una API
        document.getElementById('parcelasCount').textContent = '5';
        document.getElementById('cultivosCount').textContent = '3';
        document.getElementById('tareasCount').textContent = '2';
    }
});