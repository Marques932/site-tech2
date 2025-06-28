document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de rolagem suave para as âncoras do menu
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de validação de formulário (muito básica)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                // Aqui você enviaria os dados para um servidor (Backend)
                // Por exemplo, usando fetch():
                /*
                fetch('/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert('Mensagem enviada com sucesso!');
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Ocorreu um erro ao enviar a mensagem.');
                });
                */
                this.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});