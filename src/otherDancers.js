var WhiteDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

WhiteDancer.prototype = new Dancer();
WhiteDancer.prototype.constructor = WhiteDancer;

WhiteDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};
