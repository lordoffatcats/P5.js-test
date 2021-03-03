  let capture;
  let overlay;
  let pg;
  let gif;


function setup() {
    createCanvas(1080, 1920);

    gif = loadGif('assets/Tint.gif')

    capture = createCapture(VIDEO);
    capture.size(300, 420);

  	overlay = loadImage('assets/nei2.png')

  }

  function draw() {
    background(255);



    image(capture, 0, 0, 1080, 1200);

    push();
    tint(255, 127);
    image(gif, 220, 400);
    pop();

    image(overlay, 0, 0, 1080, 1920);

  }
