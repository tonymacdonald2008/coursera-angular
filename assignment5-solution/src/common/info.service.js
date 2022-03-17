(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


InfoService.$inject = ['$http', 'ApiPath'];
function InfoService($http, ApiPath) {
  var service = this;
  service.basePath = ApiPath;

  service.myinfo = {
    first_name: "firstname",
    last_name: "lastname",
    email: "something@something",
    phone: "555-555-5555",
    favorite: "L1",
    complete: false
  };

  service.getmyinfo = function(){
    return service.myinfo;
  }

  service.setMyInfo = function(info){
    service.myinfo = info;
    service.myinfo.complete = true;
    console.log("info:" + service.myinfo);
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
