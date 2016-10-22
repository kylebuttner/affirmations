// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('affirmations', ['ionic', 'ngCordova', 'ngAnimate'])

.controller('MainCtrl', function($cordovaSocialSharing, $ionicPlatform, $cordovaInAppBrowser, $cordovaActionSheet, $cordovaLocalNotification, $ionicPopup) {
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

  function getNext9am() {
    var currentTime = new Date();
    if (currentTime.getHours() < 9) {
      var todayAt9am = new Date();
      todayAt9am.setHours(9);
      todayAt9am.setMinutes(0);
      return todayAt9am;
    } else {
      var tomorrowAt9am = new Date();
      tomorrowAt9am.setDate(tomorrowAt9am.getDate() + 1)
      tomorrowAt9am.setHours(9)
      tomorrowAt9am.setMinutes(0);
      return tomorrowAt9am
    }
  }

  self.todaysPhoto = getTodaysPhoto();

  self.shareAnywhere = function() {
    var actionSheetOptions = {
      title: 'Share this image via',
      buttonLabels: ['Facebook', 'Twitter'],
      addCancelButtonWithLabel: 'Cancel',
      androidEnableCancelButton : true,
      winphoneEnableCancelButton : true,
    }

    $cordovaActionSheet.show(actionSheetOptions)
      .then(function(btnIndex) {
        var index = btnIndex;

        if (index === 1) {
          $cordovaSocialSharing.shareViaFacebook("This is my daily affirmation! Check out", getTodaysPhoto(), "http://thepositivebirthcompany.co.uk");
        } else if (index === 2) {
          $cordovaSocialSharing.shareViaTwitter("This is my daily affirmation! Check out", getTodaysPhoto(), "http://thepositivebirthcompany.co.uk/");
        }
      });
  };

  self.saveToPhotoAlbum = function() {
      $cordovaSocialSharing
        .saveToPhotoAlbum([getTodaysPhoto()],
        $ionicPopup.alert({
          title: 'Success!',
          template: 'Today\'s affirmation has been saved to your phone.'
        }));
  };

  self.openLink = function(url) {
    $cordovaInAppBrowser.open(url, '_blank');
  };

  if (Boolean(window.localStorage.getItem('notificationsOn'))) {
    self.notificationsOn = (window.localStorage.getItem('notificationsOn')) === "true";
  } else {
    window.localStorage.setItem('notificationsOn', 'true');
    self.notificationsOn = true;
  };

  self.toggleNotifications = function() {
    // This line sets the appropriate value in localStorage
    window.localStorage.setItem('notificationsOn', self.notificationsOn);

    if (self.notificationsOn) {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: "MotherZen",
        text: "Check your affirmation for the day!",
        every: "minute",
        at: getNext9am()
      });
      $ionicPopup.alert({
        title: 'Notifications are now on!',
        template: 'You\'ll receive a reminder to check your daily affirmation every morning at 9am.'
      });
    } else {
      $cordovaLocalNotification.cancel(1);
      $ionicPopup.alert({
        title: 'Notifications have been disabled',
        template: 'You\'ll no longer receive reminders to check your daily affirmation.'
      });
    }
  }

  $ionicPlatform.on('resume', function(){
    today = new Date();
  });

})

.run(function($ionicPlatform, $cordovaNetwork, $ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);

    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(device.platform === "iOS") {
      window.plugin.notification.local.registerPermission();
    }

    if($cordovaNetwork.isOffline()) {
      $ionicPopup.show({
        title: 'No network connection',
        subtitle: 'Please make sure your phone is connected to the internet.',
        buttons: [{
          text: "Try again",
          onTap: function(e) {
            if ($cordovaNetwork.isOffline()) {
              e.preventDefault();
            }
            window.location.reload();
          }
        }]
      });
    }

  });
});
