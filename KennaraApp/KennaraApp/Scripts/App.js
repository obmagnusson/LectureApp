var app = angular.module('KennaraApp', ['ngResource']);

//app.config(function ($routeProvider) {
    //$routeProvider.when('/', { templateUrl: '/Lecture.html', controller: 'IndexController' }).
                   //when('/home', { templateUrl: '/templates/Home.html', controller: 'IndexController' }).
                   //when('/rooms/:id', { templateUrl: '/templates/rooms.html', controller: 'RoomController' }).
     //              otherwise({ redirectTo: '/' });
//});

////angular.service('utilService', ['ngResource']).
//angular.factory('utilService', function ($resource) {
//    var Lectures = $resource('/api/lectures', {},
//        {
//            'get': { method: 'GET', params: { format: '.json' }, isArray: true }
//        }
//    )

    

//    utilService.GetLectures = function (cb) {
//        return Lectures.get();
//    }

//    return Lectures;
//});