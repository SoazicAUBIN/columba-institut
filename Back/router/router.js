import { Router } from "express";
import * as controllers from "../controller/controller.js";

export const router = Router();
// router.js
// Import des contrôleurs
import { app } from "../app.js";
// Définition des routes  

const router = {
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
  