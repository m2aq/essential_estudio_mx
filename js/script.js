/* =========================================================
   ESSENTIAL · estudio floral — interacciones
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Pantalla de carga ---------- */
  const pantalla = document.getElementById('pantalla-carga');
  const barra    = document.getElementById('carga-barra-progreso');
  let progreso = 0;
  const intervalo = setInterval(() => {
    progreso += Math.random() * 16 + 6;
    if (progreso >= 100){
      progreso = 100;
      clearInterval(intervalo);
      setTimeout(() => {
        pantalla.classList.add('cargado');
        document.body.style.overflow = '';
        document.querySelector('.hero-contenido')?.classList.add('visible');
        document.querySelector('.hero-foto')?.classList.add('cargado');
      }, 450);
    }
    barra.style.width = progreso + '%';
  }, 130);
  document.body.style.overflow = 'hidden';

  /* ---------- Cursor custom ---------- */
  const punto = document.getElementById('cursor-punto');
  const aura  = document.getElementById('cursor-aura');
  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let ax = mx, ay = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    punto.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });

  const seguirAura = () => {
    ax += (mx - ax) * 0.18;
    ay += (my - ay) * 0.18;
    aura.style.transform = `translate(${ax}px, ${ay}px) translate(-50%,-50%)`;
    requestAnimationFrame(seguirAura);
  };
  seguirAura();

  // Hover en elementos interactivos
  document.querySelectorAll('a, button, .cat-item, .sus-plan, .ev-card, .cont-card').forEach(el => {
    el.addEventListener('mouseenter', () => aura.classList.add('hover'));
    el.addEventListener('mouseleave', () => aura.classList.remove('hover'));
  });

  // Cursor claro sobre fondos oscuros (hero + eventos + footer)
  const seccionesOscuras = ['#hero', '#eventos', '.footer'];
  document.querySelectorAll(seccionesOscuras.join(',')).forEach(sec => {
    sec.addEventListener('mouseenter', () => {
      punto.classList.add('invertido');
      aura.classList.add('invertido');
    });
    sec.addEventListener('mouseleave', () => {
      punto.classList.remove('invertido');
      aura.classList.remove('invertido');
    });
  });

  /* ---------- Nav scroll & menú móvil ---------- */
  const nav = document.getElementById('nav');
  const enlaces = document.getElementById('nav-enlaces');
  const hamb = document.getElementById('hamburguesa');

  const onScroll = () => {
    nav.classList.toggle('fondo', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamb?.addEventListener('click', () => {
    hamb.classList.toggle('activo');
    enlaces.classList.toggle('activo');
  });

  enlaces.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamb.classList.remove('activo');
      enlaces.classList.remove('activo');
    });
  });

  /* ---------- Fade-up al hacer scroll ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ---------- Parallax sección Eventos ---------- */
  const paralax = document.querySelector('[data-paralax]');
  if (paralax){
    window.addEventListener('scroll', () => {
      const rect = paralax.parentElement.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible){
        const offset = (rect.top - window.innerHeight) * 0.15;
        paralax.style.transform = `translateY(${-offset}px) scale(1.1)`;
      }
    }, { passive: true });
  }

  /* ---------- Hero: revelar palabras escalonadas ---------- */
  const palabras = document.querySelectorAll('.hero-palabra');
  palabras.forEach((p, i) => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(60%)';
    p.style.transition = `opacity .9s cubic-bezier(.22,.61,.36,1) ${1.2 + i*0.15}s, transform 1.1s cubic-bezier(.22,.61,.36,1) ${1.2 + i*0.15}s`;
  });
  setTimeout(() => {
    palabras.forEach(p => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    });
  }, 100);

  /* ---------- Smooth scroll con offset para nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
