const cardContent = [
  {
    mobile: `images/mobile/image-deep-earth.jpg`,
    desktop: `images/desktop/image-deep-earth.jpg`,
    imageTitle: `Deep Earth`,
    alt: 'Deep Earth Image',
  },
  {
    mobile: `images/mobile/image-night-arcade.jpg`,
    desktop: `images/desktop/image-night-arcade.jpg`,
    imageTitle: `Night Arcade`,
    alt: 'Night Arcade Image',
  },
  {
    mobile: `images/mobile/image-soccer-team.jpg`,
    desktop: `images/desktop/image-soccer-team.jpg`,
    imageTitle: `Soccer Team VR`,
    alt: 'Soccer Team Image',
  },
  {
    mobile: `images/mobile/image-grid.jpg`,
    desktop: `images/desktop/image-grid.jpg`,
    imageTitle: `The Grid`,
    alt: 'Grid Image',
  },
  {
    mobile: `images/mobile/image-from-above.jpg`,
    desktop: `images/desktop/image-from-above.jpg`,
    imageTitle: `From Up Above VR`,
    alt: 'Up Above Image',
  },
  {
    mobile: `images/mobile/image-pocket-borealis.jpg`,
    desktop: `images/desktop/image-pocket-borealis.jpg`,
    imageTitle: `Pocket Borealis`,
    alt: `Pocket Borealis Image`,
  },
  {
    mobile: `images/mobile/image-curiosity.jpg`,
    desktop: `images/desktop/image-curiosity.jpg`,
    imageTitle: `The Curiosity`,
    alt: 'The Curiosity Image',
  },
  {
    mobile: `images/mobile/image-fisheye.jpg`,
    desktop: `images/desktop/image-fisheye.jpg`,
    imageTitle: `Make It Fisheye`,
    alt: 'Fisheye Image',
  },
];

const socialIcons = [
  {
    link: `images/icon-facebook.svg`,
    alt: `facebook-icon`,
  },
  {
    link: `images/icon-twitter.svg`,
    alt: `twitter-icon`,
  },
  {
    link: `images/icon-pinterest.svg`,
    alt: `pinterest-icon`,
  },
  {
    link: `images/icon-instagram.svg`,
    alt: `instagram-icon`,
  },
];

new Vue({
  el: '#container',
  data: {
    isActive: false,
    toggle: false,
    display: 'block',
    card: cardContent,
    social: socialIcons,
  },
  methods: {
    toggleNav: function () {
      this.isActive = !this.isActive;
      this.toggle = !this.toggle;
      const body = document.querySelector('body');

      if (this.toggle === true) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    },
    fullYear: function () {
      const date = new Date();
      const fullYear = date.getFullYear();
      return fullYear;
    },
  },
});
