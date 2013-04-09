app.controller('IndexController', ['$scope', '$resource' , function ($scope, $resource) {
    $scope.name = "Þetta virkar svona!!!";
    $scope.roomList = [];
    $scope.newlectures = [];
    $scope.commentInput = "";
    $scope.lectureTitle = "";
    $scope.commentLists = [];
    $scope.lectureUrlInput = "";
    $scope.selectedLecture = {};//{id : 1, Title : "Fyrsti fyrirlestur" , URL : "http://www.youtube.com/embed/lT67liGjZhw"};
    var Lectures = $resource('/api/v1/lectures');
    var Lecture = $resource('/api/v1/lectures/:id');
    var Comment = $resource('/api/v1//lectures/:id/comments', { id: 1});//$scope.selectedLecture.id });
    var Comments = $resource('/api/v1/lectures/:id/comments',
        { id: 1 });//$scope.selectedLecture.id });

    var cLectures = [];
    var lectures = Lectures.query( function () {
        lectures.$save;
        $scope.newlectures = lectures;
        $scope.selectedLecture = lectures[0];
    });

    var comments = Comments.query(function () {
        comments.$save;
        $scope.commentList = comments;
    });


    var getlectures = function () {
       
        var lectures = Lectures.query(function () {
            lectures.$save;
        });
        $scope.newlectures = lectures;
    }
    var getComments = function () {
        Comments = $resource('/api/v1//lectures/:id/comments', { id: $scope.selectedLecture.ID });
        var comments = Comments.query(function () {
            comments.$save;
        });
        $scope.commentList = comments;
    }

    // $scope.$apply(function () {
    //     getlectures();
    //});
    $scope.newlectures = lectures;


    for (var i in cLectures)
        console.log("halló er eitthvað hér :" + cLectures[i].LectureUrl);


    $scope.postLecture = function () {
        console.log("Commet :" + $scope.lectureUrlInput);
        var lec = new Lecture();
        lec.LectureUrl = $scope.lectureUrlInput;
        lec.Title = $scope.lectureTitle;
        lec.$save();
        getlectures();
        $scope.lectureTitle = "";
        $scope.lectureUrlInput = "";
    }
    
    $scope.loadLecture = function (lect) {
        console.log("lect  :" + lect);

        $scope.selectedLecture = lect;
        //$scope.selectedLecture.URL = lect.LectureUrl;
        //$scope.selectedLecture.Title = lect.Title;
        //$scope.selectedLecture.id = lect.ID;
        getComments();
        console.log("selected lecture :" + $scope.selectedLecture);
    }

    $scope.postComment = function () {
        console.log("Commetss :" + $scope.commentInput);
        console.log("C :" + $scope.selectedLecture.ID);

        var comment = new Comment();
        comment.CommentText = $scope.commentInput;
        comment.Lecture_ID = $scope.selectedLecture.ID;
        console.log("dassfÞ" + comment.Lecture_ID);
        comment.$save();
        $scope.commentInput = "";
        getComments();
    }

    $scope.loadComments = function () {
            
    }
   // 
        //var lectures = utilService.loadUptime();
   // 
   // });
}]);