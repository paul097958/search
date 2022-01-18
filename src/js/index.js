const host = 'http://127.0.0.1:'
const port = 3000

const search = document.getElementById('search');
search.addEventListener('keyup', (key) => {
    var searchValue = search.value
    if (key.keyCode == 13) {
        sendToServer(searchValue)
    }

})

function sendToServer(search) {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(xhttp.responseText)
            console.log(json);
            dom(json);
        }
    };
    xhttp.open("GET", `${host}${port}/search?search=${search}`);
    xhttp.send();

}

function dom(text) {
    for (let i = 0; i < text.length; i++) {
        console.log(1);
        let div = document.createElement('div');
        div.className = 'data';
        document.getElementById('main').appendChild(div);
        let word = document.createElement('p');
        word.className = 'word';
        div.appendChild(word)
        let url = document.createElement('p');
        url.className = 'url';
        div.appendChild(url)
        let de = document.createElement('p');
        de.className = 'de';
        div.appendChild(de)
        let wordValue = document.createTextNode(text[i].word);
        word.appendChild(wordValue);
        let urlValue = document.createTextNode(text[i].url);
        url.appendChild(urlValue);
        let deValue = document.createTextNode(text[i].de);
        de.appendChild(deValue);

    }
}