angular.module('uwv')
  .service('Tax', function(Questions) {
    var aow = 0;
    var zorg = 0;
    var wlz = 0;
    var ww = 0;

    var bruto = 20000;
    var netto = 0;

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

    this.getBruto = function() {
      return bruto;
    };

    this.setBruto = function(value) {
      bruto = value;
    };

    this.getNetto = function() {
      return netto;
    };

    this.setNetto = function(value) {
      netto = value;
    };

    this.calculateNetto = function() {
      netto = bruto - aow - zorg - wlz - ww;
    };
  });
