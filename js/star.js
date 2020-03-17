// the meteor of the mainpage background
var stars = document.getElementById('stars')

// create a random number of stars
for (var j = 0; j < 30; j++) {
    var newStar = document.createElement("div")
    newStar.className = "star"
    newStar.style.top = randomDistance(500, -100) + 'px'
    newStar.style.left = randomDistance(1300, 300) + 'px'
    stars.appendChild(newStar)
}

function randomDistance(max, min) {
    var distance = Math.floor(Math.random() * (max - min + 1) + min)
    return distance
}

var star = document.getElementsByClassName('star')

// delay the animation for each star
for (var i = 0, len = star.length; i < len; i++) {
    star[i].style.animationDelay = i % 6 == 0 ? '0s' : i * 0.8 + 's'
}