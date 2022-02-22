(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Menu/templates/home.template.html',
    controller: 'MenuAppController as ctrl'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/Menu/templates/categories.component.template.html',
    controller: 'CategoriesController as ctrl',
    resolve: {
      thecategories:
      ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/Menu/templates/items-list.template.html',
    controller: 'ItemsController as ctrl',
    resolve: {
      categoryinfo:
      ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
