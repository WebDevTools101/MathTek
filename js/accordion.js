$('#one_a').click(function (e) {
    $(this).addClass('active');
    $('#two_a').removeClass('active');
    $('#three_a').removeClass('active');
    $('#four_a').removeClass('active');
    $('#five_a').removeClass('active');
});
$('#two_a').click(function (e) {
    $(this).addClass('active');
    $('#one_a').removeClass('active');
    $('#three_a').removeClass('active');
    $('#four_a').removeClass('active');
    $('#five_a').removeClass('active');
});
$('#three_a').click(function (e) {
    $(this).addClass('active');
    $('#one_a').removeClass('active');
    $('#two_a').removeClass('active');
    $('#four_a').removeClass('active');
    $('#five_a').removeClass('active');
});
$('#four_a').click(function (e) {
    $(this).addClass('active');
    $('#one_a').removeClass('active');
    $('#two_a').removeClass('active');
    $('#three_a').removeClass('active');
    $('#five_a').removeClass('active');
});
$('#five_a').click(function (e) {
    $(this).addClass('active');
    $('#one_a').removeClass('active');
    $('#two_a').removeClass('active');
    $('#three_a').removeClass('active');
    $('#four_a').removeClass('active');
});