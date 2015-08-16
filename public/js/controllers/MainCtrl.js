angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $('.slider').slider({full_width: false});
    $('.slider').slider('start');
    $(".button-collapse").sideNav();

});