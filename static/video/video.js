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
        for (let i = 0; i < arr.length; i++) {

        }


    }