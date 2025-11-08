export const menu = {
  open: {
    width: '250px',
    height: '300px',
    top: '50px',
    right: '-25px',
    transition: { duration: 0.4, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '0px',
    height: '0px',
    top: '50px',
    right: '-25px',
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const links = [
  {
    url: '#services',
    linkTo: 'Services',
  },
  {
    url: '#portfolio',
    linkTo: 'Portfolio',
  },
  {
    url: '#contact',
    linkTo: 'Contact',
  },
];
