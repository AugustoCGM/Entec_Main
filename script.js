document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // ==========================================
    // CARROSSEL HERO (ATUALIZADO)
    // ==========================================
    const heroTrack = document.getElementById('hero-track');
    const prevHero = document.getElementById('prev-hero');
    const nextHero = document.getElementById('next-hero');
    const heroDots = document.getElementById('hero-dots');
    const floatingLogo = document.getElementById('floating-hero-logo');

    if (heroTrack && prevHero && nextHero && heroDots && floatingLogo) {
        const slides = heroTrack.children;
        const totalSlides = slides.length;
        let currentHeroSlide = 0;
        let heroAutoPlay;

        // Criar os indicadores (todos como retângulos)
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('w-6', 'h-3', 'border-2', 'border-black', 'bg-white', 'transition-colors', 'cursor-pointer');
            dot.addEventListener('click', () => goToHeroSlide(i));
            heroDots.appendChild(dot);
        }

        const updateHeroUI = () => {
            // Atualizar as cores dos retângulos
            Array.from(heroDots.children).forEach((dot, index) => {
                // Limpa as cores antes de aplicar a nova
                dot.classList.remove('bg-[#0055ff]', 'bg-[#ff00ff]', 'bg-white');

                if (index === currentHeroSlide) {
                    if (index === 0) {
                        dot.classList.add('bg-[#0055ff]'); // Azul na página principal
                    } else {
                        dot.classList.add('bg-[#ff00ff]'); // Rosa nos posts
                    }
                } else {
                    dot.classList.add('bg-white'); // Branco quando inativo
                }
            });

            // Atualizar a Logo Flutuante
            if (currentHeroSlide === 0) {
                floatingLogo.classList.add('logo-state-center');
                floatingLogo.classList.remove('logo-state-corner');
            } else {
                floatingLogo.classList.add('logo-state-corner');
                floatingLogo.classList.remove('logo-state-center');
            }
        };

        const goToHeroSlide = (index) => {
            if (index < 0) index = totalSlides - 1; 
            if (index >= totalSlides) index = 0;    
            
            currentHeroSlide = index;
            heroTrack.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
            updateHeroUI(); 
        };

        prevHero.addEventListener('click', () => {
            goToHeroSlide(currentHeroSlide - 1);
            resetHeroAutoPlay();
        });
        
        nextHero.addEventListener('click', () => {
            goToHeroSlide(currentHeroSlide + 1);
            resetHeroAutoPlay();
        });

        // Configuração Inicial
        updateHeroUI();

        const startHeroAutoPlay = () => {
            heroAutoPlay = setInterval(() => {
                goToHeroSlide(currentHeroSlide + 1);
            }, 6000);
        };

        const resetHeroAutoPlay = () => {
            clearInterval(heroAutoPlay);
            startHeroAutoPlay();
        };

        heroTrack.parentElement.addEventListener('mouseenter', () => clearInterval(heroAutoPlay));
        heroTrack.parentElement.addEventListener('mouseleave', startHeroAutoPlay);

        startHeroAutoPlay();
    }

    // ==========================================
    // ANIMAÇÃO EA FC 26
    // ==========================================
    const fcPlayerRender = document.getElementById('fc-player-render');
    if(fcPlayerRender) {
        const renderPoolFC = [
            'assets/render-vini.png',
            'assets/render-marta.png',
            'assets/render-bell.png',
            'assets/render-haaland.png',
            'assets/render-cr7.png'
        ];
        let currentIndexFC = 0;
        fcPlayerRender.style.transition = 'all 0.6s ease-in-out';

        setInterval(() => {
            fcPlayerRender.style.opacity = '0';
            fcPlayerRender.style.transform = 'translateX(-60px) scale(0.95)';
            
            setTimeout(() => {
                currentIndexFC = (currentIndexFC + 1) % renderPoolFC.length;
                fcPlayerRender.src = renderPoolFC[currentIndexFC];
                
                fcPlayerRender.style.transition = 'none';
                fcPlayerRender.style.transform = 'translateX(60px) scale(0.95)';
                
                void fcPlayerRender.offsetWidth;
                
                fcPlayerRender.style.transition = 'all 0.6s ease-out';
                fcPlayerRender.style.opacity = '1';
                fcPlayerRender.style.transform = 'translateX(0px) scale(1)';
            }, 600); 
        }, 4000); 
    }

    // ==========================================
    // ANIMAÇÃO MORTAL KOMBAT 11
    // ==========================================
    const mkPlayerRender = document.getElementById('mk-player-render');
    if(mkPlayerRender) {
        const renderPoolMK = [
            'assets/full-1.png',
            'assets/full-2.png',
            'assets/full-3.png',
            'assets/full-4.png',
            'assets/full-5.png'
        ];
        let currentIndexMK = 0;
        mkPlayerRender.style.transition = 'all 0.6s ease-in-out';

        setInterval(() => {
            mkPlayerRender.style.opacity = '0';
            mkPlayerRender.style.transform = 'translateX(60px) scale(0.95)';
            
            setTimeout(() => {
                currentIndexMK = (currentIndexMK + 1) % renderPoolMK.length;
                mkPlayerRender.src = renderPoolMK[currentIndexMK];
                
                mkPlayerRender.style.transition = 'none';
                mkPlayerRender.style.transform = 'translateX(-60px) scale(0.95)';
                
                void mkPlayerRender.offsetWidth;
                
                mkPlayerRender.style.transition = 'all 0.6s ease-out';
                mkPlayerRender.style.opacity = '1';
                mkPlayerRender.style.transform = 'translateX(0px) scale(1)';
            }, 600); 
        }, 4500); 
    }

    // ==========================================
    // ANIMAÇÃO DO BOTÃO FLUTUANTE (FAB)
    // ==========================================
    const fabBtn = document.getElementById('fab-btn');
    const fabMenu = document.getElementById('fab-menu');

    if (fabBtn && fabMenu) {
        fabBtn.addEventListener('click', () => {
            // Alterna a classe que ativa as rotações CSS (Tailwind) no HTML
            fabBtn.classList.toggle('is-open');
            
            if (fabBtn.classList.contains('is-open')) {
                // Mostrar o Menu de Botões (Desliza para cima)
                fabMenu.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
                fabMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
                // Esconder o Menu (Desliza para baixo)
                fabMenu.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
                fabMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        });
    }

    // ==========================================
    // CURSOR CUSTOMIZADO (PIXEL ART)
    // ==========================================
    const customCursor = document.getElementById('custom-cursor');
    
    if (customCursor) {
        // Faz a div seguir a posição exata do rato no ecrã
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });

        // Muda a imagem do cursor ao passar em elementos clicáveis
        const clickables = document.querySelectorAll('a, button, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('pointer'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('pointer'));
        });
    }
});