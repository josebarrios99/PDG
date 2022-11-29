postBookBtn = document.querySelector('.postBook');
printBooksBtn = document.querySelector('.printBooks');
booksNumberDiv = document.querySelector('.booksNumber');
books = document.querySelector('.books');
postBookBtn.addEventListener('click', () => {
    postBook("Desarollo seguro de en Ingeniería de Software", "Jose Manuel Ortega", "Educación", "50,000", "Libro acerca de seguridad informatica", "Marcombo");
});

printBooksBtn.addEventListener('click', () => {

    console.log(booksList);

});

const renderBooksIndex = () => {
    console.log('Ready to render:');
    console.log(booksList);

    booksNumberDiv.innerHTML = booksList.length;
    allBooksHtml = '';

    booksList.forEach(currentBook => {
        let peticio = `<div class="product-item">
        <div class="product-img">
            <a href="shop.html">
                <img class="primary-img" src="https://drive.google.com/uc?id=1Ph_d2lvpW5ozJ13ZTCZTRT0LHU1JGcTP" alt="Product Images">
                <img class="secondary-img" src="assets/images/product/medium-size/L72.png" alt="Product Images">
            </a>
            <div class="product-add-action">
                <ul>
                    <li>
                        <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="pe-7s-like"></i>
                        </a>
                    </li>
                    <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                        <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="pe-7s-look"></i>
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="pe-7s-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-content">
            <a class="product-name" href="shop.html">`+ currentBook.name + `</a>
            <a class="product-name2" href="shop.html">Autor</a>
            <div class="price-box pb-1">
                <span class="new-price">45.000 COP</span>
            </div>

        </div>
    </div>`;
    
        allBooksHtml += peticio;


    });

    books.innerHTML = allBooksHtml;


}

listenBooks();