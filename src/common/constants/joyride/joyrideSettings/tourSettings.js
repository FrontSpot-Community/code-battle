const styleOptions = {
  arrowColor: '#fff',
  backgroundColor: '#fff',
  primaryColor: '#f04',
  textColor: '#333',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  beaconSize: 36,
  zIndex: 100
};

export const initialStepSettings = {
  stepIndex: 0,
  run: false,
  showProgress: false,
  showSkipButton: true,
  spotlightClicks: false,
  styles: styleOptions,
  locale: {
    back: 'Back',
    close: 'Close',
    last: 'Last',
    next: 'Next',
    skip: 'Skip'
  }
};
