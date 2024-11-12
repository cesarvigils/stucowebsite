document.addEventListener("DOMContentLoaded", () => {
    (function(){
        emailjs.init("Ja0ygnE_FA1EjbjGk"); 
    })();

    // Manejo de enlaces de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = href;
            }
        });
    });

    // Manejo del botón "Learn More"
    const learnMoreBtn = document.querySelector('.btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const href = learnMoreBtn.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    }

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const message = contactForm.message.value;

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            try {
                const response = await emailjs.send('service_pinyf5q', 'template_29f6h3y', templateParams);
                console.log('SUCCESS!', response.status, response.text);
                formResponse.textContent = 'Message sent successfully!';
                formResponse.style.color = 'green';
                contactForm.reset();
            } catch (error) {
                console.error('FAILED...', error);
                formResponse.textContent = 'Failed to send message. Please try again.';
                formResponse.style.color = 'red';
            }
        });
    }
});
