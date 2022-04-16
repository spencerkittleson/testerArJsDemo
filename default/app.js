import { a, div, makeElement } from "./domBuilder.mjs";

AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.sceneEl.addEventListener("markerFound", (dataEv) => {
      console.log({ dataEv });
      // redirect to custom URL
      // window.location = 'https://github.com/AR-js-org/AR.js';
    });
  },
});

const devices = [
  {
    model: "KCO275OB",
    name: "KitchenAid KCO275OB ConvectionOven",
    size: "16.1 x 18 x 12.1 inches",
    asset: "KCO275OB",
  },
  {
    model: "HIRO",
    name: "Hiro",
    size: "-",
    asset: "KCO275OB",
  },
];
