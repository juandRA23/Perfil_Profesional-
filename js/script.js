// Navegación responsive
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle navegación móvil
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Cambiar estilo de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.7rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Filtro de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'todos') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .certification-card, .about-content, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos con opacidad 0
    document.querySelectorAll('.project-card, .certification-card, .about-content, .contact-container').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Funcionalidad del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // En lugar de enviar el formulario directamente, podrías:
            // 1. Guardar los datos en localStorage
            // 2. Mostrar un mensaje de éxito
            // 3. En un entorno real, enviarías los datos a un servidor
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Datos del formulario:', formData);
            
            // Mostrar mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = `
                <div style="background-color: #eafaf1; color: #27ae60; padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                    <p><strong>¡Mensaje enviado con éxito!</strong></p>
                    <p>Gracias por contactarme. Te responderé lo antes posible.</p>
                </div>
            `;
            
            contactForm.appendChild(successMessage);
            
            // Limpiar formulario
            contactForm.reset();
            
            // Eliminar mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Vista previa de certificaciones
    const certificateLinks = document.querySelectorAll('.view-certificate');
    
    certificateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // En GitHub Pages, podrías:
            // 1. Mostrar una imagen más grande del certificado
            // 2. Abrir un PDF en una nueva pestaña
            // 3. Mostrar un modal con más detalles
            
            const modal = document.createElement('div');
            modal.classList.add('certificate-modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Vista previa del certificado</h3>
                    <div class="certificate-preview">
                        <img src="https://via.placeholder.com/800x600" alt="Vista previa del certificado">
                    </div>
                    <p>Este es un ejemplo de cómo mostrar una vista previa del certificado. En un entorno real, cargarías la imagen o PDF del certificado.</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Estilos para el modal
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1001';
            
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.backgroundColor = 'white';
            modalContent.style.padding = '2rem';
            modalContent.style.borderRadius = '10px';
            modalContent.style.maxWidth = '80%';
            modalContent.style.maxHeight = '80vh';
            modalContent.style.overflow = 'auto';
            
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.style.float = 'right';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.marginTop = '-1rem';
            
            // Cerrar modal
            closeBtn.addEventListener('click', function() {
                modal.remove();
            });
            
            // Cerrar modal al hacer click fuera del contenido
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});

// Animación de escritura para el título principal
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    
    if (heroTitle) {
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar animación después de 500ms
        setTimeout(typeWriter, 500);
    }
});