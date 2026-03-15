// --- VARIABLES GLOBALES ---
let cart = [];
let total = 0;

// On récupère le prix enregistré, ou on met 12.50 par défaut
let prixActuelEntier = localStorage.getItem('prixPoulet') ? parseFloat(localStorage.getItem('prixPoulet')) : 12.50;

// On affiche le bon prix dès le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    updatePriceDisplay();
});

function updatePriceDisplay() {
    // Met à jour le texte du prix sur la carte du produit
    const display = document.querySelector('.price');
    if(display) display.textContent = prixActuelEntier.toFixed(2) + "€ / kg";
}

function savePrices() {
    const nouveauPrix = document.getElementById('new-price-entier').value;
    localStorage.setItem('prixPoulet', nouveauPrix); // On enregistre dans le navigateur
    prixActuelEntier = parseFloat(nouveauPrix);
    updatePriceDisplay();
    alert("✅ Prix mis à jour avec succès !");
}

// Modifie ta fonction addToCart pour utiliser la variable
function addToCart(name, price) {
    // Si c'est un poulet entier, on utilise le prix du gérant
    let prixFinal = (name === 'Poulet Entier') ? prixActuelEntier : price;
    cart.push({name: name, price: prixFinal});
    total += prixFinal;
    updateUI();
}

// --- FONCTION GÉRANT : ENREGISTRER LE PRIX ---
function savePrices() {
    const inputPrix = document.getElementById('new-price-entier').value;
    if (inputPrix > 0) {
        localStorage.setItem('prixPoulet', inputPrix); // Sauvegarde dans le navigateur
        prixActuelEntier = parseFloat(inputPrix);
        updatePriceDisplay();
        alert("✅ Prix mis à jour pour vos prochains clients !");
    }
}

// Met à jour le texte sur la fiche produit
function updatePriceDisplay() {
    const display = document.getElementById('display-price-entier');
    if(display) display.textContent = prixActuelEntier.toFixed(2).replace('.', ',');
}

// --- GESTION DU PANIER ---
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('translate-x-full');
}

function addToCart(name) {
    // On utilise toujours le prix actuel défini par le gérant
    let price = prixActuelEntier; 
    
    cart.push({name, price});
    total += price;
    updateUI();
    
    // Ouvre le panier pour montrer que c'est ajouté
    document.getElementById('cart-sidebar').classList.remove('translate-x-full');
}

function updateUI() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');
    
    list.innerHTML = cart.length === 0 ? '<p class="text-gray-400 text-center">Panier vide...</p>' : '';
    
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center border-b pb-2";
        div.innerHTML = `
            <div>
                <p class="font-bold text-sm">${item.name}</p>
                <p class="text-xs text-blue-600">1 x ${item.price.toFixed(2)}€</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 text-xs">Supprimer</button>
        `;
        list.appendChild(div);
    });
    
    totalDisplay.textContent = total.toFixed(2).replace('.', ',');
    cartCount.textContent = cart.length;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateUI();
}

// --- COMMANDE WHATSAPP ---
function checkout() {
    if(cart.length === 0) return;
    
    const numero = "33773127625"; 
    let detail = "Bonjour Timavie ! Voici ma commande :\n\n";
    
    cart.forEach(item => {
        detail += `- ${item.name} (${item.price.toFixed(2)}€)\n`;
    });
    
    detail += `\nTOTAL : ${total.toFixed(2)}€\nMerci !`;
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(detail)}`;
    window.open(url, '_blank');
}
