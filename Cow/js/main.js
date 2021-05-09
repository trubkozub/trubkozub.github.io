$('.map__fills-item').hover (
    function() {
        $('.fill__description-image').html($(this).attr('description-image'));
        $('.fill__description-text').html($(this).attr('description-text'));
        $('.fill__description').fadeIn();
    },
    function(){
        $('.fill__description').fadeOut(50);
    }

)