setInterval(function () {
    const dateNew = new Date();

    const hrs = document.getElementById('hrs')
    const mins = document.getElementById('mins')
    const sec = document.getElementById('sec')

    hrs.innerHTML = (dateNew.getHours() < 10?"0":"")+dateNew.getHours();
    mins.innerHTML = (dateNew.getUTCMinutes()< 10?"0":"")+dateNew.getUTCMinutes();
    sec.innerHTML = (dateNew.getUTCSeconds()< 10?"0":"")+dateNew.getUTCSeconds();

    });

    const search = document.querySelector('.main')
    const icon = document.querySelector('.img33')

    icon.addEventListener('click', () => {
        search.classList.toggle('active');
    });


    const accordion = document.getElementsByClassName('accord') 
    for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
    })
}

    var div = document.getElementById('true')
    var display = 0
    function hideShow () {
            
        if (display == 1){
            div.style.display = 'block'
            display = 0
        }
        else {
            div.style.display = 'none'
            display = 1
        }
    }
    var hide = document.getElementById('false')
    var display = 0
    function onHiden () {
            
        if (display == 1){
            hide.style.display = 'block'
            display = 0
        }
        else {
            hide.style.display = 'none'
            display = 1
        }
    }

    const date = document.querySelector('.date')
    const news = new Date()


    date.innerHTML = news.getFullYear();