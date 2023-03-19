let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let newObj = {
        'title' : document.querySelector('.form-title').value,
        'body' : document.querySelector('.form-text').value,
    }
    createPost(newObj);
});

function createTags(obj) {
    let post = document.createElement('div');
    post.classList = 'post';
    let postTitle = document.createElement('h2');
    postTitle.classList = 'post__title';
    postTitle.innerHTML = obj.title;
    post.append(postTitle);
    let postText = document.createElement('p');
    postText.classList = 'post__text';
    postText.innerHTML = obj.body;
    post.append(postText);
    addPost(post);
}

function addPost(post) {
    let posts = document.querySelector('.posts');
    posts.append(post);
}

function createPost(newObj) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => createTags(json))
      .finally(document.forms.form.reset());
}

