(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = guitar;
  });

  var guitar = {
    name: 'Martin D16',
    price: 2799.00,
    description: "The D-16 Adirondack acoustic guitar fills the room with a rich acoustic tone. Constructed with a solid Adirondack spruce top and finished in a polished gloss that perfectly complements its solid genuine mahogany back and sides, this pairing of balanced tonewoods adds just the right amount of warmth to the sound. The D-16 Adirondack is truly a guitar you'll want to pass along for generations.",
    canPurchase: false
  }
})();
