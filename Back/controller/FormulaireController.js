document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
      nom: this.nom.value,
      email: this.email.value,
      message: this.message.value
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('contactResult').textContent = result.message;
  });
  