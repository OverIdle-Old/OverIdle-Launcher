const http = require("http")

const host = "bobsonic.ddns.net"
const serverPort = 3000
let enableOnlineWall = true
let bodyElmnt = document.querySelector("body")
const wallUrl = `http://${host}:${3000}/api/getdailywall`
let wallPath = "../public/background.jpg"

// On verifie si le fichier est dispo sur le serv

let request

if (enableOnlineWall) {
    request = http.get(wallUrl, (res) => {
        let stCode = res.statusCode
        if (stCode === 200) (wallPath = wallUrl) && applyBg(wallPath)
    })
} else {
    applyBg(wallPath)
}

request.on('error', () => applyBg(wallPath))

function applyBg(url) {
    bodyElmnt.style.backgroundImage = `url(${url})`
}