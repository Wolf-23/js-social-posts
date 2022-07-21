const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
let containerDom = document.getElementById('container');

// Ciclo l'array
for (let x = 0; x < posts.length; x++) {
    // Creo un div, aggungo la classe 'post' e lo appendo a container
    let post = document.createElement('div');
    post.classList.add('post');
    containerDom.append(post);
    // Recupero i valore di giorno mese ed anno grazie alla funzione substring()
    let date = posts[x].created.split('-').reverse().join('/');
    // Creo il mio post con i valori dell'array   
    post.innerHTML = `  <div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${posts[x].author.image}" alt="Foto profilo di ${posts[x].author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${posts[x].author.name}</div>
                                    <div class="post-meta__time">${date}</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">${posts[x].content}</div>
                        <div class="post__image">
                            <img src="${posts[x].media}" alt="Foto post di ${posts[x].author.name}">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="${posts[x].id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b class="js-likes-counter">${posts[x].likes}</b> persone
                                </div>
                            </div> 
                            </div>`;       
                            
                        };                        
                        
let likeButtonJs = document.querySelectorAll('.js-like-button');
let likeCounterJs = document.querySelectorAll('.js-likes-counter');
let likesArray = [];
// Creo un Ciclo 
for ( let i = 0; i < posts.length; i++) {
    // Recupero il valore di PostId per usarlo nell'array
    let IDPost = likeButtonJs[i].getAttribute('data-postid');
    likeButtonJs[i].addEventListener('click', function(e) {
        e.preventDefault(); 
        //Decremento
        if (likesArray.includes(IDPost)) {
            // Ciclo l'array e se uno dei valori corrisponde a IDPost, lo rimuovo
            for( let j = 0; j < likesArray.length; j++){ 
                if ( likesArray[j] == IDPost) {
                  likesArray.splice(j, 1); 
                }
            }
            likeCounterJs[i].innerText = parseInt(likeCounterJs[i].innerText) - 1;
            // Rimuovo la classe 
            this.classList.remove('like-button--liked');
        } else {
            // Pusho il valore di IDPost dentro l'array che contiene i post a cui ho messo like
            likesArray.push(IDPost);
            likeCounterJs[i].innerText = parseInt(likeCounterJs[i].innerText) + 1;
            // Modifico il colore aggiungendo la classe 
            this.classList.add('like-button--liked');
        }
    });
} 


                    