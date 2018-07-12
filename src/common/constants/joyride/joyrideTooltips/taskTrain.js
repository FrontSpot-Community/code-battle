export const steps = [
  {
    // target: '.',
    action: 'start',
    content: 'There you may see the result of check!',
    placement: 'right',

    controlled: true,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'left',
    showSkipButton: true
  },
  {
    // target: '.',
    content: 'There you may see tests for current task!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  },
  {
    // target: '.',
    content: 'Click this button to check your solution!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  }
];
