var WhiteDancer = function(top, left, timeBetweenSteps){
  var typeOfDancer = 'white_dancer';
  Dancer.call(this, top, left, timeBetweenSteps, typeOfDancer);
  console.log('top', top, 'left', left);
};

WhiteDancer.prototype = new Dancer();
WhiteDancer.prototype.constructor = WhiteDancer;

WhiteDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};

var BlueDancer = function(top, left, timeBetweenSteps){
  var typeOfDancer = 'blue_dancer';
  Dancer.call(this, top, left, timeBetweenSteps, typeOfDancer);
  console.log('top', top, 'left', left);
};

BlueDancer.prototype = new Dancer();
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};
