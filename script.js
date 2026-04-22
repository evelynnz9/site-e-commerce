// Banco de dados de produtos
const products = [
    {
        id: 1,
        name: "Conjunto Luna",
        price: 169.99,
        category: "Conjuntos",
        rating: 4.5,
        reviews: 150,
        image: "fotos/conjunto4.png"
    },
    {
        id: 2,
        name: "Blusa Isis",
        description: "A sua nova blusa favorita chegou!",
        price: 79.99,
        category: "Blusas",
        rating: 4,
        reviews: 89,
        image: "fotos/blusa2.png"
    },
    {
          id: 3,
        name: "Legging Olivia",
        description: "Feita para acompanhar seu ritmo!",
        price: 99.99,
        category: "Calças",
        rating: 5,
        reviews: 256,
        image: "fotos/calça2.jpeg"
    },
    {
        id: 4,
        name: "Casaco Jade",
        description: "Se sinta linda até nos dias frios!",
        price: 89.99,
        category: "Casacos",
        rating: 4.5,
        reviews: 342,
        image: "fotos/casaco3.jpeg"
    },
    {
        id: 5,
        name: "Conjunto Belle",
        description: "Delicado e poderoso",
        price: 169.99,
        category: "conjuntos",
        rating: 4,
        reviews: 67,
        image: "fotos/conjunto5.png"
    },
    {
        id: 6,
        name: "Blusa Aurora",
        description: "Leveza que encanta",
        price: 79.99,
        category: "blusas",
        rating: 4.5,
        reviews: 178,
        image: "fotos/blusa1.jpg"
    },
    {
        id: 7,
        name: "Legging glow",
        description: "Realce sua confiança",
        price: 99.99,
        category: "calças",
        rating: 4,
        reviews: 234,
        image: "fotos/calça3.jpeg"
    },
    {
        id: 8,
        name: "Blusa Eclipse",
        description: "Conforto que abraça",
        price: 79.99,
        category: "blusas",
        rating: 5,
        reviews: 156,
        image: "fotos/blusa4.png"
    },
    {
        id: 9,
        name: "Conjunto Serena",
        description: "Conforto que abraça",
        price: 169.99,
        category: "conjuntos",
        rating: 4.5,
        reviews: 143,
        image: "fotos/conjunto2.png"
    },
    {
    id: 10,
        name: "Blusa Lumi",
        description: "Conforto que abraça",
        price: 79.99,
        category: "blusas",
        rating: 4,
        reviews: 216,
        image: "fotos/blusa3.png"
    },
    {
    id: 10,
        name: "Legging Amora",
        description: "Conforto que abraça",
        price: 99.99,
        category: "calças",
        rating: 5,
        reviews: 126,
        image: "fotos/calça1.png"
     },
    {
    id: 11,
        name: "Casaco Pérola",
        description: "Conforto que abraça",
        price: 89.99,
        category: "casacos",
        rating: 4.5,
        reviews: 244,
        image: "fotos/casaco2.png"
    },
    {
    id: 12,
        name: "Conjunto Mood",
        description: "Conforto que abraça",
        price: 169.99,
        category: "conjuntos",
        rating: 4,
        reviews: 124,
        image: "fotos/conjunto3.png"
    },
     {
    id: 13,
        name: "Blusa Flora",
        description: "Conforto que abraça",
        price: 79.99,
        category: "blusas",
        rating: 5,
        reviews: 87,
        image: "fotos/blusa5.png"
    },
     {
    id: 15,
        name: "Casaco Sweet",
        price: 89.99,
        category: "casacos",
        rating: 4,
        reviews: 97,
        image: "fotos/casaco1.png"
    },



];

// Carrinho de compras
let cart = [];

// Carregar carrinho do localStorage
function loadCart() {
    const savedCart = localStorage.getItem('techstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }

    saveCart();
    updateCartDisplay();
    showToast(`${product.name} adicionado ao carrinho!`);
}

// Remover produto do carrinho
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    showToast(`${product.name} removido do carrinho!`);
}

// Atualizar quantidade do produto
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    }
}

// Calcular total do carrinho
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Atualizar contador do carrinho
function updateCartCount() {

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Formatar preÃ§o
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Gerar estrelas de avaliações
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Renderizar produtos na pÃ¡gina
function renderProducts(filterCategory = 'all', searchTerm = '') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let filteredProducts = products;

    // Filtrar por categoria
    if (filterCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === filterCategory);
    }

    // Filtrar por busca
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="text-align: center; padding: 60px;">
                <i class="fas fa-box-open" style="font-size: 64px; color: #ccc; margin-bottom: 20px;"></i>
                <p style="font-size: 18px; color: #999;">Nenhum produto encontrado</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}"
                     onerror="this.src='https://placehold.co/300x300/f0f0f0/666?text=Imagem+nÃ£o+disponÃ­vel'"
                     style="width: 100%; height: auto; border-radius: 5px;">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="price">
                    <span class="current-price">R$ ${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">R$ ${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <div class="rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews} avaliações)</span>
                </div>
                <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');
}

// Atualizar display do carrinho
function updateCartDisplay() {
    updateCartCount();

    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalElement = document.getElementById('cartTotal');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
    } else {
        cartItemsContainer.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        cartItemsContainer.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product ? product.image : ''}" alt="${item.name}"
                         style="width: 80px; height: 80px; object-fit: cover; border-radius: 5px;"
                         onerror="this.src='https://placehold.co/80x80/f0f0f0/666?text=Erro'">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">R$ ${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-subtotal">
                    <strong>R$ ${formatPrice(item.price * item.quantity)}</strong>
                </div>
            </div>
        `}).join('');

        const total = calculateTotal();
        cartTotalElement.textContent = `R$ ${formatPrice(total)}`;
    }
}

// Mostrar toast de notificaÃ§Ã£o
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.style.display = 'flex';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Abrir modal do carrinho
function openCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Fechar modal do carrinho
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showToast('Seu carrinho estÃ¡ vazio!');
        return;
    }

    const total = calculateTotal();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const confirmMessage = `Compra finalizada com sucesso!\n\nTotal de itens: ${totalItems}\nTotal: R$ ${formatPrice(total)}\n\nObrigado por comprar na Evenella!`;
    alert(confirmMessage);

    cart = [];
    saveCart();
    updateCartDisplay();
    closeCartModal();
    showToast('Compra finalizada com sucesso!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();

    // Buscar produtos
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    const performSearch = () => {
        const searchTerm = searchInput.value;
        renderProducts('all', searchTerm);
    };

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Categorias do menu
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            if (searchInput) {
                renderProducts(category, searchInput.value);
            } else {
                renderProducts(category, '');
            }
        });
    });

    // Categorias da grid
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (searchInput) {
                renderProducts(category, searchInput.value);
            } else {
                renderProducts(category, '');
            }
        });
    });

    // BotÃ£o "Ver todos"
    const viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderProducts('all', '');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    }

    // BotÃ£o do hero
    const heroShopBtn = document.getElementById('heroShopBtn');
    if (heroShopBtn) {
        heroShopBtn.addEventListener('click', () => {
            renderProducts('ofertas', '');
            window.scrollTo({ top: 600, behavior: 'smooth' });
        });
    }

    // Modal do carrinho
    const cartIcon = document.getElementById('cartIcon');
    const closeModal = document.querySelector('.close');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openCartModal();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeCartModal);
    }

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', closeCartModal);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('cartModal');
        if (e.target === modal) {
            closeCartModal();
        }
    });

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            showToast(`Obrigado pelo cadastro, ${email}!`);
            newsletterForm.reset();
        });
    }
});