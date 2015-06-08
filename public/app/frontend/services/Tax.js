angular.module('uwv')
  .service('Tax', function(Questions) {
    var table = [{
      start: 0,
      end: 1000,
      tax: 0
    }, {
      start: 1001,
      end: 2000,
      tax: 250
    }, {
      start: 2001,
      end: 3500,
      tax: 500
    }, {
      start: 3501,
      tax: 500
    }];

    this.calculate = function() {
        
    };
  });
