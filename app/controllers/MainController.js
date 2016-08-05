app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Bestseller Books';
  $scope.promo = 'This is a promo';
  $scope.products = [ 
  { 
    name: 'Type Rules!', 
    price: 16.99,
    likes: 0,
    dislikes: 0,
    pubdate: new Date('2014', '03', '08'), 
    cover: 'https://images-na.ssl-images-amazon.com/images/I/41CdarwuvDL._SX371_BO1,204,203,200_.jpg'
  }, 
  { 
    name: 'Design Basics', 
    price: 15.99,
    likes: 0,
    dislikes: 0,
    pubdate: new Date('2013', '08', '01'), 
    cover: 'https://images-na.ssl-images-amazon.com/images/I/61EX%2BNTYtRL._SX411_BO1,204,203,200_.jpg' 
  },
  { 
    name: 'Fahrenheit 451', 
    price: 7.25,
    likes: 0,
    dislikes: 0,
    pubdate: new Date('2012', '01', '10'), 
    cover: 'https://images-na.ssl-images-amazon.com/images/I/41Cx8mY2UNL._SX324_BO1,204,203,200_.jpg'
  },
  { 
    name: 'A Game of Thrones', 
    price: 9.90,
    likes: 0,
    dislikes: 0,
    pubdate: new Date('2011', '03', '22'), 
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51Y82FEgx7L._SX303_BO1,204,203,200_.jpg'
  } 
];
	$scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
};
}]);