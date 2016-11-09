'use strict';

angular.module('springyomanApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


