

fetch('https://www.reddit.com/r/aww/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts)
})

// creare una pagina web che permetta di visualizzare
// gli ultimi 25 post del subreddit /aww (https://www.reddit.com/r/aww/new.json)
// usare i web component

// 1) permettere all'utente di cambiare il tema