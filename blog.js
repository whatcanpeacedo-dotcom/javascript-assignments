const postsContainer = document.getElementById("posts-container");
const loading = document.getElementById("loading");

let posts = [];


async function getPosts() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const apiPosts = await response.json();

        const savedPosts =
            JSON.parse(localStorage.getItem("savedPosts")) || [];


        apiPosts.forEach(function(post) {

            const savedPost = savedPosts.find(function(savedPost) {
                return savedPost.id === post.id;
            });

            if (savedPost) {

                post.title = savedPost.title;
                post.body = savedPost.body;
            }
        });


        const localPosts = savedPosts.filter(function(post) {
            return post.isLocal === true;
        });


        posts = [...apiPosts, ...localPosts];


        loading.style.display = "none";

        displayPosts();

    } catch (error) {

        console.error("Error getting posts:", error);

        loading.textContent = "Unable to load posts.";
    }
}


function displayPosts() {
    postsContainer.innerHTML = "";

    posts.forEach(function(post) {

        const postCard = document.createElement("div");

        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>

            <div class="buttons">
                <button onclick="editPost(${post.id})">
                    Edit
                </button>

                <button onclick="deletePost(${post.id})">
                    Delete
                </button>
            </div>
        `;

        postsContainer.appendChild(postCard);
    });
}


async function editPost(id) {

    const post = posts.find(function(post) {
        return post.id === id;
    });

    if (!post) {
        return;
    }

    const newTitle = prompt(
        "Enter the new title:",
        post.title
    );

    if (newTitle === null) {
        return;
    }

    const newBody = prompt(
        "Enter the new post:",
        post.body
    );

    if (newBody === null) {
        return;
    }

    try {

        const apiId = post.isLocal ? 1 : id;

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${apiId}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    id: apiId,
                    title: newTitle,
                    body: newBody,
                    userId: post.userId
                })
            }
        );

        const updatedPost = await response.json();

        console.log("PUT response:", updatedPost);

        post.title = newTitle;
        post.body = newBody;


        let savedPosts =
            JSON.parse(localStorage.getItem("savedPosts")) || [];


        const savedPostIndex = savedPosts.findIndex(function(savedPost) {
            return savedPost.id === id;
        });


        if (savedPostIndex !== -1) {

            savedPosts[savedPostIndex].title = newTitle;
            savedPosts[savedPostIndex].body = newBody;

        } 
        
        else {

            savedPosts.push({
                id: id,
                title: newTitle,
                body: newBody,
                userId: post.userId,
                isEdited: true
            });
        }


        localStorage.setItem(
            "savedPosts",
            JSON.stringify(savedPosts)
        );


        displayPosts();

    } catch (error) {

        console.error("Error updating post:", error);
    }
}

async function deletePost(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete post");
        }

        posts = posts.filter(function(post) {
            return post.id !== id;
        });

        let savedPosts =
            JSON.parse(localStorage.getItem("savedPosts")) || [];

        savedPosts = savedPosts.filter(function(post) {
            return post.id !== id;
        });

        localStorage.setItem(
            "savedPosts",
            JSON.stringify(savedPosts)
        );

        displayPosts();

    } catch (error) {
        console.error("Error deleting post:", error);
    }
}

getPosts();