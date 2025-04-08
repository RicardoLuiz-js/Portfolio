
const buttons = document.querySelectorAll('.button');
      const buttonTexts = {
          'button1': 'Tenho uma forte capacidade de comunicação que me permite interagir efetivamente com colegas de equipe e clientes. Minha habilidade para ouvir ativamente e expressar minhas ideias de forma clara me ajuda a colaborar efetivamente e resolver conflitos de maneira produtiva.',
          'button2': 'Sou um jogador de equipe dedicado que entende a importância da colaboração para alcançar objetivos comuns. Valorizo a diversidade de pensamentos e perspectivas e acredito que as melhores soluções vêm do trabalho conjunto.',
          'button3': ' Sou um solucionador de problemas criativo e analítico. Tenho a capacidade de pensar fora da caixa para encontrar soluções inovadoras e também a habilidade de analisar detalhes para resolver problemas complexos.',
          'button4': 'Em um mundo em constante mudança, minha capacidade de me adaptar rapidamente a novas situações e desafios é uma das minhas maiores forças. Estou sempre pronto para aprender novas habilidades e abraçar a mudança.',
          'button5':' Tenho uma forte capacidade de liderança, demonstrada pela minha habilidade em inspirar e motivar equipes para alcançar seus objetivos. Minha abordagem de liderança é baseada no respeito mútuo, na comunicação aberta e na criação de um ambiente de trabalho positivo.',
          'button6':'Possuo excelentes habilidades de gestão do tempo, o que me permite equilibrar eficazmente várias tarefas e prazos. Eu priorizo minhas responsabilidades para garantir que o trabalho mais importante seja concluído primeiro e dentro do prazo.',
          'button7':' Sou altamente auto-motivado, o que me permite manter um alto nível de produtividade mesmo em situações desafiadoras. Minha paixão pelo que faço me impulsiona a sempre dar o meu melhor e a buscar constantemente maneiras de melhorar.',
          'button8':'Acredito firmemente no valor do aprendizado contínuo. Estou sempre buscando expandir meu conhecimento e habilidades, seja através de treinamentos formais, leitura autodidata ou buscando feedback construtivo.'
      };
      buttons.forEach(button => {
          button.addEventListener('click', () => {
              document.getElementById('text').innerText = buttonTexts[button.id];
          });
          button.addEventListener('mouseover', () => {
              buttons.forEach(button => {
                  button.style.animationPlayState = 'paused';
              });
          });
          button.addEventListener('mouseout', () => {
              buttons.forEach(button => {
                  button.style.animationPlayState = 'running';
              });
          });
      });


     
window.onload = function() {
  var intervalo = 2000; // 2 segundos
  for (let i = 1; i <= 8; i++) {
    setTimeout(function() {
      document.getElementById('button' + i).style.visibility = 'visible';
    }, i * intervalo);
  }
};












