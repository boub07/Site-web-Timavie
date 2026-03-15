let cart = [];
let total = 0;

// Ajouter un produit au panier
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
}

// Mettre à jour l'affichage
function updateUI() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    list.innerHTML = '';
    cart.forEach((item) => {
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.padding = "8px 0";
        li.style.borderBottom = "1px solid #eee";
        li.textContent = `🍗 ${item.name} - ${item.price}€`;
        list.appendChild(li);
    });
    
    totalDisplay.textContent = total.toFixed(2);
}

// Commander tout le panier
function checkout() {
    if(cart.length === 0) return alert("Votre panier est vide !");
    
    const numero = "33773127625"; 
    let detailCommande = "";
    cart.forEach(item => {
        detailCommande += `- ${item.name} (${item.price}€)\n`;
    });

    const message = `Bonjour Timavie ! Je souhaite passer une commande :\n\n${detailCommande}\nTotal : ${total.toFixed(2)}€\n\nMerci !`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(message)}`, '_blank');
}

// Commande directe (Timeline)
function commanderWhatsAppDirect(productName, price) {
    const numero = "33773127625"; 
    const message = `Bonjour Timavie, je souhaite commander en direct : ${productName} (${price}€). Merci !`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(message)}`, '_blank');
}
