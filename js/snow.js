setInterval(SnowFall, 100)


function SnowFall() {
    let snow = document.createElement('div')
    snow.classList.add('snow');
    snow.innerHTML = "❅";
    snow.style.animationDuration = Math.random() * 6 + 4 + 's'
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.opacity = Math.random()
    setInterval(() => {
        snow.style.transform = "rotate(90deg)"
    }, 100)
    setTimeout(() => {
        snow.remove()
    }, 3500)
    document.body.appendChild(snow)
}