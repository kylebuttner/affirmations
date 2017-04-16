// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('affirmations', ['ionic', 'ngCordova', 'ngAnimate'])

.controller('MainCtrl', function($cordovaSocialSharing, $ionicPlatform, $cordovaInAppBrowser, $cordovaActionSheet, $cordovaLocalNotification, $ionicPopup, $cordovaInstagram) {
  var self = this;

  var today = new Date();

  var date = today.getDate();

  var photoArray = ["http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763950/1_cnysqy.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763951/2_av4a0o.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763948/3_sdovas.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763951/4_z0iknk.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763948/5_ojrem3.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763968/6_b2tmri.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763981/7_s6zs08.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763971/8_iutdfg.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763969/9_img4kx.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763967/10_dnkn0w.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764009/11_w57iw8.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763968/12_kpwyq5.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763997/13_tbaghi.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763985/14_kopnjy.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763989/15_owfdi4.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763997/16_ypr4ip.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491763990/17_vkdvjv.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764000/18_nimpv3.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764006/19_zhxtj8.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764015/20_j3lhri.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764016/21_hkukbq.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764014/22_agbnwf.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764012/23_izr3sb.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764018/27_dc9ppn.png",
                    "http://res.cloudinary.com/dsn5cyggw/image/upload/v1491764021/28_xh8mfn.png"
                    ];

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

  var image = new Image();
  image.src = self.todaysPhoto;
  image.onload = function() {
      self.todaysPhotoAsDataUri = getBase64Image(image);
  };

  self.shareAnywhere = function() {
    var actionSheetOptions = {
      title: 'Share your affirmation',
      buttonLabels: ['Instagram', 'Facebook', 'Twitter'],
      addCancelButtonWithLabel: 'Cancel',
      androidEnableCancelButton : true,
      winphoneEnableCancelButton : true,
    }

    $cordovaActionSheet.show(actionSheetOptions)
      .then(function(btnIndex) {
        var index = btnIndex;

        if (index === 1) {
          $cordovaInstagram.share({image: self.todaysPhotoAsDataUri, caption: "This is my daily affirmation from @MotherZen :)"});
        } else if (index === 2) {
          $cordovaSocialSharing.shareViaFacebook("This is my daily affirmation! Check out", getTodaysPhoto(), "http://thepositivebirthcompany.co.uk");
        } else if (index === 3) {
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
        }),
        $ionicPopup.alert({
          title: 'Something went wrong...',
          template: 'Try again!'
        })
      );
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

  function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");

      return dataURL;
  }

  self.toggleBackground = function () {
    var mainContainer = document.getElementById('main-container');

    mainContainer.className = 'theatre slide' == mainContainer.className ? 'slide' : 'theatre slide';
  }

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
