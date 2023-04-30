const flicking = new Flicking("#flick", {
  renderOnlyVisible: true,
  defaultIndex: 0,
  circular: false,
  bound: true,
  panelsPerView: getPanelsPerView(),
});

function getPanelsPerView() {
  if (window.innerWidth < window.innerHeight) {
    return 1; // show 1 panel on screens smaller than 768px
  } else {
    return 3; // show 3 panels on screens larger than or equal to 768px
  }
}

window.addEventListener("resize", () => {
  flicking.setOptions({ panelsPerView: getPanelsPerView() });
});
