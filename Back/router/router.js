const routes = {
    '/': 'home',
    '/prestations': 'prestations',
    '/tarifs': 'tarifs',
    '/evenements': 'evenements',
    '/planning': 'planning',
    '/contact': 'contact',
    '/mentions-legales': 'mentionsLegales'
  };
  
  function router() {
    const hash = location.hash.slice(1) || '/';
    const page = routes[hash] || 'home';
    window.renderPage(page);
  }
  
  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);
  