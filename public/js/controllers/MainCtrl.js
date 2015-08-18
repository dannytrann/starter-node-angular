angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $('.slider').slider({full_width: false, height: 600});
    $('.slider').slider('start');
    $(".button-collapse").sideNav();

});