const btnShorter = document.getElementById('btnShorter')
const btnReload = document.getElementById('btnReload')
const urlNotShort = document.getElementById('urlNotShortened')
const urlShort = document.getElementById('urlShortened')

btnShorter.addEventListener('click', shortenURL)

function shortenURL() {
    let originalURL = urlNotShort.value;
    let apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalURL);

    fetch(apiURL).then(response => response.text()).then(data => {
        urlShort.value = data;
    }).catch(error => {
        urlShort.value = "Error: Unable to shortern URL!";
    })

}

btnReload.addEventListener('click', reloadURL)

function reloadURL() {
    urlNotShort.value = ""
    urlShort.value = ""
}

/* 
 _____ _____ _____ _____ _____ 
| __  |  |  |   __|   __|     |
|    -|  |  |__   |__   |  |  |
|__|__|\___/|_____|_____|_____|
み
  */