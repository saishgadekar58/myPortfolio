const bubbleConfig = {
  particles: {
    number: {
      value: 384,
      density: {
        enable: true,
        value_area: 1736.124811591,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#3e3e3e",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 120,
        height: 120,
      },
    },
    opacity: {
      value: 0.5371430403899501,
      random: true,
      anim: {
        enable: true,
        speed: 1.1926084732136317,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 16.03412060865523,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 128.27296486924183,
      color: "#ffffff",
      opacity: 0.43292125643369117,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default bubbleConfig;
