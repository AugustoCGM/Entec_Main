document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

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
    const fabStar = document.getElementById('fab-star');
    const fabController = document.getElementById('fab-controller');
    let isFabOpen = false;

    if (fabBtn) {
        fabBtn.addEventListener('click', () => {
            isFabOpen = !isFabOpen;
            
            if (isFabOpen) {
                fabMenu.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
                fabMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                
                fabStar.style.transform = 'rotate(180deg) scale(0.3)';
                fabStar.style.opacity = '0';
                
                fabController.style.transform = 'rotate(0deg) scale(1)';
                fabController.style.opacity = '1';
            } else {
                fabMenu.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
                fabMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                
                fabController.style.transform = 'rotate(-180deg) scale(0.3)';
                fabController.style.opacity = '0';
                
                fabStar.style.transform = 'rotate(0deg) scale(1)';
                fabStar.style.opacity = '1';
            }
        });
    }
});