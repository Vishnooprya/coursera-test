(function(){
  'use strict';
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var tobuy=this;
      tobuy.list=ShoppingListCheckOffService.getToBuyItems();

      tobuy.removeItem=function(index){
                ShoppingListCheckOffService.removeItem(index);
      }
    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var bought=this;
      bought.list=ShoppingListCheckOffService.getBoughtItems();

    }
    function ShoppingListCheckOffService(){
      var service=this;
      var toBuyList=[
        {
          name:"Cookies",
          quantity:10
        },
        {
          name:"Apples",
          quantity:5
        },
        {
          name:"Chips",
          quantity:"15 bags"
        },
        {
          name:"Juice",
          quantity:10
        },
        {
          name:"Milk",
          quantity:"250ml"
        }
      ];
     var  boughtList=[];
      service.getBoughtItems=function(){
        return boughtList;
      }
      service.getToBuyItems=function(){
        return toBuyList;
      }
      service.removeItem=function(index){
        var boughtobj=toBuyList[index];
        toBuyList.splice(index,1);
        boughtList.push(boughtobj);
      }
    }

})();
