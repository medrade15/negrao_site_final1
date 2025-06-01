// Seleciona o botão do menu hambúrguer pelo ID e adiciona evento de clique
document.getElementById('hamburger').addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação para mostrar ou esconder o menu
    document.getElementById('nav-menu').classList.toggle('active');
});

// Seleciona todos os botões com a classe 'select-button' (botões de agendamento)
document.querySelectorAll('.select-button').forEach(btn => {
    btn.addEventListener('click', () => {
        // Pega o card do serviço relacionado ao botão clicado
        const card = btn.closest('.service-card');
        // Obtém nome do serviço
        const serviceName = card.querySelector('h3').textContent;
        // Obtém o preço do serviço (atributo data-price)
        const price = card.getAttribute('data-price');
        // Obtém a descrição do serviço (primeiro parágrafo)
        const description = card.querySelector('p').textContent;
        // Seu número de telefone para contato (ajuste conforme necessário)
        const phone = '5594991831500';
        // Mensagem que será enviada no WhatsApp (URL codificada)
        const message = `Olá! Gostaria de agendar o serviço: ${serviceName} - ${description}. Valor: R$ ${price}.`;
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        // Abre uma nova aba com o link do WhatsApp
        window.open(whatsappLink, '_blank');
    });
});
