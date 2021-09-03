// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var markup = {
  constants: {
    initScale: 11.125,
    desktopWidth: 1440,
    desktopHeight: 868,
    mobileWidth: 320,
    mobileHeight: 568,
    maxAspect: 1,
    minAspect: 1 // TODO

  },
  initResize: true,
  currentFontSize: null,
  currentOrientation: null,
  orientationChanged: false,
  init: function init() {
    var _this = this;

    this.checkOrientation();
    this.fit();

    window.onresize = function () {
      _this.checkOrientation();

      window.isMobile ? _this.initResize = false : _this.initResize = true;

      if (_this.initResize || _this.orientationChanged) {
        _this.fit();
      }
    };
  },
  fit: function fit() {
    var currentHeight = window.innerHeight;
    var currentWidth = window.innerWidth;
    checkMobile();
    var deviceHeight = window.isMobile ? this.currentOrientation === 'portrait' ? this.constants.mobileHeight : this.constants.mobileWidth : this.constants.desktopHeight;
    var deviceWidth = window.isMobile ? this.currentOrientation === 'portrait' ? this.constants.mobileWidth : this.constants.mobileHeight : this.constants.desktopWidth;
    var scaleY = currentHeight / deviceHeight;
    var scaleX = currentWidth / deviceWidth;

    if (deviceHeight > currentHeight) {
      scaleY = currentHeight / deviceHeight;
    }

    if (deviceWidth > currentWidth) {
      scaleX = currentWidth / deviceWidth;
    }

    var currentScale = Math.min(scaleX, scaleY);
    var result = currentScale * this.constants.initScale;
    this.currentFontSize = this.round(result);
    document.documentElement.style.fontSize = ''.concat(this.currentFontSize, 'px');
    this.initResize = true;
    this.orientationChanged = false;
  },
  round: function round(value) {
    return Math.round(value * 2) / 2;
  },
  checkOrientation: function checkOrientation() {
    var orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.orientationChanged = this.currentOrientation !== orientation;

    if (!this.currentOrientation || this.orientationChanged) {
      this.currentOrientation = orientation;
      this.currentOrientation === 'landscape' ? document.body.classList.add('mobile-landscape') : document.body.classList.remove('mobile-landscape');
    }
  }
};

(function () {
  markup.init();
})();