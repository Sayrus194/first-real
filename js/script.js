
$(function(){
    $('#toggle').click(function(){
        $('#demo').toggle(500);
    });
    $('#demo').css({'float':'right','marginTop':'50px'});

    $('.btn-more').on('click', function(){
        var btnId= $(this).attr('data-btnId');
       $(btnId).toggle(500);
    });
});