const canvasSketch = require('canvas-sketch');
const { clipLineToCircle } = require('canvas-sketch-util/geometry');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black'; //cor do retângulo

    const cx = width * 0.5; //posição x do retângulo
    const cy = height * 0.5; //posição y do retângulos

    const w = width * 0.01; //largura do retângulo
    const h = height * 0.1; //altura do retângulo
    let x, y;

    const num = 12; 
    const radius = width * 0.3; //raio do círculo

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle); //posição x do retângulo
      y = cy + radius * Math.cos(angle); //posição y do retângulo

    context.save(); //salva o estado do canvas
    context.translate(x, y);
    context.rotate(-angle); //rotaciona o retângulo
    context.scale(random.range(0.1,3) , random.range(0.2, 0.5)) //escala o retângulo

    context.beginPath(); //inicia o desenho
    context.rect( -w * 0.5, random.range(0, -h * 0.5), w, h); //define o retângulo
    context.fill(); //desenha o retângulo
    context.restore(); //restaura o estado do canvas

    context.save(); 
    context.translate( cx,cy);
    context.rotate(-angle); 

    context.lineWidth =random.range(0.5, 20);

    context.beginPath();
    context.arc(0, 0, radius * random.range( 0.7, 1.3), slice * random.range(0, -0.5), slice * random.range(0, 5) );
    context.stroke();

    context.restore(); 
    }
  };
};

canvasSketch(sketch, settings);
