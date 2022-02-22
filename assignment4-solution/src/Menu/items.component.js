(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/Menu/templates/items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
