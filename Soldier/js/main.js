var idStr;
$('path').hover (

    function() {
        console.log('11111');
        idStr = this.id;
        $('#' + idStr).fadeIn(150);
    },
    function(){
        $('#' + idStr).fadeOut(250);
    }
)