function httpGetAsync(url, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

let url = "https://holidays.abstractapi.com/v1/?api_key=aeb551d65350431c93b2fc32843ae3dd&country=RO&year=2022&month=09"

httpGetAsync(url)

fetch(url)
    .then(Response => {
        if (!Response.ok) {
            throw new Error(`HTTP error: ${Response.status}`);
        }
        
    })