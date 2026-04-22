<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>evenella</title>
    <link rel="stylesheet" href="indexEstilo.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1><span>EVENELLA</span></h1>
                </div>

                <div class="search-bar">
                    <input type="text" id="searchInput" placeholder="Buscar produtos...">
                    <button id="searchBtn"><i class="fas fa-search"></i></button>
                </div>

                <div class="header-icons">
                    <a href="#" class="icon-link"><i class="far fa-heart"></i></a>
                    <a href="#" class="icon-link cart-icon" id="cartIcon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count" id="cartCount">0</span>
                    </a>
                    <a href="#" class="icon-link"><i class="far fa-user"></i></a>
                </div>
            </div>

            <nav class="nav-menu">
                <ul>
                
                    <li><a href="#" data-category="Conjuntos">Conjuntos</a></li>
                    <li><a href="#" data-category="Blusas">Blusas</a></li>
                    <li><a href="#" data-category="Calças">Calças</a></li>
                    <li><a href="#" data-category="Casacos">Casacos</a></li>
                
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h2>Frete Grátis acima de R$100,00</h2>
        </div>
    </section>

    <!-- Products Section -->
    <main class="container">
        <div class="section-header">
            <h2>Conheça nossos produtos</h2>
            <a href="#" class="view-all" id="viewAllBtn">Ver todos <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="products-grid" id="productsGrid">
            <!-- Produtos serão inseridos via JavaScript -->
        </div>

        <!-- Categorias Section -->
        <div class="section-header">
            <h2>Categorias </h2>
        </div>

      <div class="categories-grid">
    <div class="category-card" data-category="Conjuntos">
        <i>👗</i>
        <h3>Conjuntos</h3>
    </div>

    <div class="category-card" data-category="Blusas">
        <i>👚</i>
        <h3>Blusas</h3>
    </div>

    <div class="category-card" data-category="Calças">
        <i>👖</i>
        <h3>Calças</h3>
    </div>

    <div class="category-card" data-category="Casacos">
        <i>🧥</i>
        <h3>Casacos</h3>
    </div>
</div>
            </div>
        </div>
    </main>

    <!-- Modal do Carrinho -->
    <div id="cartModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-shopping-cart"></i> Meu Carrinho</h2>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <div id="cartItems">
                    <!-- Itens do carrinho serão inseridos aqui -->
                </div>
                <div id="cartEmpty" class="cart-empty">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Seu carrinho está vazio</p>
                    <button class="btn-primary" id="continueShoppingBtn">Continuar Comprando</button>
                </div>
            </div>
            <div class="modal-footer" id="cartFooter" style="display: none;">
                <div class="cart-summary">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span id="cartTotal">R$ 0,00</span>
                    </div>
                    <button class="btn-checkout" id="checkoutBtn">Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast de notificação -->
    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toastMessage">Produto adicionado ao carrinho!</span>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h4>Sobre a EVENELLA</h4>
                    <p>Roupas fitness pensadas para realçar sua beleza com conforto e leveza.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Institucional</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Atendimento</h4>
                    <ul>
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Trocas e Devoluções</a></li>
                        <li><a href="#">Formas de Pagamento</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Formas de Pagamento</h4>
                    <div class="payment-methods">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fas fa-barcode"></i>
                        <i class="fas fa-money-bill-wave"></i>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 EVENELLLA - Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
