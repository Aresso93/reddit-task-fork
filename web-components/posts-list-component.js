class PostsListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.postArray = [];
    }

    connectedCallback(){
        fetch('https://www.reddit.com/r/aww/new.json')
        .then(resp => resp.json())
        .then(res => {
            // console.log(res);
            const posts = res.data.children;
            this.render(posts);
        })
    }

    render(posts){
        // console.log(posts);

        this.shadowRoot.innerHTML = '';
        const mainContainer = document.createElement('div');
        this.shadowRoot.appendChild(mainContainer);

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i].data;

            const cardPost = document.createElement('post-card');

            cardPost.post = post;

            mainContainer.appendChild(cardPost);
            
        }

    
    }

}



customElements.define('posts-list', PostsListComponent);