document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Criação dos slides originais
    const slidesData = [
        {
            title: "Controle de Estoque",
            subtitle: "Sistema de controle de estoque organiza produtos e monitora movimentações com eficiência. Oferece desempenho rápido, interface intuitiva e ferramentas para análise estratégica.",
            image: "Estoque.png",
            color: "linear-gradient(90deg,rgb(55, 3, 114) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
            link:"https://github.com/RikkiiSenpai/Controle-de-Estoque"
           
            
        },
        {
            title: "Akuma no Encyclopedia",
            subtitle: "O site Akuma no Encyclopedia reúne informações detalhadas sobre as Akuma no Mi, as frutas fictícias da obra One Piece, categorizadas por tipo e descrição. Ele oferece um extenso catálogo com explicações sobre habilidades, modelos e usuários conhecidos. A interface é simples, permitindo fácil navegação e pesquisa.",
            image: "encyclopedia.png",
            color: "linear-gradient(90deg,rgb(44, 27, 27) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
            link:"https://rikkiisenpai.github.io/Akuma-no-Encyclopedia/"
        
        } ,{
            title: "GH-Studio",
            subtitle: "O site da GH-Studio oferece serviços personalizados de desenvolvimento web para os seus clientes. Ele apresenta páginas como Quem Somos, Serviços e Produtos e Casos de Sucesso, destacando a experiência da empresa. Além disso, possui seções informativas, como Perguntas Frequentes e Contato. A interface, construída com HTML e CSS, é intuitiva, funcional e totalmente responsiva, adaptando-se a diferentes dispositivos para garantir uma experiência fluida.",
            image: "ghstudio.jpg",
            color: "linear-gradient(90deg,rgb(236, 23, 23) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
            link:"https://rikkiisenpai.github.io/GH-Studio/"
        
         
        } 
    ];
    
    let slides = [];
    let currentIndex = 0;
    let intervalId;
    





    function handleSlideClick(index) {
        const centerSlide = slides[currentIndex];
        
        // Verifica se o slide clicado é o central
        if (index === currentIndex) {
            centerSlide.classList.toggle('zoomed');
            
            // Pausa ou reinicia o autoplay
            if (centerSlide.classList.contains('zoomed')) {
                clearInterval(intervalId);
            } else {
                resetInterval();
            }
        } else {
            // Se clicar em um slide não central, vai para esse slide
            currentIndex = index;
            updateCarrossel();
            resetInterval();
        }
    }










    // Função para criar elementos de slide
    function createSlides() {
        const duplicatedSlides = [...slidesData, ...slidesData, ...slidesData];
            
        duplicatedSlides.forEach((slideData, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide clickable';
            
            // HTML personalizável com os dados
            slide.innerHTML = `
                <div class="slide-content" style="background: ${slideData.color || '#fff'}  ">
                    ${slideData.image ? `<img  src="${slideData.image}" alt="">` : ''}
                    <h2>${slideData.title}</h2>
                    ${slideData.subtitle ? `<p style="display:flex; color:white;">${slideData.subtitle}</p>` : ''}
                    <a href="${slideData.link}">Saiba Mais</a>
                </div>
            `;
            
            slide.addEventListener('click', () => handleSlideClick(index));
            carrossel.appendChild(slide);
            slides.push(slide);
        });
    
        
        currentIndex = slidesData.length;
        updateCarrossel();
    }
    // Função para atualizar a posição dos slides
    function updateCarrossel() {
        slides.forEach((slide, index) => {
            slide.className = 'slide';
            
            const diff = index - currentIndex;
            
            if (diff === 0) {
                slide.classList.add('center');
            } else if (diff === -1) {
                slide.classList.add('left-1');
            } else if (diff === -2) {
                slide.classList.add('left-2');
            } else if (diff === 1) {
                slide.classList.add('right-1');
            } else if (diff === 2) {
                slide.classList.add('right-2');
            } else if (diff < -2) {
                slide.classList.add('hidden');
            } else if (diff > 2) {
                slide.classList.add('hidden-right');
            }
        });
    }
    
    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        if (currentIndex > slides.length - slidesData.length - 1) {
            currentIndex = slidesData.length;
            updateCarrossel();
        } else {
            updateCarrossel();
        }
        resetInterval();
    }
    
    // Função para voltar ao slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        if (currentIndex < slidesData.length) {
            currentIndex = slides.length - slidesData.length - 1;
            updateCarrossel();
        } else {
            updateCarrossel();
        }
        resetInterval();
    }
    
    // Event listeners para os botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Configurar autoplay
    function startInterval() {
        intervalId = setInterval(nextSlide, 5000);
    }
    
    function resetInterval() {
        clearInterval(intervalId);
        // Remove a classe zoomed de todos os slides ao reiniciar
        slides.forEach(slide => slide.classList.remove('zoomed'));
        startInterval();
    }
    
    // Touch events para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    
    carrossel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        clearInterval(intervalId);
    }, {passive: true});
    
    carrossel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        startInterval();
    }, {passive: true});
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (diff > 50) {
            nextSlide(); // Swipe para a esquerda
        } else if (diff < -50) {
            prevSlide(); // Swipe para a direita
        }
    }
    
    // Inicializa o carrossel
    createSlides();
    startInterval();
});