(function(){
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);
  CategoriesController.$inject=['items'];
  function CategoriesController(items){
    var ctrl=this;
    ctrl.items=items.data;
    console.log(ctrl.items);
  }
})();
