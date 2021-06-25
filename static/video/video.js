var arr = []

window.onload = function() {
        let url = document.getElementById('videoinput')
        let btn = document.getElementById('submitbuton')
        let list = document.getElementById('list')
        btn.addEventListener('click', function (){
            arr.push(url.value)
            let li = document.createElement('li');
            li.textContent = url.value;
            list.appendChild(li);
        })
        let player = document.getElementById('player')
        player.src="https://youtu.be/2mb2Y8iYWBs"


    }