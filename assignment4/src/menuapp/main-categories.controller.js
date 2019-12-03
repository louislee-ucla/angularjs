(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['categories'];
function MainCategoriesController(categories) {
  var allCategories = this;
  allCategories.categories = categories;
  //console.log(allCategories.cats);
}

})();
