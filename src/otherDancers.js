var WhiteDancer = function(top, left, timeBetweenSteps){
  var tag = '<span class="white_dancer"></span>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

WhiteDancer.prototype = new Dancer();
WhiteDancer.prototype.constructor = WhiteDancer;

WhiteDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};

var BlueDancer = function(top, left, timeBetweenSteps){
  var tag = '<span class="blue_dancer"></span>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

BlueDancer.prototype = new Dancer();
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};

var ImageDancer = function(top, left, timeBetweenSteps){
  var tag = '<img class="image_dancer" \
  src="http://catalystsf.staging.wpengine.com/wp-content/uploads/2012/10/Marcus.png"> \
  </img>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

ImageDancer.prototype = new Dancer();
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};