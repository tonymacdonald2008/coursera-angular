(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/Menu/templates/categories.component.template.html',
  bindings: {
    allcategories: '<'
  }
});

})();
