// Create a function that takes an object in the general shape of `movies` (see below)
// as the first argument,and the name of an actor as the second argument. The function
// should return an object that is equivalent to
// the input, only with the given actor's name included in each movie's `actors` array. If
// the name is already present, it should not be added again. The function should not
// mutate the input object, or any of its sub-structures.

const actorInMovies = (movies, actor) => {
    const newMovies = JSON.parse(JSON.stringify(movies));
    Object.keys(newMovies).forEach(movie => !newMovies[movie].actors.includes(actor) && newMovies[movie].actors.push(actor));
    return newMovies;
};


