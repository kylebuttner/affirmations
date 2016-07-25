You need Ionic installed.

```bash
$ npm install -g ionic
```
## Testing
Be sure to install Karma CLI and PhantomJS
```
npm install -g karma-cli
npm install -g phantomjs
```

```
webdriver-manager update
```

To run on an iOS device, first build the app, then prepare Cordova.

```bash
$ ionic build ios
$ cordova prepare
```

Then, open the xcode project from /platforms/ios/ and run on the device you have connected.
