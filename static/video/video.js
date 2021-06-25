var arr = []
var i = 1

window.onload = function() {
        let url = document.getElementById('videoinput')
        let btn = document.getElementById('submitbuton')
        let list = document.getElementById('list')
        btn.addEventListener('click', function (){
            let i = 0
            let buf = url.value
                buf = buf.slice(32);
                arr.push(buf)
                let li = document.createElement('li');
                li.textContent = buf;
                list.appendChild(li);
                if(arr.length == 1){
                    player.loadVideoById(buf)
                }

        })
    }

    let player_src = 'https://youtu.be/2mb2Y8iYWBs'
    var player;
    var i = 1
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: arr[i],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    function onPlayerReady(event) {

    }

    function onPlayerStateChange(event) {
        if(event.data === 0) {
            player.loadVideoById(arr[i])
            i++
        }
    }