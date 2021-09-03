// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const markup = {
  constants: {
    initScale: 11.125,
    desktopWidth: 1440,
    desktopHeight: 868,
    mobileWidth: 320,
    mobileHeight: 568,
    maxAspect: 1,
    minAspect: 1, // TODO
  },
  initResize: true,
  currentFontSize: null as any,
  currentOrientation: null as any,
  orientationChanged: false,
  init: function init(): void {
    this.checkOrientation();
    this.fit();

    window.onresize = () => {
      this.checkOrientation();

      window.isMobile ? (this.initResize = false) : (this.initResize = true);

      if (this.initResize || this.orientationChanged) {
        this.fit();
      }
    };
  },
  fit: function fit(): void {
    const currentHeight = window.innerHeight;
    const currentWidth = window.innerWidth;

    checkMobile();

    const deviceHeight = window.isMobile
      ? this.currentOrientation === 'portrait'
        ? this.constants.mobileHeight
        : this.constants.mobileWidth
      : this.constants.desktopHeight;
    const deviceWidth = window.isMobile
      ? this.currentOrientation === 'portrait'
        ? this.constants.mobileWidth
        : this.constants.mobileHeight
      : this.constants.desktopWidth;

    let scaleY = currentHeight / deviceHeight;
    let scaleX = currentWidth / deviceWidth;

    if (deviceHeight > currentHeight) {
      scaleY = currentHeight / deviceHeight;
    }

    if (deviceWidth > currentWidth) {
      scaleX = currentWidth / deviceWidth;
    }

    const currentScale = Math.min(scaleX, scaleY);

    const result = currentScale * this.constants.initScale;
    this.currentFontSize = this.round(result);
    document.documentElement.style.fontSize = ''.concat(
      this.currentFontSize,
      'px'
    );

    this.initResize = true;
    this.orientationChanged = false;
  },
  round: function round(value: number): number {
    return Math.round(value * 2) / 2;
  },
  checkOrientation: function checkOrientation(): void {
    const orientation =
      window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

    this.orientationChanged = this.currentOrientation !== orientation;

    if (!this.currentOrientation || this.orientationChanged) {
      this.currentOrientation = orientation;

      this.currentOrientation === 'landscape'
        ? document.body.classList.add('mobile-landscape')
        : document.body.classList.remove('mobile-landscape');
    }
  },
};

(function () {
  markup.init();
})();
