let app = angular.module('myApp',['ngRoute']);
// add or edit column definaition from here
var serverData = {
    "ip":"http://localhost/rmexports",
    // "port":"30123"
};
$().ready(function(){
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn){
    var $card = $(btn).closest('.card-container');
    // console.log($card);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}
