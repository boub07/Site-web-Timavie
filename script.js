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
function commanderWhatsApp() {
    const message = "Bonjour Timavie, je souhaite commander un poulet de chair !";
    const numero = "225000000000"; // REMPLACE PAR TON NUMÉRO (avec l'indicatif pays)
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
}
