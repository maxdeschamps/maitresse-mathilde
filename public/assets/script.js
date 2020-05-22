window.onload = function() {
  // Animation menu mobile
  var toggleBtn = document.getElementById('toggle-nav'),
      mobileMenu = document.getElementById('menu-mobile');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }
};
