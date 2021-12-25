const search = document.getElementById('search');
search.addEventListener('keyup', (key)=>{
    var searchValue = search.value
    if(key.keyCode == 13){
        sendToServer(searchValue)
    }

})

function sendToServer(search){


}