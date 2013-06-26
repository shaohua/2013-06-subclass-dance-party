var WhiteDancer = function(top, left, timeBetweenSteps){
  var tag = '<span class="white_dancer"></span>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

WhiteDancer.prototype = Object.create(Dancer.prototype);
WhiteDancer.prototype.constructor = WhiteDancer;

WhiteDancer.prototype.step = function(){
  // this.oldStep = Dancer.prototype.step;
  // this.oldStep();
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

var BlueDancer = function(top, left, timeBetweenSteps){
  var tag = '<span class="blue_dancer"></span>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle(1000).fadeIn(600);
};



var ImageDancer = function(top, left, timeBetweenSteps){
  var tag = '<img class="image_dancer" style="width:100px" \
  src="http://catalystsf.staging.wpengine.com/wp-content/uploads/2012/10/Marcus.png"> \
  </img>';
  Dancer.call(this, top, left, timeBetweenSteps, tag);
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.step = function(){
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};