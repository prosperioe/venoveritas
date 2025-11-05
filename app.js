document.addEventListener('DOMContentLoaded', () => {
    // --- DATABASE (Mock) ---
    const db = {
        wines: [
            {
                id: 1,
                name: "Opus One 2018",
                price: 1350.00,
                image: "image/09750f92-d527-46a3-8d40-489db4a13cbf.jpeg",
                category: "Red",
                region: "Napa Valley, USA",
                description: "A harmonious blend, this 2018 vintage showcases flavors of black cassis, dark cherry, and a hint of fine-grained cocoa. A collector's favorite.",
                grape: "Cabernet Sauvignon",
                vintage: "2018",
                reviews: [
                    { name: "Robert P.", rating: 5, comment: "Absolutely transcendent. A benchmark for Napa reds. Worth every penny." },
                    { name: "Julia H.", rating: 5, comment: "Incredible depth and complexity. Will age beautifully." }
                ]
            },
            {
                id: 2,
                name: "Cloudy Bay 2023",
                price: 332.00,
                image: "image/3a724c92-a75e-4d74-9ccd-57033da01a00.jpeg",
                category: "White",
                region: "Marlborough, NZ",
                description: "Vibrant and aromatic, with notes of ripe passionfruit, zesty lime, and a crisp, mineral finish. The benchmark for Sauvignon Blanc.",
                grape: "Sauvignon Blanc",
                vintage: "2023",
                reviews: [
                    { name: "Mike D.", rating: 4, comment: "My go-to Sauvignon Blanc. So refreshing and consistent." }
                ]
            },
            {
                id: 3,
                name: "Dom Pérignon 2012",
                price: 275.00,
                image: "image/41c7390e-bb05-4c5c-bd15-7385018f6aab.jpeg",
                category: "Sparkling",
                region: "Champagne, France",
                description: "Elegant and complex, this vintage champagne offers a bouquet of white flowers, citrus, and toasted brioche, with a silky, refined palate.",
                grape: "Chardonnay, Pinot Noir",
                vintage: "2012",
                reviews: []
            },
            {
                id: 4,
                name: "Whispering Angel 2022",
                price: 124.00,
                image: "image/67b6561d-f436-41bb-bf48-e5ed35587279.jpeg",
                category: "Rosé",
                region: "Provence, France",
                description: "The iconic Provence rosé. Pale pink with delicate aromas of red berries, peach, and a hint of grapefruit. Crisp, dry, and refreshing.",
                grape: "Grenache, Cinsault",
                vintage: "2022",
                reviews: [
                    { name: "Sarah K.", rating: 4, comment: "Perfect summer wine. Always a crowd-pleaser." }
                ]
            },
            {
                id: 5,
                name: "Caymus Cabernet 2020",
                price: 285.00,
                image: "image/7c7b491b-2b37-4966-8434-16253cdc8c53.jpeg",
                category: "Red",
                region: "Napa Valley, USA",
                description: "Rich, bold, and opulent. This Cabernet is famed for its deep, dark fruit flavors, velvety tannins, and a signature, slightly sweet finish.",
                grape: "Cabernet Sauvignon",
                vintage: "2020",
                reviews: []
            },
            {
                id: 6,
                name: "Santa Margherita",
                price: 128.00,
                image: "image/8ebb8fc7-d346-4bd1-bf9a-87ba7718c548.jpeg",
                category: "White",
                region: "Alto Adige, Italy",
                description: "A classic Pinot Grigio with a clean, intense aroma and a dry, crisp flavor of golden apples. Highly versatile and food-friendly.",
                grape: "Pinot Grigio",
                vintage: "2022",
                reviews: []
            },
            {
                id: 7,
                name: "Veuve Clicquot Brut",
                price: 165.00,
                image: "image/a3abaa45-cf6f-4913-91d7-75cabefe0fbc.jpeg",
                category: "Sparkling",
                region: "Champagne, France",
                description: "A perfect balance of strength and finesse. Notes of apple, pear, and toast with a creamy texture and a long, satisfying finish.",
                grape: "Pinot Noir, Chardonnay",
                vintage: "NV",
                reviews: []
            },
            {
                id: 8,
                name: "The Prisoner Red Blend",
                price: 250.00,
                image: "image/Armand De Brignac Midas _ Bella Vita in 2018 _ Pinterest _ Seahawks, Champagne and Seattle Seahawks.jpeg",
                category: "Red",
                region: "California, USA",
                description: "A bold and unconventional blend. Features ripe cherry, dark chocolate, and clove, with a lush, smooth finish. A true crowd-pleaser.",
                grape: "Zinfandel Blend",
                vintage: "2021",
                reviews: []
            },
            {
                id: 9,
                name: "The camus cognac",
                price: 1150.00,
                image: "image/Camus Cognac Cuvée 4_186 Electrum.jpeg",
                category: "Red",
                region: "California, USA",
                description: "A stong sweet sour wine which opens ur soul to the smooth lyrics of the wind refreshing and pleasant of taste and smell you cant forget in decades.",
                grape: "Rosario casa",
                vintage: "1990",
                reviews: []
            },
            {
                id: 10,
                name: "Don julio",
                price: 250.00,
                image: "image/Don Julio 1942 Tequila.jpeg",
                category: "black",
                region: "juventus, itali",
                description: "A stong sweet sour wine which opens ur soul to the smooth lyrics of the wind refreshing and pleasant of taste and smell you cant forget in decades.",
                grape: "chardonnay",
                vintage: "1990",
                reviews: []
            },
            {
                id: 11,
                name: "cabernet",
                price: 350.00,
                image: "image/f975b0de-4896-4c6b-99be-c6d3e2dbe2ab.jpeg",
                category: "Red",
                region: "bordeaux, france",
                description: "full-bodied red wine known for its blod flavors of blackcurrant,plum,and hints of spice and tobacco its firm tannis and ages well in oath barrels which add note of vanilla or cider",
                grape: "pinot noir",
                vintage: "1890",
                reviews: []
            },
            {
                id: 12,
                name: "merlot",
                price: 450.00,
                image: "image/Johnnie Walker 🍺🍺🍺.jpeg",
                category: "black",
                region: "bordeaux, france",
                description: "soft and more aproachable. its a medium- to full-bodied red wine with flavour of ripe plum black cherry and chocolate has smooth tannis and velverty texture making it a pourpular choice ",
                grape: "merlot",
                vintage: "2013",
                reviews: []
            },
        ],
        cart: []
    };

    // --- STATE ---
    let currentFilter = 'all';
    let currentSearch = '';

    // --- SELECTORS ---
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const shopGrid = document.getElementById('shop-grid');
    const featuredGrid = document.getElementById('featured-wines');
    const detailsContent = document.getElementById('details-content');
    const recommendationsGrid = document.getElementById('recommendations-grid');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmptyMsg = document.getElementById('cart-empty-msg');
    const cartSummary = document.getElementById('cart-summary');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const checkoutSummaryItems = document.getElementById('checkout-summary-items');
    const checkoutSubtotal = document.getElementById('checkout-subtotal');
    const checkoutTaxes = document.getElementById('checkout-taxes');
    const checkoutTotal = document.getElementById('checkout-total');
    const checkoutForm = document.getElementById('checkout-form');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchBar = document.getElementById('search-bar');
    const emptyCartBtn = document.getElementById('empty-cart-btn');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const newsletterPopup = document.getElementById('newsletter-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const newsletterForms = [document.getElementById('popup-form'), document.getElementById('footer-newsletter'), document.getElementById('join-form'), document.getElementById('contact-form')];
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    // Quick View Modal Selectors
    const qvModal = document.getElementById('quick-view-modal');
    const qvCloseBtn = document.getElementById('qv-close-btn');
    const qvImage = document.getElementById('qv-image');
    const qvName = document.getElementById('qv-name');
    const qvPrice = document.getElementById('qv-price');
    const qvAvgRating = document.getElementById('qv-avg-rating');
    const qvDescription = document.getElementById('qv-description');
    const qvDetails = document.getElementById('qv-details');
    const qvQuantity = document.getElementById('qv-quantity');
    const qvAddToCartBtn = document.getElementById('qv-add-to-cart-btn');
    const qvReviewsList = document.getElementById('qv-reviews-list');
    const qvReviewForm = document.getElementById('qv-review-form');
    const qvReviewWineId = document.getElementById('qv-review-wine-id');

    // --- FUNCTIONS ---

    /**
     * Shows a toast notification.
     * @param {string} message - The message to display.
     * @param {boolean} [isError=false] - Whether the toast is an error message.
     */
    const showToast = (message, isError = false) => {
        toastMessage.textContent = message;
        if (isError) {
            toast.classList.add('bg-brand-primary');
            toast.classList.remove('bg-brand-text');
        } else {
            toast.classList.remove('bg-brand-primary');
            toast.classList.add('bg-brand-text');
        }
        toast.classList.remove('opacity-0', 'translate-y-20');
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-20');
        }, 3000);
        
    const emptyCart = () => {
          db.cart = [];
          renderCart(); 
          showToast('Cart has been emptied.');
        };

    };

    /**
     * Navigates to a specific page.
     * @param {string} pageId - The ID of the page to show.
     */
    const navigateTo = (pageId) => {
        pages.forEach(page => {
            page.classList.toggle('active', page.id === `page-${pageId}`);
        });
        window.scrollTo(0, 0);
        mobileMenu.classList.add('hidden'); // Close mobile menu on navigation
        
        // Specific actions on page load
        if (pageId === 'shop') {
            renderShop();
        }
        if (pageId === 'home') {
            renderFeatured();
        }
        if (pageId === 'cart') {
            renderCart();
        }
        if (pageId === 'checkout') {
            renderCheckoutSummary();
        }
    };

    /**
     * Finds a wine in the database by its ID.
     * @param {number} id - The ID of the wine.
     * @returns {object|undefined} The wine object or undefined if not found.
     */
    const getWineById = (id) => db.wines.find(wine => wine.id === parseInt(id));

    /**
     * Calculates the average rating for a wine.
     * @param {object} wine - The wine object.
     * @returns {number} The average rating (0 if no reviews).
     */
    const getAverageRating = (wine) => {
        if (!wine.reviews || wine.reviews.length === 0) {
            return 0;
        }
        const sum = wine.reviews.reduce((acc, review) => acc + review.rating, 0);
        return sum / wine.reviews.length;
    };

    /**
     * Creates HTML for a static star rating display.
     * @param {number} rating - The average rating.
     * @returns {string} The HTML string for the stars.
     */
    const createStarRatingHTML = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let html = '';
        for (let i = 0; i < fullStars; i++) html += '<span>★</span>';
        if (halfStar) html += '<span class="relative">★<span class="absolute top-0 left-0 w-1/2 overflow-hidden">★</span></span>';
        for (let i = 0; i < emptyStars; i++) html += '<span class="star-empty">☆</span>';
        
        return `<div class="star-display text-brand-gold">${html} (${rating.toFixed(1)})</div>`;
    };

