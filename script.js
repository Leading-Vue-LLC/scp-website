const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const languageButtons = document.querySelectorAll('[data-lang]');

const copy = {
  es: {
    menu: 'Menú', navGroup: 'El grupo', navPlatforms: 'Plataformas', navPrinciples: 'Principios', navContact: 'Hablemos',
    heroEyebrow: 'Capital · Ejecución · Impacto', heroTitle: 'Capital que<br><em>construye</em> valor real.', heroIntro: 'Conectamos capital con ejecución y relaciones estratégicas para crear activos reales y sostenibles que generan valor para las próximas generaciones.', heroLink: 'Conocer el grupo', heroCta: 'Iniciar una conversación', heroNote: 'Perspectiva<br><strong>a largo plazo</strong>', heroFooter1: 'INTEGRIDAD EN NUESTRO PROPÓSITO', heroFooter2: 'DISCIPLINA EN NUESTRO PROCESO', heroFooter3: 'IMPACTO EN NUESTRAS COMUNIDADES',
    aboutLabel: 'Quiénes somos', aboutEyebrow: 'Nuestra filosofía', aboutTitle: 'El capital es una herramienta para <em>transformar.</em>', aboutText1: 'Creemos que el capital, cuando se administra con integridad y propósito, puede transformar industrias, fortalecer comunidades y mejorar vidas.', aboutText2: 'Nuestro enfoque combina perspectiva a largo plazo, ejecución impecable y alianzas estratégicas para convertir oportunidades en resultados reales.',
    platformEyebrow: 'Dónde creamos valor', platformTitle: 'Nuestras plataformas<br><em>de negocio.</em>', platformIntro: 'A través de plataformas complementarias, creamos, desarrollamos y operamos activos que generan valor sostenible.',
    platformTitles: ['Inversión y asignación de capital', 'Infraestructura y construcción civil', 'Activos industriales y recursos naturales', 'Comercio internacional', 'Estructuración y relaciones financieras', 'Ejecución y operación de proyectos'], platformTexts: ['Identificamos oportunidades atractivas y asignamos capital con disciplina y perspectiva de largo plazo.', 'Desarrollamos y construimos infraestructura esencial con énfasis en vivienda, transporte y obras de impacto social.', 'Invertimos y operamos en activos industriales clave y en recursos naturales que impulsan el desarrollo.', 'Conectamos mercados, facilitamos comercio y creamos eficiencias en cadenas de suministro globales.', 'Estructuramos soluciones de financiamiento, capital y alianzas institucionales.', 'Ejecutamos y gestionamos proyectos con excelencia operativa para entregar resultados superiores.'],
    modelEyebrow: 'Nuestro modelo operativo', modelTitle: 'Una idea simple.<br><em>Resultados reales.</em>', modelIntro: 'Asignamos capital con disciplina, diseñamos estrategias claras y convertimos planes en activos que perduran.', modelLink: 'Nuestros principios', stepTitles: ['Capital', 'Estrategia', 'Ejecución', 'Operación'], stepTexts: ['Asignamos con disciplina.', 'Diseñamos con claridad.', 'Convertimos planes en resultados.', 'Gestionamos con excelencia.'],
    principlesLabel: 'Lo que nos guía', principlesEyebrow: 'Nuestros principios', principlesTitle: 'La confianza se <em>construye.</em>', principlesIntro: 'No buscamos atajos ni tendencias pasajeras. Buscamos lo que es correcto, lo que tiene sentido y lo que genera impacto duradero.', principleTitles: ['Integridad', 'Disciplina', 'Impacto', 'Legado'], principleTexts: ['Hacemos lo correcto, siempre.', 'Asignamos con rigor, ejecutamos con excelencia.', 'Mejoramos comunidades y generamos progreso sostenible.', 'Construimos valor que trasciende generaciones.'], contactEyebrow: 'Conversemos', contactTitle: 'Construyamos lo que<br><em>viene después.</em>'
  },
  en: {
    menu: 'Menu', navGroup: 'The group', navPlatforms: 'Platforms', navPrinciples: 'Principles', navContact: 'Let’s talk',
    heroEyebrow: 'Capital · Execution · Impact', heroTitle: 'Capital that<br><em>builds</em> lasting value.', heroIntro: 'We connect capital with execution and strategic relationships to create real, sustainable assets that generate value for generations to come.', heroLink: 'Explore the group', heroCta: 'Start a conversation', heroNote: 'A long-term<br><strong>perspective</strong>', heroFooter1: 'INTEGRITY IN OUR PURPOSE', heroFooter2: 'DISCIPLINE IN OUR PROCESS', heroFooter3: 'IMPACT IN OUR COMMUNITIES',
    aboutLabel: 'Who we are', aboutEyebrow: 'Our philosophy', aboutTitle: 'Capital is a tool to <em>transform.</em>', aboutText1: 'We believe capital, when managed with integrity and purpose, can transform industries, strengthen communities, and improve lives.', aboutText2: 'Our approach combines long-term perspective, flawless execution, and strategic partnerships to turn opportunities into real results.',
    platformEyebrow: 'Where we create value', platformTitle: 'Our business<br><em>platforms.</em>', platformIntro: 'Through complementary platforms, we create, develop, and operate assets that generate sustainable value.',
    platformTitles: ['Investment & capital allocation', 'Infrastructure & civil construction', 'Industrial assets & natural resources', 'International trade', 'Financial structuring & relationships', 'Project execution & operations'], platformTexts: ['We identify attractive opportunities and allocate capital with discipline and a long-term perspective.', 'We develop and build essential infrastructure with a focus on housing, transportation, and social-impact projects.', 'We invest in and operate key industrial assets and natural resources that drive development.', 'We connect markets, facilitate trade, and create efficiencies across global supply chains.', 'We structure financing solutions, capital, and institutional partnerships.', 'We execute and manage projects with operational excellence to deliver superior results.'],
    modelEyebrow: 'Our operating model', modelTitle: 'A simple idea.<br><em>Real results.</em>', modelIntro: 'We allocate capital with discipline, design clear strategies, and turn plans into assets that endure.', modelLink: 'Our principles', stepTitles: ['Capital', 'Strategy', 'Execution', 'Operations'], stepTexts: ['Allocate with discipline.', 'Design with clarity.', 'Turn plans into results.', 'Manage with excellence.'],
    principlesLabel: 'What guides us', principlesEyebrow: 'Our principles', principlesTitle: 'Trust is <em>built.</em>', principlesIntro: 'We do not chase shortcuts or passing trends. We pursue what is right, what makes sense, and what creates lasting impact.', principleTitles: ['Integrity', 'Discipline', 'Impact', 'Legacy'], principleTexts: ['We do the right thing, always.', 'We allocate rigorously and execute with excellence.', 'We improve communities and create sustainable progress.', 'We build value that transcends generations.'], contactEyebrow: 'Let’s connect', contactTitle: 'Let’s build<br><em>what comes next.</em>'
  }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setLanguage(language) {
  const selected = copy[language];
  document.documentElement.lang = language;
  document.title = language === 'en' ? 'Salan Capital Group | Capital that builds lasting value' : 'Salan Capital Group | Capital que construye valor real';
  document.querySelector('meta[name="description"]').content = selected.heroIntro;

  const directKeys = ['menu', 'navGroup', 'navPlatforms', 'navPrinciples', 'navContact', 'heroEyebrow', 'heroTitle', 'heroIntro', 'heroLink', 'heroCta', 'heroNote', 'heroFooter1', 'heroFooter2', 'heroFooter3', 'aboutLabel', 'aboutEyebrow', 'aboutTitle', 'aboutText1', 'aboutText2', 'platformEyebrow', 'platformTitle', 'platformIntro', 'modelEyebrow', 'modelTitle', 'modelIntro', 'modelLink', 'principlesLabel', 'principlesEyebrow', 'principlesTitle', 'principlesIntro', 'contactEyebrow', 'contactTitle'];
  const selectors = ['.menu-label', '.main-nav a:nth-child(1)', '.main-nav a:nth-child(2)', '.main-nav a:nth-child(3)', '.nav-contact', '.hero-copy .eyebrow', '.hero h1', '.hero-intro', '.hero-copy .text-link span', '.cta-label', '.hero-note p', '.hero-footer span:nth-child(1)', '.hero-footer span:nth-child(2)', '.hero-footer span:nth-child(3)', '.section-label span:nth-child(2)', '.intro .eyebrow', '.intro h2', '.intro-text p:nth-child(1)', '.intro-text p:nth-child(2)', '.platforms .eyebrow', '.platforms h2', '.heading-note', '.model-copy .eyebrow', '.model-copy h2', '.model-copy > p:not(.eyebrow)', '.model-copy .text-link span', '.principles .section-label span:nth-child(2)', '.principles .eyebrow', '.principles h2', '.body-copy', '.contact .eyebrow', '.contact h2'];
  directKeys.forEach((key, index) => setText(selectors[index], selected[key]));
  document.querySelectorAll('.platform-card h3').forEach((element, index) => element.textContent = selected.platformTitles[index]);
  document.querySelectorAll('.platform-card p').forEach((element, index) => element.textContent = selected.platformTexts[index]);
  document.querySelectorAll('.step strong').forEach((element, index) => element.textContent = selected.stepTitles[index]);
  document.querySelectorAll('.step span').forEach((element, index) => element.textContent = selected.stepTexts[index]);
  document.querySelectorAll('.principle-list strong').forEach((element, index) => element.textContent = selected.principleTitles[index]);
  document.querySelectorAll('.principle-list p').forEach((element, index) => element.textContent = selected.principleTexts[index]);
  languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === language));
}

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.querySelector('b').textContent = isOpen ? '×' : '+';
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('b').textContent = '+';
}));
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
setLanguage('en');