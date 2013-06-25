var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};
