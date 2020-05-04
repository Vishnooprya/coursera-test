(function(){
  'use strict';
  angular.module('data')
  .controller('ItemController',ItemController);
  ItemController.$inject=['items'];
  function ItemController(items){
    var itemctrl=this;
    itemctrl.items=items.data;
    console.log(itemctrl.items);
  }
})();
