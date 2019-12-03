(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);

MainItemsController.$inject = ['menu'];
function MainItemsController(menu) {
  var thisMenu = this;
  thisMenu.items = menu.menu_items;
  thisMenu.category = menu.category;
}

})();
