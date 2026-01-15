document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao-tema');
  const body = document.body;

  // Evita erro se o botão não existir
  if (!botao) return;

  function temaEscuro(escuro) {
    body.classList.toggle('escuro', escuro);
    botao.innerHTML = escuro
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';

    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
  }

  // Tema salvo
  const temaSalvo = localStorage.getItem('tema') === 'escuro';
  temaEscuro(temaSalvo);

  // Clique
  botao.addEventListener('click', () => {
    const escuro = !body.classList.contains('escuro');
    temaEscuro(escuro);
  });

  // Scroll suave
  const navLinks = document.querySelectorAll('#menu ul a.link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
