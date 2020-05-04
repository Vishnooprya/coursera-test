(function(){
  angular.module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject=['$urlRouterProvider','$stateProvider']
  function RoutesConfig($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',
  {
    url:'/',
    templateUrl:'templates/home.html'
  })
  .state('categories',
{
  url:'/categories',
  templateUrl:'templates/categories.template.html',
  controller:'CategoriesController as catctrl',
  resolve:{
    items:['MenuDataService',function(MenuDataService){
      console.log("In ctrl");
      return MenuDataService.getAllCategories();

  }]
}

})
.state('items',{
  url:'/items/{shortName}',
  templateUrl:'templates/items.template.html',
  controller:'ItemController as itemctrl',
  resolve:{
    items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
      return MenuDataService.getItemsForCategory($stateParams.shortName);
    }]
  }
});

  }
})();
