(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<foundItems',
                onRemove: '&'
            },
            restrict: 'E',
            controller: FoundItemsDirectiveController,
            controllerAs: 'search',
            bindToController: true
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {  }

    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var menu = this;
      menu.SearchTerm = "";
      menu.found = null;
      menu.onNarrowItSearch = function(){
        if (menu.SearchTerm.trim().length == 0)
        {
            menu.found = [];
            return;
        }
        var promise = MenuSearchService.getMatchedMenuItems(menu.SearchTerm);
      
        promise.then(function (response) {
          menu.found = response;
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
        
        if (menu.found.length == 0)
        {
            //menu.found = [];
            return;
        }          
      };
      
      menu.removeItem = function(index){
          console.log(index);
          if (index >= 0 && index < menu.found.length)
            menu.found.splice(index, 1);          
      };
    }
    
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
        
      service.getMatchedMenuItems = function (searchTerm) {
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (result){
          var foundItems = [];
          result.data.menu_items.forEach(function(item) {
              if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                  foundItems.push(item);
              }
          });

          return foundItems;
        });
    
        return response;
      };
    
    }
    
    })();
    