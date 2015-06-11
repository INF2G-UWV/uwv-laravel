angular.module('uwv')
  .service('Tax', function(Questions) {
    var aow = 0;
    var zorg = 0;
    var wlz = 0;
    var ww = 0;

    this.getAow = function() {
      return aow;
    };

    this.setAow = function(value) {
      aow = value;
    };

    this.getZorg = function() {
      return zorg;
    };

    this.setZorg = function(value) {
      zorg = value;
    };

    this.getWlz = function() {
      return wlz;
    };

    this.setWlz = function(value) {
      wlz = value;
    };

    this.getWw = function() {
      return ww;
    };

    this.setWw = function(value) {
      ww = value;
    };
  });
