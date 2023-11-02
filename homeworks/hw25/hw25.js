document.addEventListener("DOMContentLoaded", function() {
    const postIdInput = document.getElementById("postIdInput");
    const searchButton = document.getElementById("searchButton");
    const postContainer = document.getElementById("postContainer");
    const getCommentsButton = document.getElementById("getCommentsButton");

    searchButton.addEventListener("click", function() {
        const postId = postIdInput.value;
        if (postId > 0 && postId < 101) {
            searchPostById(postId)
                .then(post => {
                    displayPost(post);
                    getCommentsButton.style.display = "block";
                })
                .catch(error => {
                    console.error(error);
                    postContainer.innerHTML = "Помилка";
                });
        } else {
            postContainer.innerHTML = "Навчіться читати, потрібно ввести цифру від 1-100.";
        }
    });

    getCommentsButton.addEventListener("click", function() {
        const postId = postIdInput.value;
        getComments(postId)
            .then(comments => {
                displayComments(comments);
            })
            .catch(error => {
                console.error(error);
                postContainer.innerHTML = "Помилка під час отримання коментарів.";
            });
    });

    function searchPostById(id) {
        return new Promise((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    if (!response.ok) {
                        reject("Помилка відповіді від сервера.");
                    } else {
                        return response.json();
                    }
                })
                .then(post => {
                    resolve(post);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    function getComments(postId) {
        return new Promise((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => {
                    if (!response.ok) {
                        reject("Помилка відповіді від сервера.");
                    } else {
                        return response.json();
                    }
                })
                .then(comments => {
                    resolve(comments);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    function displayPost(post) {
        postContainer.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
    }

    function displayComments(comments) {
        postContainer.innerHTML = "<h3>Коментарі:</h3>";
        const ul = document.createElement("ul");
        comments.forEach(comment => {
            const li = document.createElement("li");
            li.innerHTML = `${comment.name} ${comment.body}`;
            ul.appendChild(li);
        });
        postContainer.appendChild(ul);
    }
});