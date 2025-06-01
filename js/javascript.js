
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

document.querySelectorAll('.select-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.service-card');
        const serviceName = card.querySelector('h3').textContent;
        const price = card.getAttribute('data-price');
        const description = card.querySelector('p').textContent;
        const phone = '559491831500';
        const message = `Olá! Gostaria de agendar o serviço: ${serviceName} - ${description}. Valor: R$ ${price}.`;
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    });


  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });