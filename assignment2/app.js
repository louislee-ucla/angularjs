(function () {
    'use strict';

    angular.module("ShoppingListCheckOff",[])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;
        
        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        
    }
    
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;
        
        alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService () {
    var service = this;
  
    // List of shopping items
    var toBuy = [{name: "bottled water", quantity: 1},
                 {name: "instant noodles", quantity: 2},
                 {name: "Hoegaarden", quantity: 6},
                 {name: "Lay's chips", quantity: 3},
                 {name: "microwave popcorn", quantity: 2}];
    var alreadyBought = [];

    service.buyItem = function (itemIndex) {
        //remove one element from toBuy and add the removed element to alreadyBought
        alreadyBought.push(toBuy.splice(itemIndex, 1)[0]);
    };
  
    service.getToBuyItems = function () {
        return toBuy;
      };
    service.getAlreadyBoughtItems = function () {
        return alreadyBought;
      };
  }
  
})();