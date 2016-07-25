// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('affirmations', ['ionic', 'ngCordova'])

.controller('MainCtrl', function($cordovaSocialSharing, $ionicPlatform, $cordovaInAppBrowser) {
  var self = this;

  var today = new Date();

  var date = today.getDate();

  var photoArray = ["http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1322b8ddeb3fba380e6/1465761079213/affirmation+1.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1324d088eb0ab81a680/1465761110365/affirmation+2.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1392b8ddeb3fba380f8/1465761145043/affirmation+3.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1ae2b8ddeb3fba382dd/1465761171585/affirmation+4.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1c04d088eb0ab81a967/1465761226755/affirmation+5.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1e62b8ddeb3fba383e3/1465761243214/affirmation+6.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575db1fd4d088eb0ab81aa5c/1465761265072/affirmation+7.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbcf9044262f4e89121b1/1465761575825/affirmation+8.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbcf9f699bb2cb650dd5f/1465761592351/affirmation+9.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbd56044262f4e8912360/1465761668945/affirmation+10+.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbd58f699bb2cb650e14e/1465762731942/affirmation+11.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbd9a044262f4e8912439/1465762743858/affirmation+12.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbdddf699bb2cb650e3dd/1465761256444/affirmation+13.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbdde044262f4e891257b/1465761437980/affirmation+14.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbde2f699bb2cb650e3fa/1465761389268/affirmation+15.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbe40f699bb2cb650e5af/1465761375397/affirmation+16.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbe55f699bb2cb650e5fe/1465761470666/affirmation+17.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbe5e044262f4e8912792/1465761536465/affirmation+18.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbe9bf699bb2cb650e735/1465761444706/affirmation+19.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbea17da24f298109f91b/1465761452246/affirmation+20.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbea87da24f298109f940/1465761528444/affirmation+21.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbec6044262f4e8912968/1465761609249/affirmation+22.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbedc7da24f298109fa59/1465761656170/affirmation+23.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbf1c044262f4e8912a92/1465761581703/affirmation+24.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbf28044262f4e8912ac8/1465761710041/affirmation+25.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbea17da24f298109f91b/1465761452246/affirmation+20.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbea87da24f298109f940/1465761528444/affirmation+21.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbec6044262f4e8912968/1465761609249/affirmation+22.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbedc7da24f298109fa59/1465761656170/affirmation+23.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbf1c044262f4e8912a92/1465761581703/affirmation+24.PNG?format=750w",
                    "http://static1.squarespace.com/static/559d04dbe4b0853d3bb2e832/575db0f09f7266835094e4af/575dbf28044262f4e8912ac8/1465761710041/affirmation+25.PNG?format=750w"];

  function getTodaysPhoto() {
    return photoArray[date];
  }

  self.todaysPhoto = getTodaysPhoto();

  self.shareAnywhere = function() {
      $cordovaSocialSharing
        .share("This is your message", "This is your subject", getTodaysPhoto(), "http://thepositivebirthcompany.co.uk/");
  };

  self.shareViaTwitter = function(message, image, link) {
      $cordovaSocialSharing.shareViaTwitter("This is your message", getTodaysPhoto(), "http://thepositivebirthcompany.co.uk/");
      // $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
      //     $cordovaSocialSharing.shareViaTwitter("This is your message", "www/img/ionic.png", "https://www.thepolyglotdeveloper.com");
      // }, function(error) {
      //     alert("Cannot share on Twitter");
      // });
  };

  self.newAction = function() {
    alert("Does this happen twice too?");
  }

  self.saveToPhotoAlbum = function() {
      $cordovaSocialSharing
        .saveToPhotoAlbum([getTodaysPhoto()], "Affirmation saved!");
  };

  self.openLink = function(url) {
    $cordovaInAppBrowser.open(url, '_blank');
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);

      // $cordovaPlugin.someFunction().then(success, error);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
