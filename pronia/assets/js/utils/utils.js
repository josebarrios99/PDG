let booksList = [];

const postBook = (name, author, category, price, description, editorial) => {

    const id = uuidv4();
    const book = { name, author, category, price, description, editorial, id }

    database.ref('books/' + id).set({...book }, (error) => {
        if (error) {
            console.log("The write failed...");
        } else {
            console.log("Data saved successfully!");
        }
    });

}

const listenBooks = () => {

    booksList = [];

    var booksRef = firebase.database().ref('books/');
    booksRef.on('value', (snapshot) => {

        const data = snapshot.val();
        if (data != null) {
            booksList = Object.values(data);

            if (typeof renderBooksIndex === "function") {
                renderBooksIndex();
            }


        }


    });


}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}