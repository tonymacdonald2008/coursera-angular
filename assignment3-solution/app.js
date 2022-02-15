(function () {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('baseUrl',"https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('foundItems',FoundItemsDirective )

  function FoundItemsDirective () {
    var ddo = {
      templateUrl: 'menuItem.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }



  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var ctrl = this;
    ctrl.found = [];
    ctrl.searchTerm = "";

    ctrl.GetMatches = function () {
      ctrl.found = [];
      // don't bother searhching if no string given
      if (!ctrl.searchTerm){
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.toLowerCase());
      promise.then(function (response) {
        ctrl.found = response;
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    ctrl.removeItem = function (index) {
      ctrl.found.splice(index, 1);
    }

  }
  MenuSearchService.$inject =  ['baseUrl','$http'];
  function MenuSearchService (baseUrl,$http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm){
      return $http({method: 'GET', url: baseUrl}).then(function (result) {
          // process result and only keep items that match
          console.log(result.data);
          console.log(searchTerm);
          var foundItems = [];
          for (const item of result.data.menu_items) {
            // should lowercase first
            if (item.description.toLowerCase().indexOf(searchTerm) !== -1){
              foundItems.push(item);
            }
          }
          console.log(foundItems);

          // return processed items
          return foundItems;
      });

    }
  }


})()
