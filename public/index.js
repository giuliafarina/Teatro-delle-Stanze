$(document).ready(function () {
    $('.gallery-item').click(function () {
        $('#exampleModal').modal('show')
        $('.modal-img').attr("src", $(this).find("img:first").attr("src"))
    });
});

// Button ShowmoreText Attori
$(document).ready(function () {
    $(".readmore-btn").on('click', function () {
        $(this).parent().toggleClass("show-content")
    });
});