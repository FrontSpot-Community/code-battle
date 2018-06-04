export const steps = [
  {
    // target: '.',
    action: 'start',
    content: 'Click this button to start task implementation!',
    placement: 'right',

    controlled: true,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'left',
    showSkipButton: true
  },
  {
    // target: '.',
    content: 'There you may see full task description!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  },
  {
    // target: '.',
    content: 'Click this button to review your last solution!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  }
];
