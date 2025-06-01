// Seleciona o botão do menu hamburguer (ícone) e adiciona o evento para abrir/fechar o menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Para cada botão de serviço (classe select-button), adiciona evento de clique para abrir WhatsApp
document.querySelectorAll('.select-button').forEach(btn => {
    btn.addEventListener('click', () => {
        // Pega o card do serviço mais próximo
        const card = btn.closest('.service-card');

        // Pega o nome do serviço (h3), preço (atributo data-price) e descrição (primeiro parágrafo)
        const serviceName = card.querySelector('h3').textContent;
        const price = card.getAttribute('data-price');
        const description = card.querySelector('p').textContent;

        // Número de telefone (sem o +), ajuste se precisar
        const phone = '559491831500';

        // Monta a mensagem formatada para o WhatsApp
        const message = `Olá! Gostaria de agendar o serviço: ${serviceName} - ${description}. Valor: R$ ${price}.`;

        // Monta o link do WhatsApp com a mensagem codificada
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappLink, '_blank');
    });
});
