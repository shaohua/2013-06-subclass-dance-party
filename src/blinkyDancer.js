var BlinkyDancer = function(top, left, timeBetweenSteps){
  var tag = '<span class="dancer"></span>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
};
