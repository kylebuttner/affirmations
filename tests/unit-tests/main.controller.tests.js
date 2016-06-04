describe('MainCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should have a title', function() {
    expect(ctrl.todaysPhoto).toEqual('http://www.planwallpaper.com/static/images/apple-iphone4s-wallpaper-26.jpg');
  });
});
