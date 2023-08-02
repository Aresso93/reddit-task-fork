class PostCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }


    connectedCallback(){
        this.render();
    }


    render(){

        if (this.post) {

            this.shadowRoot.innerHTML = `

            <div class="post-card">
                <div>
                    <h3>${this.post.title}</h3>
                    <span>${this.post.author}</span>
                    <span>${this.post.created}</span>
                </div>
                <div class="post-thumbnail">
                    <img src="${this.post.thumbnail}" alt="">
                </div>
                <a href="https://www.reddit.com${this.post.permalink}">#</a>
            </div>
            `

            console.log(this.post.permalink);

            const permalink = document.createElement('a');
            permalink.href = 'https://www.reddit.com'+ this.post.permalink
            permalink.appendChild(document.createTextNode('link alla pagina'));
            this.shadowRoot.querySelector('.post-card').appendChild(permalink);            
        }


    }


}

customElements.define('post-card', PostCardComponent);