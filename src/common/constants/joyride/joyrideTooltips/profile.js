export const steps = [
  {
    target: '.ProfileTournaments',
    action: 'start',
    content: 'There you may see your tournament and task statistics!',
    placement: 'bottom',

    controlled: true,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'left',
    showSkipButton: true
  },
  {
    target: '.ProfileDetails',
    content: 'There you may change your profile information!',
    placement: 'left',
    controlled: false,
    type: 'tour:start',
    size: 4,
    placementBeacon: 'top'
  }
];
