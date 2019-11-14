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
            footervar : '='
        }
    }
});
app.directive('contact',function(){
    return {
        templateUrl : 'app/component/contact.html',
        scope : {
            contactvar : '='
        }
    }
});