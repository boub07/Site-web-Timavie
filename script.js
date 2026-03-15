let cart = [];
let total = 0;

// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
}

// Fonction pour mettre à jour l'affichage du panier (liste et total)
function updateUI() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    list.innerHTML = '';
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.marginBottom = "5px";
        li.textContent = ` ${item.name} - ${item.price}€`;
        list.appendChild(li);
    });
    
    totalDisplay.textContent = total.toFixed(2);
}

// Fonction pour commander TOUT le panier via WhatsApp
function checkout() {
    if(cart.length === 0) return alert("Votre panier est vide !");
    
    const numero = "33773127625"; // Format propre : indicatif sans + et sans espaces
    
    // On crée la liste des produits pour le message
    let detailCommande = "";
    cart.forEach(item => {
        detailCommande += `- ${item.name} (${item.price}€)\n`;
    });

    const message = `Bonjour Timavie ! Je souhaite passer une commande :\n\n${detailCommande}\nTotal : ${total.toFixed(2)}€\n\nMerci de me confirmer la disponibilité.`;
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Fonction pour commander UN SEUL produit directement (depuis la Timeline)
function commanderWhatsAppDirect(productName, price) {
    const numero = "33773127625"; 

    const message = `Bonjour Timavie, je viens de voir votre cycle de vie. Je souhaite commander directement : ${productName} (${price}€). Merci !`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${numero}?text=${encodedMessage}`;
    window.open(url, '_blank');
}
