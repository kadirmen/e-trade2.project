document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    console.log("Tıklanan menü:", targetId); // <<< bunu ekle
    const targetSection = document.getElementById(targetId);

    if (targetId === 'services') {
      const yOffset = -10;
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('nav-list').classList.remove('show');
    document.querySelector('.side-nav').style.display = 'flex';
  });
});


// Form gönderim
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Mesajınız gönderildi! Teşekkürler.");
  this.reset();
});

// Hamburger menü
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navList = document.getElementById('nav-list');
  const sideNav = document.querySelector('.side-nav');

  navList.classList.toggle('show');

  // Menü açıkken side-nav gizlensin
  if (navList.classList.contains('show')) {
    sideNav.style.display = 'none';
  } else {
    sideNav.style.display = 'flex';
  }
});

// Aktif dot gösterimi
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.dot');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('href') === `#${current}`) {
      dot.classList.add('active');
    }
  });
});

// Ekran boyutu değişince side-nav yeniden görünür olsun
window.addEventListener('resize', () => {
  const sideNav = document.querySelector('.side-nav');
  const navList = document.getElementById('nav-list');

  if (window.innerWidth > 700 || !navList.classList.contains('show')) {
    sideNav.style.display = 'flex';
  }
});
