import PhotoSwipeLightbox from '../js/photoswipe-lightbox.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('../js/photoswipe.esm.min.js'),
});
lightbox.init();
