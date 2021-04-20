$(document).ready(function () {
    $('.gallery-item').click(function () {
        $('#exampleModal').modal('show')
        $('.modal-img').attr("src", $(this).find("img:first").attr("src"))
    });
});