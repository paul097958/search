const host = 'http://127.0.0.1:'
const port = 3000

const search = document.getElementById('search');
search.addEventListener('keyup', (key)=>{
    var searchValue = search.value
    if(key.keyCode == 13){
        sendToServer(searchValue)
    }

})

function sendToServer(search){

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         console.log(xhttp.responseText);
      }
  };
  xhttp.open("GET", `${host}${port}/search?search=${search}`);
  xhttp.send();
}