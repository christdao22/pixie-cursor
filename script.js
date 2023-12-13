$(function () {
    function selectRand(arr) {
        return arr[Math.floor((Math.random() * (arr.length+1)))]
    }

    function distanceCal(curr, last) {
        return Math.sqrt((curr.x - last.x)*(curr.x - last.x) + (curr.y - last.y)*(curr.y - last.y));
    }


    let lastOffset = { x: 0, y: 0 }
    let currOffset = { x: 0, y: 0 }

    document.addEventListener("mousemove", function(e) {
        const colors = ['#FF8F8F', '#EEE2DE', '#EF4040']
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        currOffset = {x: mouseX, y: mouseY}
        if(distanceCal(currOffset, lastOffset)>50) {
            const dot = document.createElement('div')
            dot.className = 'dot'
            dot.style.left = `${mouseX}px`
            dot.style.top = `${mouseY}px`
            dot.style.color = selectRand(colors)
            dot.innerHTML = '<i class="fa-solid fa-star"></i>'
            setTimeout(function(){
                dot.remove();
            }, 1000)
            $('#container').append(dot)
            lastOffset = currOffset
        }
        
    });
})

