// window.addEventListener("load", function () {

// });

AFRAME.registerComponent("markerhandler", {
  init: function () {
    // const animatedMarker = document.querySelector("#animated-marker");
    const textMarker = document.querySelector("#text-marker");
    textMarker.addEventListener("click", function (ev, target) {
      if (confirm("Redirect for support?") == true) {
        window.location.href =
          "https://producthelp.kitchenaid.com/Cooking/Wall_Ovens_and_Ranges/Electric_Ranges/Error_Codes/Error_Code%2C_Fault_Code_or_Message_-_Oven_Control/ES_or_E5/ES_or_E5_-_Electric_Range";
      }
    });
  },
});
