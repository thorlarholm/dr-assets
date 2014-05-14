/*
|--------------------------------------------------------------------------
| DR Global Object
|--------------------------------------------------------------------------
|
| Use for states and settings. 
*/

(function(win) {
  win.define("DR", function() {
    var DR = win.DR || {};

    // Defaults
    var autoload = {
      lazyLoader: true,
      cookiePolicy: true,
      topNavigation: true,
      footer: true,
      detectGeoDK: false
    };

    // Inherit defaults
    if (win.DR.autoload != null) {
      for (key in autoload) {
        if (win.DR.autoload[key] == null) {
          win.DR.autoload[key] = autoload[key];
        }
      }
    } else {
      win.DR.autoload = autoload;
    }

    DR.version = "6.0";
    DR.detections = {};

    DR.addDetection = function(name, bool) {
      if ((name != null) && (Object.prototype.toString.call(bool) === "[object Boolean]")) {
        DR.detections[name] = bool;
      }
    };

    win.DR = DR;

    return DR;
  });
}(window));