# CXE AR.JS Demos

## Resources

https://aframe.io/blog/arjs/

## Use Cases

### Error Message Use Case

As an individual who is using the oven, I want to resolve the error message on screen, so that I can finish cooking.

- User scans QR code on side of device (which has product info in it).
- Directed to AR app with product info on it.
- Clicks on Troubleshooter. (See info). See animation?

```graphviz
digraph G {
  "No product info" -> "QR Reader app"
  "Product Docs" -> "Device AR/VR app"
  "QR Reader app" -> "Device AR/VR app"
  "Scans QR Code" -> "Device AR/VR app"
  "Phone QR reader" -> "Device AR/VR app"
  "Device AR/VR app" -> "Troubleshooter Docs"
  "Device AR/VR app" -> "3D animation"
  "Troubleshooter Docs" -> "3D animation"
  "Troubleshooter Docs" -> "AR marker location to reset device"
  "AR marker location to reset device" -> "Device AR/VR app"
}
```


## Examples

https://github.com/fidiego/arjs-demos
https://stemkoski.github.io/AR-Examples/
https://medium.com/chialab-open-source/10-tips-to-enhance-your-ar-js-app-8b44c6faffca
https://skarredghost.com/2019/08/29/how-to-seamless-mobile-ar-js/
https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame