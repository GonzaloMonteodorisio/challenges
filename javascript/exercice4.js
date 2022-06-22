// 4 - Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends an unordered list of every actor's name to the DOM's `body` element.
// The names in the list should be unique (no actor's name should appear in the list more than once).
// If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
// Bonus points if the names are alphabetically sorted :)

const listActors = movies => {
    const list = document.createElement("li");
    [...new Set(Object.keys(movies).map(movie => movies[movie].actors))].flat().sort().forEach(actor => {
        list.innerHTML += `<li>${actor}</li>`;
        document.getElementsByTagName("body")[0].appendChild(list);
    });
};

