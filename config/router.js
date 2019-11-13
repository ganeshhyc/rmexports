app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'app/view/landing.html'
    })
    .when('/products',{
        templateUrl : 'app/view/product.html'
    })
    .when('/certificate',{
        templateUrl : 'app/view/certificate.html'
    })
    .otherwise({
        redirectTo : '/'
    })

})