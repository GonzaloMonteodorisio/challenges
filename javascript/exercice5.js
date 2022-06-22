// 5 - Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
// The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e" or undefined if it does not exist. It should also log any potential retrieval errors using `console.error`.

const URL = "https://jsonplaceholder.typicode.com/posts";
const retrieveData = URL => {
    fetch(URL)
        .then(data => data.json())
        .then(posts => console.log(posts.find(post => post.userId === 7 && post.title.charAt(0) === "e").id || undefined))
        .catch(error => console.error(error.message));    
};

const data = retrieveData(URL);
