app.controller("contactCtrl",function($scope,$rootScope,$http){
    $scope._sendEmail = function(name,email,subject,message,phone){
        if(name==undefined || email==undefined || subject==undefined || message==undefined){
            alert("Feed the data properly!");
        }
        else{
            $scope._phone = "";
            (phone==undefined)?$scope._phone = "":$scope._phone = phone;
            $scope._post_data = {
                "name":name,
                "email":email,
                "subject":subject,
                "message":message,
                "phone":$scope._phone
            };
            $http({
                method: 'POST',
                url: serverData.ip + "/assets/mail/sendmail.php",
                data: $scope._post_data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function successCallback(response) {
                console.log(response.data)
                if(response.data){
                    $('#eModalScrollable').modal('show'); 
                }else{
                    alert("External Error occured!");
                }   
            }, function errorCallback(response) {
                console.log(response.data);            
            });
        }
    }
})