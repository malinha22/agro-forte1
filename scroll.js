// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById('topBtn');

// Mostrar botão ao rolar
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Ao clicar no botão, voltar ao topo suavemente
topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Pequenina animação ao rolar (fade-in)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0px)';
            section.style.transition = 'all 0.8s ease-out';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});