document.addEventListener('DOMContentLoaded', () => {
    // Gerar o menu
    const menuItems = [
        { name: "Sobre", href: "#Sobre" },
        { name: "Projetos", href: "#Projetos" },
        { name: "Contato", href: "#Contato" }
    ];
    
    const navMenu = document.getElementById('nav-menu');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}" class="nav-link">${item.name}</a>`;
        navMenu.appendChild(li);
    });

    // Gerar título
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = `
        <h1 class="site-title">Larissa Ferreira</h1>
        <h3 class="site-subtitle">Estudante de TI</h3>
    `;

     // Gerar seção Sobre
     const sobreSection = document.getElementById('Sobre');
     sobreSection.innerHTML = `
         <h2>Quem Sou</h2>
         <p>Oi! Sou Larissa, uma entusiasta da tecnologia e estudante de TI, atualmente no último ano do curso de Gestão de Tecnologia da Informação na PUCPR. Ao longo da minha jornada, desenvolvi uma paixão por gerenciamento de projetos e inovação tecnológica. Desde 2020, venho me aprofundando em várias áreas do desenvolvimento de software, análise de dados e metodologias ágeis, sempre buscando soluções eficientes e impactantes. Meu objetivo é criar experiências tecnológicas que realmente façam a diferença para empresas e usuários.</p>
         
         <h3>Educação</h3>
         <p>Estou finalizando meu curso de Tecnólogo em Gestão de Tecnologia da Informação pela PUCPR. Durante minha formação, me especializei em áreas como Gestão de Projetos e Métricas de TI, com foco em como aplicar essas metodologias de forma prática e estratégica em projetos de tecnologia.</p>
 
         <h3>Experiência</h3>
         <p>Desde o início da minha carreira em 2020, participei de diversos projetos acadêmicos e pessoais, onde pude aplicar e aprimorar minhas habilidades em desenvolvimento web, gerenciamento de projetos e análise de dados. Tenho experiência em colaborar com equipes em ambientes dinâmicos, sempre focada em otimizar processos e entregar resultados que superam as expectativas.</p>
 
         <h3>Habilidades</h3>
         <p>Possuo um conjunto diversificado de habilidades técnicas que incluem:</p>
         <ul>
             <li>Desenvolvimento web: HTML, CSS, JavaScript, Bootstrap e React</li>
             <li>Gerenciamento de projetos: Ferramentas e práticas de gerenciamento utilizadas em projetos acadêmicos e pessoais, como o uso de metodologias ágeis e ferramentas colaborativas de código</li>
             <li>Integração e automação: DevOps e CI</li>
             <li>Análise de dados: Ferramentas e técnicas para transformar dados em insights práticos</li>
         </ul>
 
         <h3>Interesses</h3>
         <p>Sou apaixonada por explorar como a tecnologia pode resolver problemas reais e melhorar a experiência do usuário. Tenho grande interesse em Inteligência Artificial e como ela pode ser utilizada para automatizar processos e otimizar o desempenho de sistemas. Além disso, estou sempre buscando aprender mais sobre análise de dados e como ela pode ser utilizada para a tomada de decisões estratégicas.</p>
 
         <h3>Vamos Conversar!</h3>
         <p>Estou aberta a colaborações e novos projetos. Sinta-se à vontade para me contactar através das redes sociais!</p>
     `;
 

    // Gerar seção Projetos
    const projetosSection = document.getElementById('Projetos');
    const projetos = [
        {
            link: "https://github.com/larissa-FVp/Aula_HTML5_CSS3_",
            imgSrc: "css/img/software-creditos-pixabay.jpg",
            alt: "Meu primeiro site com HTML simples",
            title: "Meu primeiro site com HTML simples"
        },
        {
            link: "https://github.com/larissa-FVp/bootstrap_",
            imgSrc: "css/img/foto-desenho-feito-por-e-credito-larissa-ferreira.jpeg",
            alt: "Meu primeiro site com bootstrap",
            title: "Meu primeiro site com bootstrap"
        },
        {
            link: "https://github.com/larissa-fv/snake-game",
            imgSrc: "css/img/snake game2.jpg",
            alt: "Snake game",
            title: "Snake game"
        },
        {
            link: "https://github.com/larissa-fv/dino_game",
            imgSrc: "css/img/dino game2.jpg",
            alt: "DINO game",
            title: "DINO game"
        },
        {
            link: "https://github.com/larissa-fv/clone-Netflix",
            imgSrc: "css/img/netflix-clone2.jpg",
            alt: "Clone Netflix",
            title: "Clone Netflix"
        },
        {
            link: "https://github.com/larissa-fv/instagram-sing_up",
            imgSrc: "css/img/clone-instagram2.jpg",
            alt: "Clone da página de login do Instagram",
            title: "Clone da página de login do Instagram"
        },
        {
            link: "https://github.com/larissa-fv/AS2_DevOps-PUCPR",
            imgSrc: "css/img/devops_project.jpg",
            alt: "Projeto AS2 - DevOps",
            title: "Projeto AS2 - DevOps"
        },
        {
            link: "https://github.com/larissa-fv/DRUM_Project-DevOps",
            imgSrc: "css/img/drum_project.jpg",
            alt: "Projeto Drum - DevOps",
            title: "Projeto Drum - DevOps"
        },
        {
            link: "https://github.com/larissa-fv/calculadora",
            imgSrc: "css/img/calculadora.jpg",
            alt: "Calculadora",
            title: "Calculadora"
        }
    ];

    projetosSection.innerHTML = `<h2>Projetos</h2><div class="grid"></div>`;
    const projetosGrid = projetosSection.querySelector('.grid');

    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="card">
                <figure class="card-front">
                    <a target="_blank" href="${projeto.link}">
                        <img class="img-projetos" src="${projeto.imgSrc}" alt="${projeto.alt}">
                    </a>
                </figure>
                <div class="card-back">
                    <h3>${projeto.title}</h3>
                </div>
            </div>
        `;
        projetosGrid.appendChild(card);
    });

    // Gerar seção Contato
    const contatoSection = document.getElementById('Contato');
    contatoSection.innerHTML = `
        <h2>Contato</h2>
        <p>Você pode entrar em contato comigo através das redes sociais abaixo:</p>
        <div class="icons">
            <a href="https://www.linkedin.com/in/larissa-ferreira" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/larissa-fv" target="_blank"><i class="fab fa-github"></i></a>
            </div>
    `;
});