/**
 * Creates the HTML for a single wine card.
 * @param {object} wine - The wine object.
 * @returns {string} The HTML string for the wine card.
 */
const createWineCardHTML = (wine) => {
  return `
            <div class="group bg-gradient-to-br from-brand-panel to-transparent rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 border border-rgba(255,255,255,0.1)">
                <div class="relative overflow-hidden h-72">
                    <img src="${wine.image}" alt="${wine.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 brightness-75 group-hover:brightness-100">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button class="text-white bg-brand-primary hover:bg-opacity-90 py-3 px-6 rounded-lg quick-view-btn font-semibold transform transition-all duration-300 hover:scale-110" data-id="${wine.id}">Quick View</button>
                        <button class="text-white bg-transparent border-2 border-white hover:bg-white hover:text-black py-3 px-6 rounded-lg view-details-btn font-semibold transform transition-all duration-300 hover:scale-110" data-id="${wine.id}">Details</button>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-white mb-2 line-clamp-2">${wine.name}</h3>
                    <p class="text-brand-text-muted text-sm mb-4 font-medium">${wine.region}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-black bg-gradient-to-r from-brand-primary to-brand-gold bg-clip-text text-transparent">$${wine.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn text-brand-primary hover:text-brand-primary/70 transform transition-all duration-300 hover:scale-125" data-id="${wine.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div
                </div>
            </div>
        `;
    };
    
    /**
     * Renders the featured wines on the home page.
     */
    const renderFeatured = () => {
        const featured = db.wines.slice(0, 3);
        featuredGrid.innerHTML = featured.map(createWineCardHTML).join('');
    };

    /**
     * Filters and renders wines for the shop page.
     */
    const renderShop = () => {
        const filteredWines = db.wines.filter(wine => {
            const matchesCategory = currentFilter === 'all' || wine.category === currentFilter;
            const matchesSearch = currentSearch === '' || 
                wine.name.toLowerCase().includes(currentSearch) ||
                wine.region.toLowerCase().includes(currentSearch) ||
                wine.grape.toLowerCase().includes(currentSearch);
            return matchesCategory && matchesSearch;
        });

        if (filteredWines.length === 0) {
            shopGrid.innerHTML = `<p class="col-span-full text-center text-lg text-brand-text-muted">No wines found matching your criteria.</p>`;
        } else {
            shopGrid.innerHTML = filteredWines.map(createWineCardHTML).join('');
        }
    };

    /**
     * Renders the details for a specific wine on the details page.
     * @param {number} wineId - The ID of the wine to render.
     */
    const renderWineDetails = (wineId) => {
        const wine = getWineById(wineId);
        if (!wine) {
            navigateTo('shop'); // Go back to shop if wine not found
            return;
        }

        const avgRating = getAverageRating(wine);

        detailsContent.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Image Gallery -->
                <div class="lg:w-1/2">
                    <img src="${wine.image}" alt="${wine.name}" class="w-full h-auto rounded-lg shadow-xl object-cover">
                </div>
                
                <!-- Details -->
                <div class="lg:w-1/2">
                    <h1 class="text-5xl font-bold text-white mb-4">${wine.name}</h1>
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-4xl font-bold text-brand-gold">$${wine.price.toFixed(2)}</span>
                        ${createStarRatingHTML(avgRating)}
                    </div>
                    <p class="text-lg text-brand-text-muted mb-8">${wine.description}</p>
                    
                    <div class="grid grid-cols-2 gap-4 text-brand-text-muted mb-8">
                        <div><strong class="text-white">Region:</strong> ${wine.region}</div>
                        <div><strong class="text-white">Grape:</strong> ${wine.grape}</div>
                        <div><strong class="text-white">Vintage:</strong> ${wine.vintage}</div>
                        <div><strong class="text-white">Category:</strong> ${wine.category}</div>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <label for="details-quantity" class="sr-only">Quantity</label>
                        <input type="number" id="details-quantity" value="1" min="1" class="form-input w-20 text-center">
                        <button class="add-to-cart-btn w-full btn-primary" data-id="${wine.id}" data-quantity-selector="#details-quantity">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- Reviews Section -->
            <div class="mt-16 pt-12 border-t border-brand-text-muted/30">
                <h2 class="text-4xl font-bold text-white mb-8">Ratings & Reviews</h2>
                <div class="flex flex-col lg:flex-row gap-12">
                    <!-- Review List -->
                    <div class="lg:w-1/2" id="details-reviews-list-container">
                        <!-- Reviews rendered by JS -->
                    </div>
                    <!-- Review Form -->
                    <div class="lg:w-1/2">
                        <form id="details-review-form" class="bg-brand-panel p-6 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-white mb-4">Write a Review</h3>
                            <input type="hidden" id="details-review-wine-id" value="${wine.id}">
                            <div class="mb-3">
                                <label class="block text-sm font-medium text-brand-text-muted mb-1">Your Rating</label>
                                <div class="star-rating">
                                    <input type="radio" id="d-star5" name="rating" value="5" required/><label for="d-star5" title="5 stars">★</label>
                                    <input type="radio" id="d-star4" name="rating" value="4" /><label for="d-star4" title="4 stars">★</label>
                                    <input type="radio" id="d-star3" name="rating" value="3" /><label for="d-star3" title="3 stars">★</label>
                                    <input type="radio" id="d-star2" name="rating" value="2" /><label for="d-star2" title="2 stars">★</label>
                                    <input type="radio" id="d-star1" name="rating" value="1" /><label for="d-star1" title="1 star">★</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="details-review-name" class="block text-sm font-medium text-brand-text-muted">Name</label>
                                <input type="text" id="details-review-name" required class="mt-1 form-input">
                            </div>
                            <div class="mb-3">
                                <label for="details-review-comment" class="block text-sm font-medium text-brand-text-muted">Comment</label>
                                <textarea id="details-review-comment" rows="3" required class="mt-1 form-input"></textarea>
                            </div>
                            <button type="submit" class="w-full btn-secondary">
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        // Render reviews for the details page
        renderReviews(wine.id, '#details-reviews-list-container', '#details-review-form');
        
        // Add submit listener for the details page review form
        document.getElementById('details-review-form').addEventListener('submit', (e) => handleReviewSubmit(e, wine.id, '#details-reviews-list-container', '#details-review-form'));

        // Render recommendations
        const recommended = db.wines.filter(w => w.category === wine.category && w.id !== wine.id).slice(0, 4);
        recommendationsGrid.innerHTML = recommended.map(createWineCardHTML).join('');

        navigateTo('details');
    };

    /**
     * Adds an item to the cart.
     * @param {number} wineId - The ID of the wine to add.
     * @param {number} quantity - The quantity to add.
     */
    const addToCart = (wineId, quantity) => {
        const wine = getWineById(wineId);
        if (!wine) return;

        const existingItem = db.cart.find(item => item.id === wineId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            db.cart.push({ ...wine, quantity: quantity });
        }
        
        updateCart();
        showToast(`${wine.name} added to cart!`);
    };

    /**
     * Updates cart item quantity.
     * @param {number} wineId - The ID of the wine to update.
     * @param {number} quantity - The new quantity.
     */
    const updateCartItemQuantity = (wineId, quantity) => {
        const item = db.cart.find(item => item.id === wineId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                removeFromCart(wineId, false); // Don't re-render twice
            }
            renderCart();
        }
    };

    /**
     * Removes an item from the cart.
     * @param {number} wineId - The ID of the wine to remove.
     * @param {boolean} [doRender=true] - Whether to re-render the cart.
     */
    const removeFromCart = (wineId, doRender = true) => {
        db.cart = db.cart.filter(item => item.id !== wineId);
        if (doRender) {
            renderCart();
        }
    };

    /**
     * Updates the cart count icon and summary.
     */
    const updateCart = () => {
        const totalItems = db.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemCount.textContent = totalItems;
        
        const subtotal = db.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        
        if (totalItems === 0) {
            cartEmptyMsg.classList.remove('hidden');
            cartSummary.classList.add('hidden');
            cartItemsList.innerHTML = '';
        } else {
            cartEmptyMsg.classList.add('hidden');
            cartSummary.classList.remove('hidden');
        }
    };

    /**
     * Renders the full cart page.
     */
    const renderCart = () => {
        if (db.cart.length === 0) {
            cartItemsList.innerHTML = '';
        } else {
            cartItemsList.innerHTML = db.cart.map(item => `
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-brand-text-muted/30">
                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                        <div>
                            <h3 class="text-lg font-bold text-white">${item.name}</h3>
                            <button class="remove-from-cart-btn text-sm text-brand-primary hover:text-brand-primary/80" data-id="${item.id}">Remove</button>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <input type="number" value="${item.quantity}" min="1" class="cart-quantity-input form-input w-20 text-center" data-id="${item.id}">
                        <span class="text-lg font-bold text-white w-24 text-right">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
            `).join('');
        }
        updateCart();
    };

    /**
     * Renders the order summary on the checkout page.
     */
    const renderCheckoutSummary = () => {
        if (db.cart.length === 0) {
            // If cart is empty, redirect to shop
            navigateTo('shop');
            showToast('Your cart is empty.', true);
            return;
        }

        checkoutSummaryItems.innerHTML = db.cart.map(item => `
            <div class="flex justify-between items-center text-sm">
                <div class="flex items-center gap-2">
                    <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-cover rounded-lg">
                    <div>
                        <p class="font-bold text-white">${item.name}</p>
                        <p class="text-brand-text-muted">Qty: ${item.quantity}</p>
                    </div>
                </div>
                <span class="font-medium text-brand-text">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
        
        const subtotal = db.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 15.00; // Fixed shipping
        const taxes = subtotal * 0.08; // 8% tax
        const total = subtotal + shipping + taxes;
        
        checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        checkoutTaxes.textContent = `$${taxes.toFixed(2)}`;
        checkoutTotal.textContent = `$${total.toFixed(2)}`;
    };

    /**
     * Opens the Quick View modal with wine details.
     * @param {number} wineId - The ID of the wine to show.
     */
    const openQuickView = (wineId) => {
        const wine = getWineById(wineId);
        if (!wine) return;

        qvImage.src = wine.image;
        qvImage.alt = wine.name;
        qvName.textContent = wine.name;
        qvPrice.textContent = `$${wine.price.toFixed(2)}`;
        qvDescription.textContent = wine.description;
        
        qvDetails.innerHTML = `
            <div><strong class="text-white">Region:</strong> ${wine.region}</div>
            <div><strong class="text-white">Grape:</strong> ${wine.grape}</div>
            <div><strong class="text-white">Vintage:</strong> ${wine.vintage}</div>
        `;
        
        qvQuantity.value = 1;
        qvAddToCartBtn.dataset.id = wine.id; // Store the id on the button
        qvReviewWineId.value = wine.id; // Store id on the form
        
        renderReviews(wine.id, '#qv-reviews-list', '#qv-review-form');
        
        qvModal.classList.remove('hidden');
    };

    /*Closes the Quick View modal.*/
    const closeQuickView = () => {
        qvModal.classList.add('hidden');
    };

    /**
     * Renders all reviews for a wine.
     * @param {number} wineId - The ID of the wine.
     * @param {string} listSelector - The CSS selector for the review list container.
     * @param {string} formSelector - The CSS selector for the review form.
     */
    const renderReviews = (wineId, listSelector, formSelector) => {
        const wine = getWineById(wineId);
        const reviewListContainer = document.querySelector(listSelector);
        if (!wine || !reviewListContainer) return;

        // Render average rating
        const avgRating = getAverageRating(wine);
        const avgRatingContainer = listSelector === '#qv-reviews-list' ? qvAvgRating : document.querySelector('#details-content .star-display').parentElement;
        if(avgRatingContainer) avgRatingContainer.innerHTML = createStarRatingHTML(avgRating);

        if (wine.reviews.length === 0) {
            reviewListContainer.innerHTML = `<p class="text-brand-text-muted">No reviews yet. Be the first!</p>`;
        } else {
            reviewListContainer.innerHTML = wine.reviews.map(review => `
                <div class="border-b border-brand-text-muted/30 pb-3">
                    <div class="flex justify-between items-center">
                        <h5 class="font-bold text-white">${review.name}</h5>
                        <div class="star-display text-brand-gold text-sm">
                            ${'★'.repeat(review.rating)}${'<span class="star-empty">☆</span>'.repeat(5 - review.rating)}
                        </div>
                    </div>
                    <p class="text-brand-text-muted text-sm mt-1">${review.comment}</p>
                </div>
            `).join('');
        }
        
        // Reset the form
        const form = document.querySelector(formSelector);
        if (form) {
            form.reset();
            // Reset stars
            form.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        }
    };
    
    /**
     * Handles the submission of a new review.
     * @param {Event} e - The submit event.
     * @param {number} wineId - The ID of the wine.
     * @param {string} listSelector - The CSS selector for the review list.
     * @param {string} formSelector - The CSS selector for the review form.
     */
    const handleReviewSubmit = (e, wineId, listSelector, formSelector) => {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        const comment = form.querySelector('textarea').value;
        const rating = form.querySelector('input[type="radio"]:checked');

        if (!rating) {
            showToast('Please select a star rating.', true);
            return;
        }

        const wine = getWineById(wineId);
        if (wine) {
            wine.reviews.push({
                name: name,
                rating: parseInt(rating.value),
                comment: comment
            });
            
            // Re-render reviews
            renderReviews(wineId, listSelector, formSelector);
            showToast('Thank you for your review!');
        }
    };

    /* Loads the theme (forces dark mode).*/
    const loadTheme = () => {
        document.documentElement.classList.add('dark');
         const themeToggle = document.getElementById('theme-toggle');
         if (themeToggle) themeToggle.style.display = 'none';
    };
    
    /*Toggles the mobile menu */
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    /* Shows the newsletter popup (if not already shown) */
    const showNewsletterPopup = () => {
        if (!sessionStorage.getItem('popupShown')) {
            setTimeout(() => {
                newsletterPopup.classList.remove('hidden');
                newsletterPopup.classList.add('flex');
                sessionStorage.setItem('popupShown', 'true');
            }, 3000); // Show after 3 seconds
        }
    };

    /* Hides the newsletter popup.*/
    const hideNewsletterPopup = () => {
        newsletterPopup.classList.add('hidden');
        newsletterPopup.classList.remove('flex');
    };


    // --- EVENT LISTENERS ---

    // Page Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if (pageId) {
                navigateTo(pageId);
            }
        });
    });

    // Global Click Handler (for dynamic elements)
    document.addEventListener('click', (e) => {
        // View Details
        if (e.target.closest('.view-details-btn')) {
            const wineId = e.target.closest('.view-details-btn').dataset.id;
            renderWineDetails(wineId);
        }
        
        // Quick View
        if (e.target.closest('.quick-view-btn')) {
            const wineId = e.target.closest('.quick-view-btn').dataset.id;
            openQuickView(wineId);
        }

        // Add to Cart (from cards)
        if (e.target.closest('.add-to-cart-btn')) {
            const btn = e.target.closest('.add-to-cart-btn');
            const wineId = btn.dataset.id;
            // Check if a specific quantity selector is linked
            const qtySelectorId = btn.dataset.quantitySelector;
            let quantity = 1;
            if (qtySelectorId) {
                const qtyInput = document.querySelector(qtySelectorId);
                if (qtyInput) {
                    quantity = parseInt(qtyInput.value) || 1;
                }
            }
            addToCart(parseInt(wineId), quantity);
        }
        
        // Remove from Cart
        if (e.target.closest('.remove-from-cart-btn')) {
            const wineId = e.target.closest('.remove-from-cart-btn').dataset.id;
            removeFromCart(parseInt(wineId));
        }
    });

    // Cart Quantity Change
    cartItemsList.addEventListener('change', (e) => {
        if (e.target.classList.contains('cart-quantity-input')) {
            const wineId = e.target.dataset.id;
            const quantity = parseInt(e.target.value);
            updateCartItemQuantity(parseInt(wineId), quantity);
        }
    });

    // Shop Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.category;
            // Update button styles
            filterBtns.forEach(b => {
                b.classList.remove('active', 'btn-primary');
                b.classList.add('btn-secondary');

            });
            btn.classList.add('active', 'btn-primary');
            btn.classList.remove('btn-secondary');
            
            renderShop();
        });
    });

    // Shop Search
    searchBar.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderShop();
    });

    // Mobile Menu
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
    // Newsletter Popup
    closePopupBtn.addEventListener('click', hideNewsletterPopup);
    newsletterPopup.addEventListener('click', (e) => {
        // Close if clicking on the overlay
        if (e.target === newsletterPopup) {
            hideNewsletterPopup();
        }
    });
    
    // Quick View Modal
    qvCloseBtn.addEventListener('click', closeQuickView);
    qvModal.addEventListener('click', (e) => {
        if (e.target === qvModal) {
            closeQuickView();
        }
    });
    
    // Quick View Add to Cart
    qvAddToCartBtn.addEventListener('click', () => {
        const wineId = qvAddToCartBtn.dataset.id;
        const quantity = parseInt(qvQuantity.value) || 1;
        addToCart(parseInt(wineId), quantity);
        closeQuickView();
    });
    
    // Quick View Review Form
    qvReviewForm.addEventListener('submit', (e) => {
        const wineId = qvReviewWineId.value;
        handleReviewSubmit(e, parseInt(wineId), '#qv-reviews-list', '#qv-review-form');
    });

    // Generic Form Submissions (Newsletter, Contact, etc.)
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : 'Form';
            
            // Simulate submission
            showToast(`Thank you! ${email} has been submitted.`);
            
            if (form.id === 'popup-form') {
                hideNewsletterPopup();
            }
            form.reset();
        });
    });
    
    // Checkout Form
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Clear cart
        db.cart = [];
        updateCart();
        // Go to confirmation page
        navigateTo('confirmation');
        checkoutForm.reset();
    });
    if (emptyCartBtn) {
        emptyCartBtn.addEventListener('click', emptyCart);
    }
    

    // --- INITIALIZATION ---
    loadTheme();
    navigateTo('home'); // Start on the home page
    showNewsletterPopup();
    updateCart(); // Initialize cart count on load
});

