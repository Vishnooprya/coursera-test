(function(){
  'use strict';
  angular.module('MenuApp')
  .component('items',{
    templateUrl:'data/items.html',
    bindings:{
      input:'<'
    }
  });
})();
