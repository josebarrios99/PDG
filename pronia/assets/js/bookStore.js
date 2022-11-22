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

        let bookDivHtml = '<div>' + currentBook.name + '</div>';
        allBooksHtml += bookDivHtml;

        let sakdhajksdh = `
            <div>${currentBook.name}</div>
        
        
        `;


    });

    books.innerHTML = allBooksHtml;


}

listenBooks();