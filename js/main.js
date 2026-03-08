document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interceptando o envio do formulário
    const formContato = document.getElementById('formContato');
    if(formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada (simulação).`);
            this.reset();
        });
    }
});