document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: 'TaskHub', description: 'TaskHub é um gerenciador de tarefas, que pode ajudar a organizar o dia a dia do usuário,\n  nele você pode adicionar a tarefa, a descrição e o prazo para realiza-la.\n Ele contém as operações básicas de um CRUD (create, read, update, delete).\n (Este foi o meu primeiro projeto pessoal.)', githubLink: 'https://github.com/seu-usuario/taskhub', videoURL: 'media/videos/taskHub.mp4' },

        { name: 'Controle de Finanças', description: 'Descrição do Projeto 2', githubLink: '', videoURL: 'URL_do_Video_2' },
        
        { name: 'API em Java', description: 'Descrição do Projeto 3', githubLink: '', videoURL: 'URL_do_Video_3' },
    ];

    const carouselContainer = document.getElementById('carousel');
    const videoContainer = document.getElementById('video-container');
    const projectsButtonsContainer = document.getElementById('projectsButtons');

    function showProjectInfo(button, projectName, projectDescription, githubLink, projectVideoURL) {
        // Remove a classe 'selected' de todos os botões dentro do contêiner
        projectsButtonsContainer.querySelectorAll('.project').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Adiciona a classe 'selected' ao botão clicado
        button.classList.add('selected');

        // Atualiza o conteúdo do nome, descrição e vídeo do projeto
        const nameElement = document.querySelector('#carousel .subtitle');
        const descriptionElement = document.querySelector('#carousel .text');
        const githubLinkElement = document.querySelector('#carousel .linkGitHb');

        nameElement.innerText = projectName;
        descriptionElement.innerText = projectDescription;

        githubLinkElement.innerHTML = githubLink ? `<p>Github: <a href="${githubLink}" target="_blank">${githubLink}</a></p>` : '';

        const videoHTML = `<iframe width="686" height="360" src="${projectVideoURL}" frameborder="0"></iframe>`;
        videoContainer.innerHTML = videoHTML;
    }

    // Exibe as informações do primeiro projeto por padrão
    showProjectInfo(projectsButtonsContainer.querySelector('.project'), projects[0].name, projects[0].description, projects[0].githubLink, projects[0].videoURL);

    // Adiciona eventos de clique a cada botão
    projectsButtonsContainer.querySelectorAll('.project').forEach((button, index) => {
        button.addEventListener('click', () => {
            const project = projects[index];
            showProjectInfo(button, project.name, project.description, project.githubLink, project.videoURL);
        });
    });
});