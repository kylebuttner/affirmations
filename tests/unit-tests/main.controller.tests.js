describe('MainCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should have a title', function() {
    expect(ctrl.title).toEqual('This is a test');
  });
});
