describe('Homepage', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('The Positive Birth Company');
  });

  it('should display correct daily image', function() {
    var dailyPic = element(by.css("img[src='http://www.planwallpaper.com/static/images/apple-iphone4s-wallpaper-26.jpg']"));
    expect((dailyPic).isPresent()).toBe(true);
  })
});
