const botao = document.getElementById('botao');
const botaoMobile = document.getElementById('botaoMobile');
const imagem = document.getElementById('imagemBotao');
let imagemAtual = 1; // Controla qual imagem está sendo exibida


// Abre o menu ao clicar no ícone de hambúrguer
document.getElementById('mobile-menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('Menu');
    menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de "X"
document.getElementById('close-menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('Menu');
    menu.classList.remove('active');
});
function closeMenu() {
  var menu = document.getElementById('Menu');
    menu.classList.remove('active');
}



// Caminhos das imagens (substitua pelos seus arquivos)
const imagens = {
    1: "img/Dark.png",
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

botaoMobile.addEventListener('click', () => {
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



       function openTab(evt, tabName) {
            // Esconde todos os conteúdos de abas
            const tabContents = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }
            
            // Remove a classe 'active' de todos os botões
            const tabButtons = document.getElementsByClassName("tab-btn");
            for (let i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }
            
            // Mostra a aba atual e adiciona a classe 'active' ao botão
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        //cardssss
        document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const indicatorsContainer = document.querySelector('.indicators');
    
    // Dados dos cards
    const cardsData = [
        {
            title: "Clique para mais informaçoes",
            link:"https://RicardoLuiz-js.github.io/GH-Studio/",
            image: "img/ghstudio.png"
        },
        {
            title: "Clique para mais informaçoes",
            link:"https://ricardoluiz-js.github.io/Akuma-no-Encyclopedia/",
            image: "img/encyclopedia.png"
        },
        {
           title: "Clique para mais informaçoes",
           link:"https://ricardoluiz-js.github.io/Portfolio/Controle-Estoque.html",
           image: "img/controle.png"
        },
        {
            title: "Clique para mais informaçoes",
             link:"https://github.com/RicardoLuiz-js/Personalized-Training/releases",
            image: "img/personalized.png"
        },
        {
           title: "Clique para mais informaçoes",
           link:"https://github.com/RicardoLuiz-js/Secret-World/releases",
           image: "img/secret.png"
        },
    ];
    
    // Começa pelo card do meio
    let currentIndex = Math.floor(cardsData.length / 2);
    
    // Criar cards e indicadores (função atualizada como mostrado acima)
    function createCards() {
        cardsData.forEach((data, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            
            if (index === currentIndex) {
                card.classList.add('current');
            } else if (index === (currentIndex + 1) % cardsData.length) {
                card.classList.add('next');
            } else if (index === (currentIndex - 1 + cardsData.length) % cardsData.length) {
                card.classList.add('prev');
            } else {
                card.classList.add('hidden');
            }
            
            card.innerHTML = `
                <a href="${data.link}" target="_blanck"> <div class="card-info">
                    <h2 class="title">${data.title}</h2>
                   <img class="imgcard"  src="${data.image}" alt="">
                </div></a>
            `;
            
            carrossel.appendChild(card);
            
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === currentIndex) indicator.classList.add('active');
            indicator.dataset.index = index;
            indicatorsContainer.appendChild(indicator);
        });
    }
    
               createCards();
            
            // Atualizar posição dos cards
            function updateCards() {
                const cards = document.querySelectorAll('.card');
                const indicators = document.querySelectorAll('.indicator');
                
                cards.forEach((card, index) => {
                    card.classList.remove('prev', 'current', 'next', 'hidden');
                    
                    if (index === currentIndex) {
                        card.classList.add('current');
                    } else if (index === (currentIndex + 1) % cards.length) {
                        card.classList.add('next');
                    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                        card.classList.add('prev');
                    } else {
                        card.classList.add('hidden');
                    }
                });
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Event listeners
            btnPrev.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
                updateCards();
            });
            
            btnNext.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cardsData.length;
                updateCards();
            });
            
            // Navegação pelos indicadores
            indicatorsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('indicator')) {
                    currentIndex = parseInt(e.target.dataset.index);
                    updateCards();
                }
            });
            
            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
                    updateCards();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % cardsData.length;
                    updateCards();
                }
            });
        });
