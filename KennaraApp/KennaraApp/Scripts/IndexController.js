app.controller('IndexController', ['$scope', '$resource' , function ($scope, $resource) {
    $scope.name = "Þetta virkar svona!!!";
    $scope.roomList = [];
    $scope.newlectures = [];
    $scope.commentInput = "";
    $scope.selectedLecture = "http://www.youtube.com/embed/lT67liGjZhw";
    var Lectures = $resource('/api/lectures');
    var Lecture = $resource('/api/lectures/:id');


    var cLectures = [];
    var lectures = Lectures.query( function () {
        lectures.$save;    
    });

    var getlectures = function () {
        var lectures = Lectures.query(function () {
            lectures.$save;
        });
        $scope.newlectures = lectures;
    }


    // $scope.$apply(function () {
    //     getlectures();
    //});
    $scope.newlectures = lectures;


    for (var i in cLectures)
        console.log("halló er eitthvað hér :" + cLectures[i].LectureUrl);


    $scope.postLecture = function () {
        console.log("Commet :" + $scope.commentInput);
        var lec = new Lecture();
        lec.LectureUrl = $scope.commentInput;
        lec.$save();
        getlectures();
        $scope.commentInput = "";
    }
    
    $scope.loadLecture = function (Lecture) {
        $scope.selectedLecture = Lecture;
    }



   // 
        //var lectures = utilService.loadUptime();
   // 
   // });
}]);