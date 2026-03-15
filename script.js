let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
}

function updateUI() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    list.innerHTML = '';
    cart.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}€`;
        list.appendChild(li);
    });
    
    totalDisplay.textContent = total.toFixed(2);
}

function checkout() {
    if(cart.length === 0) return alert("Le panier est vide !");
    alert("Redirection vers le paiement (en cours de développement)...");
}
// === FONCTION DE COMMANDE DIRECTE (Appelée depuis la Timeline) ===

function commanderWhatsAppDirect(productName, price) {
    // 1. Ton numéro WhatsApp (avec l'indicatif, SANS LE +)
    const numero = "+33 773127625"; // REMPLACE PAR TON VRAI NUMÉRO (Congo, Côte d'Ivoire, etc.)

    // 2. Construire le message
    const message = `Bonjour Timavie, je viens de voir votre cycle de vie. Je souhaite commander : ${productName} (${price}€/kg). Merci !`;

    // 3. Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);

    // 4. Créer l'URL et ouvrir WhatsApp
    const url = `https://wa.me/${numero}?text=${encodedMessage}`;
    window.open(url, '_blank');
}
