
const buttons = document.querySelectorAll('.button');
      const buttonTexts = {
          'button1': 'Possuo experiência em **HTML**, uma linguagem essencial para a estruturação de páginas web. Utilizo o HTML para criar interfaces organizadas, acessíveis e funcionais, servindo como base para projetos digitais de qualidade. 🚀',
          'button2': 'Possuo experiência em **CSS**, uma linguagem crucial para estilização e design de páginas web. Com o CSS, sou capaz de criar interfaces visuais atraentes, responsivas e adaptáveis a diferentes dispositivos, garantindo uma experiência agradável para os usuários. 🚀',
          'button3': 'Possuo experiência em **JavaScript** e utilizo diversas bibliotecas e frameworks, como jQuery, React.js, Node.js, Express.js e Turn.js, para potencializar o desenvolvimento de projetos interativos e dinâmicos. 🚀',
          'button4': 'Possuo experiência em **MySQL**, uma ferramenta poderosa para gerenciamento de bancos de dados relacionais. Utilizo o MySQL para criar, gerenciar e manipular dados de forma eficiente, possibilitando o desenvolvimento de sistemas robustos e escaláveis. 🚀',
          'button5':'Possuo experiência em **Java**, uma linguagem de programação versátil e orientada a objetos. Utilizo Java para desenvolver aplicações robustas, escaláveis e multiplataforma, abrangendo desde sistemas corporativos até aplicativos móveis e soluções personalizadas. 🚀',
          'button6':'Possuo experiência em **C#**, uma linguagem orientada a objetos amplamente utilizada para desenvolvimento de aplicações desktop, web e jogos. Com C#, sou capaz de criar soluções robustas e eficientes, aproveitando o poder da plataforma .NET. 🚀',
          'button7':'Possuo experiência em **GDScript**, uma linguagem de programação integrada ao Godot Engine, projetada especificamente para o desenvolvimento de jogos. Com sua sintaxe semelhante ao Python, utilizo o GDScript para criar mecânicas de jogo, interações e sistemas personalizados de forma eficiente e intuitiva. 🚀',
          'button8':'Possuo experiência em **PHP**, uma linguagem de programação amplamente utilizada para desenvolvimento web. Utilizo PHP para criar aplicações dinâmicas e interativas, integrando funcionalidades de back-end e bancos de dados de forma eficiente. 🚀'
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












const botao = document.getElementById('botao');
const imagem = document.getElementById('imagemBotao');
let imagemAtual = 1; // Controla qual imagem está sendo exibida

// Caminhos das imagens (substitua pelos seus arquivos)
const imagens = {
    1: "img/temadark.png",
    2: "img/temalight.png"
};
 
    
    
    

  
    botao.addEventListener('click', () => {
  
     

 // Alterna entre as imagens
 imagemAtual = imagemAtual === 1 ? 2 : 1;
            
 // Atualiza a imagem do botão
 imagem.src = imagens[imagemAtual];
 imagem.alt = `Imagem ${imagemAtual}`;
 
 





      
        const body = document.body;
        
        if (body.classList.contains('escuro')) {
            body.classList.remove('escuro');
            body.classList.add('claro');
        } else {
            body.classList.remove('claro');
            body.classList.add('escuro');
        }
   




      corAtual = corAtual === "#ffffff" ? "#000000" : "#ffffff";

      // Atualizar a cor das partículas
      window.pJSDom[0].pJS.particles.color.value = corAtual;
      window.pJSDom[0].pJS.particles.line_linked.color = corAtual;
      window.pJSDom[0].pJS.fn.particlesRefresh();
      
     
    });







document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Criação dos slides originais
    const slidesData = [
        {
            title: "Controle de Estoque",
            subtitle: "Sistema de controle de estoque organiza produtos e monitora movimentações com eficiência. Oferece desempenho rápido, interface intuitiva e ferramentas para análise estratégica.",
            image: "img/Estoque.png",
            color: "linear-gradient(90deg,rgb(50, 8, 78) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
            link:"https://github.com/RikkiiSenpai/Controle-de-Estoque"
           
            
        },
        {
            title: "Akuma no Encyclopedia",
            subtitle: "O site Akuma no Encyclopedia reúne informações detalhadas sobre as Akuma no Mi, as frutas fictícias da obra One Piece, categorizadas por tipo e descrição. Ele oferece um extenso catálogo com explicações sobre habilidades, modelos e usuários conhecidos. A interface é simples, permitindo fácil navegação e pesquisa.",
            image: "img/encyclopedia.png",
            color: "linear-gradient(90deg,rgb(255, 0, 0) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
            link:"https://rikkiisenpai.github.io/Akuma-no-Encyclopedia/"
        
        } ,{
            title: "GH-Studio",
            subtitle: "O site da GH-Studio oferece serviços personalizados de desenvolvimento web para os seus clientes. Ele apresenta páginas como Quem Somos, Serviços e Produtos e Casos de Sucesso, destacando a experiência da empresa. Além disso, possui seções informativas, como Perguntas Frequentes e Contato. A interface, construída com HTML e CSS, é intuitiva, funcional e totalmente responsiva, adaptando-se a diferentes dispositivos para garantir uma experiência fluida.",
            image: "img/ghstudio.jpg",
            color: "linear-gradient(90deg,rgb(255, 0, 0) 2%,rgb(17, 17, 17) 100%,rgb(7, 3, 75) 100%)",
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
                <div class="slide-content" id="slide" style="background: ${slideData.color || '#fff'}  ">
                    ${slideData.image ? `<img  src="${slideData.image}" alt="">` : ''}
                    <h2>${slideData.title}</h2>
                    ${slideData.subtitle ? `<p style="display:flex;  color: var(--cor-card-red);">${slideData.subtitle}</p>` : ''}
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







let corAtual = "#ffffff"; // Começa com partículas brancas


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,  // Quantidade de partículas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": corAtual  // Cor branca
    },
    "shape": {
      "type": "circle",  // Forma das partículas
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,  // Transparência
      "random": true
    },
    "size": {
      "value": 3,  // Tamanho
      "random": true
    },
    "line_linked": {
      "enable": false  // Remove linhas entre partículas
    },
    "move": {
      "enable": true,
      "speed": 2,  // Velocidade
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false  // Desativa efeitos ao passar o mouse
      },
      "onclick": {
        "enable": false  // Desativa efeitos ao clicar
      },
      "resize": true
    }
  },
  "retina_detect": true
});
