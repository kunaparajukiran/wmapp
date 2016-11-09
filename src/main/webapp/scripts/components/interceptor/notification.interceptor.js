 'use strict';

angular.module('springyomanApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-springyomanApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-springyomanApp-params')});
                }
                return response;
            }
        };
    });
