( function (){
  'use strict'

  angular.module('Data')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject=['$http'];
  function MenuDataService ($http) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (response){
        return response.data;
      });
    }

    service.getItemsForCategory = function (categoryShortName) {
      var myurl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +categoryShortName;
      return $http({
        method: 'GET',
        url: myurl
      }).then(function (response){
        return response.data;
      });
    }


  }

})();
