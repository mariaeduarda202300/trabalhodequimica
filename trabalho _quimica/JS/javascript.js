// Seleciona todos os átomos
const atomos = document.querySelectorAll('.atomo');

document.addEventListener('mousemove', (e) => {
  atomos.forEach((atomo, index) => {
    const offset = (index + 1) * 20; // deslocamento para rastro
    atomo.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});

