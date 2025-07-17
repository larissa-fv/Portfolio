AOS.init();

// Seus projetos
const projects = [
  {
    title: 'AS2_DevOps-PUCPR',
    description: 'Projeto focado em práticas de DevOps na PUCPR.',
    link: 'https://github.com/larissa-fv/AS2_DevOps-PUCPR',
    icon: '<i class="fas fa-tools" style="color:#00adb5"></i>',
  },
  {
    title: 'Estacao-Meteorologica-ESP32',
    description: 'Projeto de estação meteorológica com ESP32.',
    link: 'https://github.com/larissa-fv/Estacao-Meteorologica-ESP32',
    icon: '<i class="fas fa-cloud-sun" style="color:#00adb5"></i>',
  },
  {
    title: 'DRUM_Project-DevOps',
    description: 'Projeto DRUM com práticas DevOps.',
    link: 'https://github.com/larissa-fv/DRUM_Project-DevOps',
    icon: '<i class="fas fa-music" style="color:#00adb5"></i>',
  },
  {
    title: 'Analise-CEAPS',
    description: 'Projeto de análise de dados do CEAPS.',
    link: 'https://github.com/larissa-fv/Analise-CEAPS',
    icon: '<i class="fas fa-chart-bar" style="color:#00adb5"></i>',
  },
  {
    title: 'Análise Spotify - Machine Learning',
    description: 'Análise exploratória e modelagem de dados do Spotify usando Python e ML.',
    link: 'https://github.com/larissa-fv/Spotify-Analysis',
    icon: '<i class="fab fa-spotify" style="color:#00adb5"></i>',
  }
];

function loadProjects() {
  const container = document.querySelector('.projetos');
  container.innerHTML = '';
  projects.forEach(proj => {
    const div = document.createElement('div');
    div.classList.add('timeline-item', 'projeto-item');
    div.innerHTML = `
      <div style="font-size: 1.5rem; margin-bottom: 5px;">${proj.icon}</div>
      <h4>${proj.title}</h4>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank" class="btn-github" rel="noopener noreferrer">Ver no GitHub</a>
    `;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadProjects);

// Form submit: só um alerta por enquanto
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Obrigado pela mensagem! Em breve entrarei em contato.');
  e.target.reset();
});
