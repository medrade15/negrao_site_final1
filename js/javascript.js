// Aguarda o DOM carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {
    
    // MENU MOBILE - Seleciona o botão do menu e adiciona evento de clique
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu de navegação
            navMenu.classList.toggle('active');
            
            // Alterna o ícone entre ☰ e ✕
            if (navMenu.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });
        
        // Fecha o menu quando clica em um link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }
    
    // BOTÕES DE WHATSAPP - Apenas para botões SEM onclick inline
    const buttonsWithoutOnclick = document.querySelectorAll('.select-button:not([onclick])');
    
    buttonsWithoutOnclick.forEach(btn => {
        btn.addEventListener('click', function() {
            // Pega o card do serviço relacionado ao botão clicado
            const card = btn.closest('.service-card');
            
            if (card) {
                // Obtém nome do serviço (texto do h3)
                const serviceName = card.querySelector('h3').textContent.trim();
                
                // Obtém o preço do serviço (atributo data-price)
                const priceData = card.getAttribute('data-price');
                
                // Obtém a descrição do serviço (primeiro p que NÃO contém "R$")
                const descriptionElement = card.querySelector('p:not(:contains("R$"))');
                let description = '';
                
                // Busca a descrição de forma mais específica
                const allPs = card.querySelectorAll('p');
                for (let p of allPs) {
                    if (!p.textContent.includes('R$') && p.textContent.trim().length > 10) {
                        description = p.textContent.trim();
                        break;
                    }
                }
                
                // Se não encontrou descrição, usa um texto padrão
                if (!description) {
                    description = 'Serviço de qualidade para seu veículo';
                }
                
                // Formata o preço
                let priceText = '';
                if (priceData && priceData !== '0') {
                    priceText = `R$ ${priceData}.00`;
                } else {
                    priceText = 'Consulte o valor';
                }
                
                // Seu número de telefone para contato
                const phone = '5594991831500';
                
                // Mensagem que será enviada no WhatsApp
                const message = `Olá! Gostaria de agendar o serviço: ${serviceName} - ${description}. Valor: ${priceText}`;
                
                // Link do WhatsApp com mensagem codificada
                const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                
                // Abre uma nova aba com o link do WhatsApp
                window.open(whatsappLink, '_blank');
            }
        });
    });
    
    // SMOOTH SCROLL para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Função auxiliar para :contains (que não existe nativamente)
// Esta função não é necessária, mas mantive como referência
function findElementByText(elements, text) {
    for (let element of elements) {
        if (!element.textContent.includes(text)) {
            return element;
        }
    }
    return null;
}
