var arr = []
var i = 1


window.onload = function() {
        let list = document.getElementById('list')
        for(let i = 0; i < video.length; i++) {
            let url = video[i]["element"]
            let buf = url
                $.ajax({
                    async: false,
                    url: "https://noembed.com/embed?url="+video[i]['element'],
                    dataType: "json",
                    success: function(data) {
                        name = data.title
                     console.log(name)
                 }
                })
            // var name = $.getJSON("https://noembed.com/embed?callback=?",
            //     {"format": "json", "url": buf}).done(function (data)
            // {
            //     name = data.title;
            //     console.log(name)
            // });
            buf = url.slice(32);
                let li = document.createElement('li');
                li.textContent = name;
                list.appendChild(li);
                arr.push(buf)
                if (arr.length == 1) {
                    player.loadVideoById(buf)
                }
                player.pauseVideo()
        }
    }
    var player;
    var i = 1

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
          height: '540',
          width: '960',
          videoId: arr[i],
          origin: location.hostname,
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