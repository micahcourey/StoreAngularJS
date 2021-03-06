(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = guitars;
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'tab'
    };
  });

  var guitars = [
    {
      name: "Martin D16",
      price: 2799.00,
      description: "The D-16 Adirondack acoustic guitar fills the room with a rich acoustic tone. Constructed with a solid Adirondack spruce top and finished in a polished gloss that perfectly complements its solid genuine mahogany back and sides, this pairing of balanced tonewoods adds just the right amount of warmth to the sound. The D-16 Adirondack is truly a guitar you'll want to pass along for generations.",
      canPurchase: true,
      soldOut: false,
      image: 'img/Martin-D16.jpg',
      reviews: [
        {
          stars: 5,
          body: "I love this guitar",
          author: "Micah Courey",
          createdOn: 1444278570660
        }
      ]
    },
    {
      name: "Guild D25",
      price: 1200.00,
      description: "The guitar is all Mahogany with 20 medium sized frets on a rosewood fingerboard. The is finished in a beautiful deep red that you don't see that often on guitars anymore.",
      canPurchase: true,
      soldOut: false,
      image: 'img/Guild.png',
      reviews: [
        {
          stars: 5,
          body: "very nice",
          author: "Micah Courey",
          createdOn: 1444278570660
        }
      ]
    },
    {
      name: "Gibson Les Paul Custom 1957",
      price: 6900.00,
      description: "The last of the original Goldtops re-created like never before thanks to 2015's True Historic specs, with exacting appointments and materials, period-correct construction, and luscious PAF-style pickups.",
      canPurchase: true,
      soldOut: false,
      image: 'img/les-paul.jpg',
      reviews: [
        {
          stars: 5,
          body: "This guitar is sick",
          author: "Jimi Page",
          createdOn: 1444278570660
        }
      ],
    },
    {
      name: "Fender Stratocaster",
      price: 1300.00,
      description: "The U.S.-made flagship of the Stratocaster lineup, as beautiful as it is functional. This is the go-to Strat model—the latest iteration of a time-honored classic crafted for those who appreciate and aspire to pure Fender style and quality. An instrument at the very heart of Fender, the American Standard Stratocaster is where the real thing starts, built with the very essence of great Stratocaster tone, phenomenal feel and peerless performance.",
      canPurchase: true,
      soldOut: false,
      image: 'img/strat.png',
      reviews: [
        {
          stars: 5,
          body: "This guitar plays great especially upside down",
          author: "Jimi Hendrix",
          createdOn: 1444278570660
        }
      ],
    },
    {
      name: "30th Anniversary Custom 24",
      price: 3300.00,
      description: "The 30th Anniversary Custom 24 celebrates thirty years of building the guitars Paul saw the need for in the 1970’s and 80’s. It celebrates ingenuity, quality, and persistence.",
      canPurchase: true,
      soldOut: false,
      image: 'img/PRS.png',
      reviews: [
        {
          stars: 4,
          body: "I like it a lot!",
          author: "Carlos Santana",
          createdOn: 1444278570660
        }
      ],
    }
  ];
})();
