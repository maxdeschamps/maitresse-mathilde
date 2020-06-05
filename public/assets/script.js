window.onload = function() {
  // MENU
  var toggleBtn = document.getElementById('toggle-nav'),
      mobileMenu = document.getElementById('menu-mobile'),
      openSubMenuBtn = document.getElementsByClassName('open-sub-menu'),
      closeSubMenuBtn = document.getElementsByClassName('close-sub-menu'),
      posLiSubMenu = [],
      sizesLiSubMenu = [];

  // Ouverture et fermeture du menu mobile
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');

      // Les sous-menus sont automatiquement fermés
      for (let i=0; i<openSubMenuBtn.length; i++) {
        let subMenu = null;
        for (let j=0; j<openSubMenuBtn[i].parentNode.children.length; j++) {
          if (openSubMenuBtn[i].parentNode.children[j].nodeName == 'UL' && openSubMenuBtn[i].parentNode.children[j].classList.contains('sub-menu')) {
            subMenu = openSubMenuBtn[i].parentNode.children[j];
          }
        }

        if (subMenu) {
          subMenu.children[0].children[2].style.color = 'black';
          subMenu.children[0].style.width = sizesLiSubMenu[i] + 'px';

          subMenu.classList.remove('active');
          subMenu.classList.remove('animate');
          subMenu.children[0].classList.remove('animate');
        }
      }
    });
  }

  // Ouverture du sous menu mobile
  if (openSubMenuBtn) {
    for (let i=0; i<openSubMenuBtn.length; i++) {
      openSubMenuBtn[i].addEventListener('click', function(el) {
        let subMenu = null;
        for (let j=0; j<el.target.parentNode.children.length; j++) {
          if (el.target.parentNode.children[j].nodeName == 'UL' && el.target.parentNode.children[j].classList.contains('sub-menu')) {
            subMenu = el.target.parentNode.children[j];
          }
        }

        if (subMenu) {
          // Positionnement du first li
          subMenu.children[0].style.top = posLiSubMenu[i].top + 7.5 + 'px';
          subMenu.children[0].style.left = posLiSubMenu[i].left - 4 + 'px';
          subMenu.children[0].style.transition = 'none';

          subMenu.classList.add('active');

          // Animation du first li
          setTimeout(() => {
            subMenu.children[0].children[2].style.color = 'white';
          }, 100)

          setTimeout(() => {
            subMenu.children[0].style.top = 0 + 'px';
            subMenu.children[0].style.left = 0 + 'px';
            subMenu.children[0].style.width = 100 + '%';
            subMenu.children[0].style.transition = '.8s ease';
            subMenu.children[0].classList.add('animate');
          }, 300);

          setTimeout(() => {
            subMenu.classList.add('animate');
          }, 1100);

          subMenu.parentNode.classList.add('active');
        }
      });

      // Attribution des tailles des 1er li des sous menu (permettant l'animation)
      let subMenu = null;
      for (let j=0; j<openSubMenuBtn[i].parentNode.children.length; j++) {
        if (openSubMenuBtn[i].parentNode.children[j].nodeName == 'UL' && openSubMenuBtn[i].parentNode.children[j].classList.contains('sub-menu')) {
          subMenu = openSubMenuBtn[i].parentNode.children[j];
        }
      }

      if (subMenu) {
        sizesLiSubMenu[i] = subMenu.children[0].getBoundingClientRect().width;
        subMenu.children[0].style.width = sizesLiSubMenu[i] + 'px';

        posLiSubMenu[i] = { top  : subMenu.parentNode.children[0].getBoundingClientRect().top,
                            left : subMenu.parentNode.children[0].getBoundingClientRect().left };
      }
    }
  }

  // Fermeture du sous menu mobile
  if (closeSubMenuBtn) {
    for (let i=0; i<closeSubMenuBtn.length; i++) {
      closeSubMenuBtn[i].addEventListener('click', function(el) {
        if (el.target.parentNode.parentNode.nodeName == 'UL' && el.target.parentNode.parentNode.classList.contains('sub-menu')) {
          el.target.parentNode.parentNode.children[0].style.width = sizesLiSubMenu[i] + 'px';
          el.target.parentNode.parentNode.children[0].style.top = posLiSubMenu[i].top + 7.5 + 'px';
          el.target.parentNode.parentNode.children[0].style.left = posLiSubMenu[i].left - 4 + 'px';

          setTimeout(() => {
            el.target.parentNode.parentNode.classList.remove('animate');
            el.target.parentNode.parentNode.children[0].classList.remove('animate');
          }, 100);

          setTimeout(() => {
            el.target.parentNode.parentNode.children[0].children[2].style.color = 'black';
          }, 300)

          setTimeout(() => {
            el.target.parentNode.parentNode.classList.remove('active');
          }, 700)
        }

        let subMenu = null;
        for (let j=0; j<openSubMenuBtn[i].parentNode.children.length; j++) {
          if (openSubMenuBtn[i].parentNode.children[j].nodeName == 'UL' && openSubMenuBtn[i].parentNode.children[j].classList.contains('sub-menu')) {
            subMenu = openSubMenuBtn[i].parentNode.children[j];
          }
        }

        if (subMenu) {
          subMenu.children[0].style.width = sizesLiSubMenu[i] + 'px';
        }
      });
    }
  }

  // FOOTER
  var footerEl = document.getElementById('footer'),
      mainEl = document.getElementById('app');

  // Calcul du margin du main pour voir le footer
  if (mainEl && footerEl) {
    if (window.innerHeight <= 550) {
      mainEl.style.marginBottom = 0;
    } else {
      let footerHeight = footerEl.offsetHeight;
      mainEl.style.marginBottom = footerHeight;
    }
  }

  // Fermeture du menu mobile lors du redimensionnement de la page
  window.onresize = function() {
    // Animation menu mobile
    var toggleBtn = document.getElementById('toggle-nav'),
        mobileMenu = document.getElementById('menu-mobile'),
        openSubMenuBtn = document.getElementsByClassName('open-sub-menu');

    if (window.innerWidth > 900) {
      // Fermeture du menu mobile
      if (toggleBtn && mobileMenu) {
        toggleBtn.classList.remove('active');
        mobileMenu.classList.remove('active');

        // Les sous-menus sont automatiquement fermés
        for (let i=0; i<openSubMenuBtn.length; i++) {
          let subMenu = null;
          for (let j=0; j<openSubMenuBtn[i].parentNode.children.length; j++) {
            if (openSubMenuBtn[i].parentNode.children[j].nodeName == 'UL' && openSubMenuBtn[i].parentNode.children[j].classList.contains('sub-menu')) {
              subMenu = openSubMenuBtn[i].parentNode.children[j];
            }
          }

          if (subMenu) {
            subMenu.classList.remove('active');
          }
        }
      }
    }

    // Recalcule des positions des elements du menu
    for (let i=0; i<openSubMenuBtn.length; i++) {
      let subMenu = null;
      for (let j=0; j<openSubMenuBtn[i].parentNode.children.length; j++) {
        if (openSubMenuBtn[i].parentNode.children[j].nodeName == 'UL' && openSubMenuBtn[i].parentNode.children[j].classList.contains('sub-menu')) {
          subMenu = openSubMenuBtn[i].parentNode.children[j];
        }
      }

      if (subMenu) {
        posLiSubMenu[i].top = subMenu.parentNode.children[0].getBoundingClientRect().top;
        posLiSubMenu[i].left = subMenu.parentNode.children[0].getBoundingClientRect().left;
      }
    }

    // Calcul de la taille du footer
    if (mainEl && footerEl) {
      if (window.innerHeight <= 550) {
        mainEl.style.marginBottom = 0;
      } else {
        let footerHeight = footerEl.offsetHeight;
        mainEl.style.marginBottom = footerHeight;
      }
    }
  };

};
