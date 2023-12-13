$(function () {
    function selectRand(arr) {
        const rand = Math.random();
        return arr[rand < 0? 0 : Math.floor((Math.random() * arr.length))]
    }

    function distanceCal(curr, last) {
        return Math.sqrt((curr.x - last.x)*(curr.x - last.x) + (curr.y - last.y)*(curr.y - last.y));
    }

    function createDot(config) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        dot.style.left = `${config.mouseX}px`
        dot.style.top = `${config.mouseY}px`
        dot.style.color = selectRand(config.colors)
        dot.style.animation = `${selectRand(config.animation)} 1s infinite`
        dot.innerHTML = '<i class="fa-solid fa-star"></i>'

        return dot
    }

    let lastOffset = { x: 0, y: 0 }
    let currOffset = { x: 0, y: 0 }

    document.addEventListener("mousemove", function(e) {

        const config = {
            colors: ['#153e5c', '#EEE2DE', '#EF4040'],
            animation: ['fall-1', 'fall-2', 'fall-3'],
            mouseY: e.clientY,
            mouseX: e.clientX,
        }
        
        currOffset = { x: config.mouseX, y: config.mouseY}
        if(distanceCal(currOffset, lastOffset)>50) {
            const dot1 = createDot(config)
            const dot2 = createDot(config)

            setTimeout(function(){
                dot1.remove();
                dot2.remove();
            }, 1000)

            $('#container').append([dot1, dot2])
            lastOffset = currOffset
        }
    });
})

