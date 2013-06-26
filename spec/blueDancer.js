describe("blueDancer", function() {
  var blueDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    blueDancer = new blueDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blueDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(blueDancer.$node, 'toggle');
    blueDancer.step();
    expect(blueDancer.$node.toggle).toHaveBeenCalled();
  });
