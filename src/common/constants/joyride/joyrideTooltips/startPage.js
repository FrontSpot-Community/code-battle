export const steps = [
  {
    // target: '.',
    action: 'start',
    content: 'There you may see the list of tournaments that available for you!',
    placement: 'bottom',

    controlled: true,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'left',
    showSkipButton: true
  },
  {
    // target: '.',
    content: 'There you may see your rank!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  },
  {
    // target: '.',
    content: 'Click this button to go to your profile!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  }
];
