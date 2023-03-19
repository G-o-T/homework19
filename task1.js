document.addEventListener('DOMContentLoaded', getPost);

function createTags(obj) {
    let post = document.createElement('div');
    post.classList = 'post';
    let postTitle = document.createElement('h2');
    postTitle.classList = 'post__title';
    let t = obj.title;
    postTitle.innerHTML = [[...t.split(' ')[0][0].toUpperCase(), ...t.split(' ')[0].slice(1)].join(''), ...t.split(' ').slice(1)].join(' ');
    post.append(postTitle);
    let postText = document.createElement('p');
    postText.classList = 'post__text';
    let b = obj.body
    postText.innerHTML = [[...b.split(' ')[0][0].toUpperCase(), ...b.split(' ')[0].slice(1)].join(''), ...b.split(' ').slice(1)].join(' ');
    post.append(postText);
    addPost(post);
}

function addPost(post) {
    let posts = document.querySelector('.posts');
    posts.append(post);
}

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        json.forEach(elem => {
            createTags(elem);
        });
      })
}

