// Seleciona todos os átomos
const atomos = document.querySelectorAll('.atomo');

document.addEventListener('mousemove', (e) => {
  atomos.forEach((atomo, index) => {
    const offset = (index + 1) * 20; // deslocamento para rastro
    atomo.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});

// Seleciona todos os links das seções trabalhos e elementos turma 2
const todosLinks = document.querySelectorAll(".trabalhos a, .elementos_turma2 a");

// Para cada link, adiciona a lógica
todosLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // Abre o link em nova aba
    window.open(link.href, "_blank");

    // Adiciona a classe hidden para sumir com fade
    link.classList.add("hidden");

    // Depois de 3 segundos, remove a classe para reaparecer
    setTimeout(() => {
      link.classList.remove("hidden");
    }, 3000);
  });
});
