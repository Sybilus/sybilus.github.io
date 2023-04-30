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

const reloadPageOnResize = () => {
  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const previousWidth = reloadPageOnResize.previousWidth || 0;
    const previousHeight = reloadPageOnResize.previousHeight || 0;
    if (
      (currentWidth < 768 && previousWidth >= 768) ||
      (currentWidth >= 768 && previousWidth < 768) ||
      (currentHeight < 768 && previousHeight >= 768) ||
      (currentHeight >= 768 && previousHeight < 768) ||
      (currentWidth < currentHeight && previousWidth >= previousHeight) ||
      (currentWidth >= currentHeight && previousWidth < previousHeight)
    ) {
      location.reload();
    }
    reloadPageOnResize.previousWidth = currentWidth;
    reloadPageOnResize.previousHeight = currentHeight;
  });
};

reloadPageOnResize();
