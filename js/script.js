const like = document.querySelectorAll("#li");
const dislike = document.querySelectorAll("#di");

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function () {
        this.style.color = "blue";
    });
}
for (let x = 0; x < dislike.length; x++){
    dislike[x].addEventListener('click', function() {
        dislike[x].style.color = "red";
    })
}

$('#li').click(function () {
    $(this).css("color", "blue");
    $("#di").css("color", "#6c757d");
})

$('#di').click(function () {
    $(this).css("color", "red");
    $("#li").css("color", "#6c757d");
})




$('.media_filter-right-left').click(function () {
    $('.main_box-blocks-filtr').toggleClass('active');
    $('.main_box-blocks-filtr-item').addClass('active');
    $('.divs').toggleClass('activet');
})

$('.close_block-right').click(function () {
    $('.main_box-blocks-filtr').toggleClass('active');
    $('.main_box-blocks-filtr-item').addClass('active');
    $('.divs').toggleClass('activet');
})

// $('.sort').hide()
$('.media_filter-right-right').click(function () {
    $('.sort').addClass('topping');
})
$('.sort_x').click(function () {
    $('.sort').removeClass('topping');
})
$('.sort_box-left_btn').click(function () {
    $('.sort').toggleClass('topping');
})



$('.divs').click(function () {
    $('.main_box-blocks-filtr').toggleClass('active');
    $('.main_box-blocks-filtr-item').addClass('active');
    $('.divs').removeClass('activet');
    alert('start');
})

//course block
// $('.tutor-single-lesson-topic-toggle').click(function () {
//     $('.tutor-lesson-tabs-content-under-topic').slideToggle(500);
// })
