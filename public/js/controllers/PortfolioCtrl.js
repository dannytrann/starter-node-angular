angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope) {
    $(document).ready(function(){
        $('.carasoul').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows : true
        });
    });
});