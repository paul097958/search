const search = document.getElementById('search');
const Url = new URL(location.href);
const UrlSearch = Url.search;
const params = Url.searchParams;


if(UrlSearch != ""){
    for (let pair of params.entries()) {
        const v = pair[1]
        search.value = v
        sendToServer(v)
    }
}
    
search.addEventListener('keyup', (key) => {
    var searchValue = search.value
    if (key.keyCode == 13) {
        // sendToServer(searchValue)
        if (UrlSearch == "") {
            location.href = location.href + '?v=' + searchValue;
        }else{
            let hrefUrl = location.href.replace(UrlSearch, '?v=' + searchValue)
            location.href = hrefUrl
        }
    }

})



function sendToServer(search) {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(xhttp.responseText)
            console.log(json);// del
            dom(json);
        }
    };
    xhttp.open("GET", `${location.href.replace(UrlSearch, "")}search?search=${search}`);
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