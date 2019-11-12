app.directive('navbar',function(){
    return {
        templateUrl : 'app/component/navbar.html',
        scope : {
            navbarvar : '='
        }
    }
});
app.directive('footer',function(){
    return {
        templateUrl : 'app/component/footer.html',
        scope : {
            navbarvar : '='
        }
    }
});