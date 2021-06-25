var arr = []

window.onload = function() {
        let url = document.getElementById('videoinput')
        let btn = document.getElementById('submitbuton')
        let list = document.getElementById('list')
        let player_src = 'https://youtu.be/2mb2Y8iYWBs'
        btn.addEventListener('click', function (){
            let i = 0
            let buf = url.value

                buf = buf.slice(32);
                arr.push(buf)
                let li = document.createElement('li');
                li.textContent = buf;
                list.appendChild(li);


        })








    }