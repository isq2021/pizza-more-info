window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$('body').scrollspy({
    target: '#myHeader'
});


$(document).ready(function() {
    $('.fa-search').on("click", function() {
        $('.header-search .header-input').css("display", "inline-block");
        $(".close-icon").css("display", "inline-block");
        $(".search-icon").css("display", "none");
    });
    $('.close-icon').on("click", function() {
        $('.header-search .header-input').css("display", "none");
        $(".close-icon").css("display", "none");
        $(".search-icon").css("display", "inline-block");
    });
});


// ***********************
// for sliders 
$('.veg-slider').bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: ''
});
$(".non-veg-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: ''
});
$(".mushroom-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: ''
});
$(".cheese-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: ''
});
$(".paneer-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: ''
});



// **********************
$(".testimonials-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '',
    prevText: '',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: '.testimonials-slider-pager-one, .testimonials-slider-pager-two, .testimonials-slider-pager-three'
});

// *******************
$(".chef-slider").bxSlider({
    auto: true,
    controls: true,
    nextText: '<i class="fas fa-arrow-right"></i>',
    prevText: '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin: 30,
    pager: true,
    pagerCustom: '.chef-slider'
});

/* audio */
var audio, playbtn;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "./assets/images/music/batyr-shukenov_-_dozhd.mp3";
    audio.loop = true;
    audio.play();
    audio.volume = 0.2;
    // Set object references
    playbtn = document.getElementById("audio");

    // Add Event Handling
    playbtn.addEventListener("click", playPause);

    // Functions
    function playPause() {
        if (audio.paused) {
            audio.play();

        } else {
            audio.pause();

        }
    }


}
window.addEventListener("load", initAudioPlayer);

/* visitor counter */
var counterContainer = document.querySelector(".website-counter");

var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
/* weather */
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');