const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.strokeStyle = 'pink';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;


     // draw
    const w = width * 0.1;
    const h = width * 0.1;
    const gap = width * 0.05;
    const ix = width * 0.17;
    const iy = width * 0.17;
    const off = width * 0.05;
    let x, y;

    // rotate shape
    const rotate = (hc, vc) => {
      if (Math.random() > 0.2) return;
      context.translate(hc, vc);
      context.rotate((45 * Math.PI) / 180);
      context.translate(-hc, -vc);
    };

    const randomWidth = (weight) => width * Math.random() * weight;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;
        const hc = x + w / 2;
        const vc = y + h / 2;

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = randomWidth(0.01);
        // rotate
        rotate(hc, vc);
        context.rect(x, y, w, h);
        context.stroke();

        // draw inner shape
        if (Math.random() > 0.5) {
          context.beginPath();
          context.lineWidth = randomWidth(0.0078);
          context.strokeStyle = "magenta";
          rotate(hc, vc);
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
        context.setTransform(1, 0, 0, 1, 0, 0);

    // const w = width * 0.10;
    // const h = height * 0.10;
    // const gap = width * 0.03;
    // const ix = width * 0.17;
    // const iy = height * 0.17;

    // const off = width * 0.02;

    // let x, y;

    // for (let i = 0; i < 5; i++) {
    //   for (let j = 0; j < 5; j++) {
    //     x = ix + (w + gap) * i;
    //     y = iy + (h + gap) * j;

    //     context.beginPath();
    //     context.rect(x, y, w, h);
    //     context.stroke();

    //     if (Math.random() > 0.5) {
    //       context.beginPath();
    //       context.rect(x + off/2, y + off/2, w - off, h - off);
    //       context.stroke();
    //     }
      }
    }
  };
};

canvasSketch(sketch, settings);
