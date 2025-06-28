 const hamburger = document.querySelector('.hamburger');
 const menu = document.querySelector('.menu');
 hamburger.addEventListener('click', () => {
     menu.classList.toggle('hidden');
     menu.classList.toggle('active');
     hamburger.textContent = menu.classList.contains('hidden') ? '☰' : '✖';
     hamburger.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
 });
 document.querySelectorAll('.nav a').forEach(link => {
     link.addEventListener('click', () => {
         menu.classList.add('hidden');
         menu.classList.remove('active');
         hamburger.textContent = '☰';
         hamburger.setAttribute('aria-expanded', 'false');
     });
 });
 document.getElementById('contact-form').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Form submitted successfully! This is a demo');
     this.reset();
 });
 document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
         menu.classList.add('hidden');
         menu.classList.remove('active');
         hamburger.textContent = '☰';
         hamburger.setAttribute('aria-expanded', 'false');
     }
 });