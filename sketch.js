var bracoDireito = 180;
var bracoEsquerdo = 0;
var aux1 = 0
var aux2 = 0
function setup() {
  createCanvas(400, 400);
  x = 100
  y = 100
  bQuad = 120
  hQuad = bQuad

}

function draw() {
  background(220);
  //cabeça
  push();
  translate(width / 2, (height / 3) - 23)
  rotate(radians(180))
  rect(-30, 0, 55, 60)
  pop()
  

  ///tronco
  push();
  translate(width / 2, (height / 3) - 20)
  rect(-60, 0, hQuad, bQuad)
  pop();
  

  //braço direito
  push();

  translate(width / 3, height / 3);
  rotate(radians(bracoDireito))
  rect(0, -23, 125, 125 / 3);
  pop();
 

  //braço esquerdo
  push();
  translate((width / 2) + width / 6, height / 3);
  rotate(radians(bracoEsquerdo))
  rect(0, -20, 125, 125 / 3);
  pop();
  // braço esquerdo

  //perna esquerda
  push();
  translate((width / 2) - 43, (height / 2) + x / 2.5);
  rotate(radians(0))
  rect(-16.66, 10, 40, 125);
  pop();
  

  //perna esquerda
  push();
  translate((width / 2) + 43, (height / 2) + x / 2.5);
  rotate(radians(0))
  rect(-22.66, 10, 40, 125);
  pop();

  
}

function keyTyped() {

  if (key == 'd' || key == 'D') {
    if (aux1 % 2 == 0) {
      bracoDireito = 165;
      aux1 = 0
    } else {
      bracoDireito = 180;
    }
    aux1++;
  } else if (key == 'e' || key == 'E') {
    if (aux2 % 2 == 0) {
      bracoEsquerdo = -15;
      aux2 = 0
    } else {
      bracoEsquerdo = 0;
    }
    aux2++;
  }
}