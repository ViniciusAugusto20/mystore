export const sizes = {
  tablet: '768px',
  laptop: '1024px',
  smallTablet: '600px',
};

export default {
  sizes,
  smallTablet: `(max-width: ${sizes.smallTablet})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
};
