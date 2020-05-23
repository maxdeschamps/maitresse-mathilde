window.onload = function() {
  // Animation menu mobile
  var toggleBtn = document.getElementById('toggle-nav'),
      mobileMenu = document.getElementById('menu-mobile'),
      openSubMenuBtn = document.getElementsByClassName('open-sub-menu'),
      closeSubMenuBtn = document.getElementsByClassName('close-sub-menu');

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
          subMenu.classList.remove('active');
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
          subMenu.classList.add('active');
        }
      });
    }
  }

  // Fermeture du sous menu mobile
  if (closeSubMenuBtn) {
    for (let i=0; i<closeSubMenuBtn.length; i++) {
      closeSubMenuBtn[i].addEventListener('click', function(el) {
        if (el.target.parentNode.parentNode.nodeName == 'UL' && el.target.parentNode.parentNode.classList.contains('sub-menu')) {
          el.target.parentNode.parentNode.classList.remove('active');
        }
      });
    }
  }

  // Fermeture du menu mobile lors du redimensionnement de la page
  window.onresize = function() {
    if (window.innerWidth > 900) {
      // Animation menu mobile
      var toggleBtn = document.getElementById('toggle-nav'),
          mobileMenu = document.getElementById('menu-mobile'),
          openSubMenuBtn = document.getElementsByClassName('open-sub-menu');

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
  };

};
