window.renderPage = function(page) {
    const app = document.getElementById('app');
    switch(page) {
      case 'home':
        app.innerHTML = `
          <h1>Bienvenue chez Colomba Institut</h1>
          <p>Des ongles et des cils parfaits dans un cadre doux, pour un prix accessible, à 2 pas de Perigueux</p>
          <img src="assets/onglerie.jpg" alt="Onglerie" style="width:100%;border-radius:8px;">
        `;
        break;
      case 'prestations':
        app.innerHTML = `
          <h2>Nos Prestations Beauté</h2>
          <h3>Beauté des mains</h3>
          <h4>Gel et extension</h4>
          <ul>
            <li>Pose Complète S/M</li>
            <li>Pose Complète L/XL</li>
            <li>Remplissage</li>
            <li>Remplissage + 4 semaines</li>
            <li>Gainage sur ongle naturel</li>
            <li>Dépose</li>
          </ul>
          <h4>Semi-Permanent</h4>
          <ul>
            <li>Pose Mains avec renfort</li>
            <li>Pose Pieds</li>
            <li>Pose Mains + Pieds</li> 
          </ul>
          <h4>Nail Art</h4>
          <ul>
            <li>Baby Bommer</li>
            <li>French</li>
            <li>Décoration avec effet (paillette, chrome, aurora...)</li>
          </ul>
          <h3>Beauté des cils</h3>
          <ul>
            <li>Extension de cils</li>
            <li>Rehaussement de cils</li>
          </ul>

          <p>Pour plus de détails, consultez nos <a href="#/tarifs">tarifs</a>.</p>
          <a href="#/tarifs" class="button">Voir nos tarifs</a>
        `;
        break;
      case 'tarifs':
        app.innerHTML = `
          <h2>Tarifs</h2>
          <table>
            <tr><td>Pose complète gel</td><td>45€</td></tr>
            <tr><td>Remplissage</td><td>30€</td></tr>
            <tr><td>Vernis semi-permanent</td><td>25€</td></tr>
            <tr><td>Extension de cils</td><td>60€</td></tr>
          </table>
        `;
        break;
      case 'evenements':
        app.innerHTML = `
          <h2>Évènements</h2>
          <p>Page en cours de construction</p>
        `;
        break;
      case 'planning':
        app.innerHTML = `
          <h2>Planning & Réservation</h2>
          <form id="reservationForm">
            <label>Nom</label>
            <input type="text" required>
            <label>Email</label>
            <input type="email" required>
            <label>Prestation</label>
            <select required>
              <option>Ongles</option>
              <option>Cils</option>
            </select>
            <label>Date</label>
            <input type="date" required>
            <button type="submit">Réserver</button>
          </form>
          <div id="planningList">
            <h3>Planning des réservations</h3>
            <ul id="reservations"></ul>
          </div>
        `;
        bindReservationForm();
        break;
      case 'contact':
        app.innerHTML = `
          <h2>Contact</h2>
          <form id="contactForm" method="POST" action="/api/contact">
            <label for="nom>Votre nom :</label>
            <input type="text" id="nom" name="nom" required>
            <label for="email">Votre email :</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Votre message: </label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
            <div id="contactResult"></div>
        `;
        break;
      case 'mentionsLegales':
        app.innerHTML = `
          <h2>Mentions légales</h2>
          <p>Votre texte légal ici...</p>
        `;
        break;
      default:
        app.innerHTML = `<h2>Page non trouvée</h2>`;
    }
  };
  
  // Gestion du planning (simple stockage local)
  function bindReservationForm() {
    const form = document.getElementById('reservationForm');
    const reservationsList = document.getElementById('reservations');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nom = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const prestation = form.querySelector('select').value;
        const date = form.querySelector('input[type="date"]').value;
        const reservation = { nom, email, prestation, date };
        // Stocker en localStorage
        const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
        reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        afficherReservations();
        form.reset();
        alert('Réservation enregistrée !');
      });
      afficherReservations();
    }
  }
  
  function afficherReservations() {
    const reservationsList = document.getElementById('reservations');
    if (!reservationsList) return;
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservationsList.innerHTML = reservations.map(r => 
      `<li>${r.date} - ${r.prestation} pour ${r.nom}</li>`
    ).join('');
  }
  